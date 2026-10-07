const fs = require('fs');
const path = require('path');

// Import brands data using standard CJS requiring ES file regex or static list
const brandsDataPath = path.join(__dirname, '../src/data/brandsData.js');
const brandsContent = fs.readFileSync(brandsDataPath, 'utf8');

// Extract brand IDs using regex
const idMatches = [...brandsContent.matchAll(/id:\s*'([^']+)'/g)].map(m => m[1]);

const baseUrl = 'https://www.zenaurasanitary.ae';

const xmlUrls = idMatches.map(id => `  <url>
    <loc>${baseUrl}/brands/${id}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#brands</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>
${xmlUrls}
</urlset>`;

// Write sitemap.xml to public/ and dist/
const publicSitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(publicSitemapPath, sitemapXml, 'utf8');

console.log(`[sitemap] Generated sitemap.xml with ${idMatches.length + 2} URLs.`);

// Create static dist route directories for pre-rendering / fallback routing
const distPath = path.join(__dirname, '../dist');
if (fs.existsSync(distPath)) {
  const indexHtmlPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexHtmlPath)) {
    const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');
    
    // Copy sitemap to dist
    fs.writeFileSync(path.join(distPath, 'sitemap.xml'), sitemapXml, 'utf8');

    idMatches.forEach(id => {
      const brandDir = path.join(distPath, 'brands', id);
      fs.mkdirSync(brandDir, { recursive: true });
      fs.writeFileSync(path.join(brandDir, 'index.html'), baseHtml, 'utf8');
    });
    console.log(`[sitemap] Pre-rendered ${idMatches.length} static HTML route fallbacks in dist/brands/`);
  }
}
