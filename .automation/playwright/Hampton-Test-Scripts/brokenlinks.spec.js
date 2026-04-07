
import { test, expect } from '@playwright/test';

test('find broken and dead-end links', async ({ page }) => {
  const url = 'https://www.hamptonscientific.com/';
  const brokenLinks = [];
  const deadEndLinks = [];
  const checkedLinks = new Set();

  await page.goto(url);

  const links = await page.locator('a').all();
  console.log(`\nFound ${links.length} links on the page\n`);

  for (const link of links) {
    const href = await link.getAttribute('href');
    const linkText = (await link.innerText()).trim() || '[No Text]';

    // ==============================
    // CHECK 1: Dead-end links
    // ==============================
    if (
      !href ||                              // no href attribute at all
      href.trim() === '' ||                 // href is empty
      href === '#' ||                       // href is just an anchor
      href.startsWith('javascript:') ||    // javascript:void(0) etc
      href === 'about:blank'               // blank page
    ) {
      deadEndLinks.push({
        text: linkText,
        href: href ?? '[missing]',
        reason: getDeadEndReason(href),
      });
      console.log(`⚠️  Dead-end: "${linkText}" → href="${href ?? '[missing]'}"`);
      continue;
    }

    // Skip non-web links (these are valid, just not checkable)
    if (href.startsWith('mailto:') || href.startsWith('tel:')) {
      console.log(`📧 Skipping (not a web link): ${href}`);
      continue;
    }

    // ==============================
    // CHECK 2: Broken links
    // ==============================
    const fullUrl = href.startsWith('http') ? href : new URL(href, url).href;

    if (checkedLinks.has(fullUrl)) continue;
    checkedLinks.add(fullUrl);

    try {
      const response = await page.request.get(fullUrl, { timeout: 10000 });

      if (!response.ok()) {
        brokenLinks.push({
          text: linkText,
          url: fullUrl,
          status: response.status(),
        });
        console.log(`❌ Broken: "${linkText}" → ${fullUrl} (Status: ${response.status()})`);
      } else {
        console.log(`✅ OK: "${linkText}" → ${fullUrl}`);
      }
    } catch (error) {
      brokenLinks.push({
        text: linkText,
        url: fullUrl,
        status: 'Timed Out / Unreachable',
      });
      console.log(`❌ Failed: "${linkText}" → ${fullUrl}`);
    }
  }

  // ==============================
  // SUMMARY
  // ==============================
  console.log('\n========== DEAD-END LINKS ==========');
  if (deadEndLinks.length === 0) {
    console.log('✅ No dead-end links found!');
  } else {
    console.log(`Found ${deadEndLinks.length} dead-end link(s):\n`);
    deadEndLinks.forEach(({ text, href, reason }) => {
      console.log(`  ⚠️  "${text}" → href="${href}" (${reason})`);
    });
  }

  console.log('\n========== BROKEN LINKS ==========');
  if (brokenLinks.length === 0) {
    console.log('✅ No broken links found!');
  } else {
    console.log(`Found ${brokenLinks.length} broken link(s):\n`);
    brokenLinks.forEach(({ text, url, status }) => {
      console.log(`  ❌ "${text}" → ${url} (Status: ${status})`);
    });
  }

  console.log('\n========== FINAL RESULT ==========');
  const totalIssues = brokenLinks.length + deadEndLinks.length;
  console.log(`Total issues found: ${totalIssues}`);

  // Fail the test if any issues were found
  expect(
    totalIssues,
    `Found ${brokenLinks.length} broken and ${deadEndLinks.length} dead-end link(s)`
  ).toBe(0);
});

// ==============================
// HELPER: Explains WHY a link is a dead-end
// ==============================
function getDeadEndReason(href) {
  if (!href || href === null) return 'No href attribute';
  if (href.trim() === '') return 'href is empty';
  if (href === '#') return 'href is just #';
  if (href.startsWith('javascript:')) return 'javascript: placeholder link';
  if (href === 'about:blank') return 'points to blank page';
  return 'Unknown dead-end';
}