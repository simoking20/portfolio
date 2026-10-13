/**
 * Professional CV Generator for Hacini Mohammed Oussama
 * Generates an ATS-optimized, beautifully styled Microsoft Word (.docx) document.
 * 
 * Strict format rules implemented:
 * - Font: Calibri
 * - Colors: Navy #1B3A5C (headings), Blue #2E75B6 (accents/rules), Dark gray #444444 (body)
 * - Layout: Name + Title + Contact row, followed by sections divided by blue rules
 * - Projects: Two-column header (title + role on left, date on right) + bullet points
 * - Skills: One line per category, label bold navy, items separated by ·
 * - Clean layout without photos, icons, or sidebars
 */

const fs = require('fs');
const path = require('path');
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  AlignmentType,
  ExternalHyperlink
} = require('docx');

// ── COLOR PALETTE ──────────────────────────────────────────────────────────
const COLORS = {
  NAVY: '1B3A5C',     // Primary Headings & Section Titles
  BLUE: '2E75B6',     // Accents, Dividers & Subheadings
  BODY: '444444',     // Body Text & Descriptions
  MUTED: '666666'     // Dates & Secondary Metadata
};

const FONT_FAMILY = 'Calibri';

// ── BORDER DEFINITIONS ──────────────────────────────────────────────────────
const NO_BORDER = {
  style: BorderStyle.NONE,
  size: 0,
  color: 'auto'
};

const SECTION_BOTTOM_BORDER = {
  bottom: {
    style: BorderStyle.SINGLE,
    size: 12, // 1.5 pt
    color: COLORS.BLUE,
    space: 4
  }
};

/**
 * Creates a section heading with a crisp blue bottom accent rule.
 */
function createSectionHeader(title) {
  return new Paragraph({
    spacing: { before: 200, after: 100 },
    border: SECTION_BOTTOM_BORDER,
    children: [
      new TextRun({
        text: title.toUpperCase(),
        font: FONT_FAMILY,
        bold: true,
        size: 22, // 11pt
        color: COLORS.NAVY
      })
    ]
  });
}

/**
 * Creates a clean 2-column header row for projects or education.
 * Left cell: Title & Role
 * Right cell: Date (right-aligned)
 */
