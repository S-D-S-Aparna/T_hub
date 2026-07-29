const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace any chaotic nesting of process.env.NEXT_PUBLIC_API_URL
  // Examples: 
  // `${process.env.NEXT_PUBLIC_API_URL || `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}`}/api/achievements`
  // `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/chat`
  
  // Replace the crazy nested ones first
  content = content.replace(/\$\{process\.env\.NEXT_PUBLIC_API_URL\s*\|\|\s*\`\$\{process\.env\.NEXT_PUBLIC_API_URL\s*\|\|\s*["']http:\/\/localhost:5000["']\}\`\}/g, 
      '${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}');
      
  // Replace single ones
  content = content.replace(/\$\{process\.env\.NEXT_PUBLIC_API_URL\s*\|\|\s*["']http:\/\/localhost:5000["']\}/g, 
      '${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}');

  // Replace raw hardcoded ones
  content = content.replace(/["']http:\/\/localhost:5000([^"']*)["']/g, 
      '`${process.env.NEXT_PUBLIC_API_URL || "https://t-hub-yxvu.onrender.com"}$1`');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  }
});

// Also update next.config.ts
const nextConfigPath = path.join(__dirname, 'next.config.ts');
if (fs.existsSync(nextConfigPath)) {
    let nextContent = fs.readFileSync(nextConfigPath, 'utf8');
    nextContent = nextContent.replace(/http:\/\/localhost:5000/g, 'https://t-hub-yxvu.onrender.com');
    fs.writeFileSync(nextConfigPath, nextContent, 'utf8');
    console.log('Updated', nextConfigPath);
}

console.log('Done replacing URLs');
