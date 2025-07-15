console.log("EasyApply Content Script Loaded!"); // Check if the script runs at all

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "GET_JOB_DATA") {
    console.log("Received request for job data from popup.");

    // --- UPDATE THESE SELECTORS ---
    const jobTitleSelector = '.jobs-unified-top-card__job-title';
    const companyInfoSelector = '.jobs-unified-top-card__company-name';
    const jobDescriptionSelector = '#job-details';
    // ----------------------------

    const jobTitleElem = document.querySelector(jobTitleSelector);
    const companyInfoElem = document.querySelector(companyInfoSelector);
    const jobDescriptionElem = document.querySelector(jobDescriptionSelector);

    // Log what was found to help debug
    console.log("Job Title Element:", jobTitleElem);
    console.log("Company Info Element:", companyInfoElem);
    console.log("Job Description Element:", jobDescriptionElem);

    const responseData = {
      jobTitle: jobTitleElem ? jobTitleElem.innerText : null,
      companyInfo: companyInfoElem ? companyInfoElem.innerText : null,
      jobDescription: jobDescriptionElem ? jobDescriptionElem.innerText : null
    };
    
    console.log("Sending data back to popup:", responseData);
    sendResponse(responseData);
  }
  // Keep the message channel open for the asynchronous response
  return true; 
});