function createTwoColumnHeader(leftBoldText, leftNormalText, rightDateText) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: NO_BORDER,
      bottom: NO_BORDER,
      left: NO_BORDER,
      right: NO_BORDER,
      insideHorizontal: NO_BORDER,
      insideVertical: NO_BORDER
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 75, type: WidthType.PERCENTAGE },
            margins: { top: 60, bottom: 20, left: 0, right: 0 },
            children: [
              new Paragraph({
                spacing: { before: 0, after: 0 },
                children: [
                  new TextRun({
                    text: leftBoldText,
                    font: FONT_FAMILY,
                    bold: true,
                    size: 21, // 10.5pt
                    color: COLORS.NAVY
                  }),
                  new TextRun({
                    text: leftNormalText ? ` — ${leftNormalText}` : '',
                    font: FONT_FAMILY,
                    italics: true,
                    size: 20, // 10pt
                    color: COLORS.BLUE
                  })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 25, type: WidthType.PERCENTAGE },
            margins: { top: 60, bottom: 20, left: 0, right: 0 },
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                spacing: { before: 0, after: 0 },
                children: [
                  new TextRun({
                    text: rightDateText,
                    font: FONT_FAMILY,
                    bold: true,
                    size: 19, // 9.5pt
                    color: COLORS.MUTED
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}

/**
 * Creates a bullet item styled with dark gray body text.
 */
function createBulletPoint(text, isStack = false) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 20, after: 30, line: 240 },
    children: isStack
      ? [
          new TextRun({
            text: 'Stack: ',
            font: FONT_FAMILY,
            bold: true,
            size: 19, // 9.5pt
            color: COLORS.NAVY
          }),
          new TextRun({
            text: text,
            font: FONT_FAMILY,
            size: 19,
            color: COLORS.BODY
          })
        ]
      : [
          new TextRun({
            text: text,
            font: FONT_FAMILY,
            size: 19.5, // ~9.75pt
            color: COLORS.BODY
          })
        ]
  });
}

/**
 * Creates a single-line skill row:
 * Category in bold navy, items separated by ' · ' in dark gray.
 */
function createSkillRow(category, itemsText) {
  return new Paragraph({
    spacing: { before: 40, after: 40, line: 240 },
    children: [
      new TextRun({
        text: `${category}: `,
        font: FONT_FAMILY,
        bold: true,
        size: 20, // 10pt
        color: COLORS.NAVY
      }),
      new TextRun({
        text: itemsText,
        font: FONT_FAMILY,
        size: 20,
        color: COLORS.BODY
      })
    ]
  });
}

async function generateCV() {
  console.log('📄 Building CV for Hacini Mohammed Oussama...');

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: FONT_FAMILY,
            color: COLORS.BODY
          }
        }
      }
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,    // 0.5 inch margins for clean 1-2 page density
              bottom: 720,
              left: 720,
              right: 720
            }
          }
        },
        children: [
          // ── 1. HEADER (NAME) ───────────────────────────────────────────────
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: 'HACINI MOHAMMED OUSSAMA',
                font: FONT_FAMILY,
                bold: true,
                size: 40, // 20pt
                color: COLORS.NAVY
              })
            ]
          }),

          // ── 2. SUBTITLE / ROLES ────────────────────────────────────────────
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 60 },
            children: [
              new TextRun({
                text: 'Backend Engineer · Full-Stack Engineer · Software Engineer',
                font: FONT_FAMILY,
                bold: true,
                size: 21, // 10.5pt
                color: COLORS.BLUE
              })
            ]
          }),

          // ── 3. CONTACT ROW (SINGLE LINE WITH ACTIVE HYPERLINKS) ───────────
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 160 },
            children: [
              new TextRun({
                text: 'Ouargla, Algeria   |   ',
                font: FONT_FAMILY,
                size: 19,
                color: COLORS.BODY
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: 'github.com/simoking20',
                    font: FONT_FAMILY,
                    color: COLORS.BLUE,
                    underline: {}
                  })
                ],
                link: 'https://github.com/simoking20'
              }),
              new TextRun({
                text: '   |   ',
                font: FONT_FAMILY,
                size: 19,
                color: COLORS.BODY
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: 'linkedin.com/in/mohammed-oussama-hacini-858421271',
                    font: FONT_FAMILY,
                    color: COLORS.BLUE,
                    underline: {}
                  })
                ],
                link: 'https://www.linkedin.com/in/mohammed-oussama-hacini-858421271/'
              }),
              new TextRun({
                text: '   |   ',
                font: FONT_FAMILY,
                size: 19,
                color: COLORS.BODY
              }),
              new ExternalHyperlink({
                children: [
                  new TextRun({
                    text: 'wa.me/qr/BI77IX7QTQQXI1',
                    font: FONT_FAMILY,
                    color: COLORS.BLUE,
                    underline: {}
                  })
                ],
                link: 'https://wa.me/qr/BI77IX7QTQQXI1'
              })
            ]
          }),

          // ── 4. PROJECTS SECTION ────────────────────────────────────────────
          createSectionHeader('Featured Engineering Projects'),

          // Project 1: Team CRM System
          createTwoColumnHeader('Team CRM System', 'Lead Developer', '2025 – Present'),
          createBulletPoint('Architected and developed a full-featured internal CRM system from scratch supporting 50–200 daily active users.'),
          createBulletPoint('Implemented core business domains with Django & DRF: accounts, contacts, deal pipelines, activities, tasks, and workflow automation.'),
          createBulletPoint('Integrated Redis and Celery for asynchronous background job processing, automated notifications, and scheduled workflows.'),
          createBulletPoint('Django, DRF, PostgreSQL, Redis, Celery, Docker Compose', true),

          // Project 2: PADAR
          createTwoColumnHeader('PADAR', 'Founder & Lead Developer', '2025 – 2026'),
          createBulletPoint("Master's graduation project: digital road accident data reporting, real-time tracking, and analytics platform."),
          createBulletPoint('Engineered scalable GraphQL API with Graphene-Django, secure JWT authentication, and fine-grained role-based access control (RBAC).'),
          createBulletPoint('Designed optimized relational PostgreSQL schemas for geospatial analytics and automated CI/CD deployment pipelines with Docker.'),
          createBulletPoint('Django, GraphQL, PostgreSQL, JWT, Docker, CI/CD', true),

          // Project 3: LKVC
          createTwoColumnHeader('LKVC', 'Co-Founder & Backend Developer', '2023'),
          createBulletPoint('Developed complete REST API backend for an on-demand commercial delivery truck rental mobile platform.'),
          createBulletPoint('Engineered secure authentication, booking state lifecycle logic, vehicle availability scheduling, and mobile client integration.'),
          createBulletPoint('FastAPI, PostgreSQL, REST, JWT', true),

          // Project 4: Rafikni
          createTwoColumnHeader('Rafikni', 'Backend Developer / Contributor', '2023 – 2024'),
          createBulletPoint('Contributed backend feature modules and REST endpoints to a growing startup web platform for transportation services.'),
          createBulletPoint('Optimized PostgreSQL relational queries for high concurrency and implemented trip scheduling and route management endpoints.'),
          createBulletPoint('Django, PostgreSQL, REST APIs', true),

          // ── 5. TECHNICAL SKILLS SECTION ────────────────────────────────────
          createSectionHeader('Technical Skills'),
          createSkillRow('Languages', 'Python · Ruby (learning) · PHP'),
          createSkillRow('Frameworks', 'Django · DRF · FastAPI · Flask · Ruby on Rails (learning)'),
          createSkillRow('Databases', 'PostgreSQL · MySQL · SQLite · Redis'),
          createSkillRow('APIs & Auth', 'GraphQL · REST · JWT · OAuth2'),
          createSkillRow('Architecture', 'Microservices · Monolith · Domain-Driven Design (DDD)'),
          createSkillRow('DevOps & Cloud', 'Docker · Docker Compose · Celery · CI/CD · Vercel · Render'),
          createSkillRow('AI & Tooling', 'AI-Assisted Development · Prompt Engineering · Automation'),

          // ── 6. EDUCATION SECTION ───────────────────────────────────────────
          createSectionHeader('Education'),
          createTwoColumnHeader("Master's in Computer Science", 'Kasdi Merbah University Ouargla', '2024 – 2026'),
          new Paragraph({
            spacing: { before: 20, after: 60 },
            children: [
              new TextRun({
                text: 'Specialization in Distributed Systems, Relational Database Engineering, and Intelligent Algorithms.',
                font: FONT_FAMILY,
                size: 19,
                color: COLORS.BODY
              })
            ]
          }),
          createTwoColumnHeader('Licence in Computer Science', 'Kasdi Merbah University Ouargla', '2021 – 2024'),
          new Paragraph({
            spacing: { before: 20, after: 60 },
            children: [
              new TextRun({
                text: 'Foundations of Computer Science: Algorithms, Data Structures, OOP, Relational Databases, and Operating Systems.',
                font: FONT_FAMILY,
                size: 19,
                color: COLORS.BODY
              })
            ]
          }),

          // ── 7. SPOKEN LANGUAGES ────────────────────────────────────────────
          createSectionHeader('Spoken Languages'),
          new Paragraph({
            spacing: { before: 40, after: 100 },
            children: [
              new TextRun({
                text: 'Arabic: ',
                font: FONT_FAMILY,
                bold: true,
                size: 20,
                color: COLORS.NAVY
              }),
              new TextRun({
                text: 'Native   ·   ',
                font: FONT_FAMILY,
                size: 20,
                color: COLORS.BODY
              }),
              new TextRun({
                text: 'English: ',
                font: FONT_FAMILY,
                bold: true,
                size: 20,
                color: COLORS.NAVY
              }),
              new TextRun({
                text: 'Professional   ·   ',
                font: FONT_FAMILY,
                size: 20,
                color: COLORS.BODY
              }),
              new TextRun({
                text: 'French: ',
                font: FONT_FAMILY,
                bold: true,
                size: 20,
                color: COLORS.NAVY
              }),
              new TextRun({
                text: 'Intermediate',
                font: FONT_FAMILY,
                size: 20,
                color: COLORS.BODY
              })
            ]
          })
        ]
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  const outputPath = path.join(__dirname, 'Hacini_Mohammed_Oussama_CV.docx');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ CV successfully generated: ${outputPath}`);

  // Also copy to dist/ if dist exists
  const distPath = path.join(__dirname, 'dist', 'Hacini_Mohammed_Oussama_CV.docx');
  if (fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.writeFileSync(distPath, buffer);
    console.log(`✅ CV copied to dist: ${distPath}`);
  }

  return outputPath;
}

if (require.main === module) {
  generateCV().catch((err) => {
    console.error('❌ Error generating CV:', err);
    process.exit(1);
  });
}

module.exports = { generateCV };
