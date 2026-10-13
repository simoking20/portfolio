const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const cvSource = path.join(rootDir, 'Hacini_Mohammed_Oussama_CV.docx');
const cvAlias = path.join(rootDir, 'cv.docx');
const distDir = path.join(rootDir, 'dist');
const portfolioJsPath = path.join(rootDir, 'src', 'data', 'portfolio.js');

if (!fs.existsSync(cvSource)) {
  console.error('CV file does not exist at:', cvSource);
  process.exit(1);
}

// 1. Copy to cv.docx in root
fs.copyFileSync(cvSource, cvAlias);
console.log('✓ Created alias cv.docx in root');

// 2. Copy both to dist/ if dist exists
if (fs.existsSync(distDir)) {
  fs.copyFileSync(cvSource, path.join(distDir, 'Hacini_Mohammed_Oussama_CV.docx'));
  fs.copyFileSync(cvSource, path.join(distDir, 'cv.docx'));
  console.log('✓ Copied both CV files to dist/');
}

// 3. Convert buffer to base64
const cvBuffer = fs.readFileSync(cvSource);
const base64Data = cvBuffer.toString('base64');
console.log(`✓ Read CV file (${cvBuffer.length} bytes), base64 length: ${base64Data.length}`);

// 4. Update portfolio.js to include the CV local database record
let portfolioCode = fs.readFileSync(portfolioJsPath, 'utf8');

// Check if cv object already exists in portfolioData
const cvObjectCode = `  cv: {
    fileName: "Hacini_Mohammed_Oussama_CV.docx",
    shortFileName: "cv.docx",
    downloadUrl: "./Hacini_Mohammed_Oussama_CV.docx",
    directUrl: "./cv.docx",
    fileSize: "${Math.round(cvBuffer.length / 1024)} KB",
    mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    isReady: true,
    base64: "${base64Data}"
  },`;

if (portfolioCode.includes('cv: {')) {
  // Replace existing cv block
  portfolioCode = portfolioCode.replace(/cv:\s*\{[\s\S]*?base64:\s*"[^"]*"[\s\S]*?\},/, cvObjectCode);
} else {
  // Insert right after 'identity: {' block
  portfolioCode = portfolioCode.replace(
    /const portfolioData = \{/,
    `const portfolioData = {\n${cvObjectCode}`
  );
}

// Also update identity.cvFile and identity.cvDirectUrl
if (!portfolioCode.includes('cvDirectUrl:')) {
  portfolioCode = portfolioCode.replace(
    /cvFile:\s*"[^"]*",?/,
    'cvFile: "./Hacini_Mohammed_Oussama_CV.docx",\n    cvDirectUrl: "./cv.docx",'
  );
}

fs.writeFileSync(portfolioJsPath, portfolioCode, 'utf8');
console.log('✓ Successfully stored CV data in local database (src/data/portfolio.js)!');

// Also update dist/src/data/portfolio.js if dist exists
const distPortfolioJs = path.join(distDir, 'src', 'data', 'portfolio.js');
if (fs.existsSync(distPortfolioJs)) {
  fs.writeFileSync(distPortfolioJs, portfolioCode, 'utf8');
  console.log('✓ Synced local database to dist/src/data/portfolio.js');
}
