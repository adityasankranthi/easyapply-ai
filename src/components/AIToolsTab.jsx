import React from 'react';
import { 
  LoadingSpinner, 
  AutofillIcon,
  StrengthenVerbsIcon,
  QuantifyAchievementsIcon,
  TailorResumeIcon,
  GenerateCoverLetterIcon,
  GenerateInterviewQuestionsIcon
} from './Icons';

const AIToolButton = ({ id, text, icon, onClick, loadingStates }) => {
  const isLoading = loadingStates[id];
  return (
    <button
      onClick={() => onClick(id, text)}
      disabled={isLoading}
      className="w-full text-left card-bg p-3 rounded-md border-strong hover:border-zinc-600 transition-colors flex items-center space-x-3 disabled:opacity-50"
    >
      {isLoading ? <LoadingSpinner /> : icon}
      <span className="text-sm text-primary">{isLoading ? 'Generating...' : text}</span>
    </button>
  );
};

const AIToolsTab = ({ handleAIToolClick, loadingStates }) => {
  // This object now contains all tools from the prototype, with their icons
  const toolsByCategory = {
    'Application Assistant': [
      { id: 'autofillApplication', text: 'Autofill Application', icon: <AutofillIcon /> },
    ],
    'Quick Wins': [
      { id: 'strengthenVerbs', text: 'Strengthen Action Verbs', icon: <StrengthenVerbsIcon /> },
      { id: 'quantifyAchievements', text: 'Quantify Achievements', icon: <QuantifyAchievementsIcon /> },
    ],
    'Content Generation': [
      { id: 'tailorResume', text: 'Tailor Full Resume', icon: <TailorResumeIcon /> },
      { id: 'generateCoverLetter', text: 'Generate Cover Letter', icon: <GenerateCoverLetterIcon /> },
    ],
    'Interview Prep': [
      { id: 'generateInterviewQuestions', text: 'Generate Interview Questions', icon: <GenerateInterviewQuestionsIcon /> },
    ],
  };

  return (
    <div className="space-y-6">
      {Object.entries(toolsByCategory).map(([category, tools]) => (
        <div key={category}>
          <h3 className="text-sm font-semibold text-secondary mb-2 px-1">{category}</h3>
          <div className="space-y-2">
            {tools.map(tool => (
              <AIToolButton
                key={tool.id}
                id={tool.id}
                text={tool.text}
                icon={tool.icon}
                onClick={handleAIToolClick}
                loadingStates={loadingStates}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIToolsTab;