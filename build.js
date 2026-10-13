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
    const cvAlias = path.join(rootDir, 'cv.docx');
    if (fs.existsSync(cvAlias)) {
      fs.copyFileSync(cvAlias, path.join(distDir, 'cv.docx'));
      console.log('✓ Copied cv.docx -> dist/');
    }

    // 7. Copy or generate Netlify / SPA _redirects file
    const rootRedirects = path.join(rootDir, '_redirects');
    if (fs.existsSync(rootRedirects)) {
      fs.copyFileSync(rootRedirects, path.join(distDir, '_redirects'));
    } else {
      fs.writeFileSync(path.join(distDir, '_redirects'), '/*    /index.html   200\n');
    }
    console.log('✓ Generated dist/_redirects for SPA routing');

    // 8. Generate 404.html fallback for GitHub Pages, Surge & static hosts
    fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
    console.log('✓ Generated dist/404.html for static fallback routing');

    // 9. Generate .nojekyll file for GitHub Pages (prevents ignoring _redirects)
    fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
    fs.writeFileSync(path.join(rootDir, '.nojekyll'), '');
    console.log('✓ Generated .nojekyll for GitHub Pages compatibility');

    // 10. Copy robots.txt & netlify.toml if present
    const robotsPath = path.join(rootDir, 'robots.txt');
    if (fs.existsSync(robotsPath)) {
      fs.copyFileSync(robotsPath, path.join(distDir, 'robots.txt'));
      console.log('✓ Copied robots.txt -> dist/robots.txt');
    }
    const netlifyPath = path.join(rootDir, 'netlify.toml');
    if (fs.existsSync(netlifyPath)) {
      fs.copyFileSync(netlifyPath, path.join(distDir, 'netlify.toml'));
      console.log('✓ Copied netlify.toml -> dist/netlify.toml');
    }

    // 11. Sync CV base64 data into portfolio.js if sync script exists
    try {
      const syncScript = path.join(rootDir, 'sync_cv.js');
      if (fs.existsSync(syncScript)) {
        require(syncScript);
        console.log('✓ Synced CV data & base64 into portfolio.js');
      }
    } catch (syncErr) {
      console.log('ℹ️ [Build] Notice: CV sync skipped or optional:', syncErr.message);
    }

    // 12. Create dist/dist fallback mirror for Netlify configurations where Base directory is set to dist
    const nestedDist = path.join(distDir, 'dist');
    if (!fs.existsSync(nestedDist)) {
      fs.mkdirSync(nestedDist, { recursive: true });
      fs.copyFileSync(path.join(distDir, 'index.html'), path.join(nestedDist, 'index.html'));
      fs.copyFileSync(path.join(distDir, '_redirects'), path.join(nestedDist, '_redirects'));
      fs.copyFileSync(path.join(distDir, '404.html'), path.join(nestedDist, '404.html'));
      fs.cpSync(path.join(distDir, 'src'), path.join(nestedDist, 'src'), { recursive: true });
      const cvDest = path.join(distDir, 'Hacini_Mohammed_Oussama_CV.docx');
      if (fs.existsSync(cvDest)) {
        fs.copyFileSync(cvDest, path.join(nestedDist, 'Hacini_Mohammed_Oussama_CV.docx'));
      }
      const cvAliasDest = path.join(distDir, 'cv.docx');
      if (fs.existsSync(cvAliasDest)) {
        fs.copyFileSync(cvAliasDest, path.join(nestedDist, 'cv.docx'));
      }
      const netlifyDest = path.join(distDir, 'netlify.toml');
      if (fs.existsSync(netlifyDest)) {
        fs.copyFileSync(netlifyDest, path.join(nestedDist, 'netlify.toml'));
      }
      console.log('✓ Created dist/dist fallback for Netlify nested-path compatibility');
    }

    console.log('🎉 [Build] Production build completed successfully! Output ready in dist/');
  } catch (error) {
    console.error('❌ [Build] Build failed:', error);
    process.exit(1);
  }
}

runBuild();
