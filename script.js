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
        
        const procMsg = document.getElementById('processing-msg');
        const procTip = document.getElementById('processing-tip');

        // Tips Array
        const tips = [
            "Imagens otimizadas podem acelerar o seu site em mais de 40%.",
            "O Google privilegia sites que carregam rápido em dispositivos móveis.",
            "Esta compressão é feita localmente para garantir a sua total privacidade.",
            "Reduzir o peso das imagens poupa a largura de banda dos seus visitantes."
        ];
        
        // Mostrar uma dica aleatória
        procTip.textContent = tips[Math.floor(Math.random() * tips.length)];
        procMsg.textContent = 'A analisar a estrutura da imagem...';

        // Timer e Lógica de Progresso (Trancado em 5 segundos = 5000ms)
        const totalDuration = 5000;
        const intervalMs = 50; 
        const steps = totalDuration / intervalMs;
        let currentStep = 0;

        // Inicia a compressão nos bastidores MAS a UI demora sempre 5s
        let compressionPromise = performCompression();
        
        const progressInterval = setInterval(() => {
            currentStep++;
            let progress = Math.min((currentStep / steps) * 100, 99); // Vai até 99% fluidamente
            let currentTimeMs = currentStep * intervalMs;
            
            progressBarFill.style.width = `${progress}%`;
            progressText.textContent = `${Math.floor(progress)}%`;

            // Mudança de Textos nos tempos especificados
            if (currentTimeMs === 1500) {
                procMsg.style.opacity = 0;
                setTimeout(() => {
                    procMsg.textContent = 'A otimizar camadas e metadados...';
                    procMsg.style.opacity = 1;
                }, 300);
            } else if (currentTimeMs === 3500) {
                procMsg.style.opacity = 0;
                setTimeout(() => {
                    procMsg.textContent = 'A finalizar compressão sem perda de qualidade...';
                    procMsg.style.opacity = 1;
                }, 300);
            }

            // Aos 5 segundos (5000ms), termina a animação e aguarda compressão caso ainda não tenha acabado
            if (currentStep >= steps) {
                clearInterval(progressInterval);
                finishProcessingFlow(compressionPromise);
            }
        }, intervalMs);
    }
    
    async function finishProcessingFlow(compressionPromise) {
        try {
            await compressionPromise; // Garantir que a compressão (nos bastidores) já acabou mesmo (normalmente demora menos de 5s)
            
            progressBarFill.style.width = '100%';
            progressText.textContent = '100%';
            
            // Pequeno atraso para a pessoa ver os 100%
            setTimeout(() => {
                processingSection.classList.add('hidden');
                processingSection.classList.remove('flex');
                resultSection.classList.remove('hidden');
                resultSection.classList.add('flex');
            }, 400);

        } catch (error) {
            console.error(error);
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

    // ==========================================
    // TABS LOGIC
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const seoArticles = document.querySelectorAll('.seo-article');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset active states
            tabBtns.forEach(b => {
                b.classList.remove('border-brand-primary', 'text-brand-primary', 'active');
                b.classList.add('border-transparent');
            });
            tabPanels.forEach(p => p.classList.add('hidden'));
            tabPanels.forEach(p => p.classList.remove('block'));
            seoArticles.forEach(a => a.classList.add('hidden'));
            seoArticles.forEach(a => a.classList.remove('block'));

            // Set active state
            btn.classList.add('border-brand-primary', 'text-brand-primary', 'active');
            btn.classList.remove('border-transparent');
            
            const targetPanel = document.getElementById(btn.dataset.target);
            const targetSeo = document.getElementById(btn.dataset.seo);
            
            if (targetPanel) {
                targetPanel.classList.remove('hidden');
                targetPanel.classList.add('block');
            }
            if (targetSeo) {
                targetSeo.classList.remove('hidden');
                targetSeo.classList.add('block');
            }
        });
    });

    // ==========================================
    // CONVERTER LOGIC
    // ==========================================
    const convertUploadSection = document.getElementById('convert-upload-section');
    const convertFileInput = document.getElementById('convert-file-input');
    const convertProcessingSection = document.getElementById('convert-processing-section');
    const convertResultSection = document.getElementById('convert-result-section');
    const convertPreviewImage = document.getElementById('convert-preview-image');
    const convertFilename = document.getElementById('convert-filename');
    const convertFilesize = document.getElementById('convert-filesize');
    const convertFormatBtns = document.querySelectorAll('.convert-format-btn');
    const btnConvertDownload = document.getElementById('btn-convert-download');
    const btnNewConvert = document.getElementById('btn-new-convert');
    const convertQualitySlider = document.getElementById('convert-quality-slider');
    const convertQualityVal = document.getElementById('convert-quality-val');
    const convertQualityContainer = document.getElementById('convert-quality-container');

    let currentConvertFile = null;
    let convertTargetFormat = 'jpeg'; // Default selected in HTML
    let convertTargetQuality = 0.9;
    let currentConvertedBlob = null;

    // Drag and Drop for Converter
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        convertUploadSection.addEventListener(eventName, preventDefaults, false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
        convertUploadSection.addEventListener(eventName, () => convertUploadSection.classList.add('dragover'), false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
        convertUploadSection.addEventListener(eventName, () => convertUploadSection.classList.remove('dragover'), false);
    });

    convertUploadSection.addEventListener('drop', (e) => handleConvertFiles(e.dataTransfer.files));
    convertFileInput.addEventListener('change', function() { handleConvertFiles(this.files); });

    function handleConvertFiles(files) {
        if (files.length === 0) return;
        const file = files[0];
        
        const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/bmp', 'image/tiff', 'image/heic', 'image/avif', 'image/x-icon', 'image/vnd.microsoft.icon'];
        let isValid = false;
        if(validTypes.includes(file.type)) isValid = true;
        
        const ext = file.name.split('.').pop().toLowerCase();
        if(['jpg','jpeg','png','webp','gif','bmp','tiff','tif','heic','avif','ico'].includes(ext)) isValid = true;

        if (!isValid) {
            alert('Formato não suportado para conversão.');
            return;
        }

        currentConvertFile = file;
        convertFilename.textContent = file.name;
        convertFilesize.textContent = formatBytes(file.size);
        
        processConversion();
    }

    convertFormatBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            convertFormatBtns.forEach(b => {
                b.classList.remove('bg-brand-primary', 'text-white');
                b.classList.add('text-gray-600', 'hover:bg-gray-50');
            });
            btn.classList.remove('text-gray-600', 'hover:bg-gray-50');
            btn.classList.add('bg-brand-primary', 'text-white');
            
            convertTargetFormat = btn.dataset.format;

            if (convertTargetFormat === 'jpeg' || convertTargetFormat === 'webp' || convertTargetFormat === 'avif') {
                convertQualityContainer.classList.remove('hidden');
            } else {
                convertQualityContainer.classList.add('hidden');
            }

            if (currentConvertFile) processConversion();
        });
    });

    convertQualitySlider.addEventListener('input', (e) => {
        convertQualityVal.textContent = `${e.target.value}%`;
        convertTargetQuality = parseInt(e.target.value) / 100;
    });

    convertQualitySlider.addEventListener('change', () => {
        if (currentConvertFile) processConversion();
    });

    btnNewConvert.addEventListener('click', () => {
        convertUploadSection.classList.remove('hidden');
        convertUploadSection.classList.add('flex');
        convertResultSection.classList.add('hidden');
        convertResultSection.classList.remove('flex');
        convertFileInput.value = '';
        currentConvertFile = null;
        currentConvertedBlob = null;
    });

    async function processConversion() {
        convertUploadSection.classList.add('hidden');
        convertUploadSection.classList.remove('flex');
        convertProcessingSection.classList.remove('hidden');
        convertProcessingSection.classList.add('flex');
        
        btnConvertDownload.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> A processar...';
        btnConvertDownload.disabled = true;

        try {
            let imageBlob = currentConvertFile;
            
            // If HEIC, use heic2any
            if (currentConvertFile.name.toLowerCase().endsWith('.heic') || currentConvertFile.type === 'image/heic') {
                if(typeof heic2any === 'undefined') throw new Error("A biblioteca HEIC não carregou.");
                imageBlob = await heic2any({ blob: currentConvertFile, toType: 'image/jpeg', quality: 1 });
                if (Array.isArray(imageBlob)) imageBlob = imageBlob[0];
            }

            const img = new Image();
            const url = URL.createObjectURL(imageBlob);
            
            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
                img.src = url;
            });

            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            
            // White bg for jpeg/avif conversions
            if (convertTargetFormat === 'jpeg' || convertTargetFormat === 'avif') {
                ctx.fillStyle = '#FFFFFF';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            ctx.drawImage(img, 0, 0);

            let mimeType = `image/${convertTargetFormat}`;
            
            const convertedBlob = await new Promise(resolve => {
                canvas.toBlob(blob => {
                    resolve(blob);
                }, mimeType, convertTargetQuality);
            });

            if (!convertedBlob) throw new Error("Browser não suporta exportar para este formato.");
            
            currentConvertedBlob = convertedBlob;
            
            if (convertPreviewImage.src) URL.revokeObjectURL(convertPreviewImage.src);
            convertPreviewImage.src = URL.createObjectURL(currentConvertedBlob);
            
            URL.revokeObjectURL(url);

            setTimeout(() => {
                convertProcessingSection.classList.add('hidden');
                convertProcessingSection.classList.remove('flex');
                convertResultSection.classList.remove('hidden');
                convertResultSection.classList.add('flex');
                convertFilesize.textContent = formatBytes(currentConvertedBlob.size);
                btnConvertDownload.innerHTML = '<i class="fa-solid fa-download"></i> Converter e Descarregar';
                btnConvertDownload.disabled = false;
            }, 300);

        } catch (error) {
            console.error(error);
            alert("Erro ao converter ficheiro. " + (error.message || ""));
            btnNewConvert.click();
        }
    }

    btnConvertDownload.addEventListener('click', () => {
        if (!currentConvertedBlob) return;
        const originalNameParts = currentConvertFile.name.split('.');
        originalNameParts.pop();
        const baseName = originalNameParts.join('.');
        
        let extension = convertTargetFormat;
        if(extension === 'jpeg') extension = 'jpg';
        
        const newFileName = `${baseName}_converted.${extension}`;
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(currentConvertedBlob);
        link.download = newFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // ==========================================
    // EXIF LOGIC
    // ==========================================
    const exifUploadSection = document.getElementById('exif-upload-section');
    const exifFileInput = document.getElementById('exif-file-input');
    const exifResultSection = document.getElementById('exif-result-section');
    const btnNewExif = document.getElementById('btn-new-exif');
    const exifPreviewImage = document.getElementById('exif-preview-image');
    const exifPreviewFileicon = document.getElementById('exif-preview-fileicon');
    const exifPreviewFilename = document.getElementById('exif-preview-filename');
    const exifStatusBox = document.getElementById('exif-status-box');
    const exifStatusMsg = document.getElementById('exif-status-msg');
    const exifDataBody = document.getElementById('exif-data-body');
    const btnExifClean = document.getElementById('btn-exif-clean');

    let currentExifFile = null;

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        exifUploadSection.addEventListener(eventName, preventDefaults, false);
    });
    ['dragenter', 'dragover'].forEach(eventName => {
        exifUploadSection.addEventListener(eventName, () => exifUploadSection.classList.add('dragover'), false);
    });
    ['dragleave', 'drop'].forEach(eventName => {
        exifUploadSection.addEventListener(eventName, () => exifUploadSection.classList.remove('dragover'), false);
    });

    exifUploadSection.addEventListener('drop', (e) => handleExifFiles(e.dataTransfer.files));
    exifFileInput.addEventListener('change', function() { handleExifFiles(this.files); });

    function handleExifFiles(files) {
        if (files.length === 0) return;
        currentExifFile = files[0];
        processExif();
    }

    btnNewExif.addEventListener('click', () => {
        exifUploadSection.classList.remove('hidden');
        exifUploadSection.classList.add('flex');
        exifResultSection.classList.add('hidden');
        exifResultSection.classList.remove('flex');
        exifFileInput.value = '';
        currentExifFile = null;
    });

    async function processExif() {
        exifUploadSection.classList.add('hidden');
        exifUploadSection.classList.remove('flex');
        exifResultSection.classList.remove('hidden');
        exifResultSection.classList.add('flex');
        
        const isImage = currentExifFile.type.startsWith('image/');
        const ext = currentExifFile.name.split('.').pop().toLowerCase();
        
        exifPreviewFilename.textContent = currentExifFile.name;
        
        if (isImage && ext !== 'heic') {
            exifPreviewImage.src = URL.createObjectURL(currentExifFile);
            exifPreviewImage.classList.remove('hidden');
            exifPreviewFileicon.classList.add('hidden');
            exifPreviewFileicon.classList.remove('flex');
        } else {
            exifPreviewImage.classList.add('hidden');
            exifPreviewImage.src = "";
            exifPreviewFileicon.classList.remove('hidden');
            exifPreviewFileicon.classList.add('flex');
        }

        exifDataBody.innerHTML = '<tr><td colspan="2" class="px-4 py-4 text-center text-gray-400"><i class="fa-solid fa-spinner fa-spin mr-2"></i> A analisar ficheiro...</td></tr>';
        btnExifClean.disabled = true;
        btnExifClean.classList.add('opacity-50', 'cursor-not-allowed');

        try {
            if (window.exifr && isImage) {
                const parsed = await exifr.parse(currentExifFile, { tiff: true, xmp: true, icc: true, iptc: true, exif: true, gps: true });
                exifDataBody.innerHTML = '';
                
                if (parsed && Object.keys(parsed).length > 0) {
                    let propCount = 0;
                    for (const [key, value] of Object.entries(parsed)) {
                        if (typeof value === 'object' && !(value instanceof Date)) continue;
                        propCount++;
                        const tr = document.createElement('tr');
                        tr.className = 'border-b border-gray-100 hover:bg-gray-100/50';
                        const vStr = (value instanceof Date) ? value.toLocaleString() : String(value);
                        
                        const tdKey = document.createElement('td');
                        tdKey.className = 'px-4 py-2 font-medium text-gray-700 w-1/3';
                        tdKey.textContent = key;

                        const tdVal = document.createElement('td');
                        tdVal.className = 'px-4 py-2 text-gray-600 truncate max-w-[200px]';
                        tdVal.title = vStr;
                        tdVal.textContent = vStr;

                        tr.appendChild(tdKey);
                        tr.appendChild(tdVal);
                        
                        exifDataBody.appendChild(tr);
                    }
                    
                    if(propCount > 0) {
                        exifStatusBox.className = 'bg-yellow-50 border border-yellow-100 p-4 rounded-xl flex gap-3 text-left';
                        exifStatusBox.querySelector('i').className = 'fa-solid fa-triangle-exclamation text-yellow-500 mt-0.5';
                        exifStatusMsg.innerHTML = `<span class="text-yellow-800">Encontrados ${propCount} metadados.</span>`;
                        btnExifClean.disabled = false;
                        btnExifClean.classList.remove('opacity-50', 'cursor-not-allowed');
                    } else {
                        showNoExif();
                    }
                } else {
                    showNoExif();
                }
            } else {
                exifDataBody.innerHTML = '<tr><td colspan="2" class="px-4 py-4 text-center text-gray-500">Tamanho da Mídia: ' + formatBytes(currentExifFile.size) + '<br/><span class="text-xs">Inspeção profunda apenas para JPG/PNG/WEBP/HEIC/TIFF nativamente no navegador.</span></td></tr>';
                exifStatusBox.className = 'bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-left';
                exifStatusBox.querySelector('i').className = 'fa-solid fa-circle-info text-blue-500 mt-0.5';
                exifStatusMsg.textContent = 'Ficheiro validado.';
                
                if(isImage) {
                    btnExifClean.disabled = false;
                    btnExifClean.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    exifDataBody.innerHTML += '<tr><td colspan="2" class="px-4 py-4 text-center text-red-500 text-xs">Limpeza 100% no cliente não garantida para vídeos/PDF com esta ferramenta.</td></tr>';
                }
            }
        } catch (e) {
            console.error("EXIF Parse Error:", e);
            showNoExif();
        }
    }

    function showNoExif() {
        exifDataBody.innerHTML = '<tr><td colspan="2" class="px-4 py-8 text-center text-green-600 font-medium"><i class="fa-solid fa-check-circle mr-2"></i>Nenhum dado EXIF sensível encontrado!</td></tr>';
        exifStatusBox.className = 'bg-green-50 border border-green-100 p-4 rounded-xl flex gap-3 text-left';
        exifStatusBox.querySelector('i').className = 'fa-solid fa-shield-check text-green-500 mt-0.5';
        exifStatusMsg.innerHTML = '<span class="text-green-800">O ficheiro não expõe metadados extra.</span>';
        
        btnExifClean.disabled = false;
        btnExifClean.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    btnExifClean.addEventListener('click', async () => {
        if (!currentExifFile) return;
        const isImage = currentExifFile.type.startsWith('image/');
        
        if (!isImage) {
            alert('A limpeza local via regeneração de imagem está apenas disponível para imagens. Vídeos e PDFs exigem uma conversão específica ou ferramentas de edição.');
            return;
        }

        btnExifClean.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> A limpar...';
        btnExifClean.disabled = true;

        try {
            let imageBlob = currentExifFile;
            
            if (currentExifFile.name.toLowerCase().endsWith('.heic') || currentExifFile.type === 'image/heic') {
                if(typeof heic2any === 'undefined') throw new Error("A biblioteca HEIC não carregou.");
                imageBlob = await heic2any({ blob: currentExifFile, toType: 'image/jpeg', quality: 0.95 });
                if (Array.isArray(imageBlob)) imageBlob = imageBlob[0];
            } else {
                const img = new Image();
                const url = URL.createObjectURL(imageBlob);
                await new Promise((resolve, reject) => { img.onload = resolve; img.onerror = reject; img.src = url; });
                
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                
                imageBlob = await new Promise(resolve => {
                    let outType = currentExifFile.type === 'image/png' ? 'image/png' : 'image/jpeg';
                    canvas.toBlob(blob => { resolve(blob); }, outType, 0.95);
                });
                URL.revokeObjectURL(url);
            }

            const originalNameParts = currentExifFile.name.split('.');
            let ext = originalNameParts.pop().toLowerCase();
            const baseName = originalNameParts.join('.');
            if (currentExifFile.name.toLowerCase().endsWith('.heic')) ext = 'jpg';
            
            const newFileName = `${baseName}_clean.${ext}`;
            const link = document.createElement('a');
            link.href = URL.createObjectURL(imageBlob);
            link.download = newFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            showNoExif();
            exifStatusMsg.innerHTML = '<span class="text-green-800">Limpeza Concluída! Ficheiro seguro descarregado.</span>';

        } catch (e) {
            console.error(e);
            alert('Erro ao limpar a imagem: ' + e.message);
        } finally {
            btnExifClean.innerHTML = '<i class="fa-solid fa-eraser"></i> Limpar Dados Originais';
            btnExifClean.disabled = false;
        }
    });

    // ==========================================
    // UTILITIES LOGIC (RESIZER & COLOR)
    // ==========================================
    const btnUtilResizer = document.getElementById('btn-util-resizer');
    const btnUtilColor = document.getElementById('btn-util-color');
    const utilResizerTool = document.getElementById('util-resizer-tool');
    const utilColorTool = document.getElementById('util-color-tool');

    // Sub-Tabs Switching
    btnUtilResizer?.addEventListener('click', () => {
        btnUtilResizer.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
        btnUtilResizer.classList.add('bg-brand-primary', 'text-white');
        btnUtilColor.classList.remove('bg-brand-primary', 'text-white');
        btnUtilColor.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
        
        utilResizerTool?.classList.remove('hidden');
        utilResizerTool?.classList.add('flex');
        utilColorTool?.classList.add('hidden');
        utilColorTool?.classList.remove('flex');
        
        // Hide/Show SEO Articles
        document.querySelectorAll('.seo-article').forEach(a => {
            a.classList.add('hidden');
            a.classList.remove('block');
        });
        document.getElementById('seo-resizer')?.classList.remove('hidden');
        document.getElementById('seo-resizer')?.classList.add('block');
    });

    btnUtilColor?.addEventListener('click', () => {
        btnUtilColor.classList.remove('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
        btnUtilColor.classList.add('bg-brand-primary', 'text-white');
        btnUtilResizer.classList.remove('bg-brand-primary', 'text-white');
        btnUtilResizer.classList.add('bg-gray-100', 'text-gray-600', 'hover:bg-gray-200');
        
        utilColorTool?.classList.remove('hidden');
        utilColorTool?.classList.add('flex');
        utilResizerTool?.classList.add('hidden');
        utilResizerTool?.classList.remove('flex');

        // Hide/Show SEO Articles
        document.querySelectorAll('.seo-article').forEach(a => {
            a.classList.add('hidden');
            a.classList.remove('block');
        });
        document.getElementById('seo-color')?.classList.remove('hidden');
        document.getElementById('seo-color')?.classList.add('block');
    });

    // Make main Utilities tab button trigger the default sub-tab logic
    const mainUtilsTab = document.querySelector('[data-target="panel-utilities"]');
    mainUtilsTab?.addEventListener('click', () => {
        btnUtilResizer?.click();
    });

    // --- RESIZER LOGIC ---
    const resizerFileInput = document.getElementById('resizer-file-input');
    const resizerUploadSection = document.getElementById('resizer-upload-section');
    const resizerEditorSection = document.getElementById('resizer-editor-section');
    const resizerImage = document.getElementById('resizer-image');
    const btnCropDownload = document.getElementById('btn-crop-download');
    const inputW = document.getElementById('resizer-w');
    const inputH = document.getElementById('resizer-h');
    const ratioBtns = document.querySelectorAll('.crop-ratio-btn');
    
    let cropperInstance = null;
    let currentResizerFileExt = 'jpeg';

    resizerFileInput?.addEventListener('change', function(e) {
        if (this.files && this.files.length > 0) {
            const file = this.files[0];
            const url = URL.createObjectURL(file);
            currentResizerFileExt = file.name.split('.').pop().toLowerCase();
            if (currentResizerFileExt === 'jpg') currentResizerFileExt = 'jpeg';
            
            resizerUploadSection.classList.add('hidden');
            resizerUploadSection.classList.remove('flex');
            resizerEditorSection.classList.remove('hidden');
            
            resizerImage.src = url;
            
            if (cropperInstance) cropperInstance.destroy();
            cropperInstance = new Cropper(resizerImage, {
                viewMode: 1,
                dragMode: 'crop',
                autoCropArea: 0.8,
                responsive: true,
                crop(event) {
                    inputW.value = Math.round(event.detail.width);
                    inputH.value = Math.round(event.detail.height);
                }
            });
        }
    });

    ratioBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if(!cropperInstance) return;
            const targetRatio = parseFloat(btn.dataset.ratio);
            
            // UI Toggle
            ratioBtns.forEach(b => {
                b.classList.remove('bg-brand-primary', 'text-white');
                b.classList.add('bg-white', 'text-gray-600', 'border-gray-200');
            });
            btn.classList.add('bg-brand-primary', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-600', 'border-gray-200');
            
            cropperInstance.setAspectRatio(isNaN(targetRatio) ? NaN : targetRatio);
        });
    });

    inputW?.addEventListener('change', () => {
        if(!cropperInstance) return;
        const data = cropperInstance.getData();
        cropperInstance.setData({ width: parseInt(inputW.value, 10), height: data.height });
    });
    inputH?.addEventListener('change', () => {
        if(!cropperInstance) return;
        const data = cropperInstance.getData();
        cropperInstance.setData({ height: parseInt(inputH.value, 10), width: data.width });
    });

    btnCropDownload?.addEventListener('click', () => {
        if(!cropperInstance) return;
        btnCropDownload.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> A processar...';
        btnCropDownload.disabled = true;

        setTimeout(() => {
            const canvas = cropperInstance.getCroppedCanvas({ imageSmoothingQuality: 'high' });
            if(canvas) {
                canvas.toBlob(blob => {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `cropped_image.${currentResizerFileExt}`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                    
                    btnCropDownload.innerHTML = '<i class="fa-solid fa-download"></i> Cortar e Descarregar';
                    btnCropDownload.disabled = false;
                }, `image/${currentResizerFileExt}`, 0.95);
            }
        }, 300);
    });

    // --- COLOR EXTRACTOR LOGIC ---
    const colorFileInput = document.getElementById('color-file-input');
    const colorUploadSection = document.getElementById('color-upload-section');
    const colorResultSection = document.getElementById('color-result-section');
    const colorPreviewImage = document.getElementById('color-preview-image');
    const colorPaletteContainer = document.getElementById('color-palette-container');

    colorFileInput?.addEventListener('change', function(e) {
        if (this.files && this.files.length > 0) {
            const file = this.files[0];
            const url = URL.createObjectURL(file);
            
            colorUploadSection.classList.add('hidden');
            colorUploadSection.classList.remove('flex');
            colorResultSection.classList.remove('hidden');
            colorResultSection.classList.add('flex');
            
            colorPreviewImage.onload = () => {
                extractColors(colorPreviewImage);
            };
            colorPreviewImage.src = url;
        }
    });

    function rgbToHex(r, g, b) {
        return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();
    }

    function extractColors(imgEl) {
        if (typeof ColorThief === 'undefined') return;
        colorPaletteContainer.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-2xl text-brand-primary"></i>';
        
        setTimeout(() => {
            try {
                const colorThief = new ColorThief();
                // Get 5 dominant colors
                const palette = colorThief.getPalette(imgEl, 5);
                colorPaletteContainer.innerHTML = '';
                
                palette.forEach(color => {
                    const r = color[0];
                    const g = color[1];
                    const b = color[2];
                    const hex = rgbToHex(r, g, b);
                    const brightness = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000);
                    const textColor = (brightness > 125) ? 'text-gray-800' : 'text-white';

                    const colBox = document.createElement('div');
                    colBox.className = "flex flex-col items-center gap-2 group cursor-pointer transition transform hover:scale-105";
                    colBox.onclick = () => {
                        navigator.clipboard.writeText(hex);
                        const msg = document.createElement('div');
                        msg.className = "fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded shadow-xl z-50 text-sm";
                        msg.textContent = `${hex} Copiado!`;
                        document.body.appendChild(msg);
                        setTimeout(() => msg.remove(), 2000);
                    };

                    colBox.innerHTML = `
                        <div class="w-16 h-16 rounded-xl shadow-md border border-gray-100 flex items-center justify-center ${textColor}" style="background-color: rgb(${r}, ${g}, ${b})">
                            <i class="fa-regular fa-copy opacity-0 group-hover:opacity-100 transition"></i>
                        </div>
                        <div class="text-center">
                            <div class="text-xs font-bold text-gray-800">${hex}</div>
                            <div class="text-[10px] text-gray-400">RGB(${r}, ${g}, ${b})</div>
                        </div>
                    `;
                    colorPaletteContainer.appendChild(colBox);
                });

            } catch(e) {
                console.error("Erro ao extrair cores", e);
                colorPaletteContainer.innerHTML = '<span class="text-red-500 text-sm">Erro ao analisar cores da imagem. Verifique se a origem da foto permite CORS.</span>';
            }
        }, 500);
    }

    // --- Helpers ---
    function formatBytes(bytes, decimals = 2) {
        if (!+bytes) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
    }
});
