const fs = require('fs');
const path = require('path');

// 1. CONFIGURATION
const I18N_PATH = path.join(__dirname, '../i18n.js');
const BLOG_DIR = path.join(__dirname, '../blog');
const INDEX_BLOG_PATH = path.join(__dirname, '../blog.html');

console.log('🚀 Starting Bulk Blog Fallback Injection...');

// 2. LOAD TRANSLATIONS
let ptTranslations = {};
try {
    const i18nContent = fs.readFileSync(I18N_PATH, 'utf8');
    
    // Extract the pt section using a more surgical regex
    // Looks for "pt: {" and grabs everything until the next top-level key like "en: {"
    const ptBlockMatch = i18nContent.match(/pt:\s*{([\s\S]*?)\n\s+},/);
    if (!ptBlockMatch) throw new Error("Could not find Portuguese translation block.");

    const ptBlock = ptBlockMatch[1];
    
    // Parse entries: "key": "value" or "key": `value`
    const entryRegex = /"([^"]+)":\s*(?:"((?:[^"\\]|\\.)*)"|`([\s\S]*?)`)/g;
    let match;
    while ((match = entryRegex.exec(ptBlock)) !== null) {
        const key = match[1];
        let value = match[2] !== undefined ? match[2] : match[3];
        
        // Handle escaped characters if it was double-quoted
        if (match[2] !== undefined) {
            value = value.replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\u([0-9a-fA-F]{4})/g, (m, code) => String.fromCharCode(parseInt(code, 16)));
        }
        ptTranslations[key] = value;
    }
    
    console.log(`✅ Loaded ${Object.keys(ptTranslations).length} Portuguese translations.`);
} catch (err) {
    console.error('❌ Error loading translations:', err.message);
    process.exit(1);
}

// 3. PROCESS INDIVIDUAL BLOG POSTS
const articleDirs = fs.readdirSync(BLOG_DIR).filter(d => fs.statSync(path.join(BLOG_DIR, d)).isDirectory());

articleDirs.forEach(dir => {
    const indexPath = path.join(BLOG_DIR, dir, 'index.html');
    if (!fs.existsSync(indexPath)) return;

    let html = fs.readFileSync(indexPath, 'utf8');
    let modified = false;

    // Detect Article ID (e.g., blog_a1_title)
    const idMatch = html.match(/data-i18n="blog_a(\d+)_title"/);
    if (!idMatch) return;
    
    const articleNum = idMatch[1];
    const titleKey = `blog_a${articleNum}_title`;
    const bodyKey = `blog_a${articleNum}_body`;

    // Inject Title if still "..."
    if (ptTranslations[titleKey]) {
        const titleRegex = new RegExp(`(data-i18n="${titleKey}"[^>]*>)\\s*\\.\\.\\.\\s*(<\\/)`, 'g');
        if (titleRegex.test(html)) {
            html = html.replace(titleRegex, `$1${ptTranslations[titleKey]}$2`);
            modified = true;
        }
    }

    // Inject Body if contains placeholder comment or "..."
    if (ptTranslations[bodyKey]) {
        // Matches <!-- ... --> or ... inside the div with the bodyKey
        // Group 1: Opening tag, Group 2: Closing tag
        const bodyRegex = new RegExp(`(id="article-content"\\s+data-i18n="${bodyKey}"[^>]*>)\\s*(?:<!--[\\s\\S]*?-->|\\.\\.\\.)\\s*(<\\/div>)`, 'g');
        if (bodyRegex.test(html)) {
            html = html.replace(bodyRegex, `$1\n                ${ptTranslations[bodyKey]}\n            $2`);
            modified = true;
        }
    }

    if (modified) {
        fs.writeFileSync(indexPath, html);
        console.log(`   📝 Updated fallback for Article ${articleNum}: /blog/${dir}`);
    }
});

// 4. PROCESS BLOG INDEX (blog.html)
if (fs.existsSync(INDEX_BLOG_PATH)) {
    let indexHtml = fs.readFileSync(INDEX_BLOG_PATH, 'utf8');
    let indexModified = false;

    // Fix all blog_cardN_title and blog_cardN_desc placeholders
    // Format: <h3 data-i18n="blog_card1_title" ...>...</h3>
    const cardTitleRegex = /(data-i18n="(blog_card\d+_title)"[^>]*>)\s*\.\.\.\s*(<\/h3>)/g;
    indexHtml = indexHtml.replace(cardTitleRegex, (match, p1, p2, p3) => {
        if (ptTranslations[p2]) {
            indexModified = true;
            return `${p1}${ptTranslations[p2]}${p3}`;
        }
        return match;
    });

    // Format: <p data-i18n="blog_card1_desc" ...>...</p>
    const cardDescRegex = /(data-i18n="(blog_card\d+_desc)"[^>]*>)\s*\.\.\.\s*(<\/p>)/g;
    indexHtml = indexHtml.replace(cardDescRegex, (match, p1, p2, p3) => {
        if (ptTranslations[p2]) {
            indexModified = true;
            return `${p1}${ptTranslations[p2]}${p3}`;
        }
        return match;
    });

    if (indexModified) {
        fs.writeFileSync(INDEX_BLOG_PATH, indexHtml);
        console.log(`   📝 Updated fallback for blog.html (Index Cards)`);
    }
}

console.log('✨ Bulk process completed.');
