#!/usr/bin/env node

/**
 * Mermaid Diagrams Sync Script for Atlas Vivo
 * Automatically checks for Mermaid diagram updates and pushes to GitHub
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  sourceDir: process.env.SOURCE_DIR || '/home/user/skills',
  targetOrg: process.env.TARGET_ORG || 'milkivc',
  targetRepos: ['atlas-docs', 'atlas-datasets', 'atlas-vivo-milk'],
  mermaidPatterns: ['```mermaid', '```mmd'],
  mermaidExtensions: ['.md', '.mmd', '.mermaid']
};

function extractMermaidDiagrams(content) {
  const diagrams = [];
  const regex = /```(mermaid|mmd)
([\s\S]*?)```/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    diagrams.push({
      type: match[1],
      content: match[2].trim()
    });
  }
  return diagrams;
}

function scanForMermaidFiles(baseDir) {
  const mermaidFiles = [];
  function walkDir(dir) {
    try {
      const files = fs.readdirSync(dir);
      for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (CONFIG.mermaidExtensions.includes(path.extname(file))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            const hasMermaid = CONFIG.mermaidPatterns.some(p => content.includes(p));
            if (hasMermaid) {
              mermaidFiles.push({
                path: fullPath,
                relativePath: path.relative(baseDir, fullPath),
                mtime: stat.mtime,
                content,
                diagrams: extractMermaidDiagrams(content)
              });
            }
          } catch (err) {
            console.error('Error reading file:', fullPath, err.message);
          }
        }
      }
    } catch (err) {}
  }
  walkDir(baseDir);
  return mermaidFiles;
}

function main() {
  console.log('Scanning for Mermaid diagrams...');
  const mermaidFiles = scanForMermaidFiles(CONFIG.sourceDir);
  console.log('Found ' + mermaidFiles.length + ' files with Mermaid diagrams:');
  mermaidFiles.forEach(file => {
    console.log('  - ' + file.relativePath + ' (' + file.diagrams.length + ' diagrams)');
  });
  return mermaidFiles;
}

if (require.main === module) {
  main();
}

module.exports = { scanForMermaidFiles, extractMermaidDiagrams };
