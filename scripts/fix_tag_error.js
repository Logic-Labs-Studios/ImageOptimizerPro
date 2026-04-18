const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '../blog');
const files = fs.readdirSync(blogDir);

files.forEach(dir => {
    const indexPath = path.join(blogDir, dir, 'index.html');
    if (!fs.existsSync(indexPath)) return;

    let content = fs.readFileSync(indexPath, 'utf8');
    if (content.includes('$3')) {
        content = content.replace(/\$3/g, '</div>');
        fs.writeFileSync(indexPath, content);
        console.log(`✅ Fixed $3 in ${dir}`);
    }
});
