// src/content.ts (Multi-Portal)
// This script detects the current job portal and uses the correct scraper to extract data.

/**
 * A collection of scraper functions, each tailored for a specific job portal.
 * The key is the hostname of the job portal.
 */
const SCRAPERS: { [key: string]: () => boolean } = {
    'www.linkedin.com': scrapeLinkedIn,
    'www.indeed.com': scrapeIndeed,
    // We can add more scrapers for other sites here, e.g., 'www.glassdoor.com': scrapeGlassdoor
};

/**
 * Scraper for LinkedIn job pages.
 */
function scrapeLinkedIn(): boolean {
    const jobTitleElement = document.querySelector('.jobs-unified-top-card__job-title');
    const companyNameElement = document.querySelector('.jobs-unified-top-card__company-name a');
    const descriptionElement = document.querySelector('#job-details');

    if (jobTitleElement && companyNameElement && descriptionElement) {
        const jobData = {
          title: (jobTitleElement as HTMLElement).innerText.trim(),
          company: (companyNameElement as HTMLElement).innerText.trim(),
          description: (descriptionElement as HTMLElement).innerText.trim(),
        };
        chrome.runtime.sendMessage({ type: 'JOB_DATA', payload: jobData });
        console.log("EasyApply.ai: Successfully sent LinkedIn job data.", jobData);
        return true; // Indicate success
    }
    return false; // Indicate failure
}

/**
 * Scraper for Indeed job pages.
 */
function scrapeIndeed(): boolean {
    const jobTitleElement = document.querySelector('.jobsearch-JobInfoHeader-title');
    const companyNameElement = document.querySelector('[data-testid="company-name"]');
    const descriptionElement = document.querySelector('#jobDescriptionText');

    if (jobTitleElement && companyNameElement && descriptionElement) {
        const jobData = {
          title: (jobTitleElement as HTMLElement).innerText.trim(),
          company: (companyNameElement as HTMLElement).innerText.trim(),
          description: (descriptionElement as HTMLElement).innerText.trim(),
        };
        chrome.runtime.sendMessage({ type: 'JOB_DATA', payload: jobData });
        console.log("EasyApply.ai: Successfully sent Indeed job data.", jobData);
        return true; // Indicate success
    }
    return false; // Indicate failure
}

/**
 * The main function that runs on page load. It determines which scraper to use.
 */
function main() {
    const hostname = window.location.hostname;
    const scraper = SCRAPERS[hostname];

    if (scraper) {
        // For dynamic sites, we need to wait for the content to load.
        // A MutationObserver is a robust way to do this.
        const observer = new MutationObserver((_mutations, obs) => {
            // Try to scrape. If successful, disconnect the observer.
            if (scraper()) {
                obs.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // As a fallback, also try to run on window load, in case the content is already there.
        window.addEventListener('load', scraper);
        
    } else {
        console.log(`EasyApply.ai: No specific scraper found for ${hostname}.`);
    }
}

main();