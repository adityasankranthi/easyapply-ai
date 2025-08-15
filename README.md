# easyapply-ai
Here are the steps to load the EasyApply.ai prototype as a real Chrome extension:

Step 1: Build the Project
First, you need to compile our React code into the static HTML, CSS, and JavaScript files that Chrome can understand.

In your terminal, inside the easyapply-ai project directory, run the following command:

Bash

npm run build
This command will create a new folder in your project named dist. This dist folder contains the finished, optimized version of the extension.

Step 2: Open Chrome Extensions
In your Google Chrome browser, navigate to the following URL. You can copy and paste this into your address bar:

chrome://extensions

Step 3: Enable Developer Mode
On the extensions page, look for a toggle switch in the top-right corner labeled "Developer mode" and make sure it's turned on.

Step 4: Load the Extension
Once Developer mode is on, you will see some new buttons appear. Click on the one that says "Load unpacked".

This will open your computer's file browser. Navigate to your easyapply-ai project folder and select the dist folder that was created in Step 1.

Step 5: See it Live!
If everything was successful, you will now see the EasyApply.ai card appear in your list of Chrome extensions!

