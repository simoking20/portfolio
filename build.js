/**
 * Cross-Platform Production Build Script for Netlify Deployment
 * Prepares the production output directory (dist/) from static assets.
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

console.log('🚀 [Netlify Build] Preparing production build for Oussama Portfolio...');

try {
  // 1. Clean & recreate dist/ directory
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }
  fs.mkdirSync(distDir, { recursive: true });
  console.log('✓ Initialized clean dist/ directory');

  // 2. Copy index.html
  const indexPath = path.join(rootDir, 'index.html');
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, path.join(distDir, 'index.html'));
    console.log('✓ Copied index.html -> dist/index.html');
  } else {
    throw new Error('index.html not found in root directory!');
  }

  // 3. Copy src/ (CSS styles, data, components)
  const srcDir = path.join(rootDir, 'src');
  if (fs.existsSync(srcDir)) {
    fs.cpSync(srcDir, path.join(distDir, 'src'), { recursive: true });
    console.log('✓ Copied src/ -> dist/src/');
  }

  // 4. Copy public/ if present
  const publicDir = path.join(rootDir, 'public');
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, path.join(distDir, 'public'), { recursive: true });
    console.log('✓ Copied public/ -> dist/public/');
  }

  // 4.1 Copy generated CV docx to dist if present
  const cvFile = path.join(rootDir, 'Hacini_Mohammed_Oussama_CV.docx');
  if (fs.existsSync(cvFile)) {
    fs.copyFileSync(cvFile, path.join(distDir, 'Hacini_Mohammed_Oussama_CV.docx'));
    console.log('✓ Copied Hacini_Mohammed_Oussama_CV.docx -> dist/');
  }

  // 5. Copy or generate Netlify _redirects file
  const rootRedirects = path.join(rootDir, '_redirects');
  if (fs.existsSync(rootRedirects)) {
    fs.copyFileSync(rootRedirects, path.join(distDir, '_redirects'));
  } else {
    fs.writeFileSync(path.join(distDir, '_redirects'), '/*    /index.html   200\n');
  }
  console.log('✓ Generated dist/_redirects for Netlify SPA routing');

  console.log('🎉 [Netlify Build] Build completed successfully! Output ready in dist/');
} catch (error) {
  console.error('❌ [Netlify Build] Build failed:', error);
  process.exit(1);
}
