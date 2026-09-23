/**
 * Cross-Platform Production Build Script for Deployment (Netlify, Vercel, Render, GitHub Pages)
 * Prepares the production output directory (dist/) from static assets.
 */

const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

async function runBuild() {
  console.log('🚀 [Build] Preparing production build for Oussama Portfolio...');

  try {
    // 1. Clean & recreate dist/ directory
    if (fs.existsSync(distDir)) {
      fs.rmSync(distDir, { recursive: true, force: true });
    }
    fs.mkdirSync(distDir, { recursive: true });
    console.log('✓ Initialized clean dist/ directory');

    // 2. Attempt to generate CV docx if docx package is available
    try {
      const { generateCV } = require('./generate_cv.js');
      await generateCV();
      console.log('✓ Verified CV docx generation');
    } catch (cvErr) {
      console.log('ℹ️ [Build] Notice: CV generation skipped or optional:', cvErr.message);
    }

    // 3. Copy index.html
    const indexPath = path.join(rootDir, 'index.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, path.join(distDir, 'index.html'));
      console.log('✓ Copied index.html -> dist/index.html');
    } else {
      throw new Error('index.html not found in root directory!');
    }

    // 4. Copy src/ (CSS styles, data, components)
    const srcDir = path.join(rootDir, 'src');
    if (fs.existsSync(srcDir)) {
      fs.cpSync(srcDir, path.join(distDir, 'src'), { recursive: true });
      console.log('✓ Copied src/ -> dist/src/');
    }

    // 5. Copy public/ if present
    const publicDir = path.join(rootDir, 'public');
    if (fs.existsSync(publicDir)) {
      fs.cpSync(publicDir, path.join(distDir, 'public'), { recursive: true });
      console.log('✓ Copied public/ -> dist/public/');
    }

    // 6. Copy generated CV docx to dist if present
    const cvFile = path.join(rootDir, 'Hacini_Mohammed_Oussama_CV.docx');
    if (fs.existsSync(cvFile)) {
      fs.copyFileSync(cvFile, path.join(distDir, 'Hacini_Mohammed_Oussama_CV.docx'));
      console.log('✓ Copied Hacini_Mohammed_Oussama_CV.docx -> dist/');
    }

    // 7. Copy or generate Netlify / SPA _redirects file
    const rootRedirects = path.join(rootDir, '_redirects');
    if (fs.existsSync(rootRedirects)) {
      fs.copyFileSync(rootRedirects, path.join(distDir, '_redirects'));
    } else {
      fs.writeFileSync(path.join(distDir, '_redirects'), '/*    /index.html   200\n');
    }
    console.log('✓ Generated dist/_redirects for SPA routing');

    console.log('🎉 [Build] Production build completed successfully! Output ready in dist/');
  } catch (error) {
    console.error('❌ [Build] Build failed:', error);
    process.exit(1);
  }
}

runBuild();
