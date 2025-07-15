import React, { useState } from "react";

import CareerHubSidebar from "./components/CareerHubSidebar";

import Modal from "./components/Modal";

import { callGemini } from "./utils/api";

import { useTheme } from "./context/ThemeContext";

import "./index.css";

const MOCK_JOB_DATA = {
  jobTitle: "Placeholder Job Title",

  companyInfo: "Placeholder Company Info",

  jobDescription:
    "This is a placeholder job description for visual testing purposes.",
};

function App() {
  const { isDark } = useTheme();

  const [isModalOpen, setModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState("");

  const [modalTitle, setModalTitle] = useState("");

  const [loadingStates, setLoadingStates] = useState({});

  const handleAIToolClick = async (toolId, toolText) => {
    setLoadingStates((prev) => ({ ...prev, [toolId]: true }));

    setModalTitle(`AI Generated: ${toolText}`);

    setModalOpen(true);

    const callTypeMap = {
      autofillApplication: "autofillApplication",

      strengthenVerbs: "strengthenVerbs",

      quantifyAchievements: "quantifyAchievements",

      tailorResume: "tailorResume",

      generateCoverLetter: "generateCoverLetter",

      generateInterviewQuestions: "generateInterviewQuestions",
    };

    const result = await callGemini(
      callTypeMap[toolId],
      MOCK_JOB_DATA.jobDescription
    );

    setModalContent(result);

    setLoadingStates((prev) => ({ ...prev, [toolId]: false }));
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="w-[384px] h-[600px] bg-white dark:bg-black">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient
              id="icon-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f59e0b" />

              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
        </svg>

        <CareerHubSidebar
          handleAIToolClick={handleAIToolClick}
          loadingStates={loadingStates}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={modalTitle}
          content={modalContent}
          isLoading={Object.values(loadingStates).some(Boolean)}
        />
      </div>
    </div>
  );
}

export default App;
