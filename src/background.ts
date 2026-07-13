// src/background.ts
// This script acts as a message hub and state manager.

chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  if (message.type === 'JOB_DATA') {
    console.log("EasyApply.ai Background: Received job data.", message.payload);
    
    // Save the received job data to Chrome's local storage.
    chrome.storage.local.set({ jobData: message.payload }, () => {
      if (chrome.runtime.lastError) {
        console.error("EasyApply.ai Background: Error saving to storage.", chrome.runtime.lastError);
      } else {
        console.log("EasyApply.ai Background: Job data saved successfully.");
      }
    });
  }
  // Return true to indicate you wish to send a response asynchronously
  return true;
});
