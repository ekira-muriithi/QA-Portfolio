import { test, expect } from '@playwright/test';

//page controls the browser, request sends HTTP requests without opening new tabs
test('brokenlinks', async ({page, request}) => {
    await page.goto('https://abidors.com/');

    //get all links - evaluate in page context to extract hrefs
    const links = await page.$$eval('a[href]', anchors => 
        anchors.map(anchor => anchor.href)
    );
    
    console.log("Number of links found:", links.length);
    console.log(`\nChecking ${links.length} links...\n`);
    
    //arrays to store results
    const broken_links = [];
    const working_links = [];
    
    //check each link using request context
    for (const link of links) {
        try {
            //make HTTP request without opening new tabs
            const response = await request.get(link);
            const status = response.status();
            
            //check if link is broken (4xx or 5xx status codes)
            if (status >= 400) {
                broken_links.push({ url: link, status: status });
                console.log(`❌ BROKEN: ${link} (Status: ${status})`);
            } else {
                working_links.push({ url: link, status: status });
                console.log(`✅ OK: ${link} (Status: ${status})`);
            }
            
        } catch (error) {
            //handle errors like network issues, timeouts, invalid URLs
            broken_links.push({ url: link, error: error.message });
            console.log(`❌ ERROR: ${link} - ${error.message}`);
        }
    }
    
    //print summary
    console.log('\n========== SUMMARY ==========');
    console.log(`Total links checked: ${links.length}`);
    console.log(`Working links: ${working_links.length}`);
    console.log(`Broken links: ${broken_links.length}`);
    
    //print broken links details
    if (broken_links.length > 0) {
        console.log('\n========== BROKEN LINKS ==========');
        broken_links.forEach((link, index) => {
            console.log(`${index + 1}. ${link.url}`);
            console.log(`   Issue: ${link.status || link.error}\n`);
        });
    }
    
    //assertion to fail test if broken links found
    expect(broken_links.length).toBe(0);
});