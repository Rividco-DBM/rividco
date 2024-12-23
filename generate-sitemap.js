const { createWriteStream } = require('fs');
const { SitemapStream } = require('sitemap');

const BASE_URL = 'https://rividco.netlify.app';

const urls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/service', changefreq: 'weekly', priority: 0.8 },
  { url: '/project', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.8 },
  { url: '/feature', changefreq: 'weekly', priority: 0.8 },
  { url: '/free-quote', changefreq: 'weekly', priority: 0.8 },
  { url: '/our-team', changefreq: 'weekly', priority: 0.8 },
  { url: '/testimonial', changefreq: 'weekly', priority: 0.8 },
  { url: '/blog', changefreq: 'weekly', priority: 0.8 },
];

const generateSitemap = () => {
  const sitemap = new SitemapStream({ hostname: BASE_URL });
  const writeStream = createWriteStream('./public/sitemap.xml');

  sitemap.pipe(writeStream);

  urls.forEach((url) => sitemap.write(url));

  sitemap.end();

  console.log('Sitemap successfully generated at ./public/sitemap.xml');
};

generateSitemap();
