// src/utils/api.js

const aiResponses = {
  autofillApplication: "Autofill feature is currently in development. This is a placeholder response.",
  strengthenVerbs: "Suggestion: Instead of 'Managed a team', try 'Spearheaded a cross-functional team of 5 engineers to deliver the project 2 weeks ahead of schedule.'",
  quantifyAchievements: "Suggestion: Instead of 'Improved performance', try 'Boosted API response time by 35% by implementing a caching layer.'",
  tailorResume: "Here are resume tailoring suggestions based on the job description...",
  generateCoverLetter: "Here is your generated cover letter based on the job description...",
  generateInterviewQuestions: "Here are some potential interview questions...",
};

export const callGemini = async (type, jobDescription) => {
  console.log(`Simulating AI call for: ${type}`);
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return aiResponses[type] || "Sorry, an error occurred.";
};