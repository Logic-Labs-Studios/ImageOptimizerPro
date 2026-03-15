document.addEventListener('DOMContentLoaded', () => {
    // UI Elements
    const dropZone = document.getElementById('upload-section');
    const fileInput = document.getElementById('file-input');
    
    const uploadSection = document.getElementById('upload-section');
    const processingSection = document.getElementById('processing-section');
    const resultSection = document.getElementById('result-section');
    
    const previewImage = document.getElementById('preview-image');
    const sizeOriginal = document.getElementById('size-original');
    const sizeOptimized = document.getElementById('size-optimized');
    const sizeSaved = document.getElementById('size-saved');
    
    const qualitySlider = document.getElementById('quality-slider');
    const qualityValText = document.getElementById('quality-val');
    const formatBtns = document.querySelectorAll('.format-btn');
    
    const btnDownload = document.getElementById('btn-download');
    const btnNewImage = document.getElementById('btn-new-image');

    const progressBarFill = document.getElementById('progress-bar-fill');
    const progressText = document.getElementById('progress-text');

    // State
    let currentOriginalFile = null;
    let currentOptimizedBlob = null;
    let targetFormat = 'webp';
    let targetQuality = 0.8;

    // --- Drag and Drop Events ---
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) { e.preventDefault(); e.stopPropagation(); }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.add('dragover'), false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => dropZone.classList.remove('dragover'), false);
    });

    dropZone.addEventListener('drop', (e) => {
        handleFiles(e.dataTransfer.files);
    });

    fileInput.addEventListener('change', function() {
        handleFiles(this.files);
    });

    function handleFiles(files) {
        if (files.length === 0) return;
        const file = files[0];
        
        if (!file.type.match('image/jpeg') && !file.type.match('image/png') && !file.type.match('image/webp')) {
            alert('Por favor, selecione uma imagem válida (JPG, PNG ou WebP).');
            return;
        }

        currentOriginalFile = file;
        sizeOriginal.textContent = formatBytes(file.size);
        startProcessingFlow();
    }

    // --- Format Selection ---
    formatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            formatBtns.forEach(b => {
                b.classList.remove('bg-brand-primary', 'text-white');
                b.classList.add('text-gray-600', 'hover:bg-gray-50');
            });
            btn.classList.remove('text-gray-600', 'hover:bg-gray-50');
            btn.classList.add('bg-brand-primary', 'text-white');
            
            targetFormat = btn.dataset.format;
            if (currentOriginalFile) runCompressionSilent();
        });
    });

    // --- Quality Slider ---
    qualitySlider.addEventListener('input', (e) => {
        qualityValText.textContent = `${e.target.value}%`;
        targetQuality = parseInt(e.target.value) / 100;
    });

    qualitySlider.addEventListener('change', () => {
        if (currentOriginalFile) runCompressionSilent();
    });

    // --- New Image ---
    btnNewImage.addEventListener('click', () => {
        uploadSection.classList.remove('hidden');
        uploadSection.classList.add('flex');
        
        resultSection.classList.add('hidden');
        resultSection.classList.remove('flex');
        
        fileInput.value = '';
        currentOriginalFile = null;
        currentOptimizedBlob = null;
    });

    // --- Core Processing Logic ---
    async function startProcessingFlow() {
        uploadSection.classList.add('hidden');
        uploadSection.classList.remove('flex');
        processingSection.classList.remove('hidden');
        processingSection.classList.add('flex');

        progressBarFill.style.width = '0%';
        progressText.textContent = '0%';

        // Fake delay for AdSense viewability
        const delayMs = 2500;
        let progress = 0;
        
        const progressInterval = setInterval(() => {
            progress += 5;
            if (progress > 95) progress = 95;
            progressBarFill.style.width = `${progress}%`;
            progressText.textContent = `${progress}%`;
        }, delayMs / 20);

        try {
            await performCompression();
            clearInterval(progressInterval);
            progressBarFill.style.width = '100%';
            progressText.textContent = '100%';
            
            setTimeout(() => {
                processingSection.classList.add('hidden');
                processingSection.classList.remove('flex');
                resultSection.classList.remove('hidden');
                resultSection.classList.add('flex');
            }, 300);

        } catch (error) {
            console.error(error);
            clearInterval(progressInterval);
            alert("Erro ao otimizar. Tente novamente.");
            btnNewImage.click();
        }
    }

    async function performCompression() {
        if (!currentOriginalFile) return;

        const fileType = targetFormat === 'webp' ? 'image/webp' : 'image/jpeg';
        const options = {
            maxSizeMB: 10,
            maxWidthOrHeight: 2560,
            useWebWorker: true,
            fileType: fileType,
            initialQuality: targetQuality
        };

        try {
            currentOptimizedBlob = await imageCompression(currentOriginalFile, options);
            if (previewImage.src) URL.revokeObjectURL(previewImage.src);
            previewImage.src = URL.createObjectURL(currentOptimizedBlob);
            
            const origSize = currentOriginalFile.size;
            const newSize = currentOptimizedBlob.size;
            sizeOptimized.textContent = formatBytes(newSize);
            
            let percentSaved = origSize > 0 ? ((origSize - newSize) / origSize) * 100 : 0;
            if (percentSaved > 0) {
                sizeSaved.textContent = `(-${percentSaved.toFixed(1)}%)`;
                sizeSaved.className = "block text-xs font-semibold text-green-700";
            } else {
                sizeSaved.textContent = `(${Math.abs(percentSaved).toFixed(1)}% maior)`;
                sizeSaved.className = "block text-xs font-semibold text-red-600";
            }

        } catch (error) {
            throw error;
        }
    }

    async function runCompressionSilent() {
        const oldText = btnDownload.innerHTML;
        btnDownload.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> A calcular...';
        btnDownload.disabled = true;
        try {
            await performCompression();
        } catch (e) {
            console.error(e);
        } finally {
            btnDownload.innerHTML = '<i class="fa-solid fa-download"></i> Descarregar Imagem';
            btnDownload.disabled = false;
        }
    }

    // --- Download ---
    btnDownload.addEventListener('click', () => {
        if (!currentOptimizedBlob) return;
        const originalNameParts = currentOriginalFile.name.split('.');
        originalNameParts.pop();
        const baseName = originalNameParts.join('.');
        
        const extension = targetFormat === 'webp' ? 'webp' : 'jpg';
        const newFileName = `${baseName}_optimized.${extension}`;
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(currentOptimizedBlob);
        link.download = newFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- Utilities ---
    function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }
});
