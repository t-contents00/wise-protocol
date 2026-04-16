const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType, PageBreak, LevelFormat, Header, Footer, PageNumber } = require('docx');

function parseFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const sections = text.split(/={3,}/).filter(s => s.trim());
  return sections;
}

function parseMdTable(text) {
  const lines = text.trim().split('\n').filter(l => !l.match(/^\|[-\s|]+\|$/));
  return lines.map(l => l.split('|').map(c => c.trim()).filter(c => c));
}

function isDesignerNote(line) {
  return line.startsWith('[') && (line.includes('IMAGE') || line.includes('CHART') || line.includes('GRAPHIC') || line.includes('Note to designer')) ||
    line.startsWith('\u3010') || line.includes('\u30c7\u30b6\u30a4\u30ca\u30fc');
}

function buildDoc(sections, isJa) {
  const children = [];
  const border = { style: BorderStyle.SINGLE, size: 1, color: 'CCCCCC' };
  const borders = { top: border, bottom: border, left: border, right: border };
  const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

  for (const section of sections) {
    const lines = section.trim().split('\n');
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();
      if (!line) { i++; continue; }

      // Skip cover page metadata lines and color scheme lines
      if (line.startsWith('CROWN COIN') || line.startsWith('Version 1.0') || line.startsWith('crown-labs.org') ||
          line.startsWith('[COVER PAGE]') || line.startsWith('Title:') || line.startsWith('Subtitle:') ||
          line.startsWith('Tagline:') || line.startsWith('Date:') || line.startsWith('Website:') ||
          line.startsWith('Logo:') || line.startsWith('Note to designer:') ||
          line.startsWith('\u30bf\u30a4\u30c8\u30eb:') || line.startsWith('\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb:') ||
          line.startsWith('\u30ad\u30e3\u30c3\u30c1\u30b3\u30d4\u30fc:') || line.startsWith('\u30d0\u30fc\u30b8\u30e7\u30f3:') ||
          line.startsWith('\u65e5\u4ed8:') || line.startsWith('Web\u30b5\u30a4\u30c8:') ||
          line.startsWith('\u30ed\u30b4:') || line.startsWith('\u30c7\u30b6\u30a4\u30ca\u30fc\u5411\u3051\u6ce8\u8a18:') ||
          line.startsWith('【表紙】') ||
          line.startsWith('Color scheme') || line.startsWith('- Dividend Reserve: #') || line.startsWith('- Public Sale: #') ||
          line.startsWith('- Development') && line.includes('#') || line.startsWith('- Ecosystem: #') ||
          line.startsWith('\u30c1\u30e3\u30fc\u30c8\u306e\u914d\u8272') || line.startsWith('- \u914d\u5f53\u6e96\u5099\u91d1: #') ||
          line.startsWith('- Public Sale: #') || line.startsWith('- \u958b\u767a') && line.includes('#') || line.startsWith('- Ecosystem: #')) {
        i++; continue;
      }

      // Design notes at end of file
      if (line.startsWith('DESIGN NOTES') || line.startsWith('\u30c7\u30b6\u30a4\u30ca\u30fc\u5411\u3051\u6ce8\u8a18:') ||
          line.startsWith('Theme:') || line.startsWith('Font suggestion') || line.startsWith('Brand colors') ||
          line.startsWith('Assets needed') || line.startsWith('Deliverables') ||
          line.startsWith('\u30c6\u30fc\u30de:') || line.startsWith('\u63a8\u5968\u30d5\u30a9\u30f3\u30c8:') ||
          line.startsWith('\u30d6\u30e9\u30f3\u30c9\u30ab\u30e9\u30fc:') ||
          line.startsWith('\u5fc5\u8981\u306a\u7d20\u6750:') || line.startsWith('\u7d0d\u54c1\u7269:') ||
          (line.startsWith('  -') && (line.includes('#') || line.includes('public/') || line.includes('A4')))) {
        i++; continue;
      }

      // Section headers (numbered like "1. EXECUTIVE SUMMARY" or "1. エグゼクティブサマリー")
      const h1Match = line.match(/^(\d+)\.\s+(.+)$/);
      if (h1Match && line === line.toUpperCase() || (h1Match && !line.match(/^\d+\.\d/))) {
        const isActualH1 = !line.match(/^\d+\.\d/);
        if (isActualH1 && h1Match) {
          children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: line, bold: true, size: 32, font: 'Calibri' })] }));
          i++; continue;
        }
      }

      // TOC title
      if (line === 'TABLE OF CONTENTS' || line === '\u76ee\u6b21') {
        children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 }, children: [new TextRun({ text: line, bold: true, size: 32, font: 'Calibri' })] }));
        i++; continue;
      }

      // Sub-headers (like "2.1 Market Context")
      const h2Match = line.match(/^(\d+\.\d+)\s+(.+)$/);
      if (h2Match) {
        children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 150 }, children: [new TextRun({ text: line, bold: true, size: 26, font: 'Calibri' })] }));
        i++; continue;
      }

      // Phase headers in roadmap
      if (line.match(/^Phase \d+:/)) {
        children.push(new Paragraph({ spacing: { before: 200, after: 100 }, children: [new TextRun({ text: line, bold: true, size: 24, font: 'Calibri' })] }));
        i++; continue;
      }

      // Designer notes (yellow highlight)
      if (isDesignerNote(line)) {
        children.push(new Paragraph({ spacing: { before: 100, after: 100 }, children: [new TextRun({ text: line, size: 20, font: 'Calibri', italics: true, shading: { type: ShadingType.CLEAR, fill: 'FFFF00' } })] }));
        i++; continue;
      }

      // Tables
      if (line.startsWith('|')) {
        let tableLines = [];
        while (i < lines.length && lines[i].trim().startsWith('|')) {
          tableLines.push(lines[i].trim());
          i++;
        }
        const data = parseMdTable(tableLines.join('\n'));
        if (data.length > 0) {
          const numCols = Math.max(...data.map(r => r.length));
          const tableWidth = 9026;
          const colWidth = Math.floor(tableWidth / numCols);
          const colWidths = Array(numCols).fill(colWidth);
          colWidths[numCols - 1] = tableWidth - colWidth * (numCols - 1);

          const rows = data.map((row, ri) => {
            // Pad row to numCols
            while (row.length < numCols) row.push('');
            return new TableRow({
              children: row.map((cell, ci) => new TableCell({
                borders,
                width: { size: colWidths[ci] || colWidth, type: WidthType.DXA },
                margins: cellMargins,
                shading: ri === 0 ? { fill: 'D5E8F0', type: ShadingType.CLEAR } : undefined,
                children: [new Paragraph({ children: [new TextRun({ text: cell || '', bold: ri === 0, size: 20, font: 'Calibri' })] })]
              }))
            });
          });

          children.push(new Paragraph({ spacing: { before: 100 }, children: [] }));
          children.push(new Table({ width: { size: tableWidth, type: WidthType.DXA }, columnWidths: colWidths, rows }));
          children.push(new Paragraph({ spacing: { after: 100 }, children: [] }));
        }
        continue;
      }

      // Bullet points
      if (line.startsWith('- ')) {
        children.push(new Paragraph({
          spacing: { before: 40, after: 40 },
          indent: { left: 360, hanging: 360 },
          children: [new TextRun({ text: '\u2022  ' + line.substring(2), size: 22, font: 'Calibri' })]
        }));
        i++; continue;
      }

      // Formula lines
      if (line.startsWith('Holdings x') || line.startsWith('Formula:') || line.startsWith('\u4fdd\u6709\u91cf \u00d7') || line.startsWith('\u8a08\u7b97\u5f0f:')) {
        children.push(new Paragraph({ spacing: { before: 100, after: 100 }, alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: line, bold: true, size: 24, font: 'Calibri' })] }));
        i++; continue;
      }

      // Copyright line
      if (line.startsWith('(c) 2026') || line.startsWith('\u00a9 2026')) {
        children.push(new Paragraph({ spacing: { before: 400 }, alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: line, size: 18, font: 'Calibri', color: '888888' })] }));
        i++; continue;
      }

      // Sub-section titles like "Key Highlights:" or "主なポイント:"
      if (line.endsWith(':') && line.length < 40 && !line.startsWith('-')) {
        children.push(new Paragraph({ spacing: { before: 200, after: 100 },
          children: [new TextRun({ text: line, bold: true, size: 22, font: 'Calibri' })] }));
        i++; continue;
      }

      // "Total Supply:" centered
      if (line.startsWith('Total Supply:') || line.startsWith('\u7dcf\u767a\u884c\u91cf:')) {
        children.push(new Paragraph({ spacing: { before: 100, after: 100 }, alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: line, bold: true, size: 24, font: 'Calibri' })] }));
        i++; continue;
      }

      // Regular paragraph
      children.push(new Paragraph({ spacing: { before: 60, after: 60 },
        children: [new TextRun({ text: line, size: 22, font: 'Calibri' })] }));
      i++;
    }

    // Page break between sections
    children.push(new Paragraph({ children: [new PageBreak()] }));
  }

  // Remove last page break
  if (children.length > 0) children.pop();

  return new Document({
    styles: {
      default: { document: { run: { font: 'Calibri', size: 22 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 32, bold: true, font: 'Calibri' },
          paragraph: { spacing: { before: 400, after: 200 }, outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
          run: { size: 26, bold: true, font: 'Calibri' },
          paragraph: { spacing: { before: 300, after: 150 }, outlineLevel: 1 } },
      ]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      headers: {
        default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
          children: [new TextRun({ text: 'WISE COIN (WISE) \u2014 Official Whitepaper', size: 16, font: 'Calibri', color: '999999' })] })] })
      },
      footers: {
        default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: 'Page ', size: 16, font: 'Calibri', color: '999999' }), new TextRun({ children: [PageNumber.CURRENT], size: 16, font: 'Calibri', color: '999999' })] })] })
      },
      children
    }]
  });
}

async function main() {
  const outDir = path.join(__dirname, '..', 'docs');

  // English version
  const enSections = parseFile(path.join(outDir, 'whitepaper-en-draft.txt'));
  const enDoc = buildDoc(enSections, false);
  const enBuf = await Packer.toBuffer(enDoc);
  fs.writeFileSync(path.join(outDir, 'wise-whitepaper-en.docx'), enBuf);
  console.log('Created: wise-whitepaper-en.docx');

  // Japanese version
  const jaSections = parseFile(path.join(outDir, 'whitepaper-ja-draft.txt'));
  const jaDoc = buildDoc(jaSections, true);
  const jaBuf = await Packer.toBuffer(jaDoc);
  fs.writeFileSync(path.join(outDir, 'wise-whitepaper-ja.docx'), jaBuf);
  console.log('Created: wise-whitepaper-ja.docx');
}

main().catch(console.error);
