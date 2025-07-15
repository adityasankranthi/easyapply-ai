import React, { useState } from "react";

import AnalysisTab from "./AnalysisTab";

import AIToolsTab from "./AIToolsTab";

import TrackerTab from "./TrackerTab";

import { ProfileView } from "./ProfileView";

import { LogoIcon, ProfileIcon } from "./Icons";

const CareerHubSidebar = ({ handleAIToolClick, loadingStates }) => {
  const [currentView, setCurrentView] = useState("analysis");

  const tabs = [
    { id: "analysis", label: "Analysis" },

    { id: "tools", label: "AI Tools" },

    { id: "tracker", label: "Tracker" },
  ];

  const renderContent = () => {
    if (currentView === "profile") {
      return <ProfileView />;
    }

    switch (currentView) {
      case "analysis":
        return <AnalysisTab />;

      case "tools":
        return (
          <AIToolsTab
            handleAIToolClick={handleAIToolClick}
            loadingStates={loadingStates}
          />
        );

      case "tracker":
        return <TrackerTab />;

      default:
        return null;
    }
  };

  return (
    <aside className="w-full h-full sidebar-bg rounded-lg border-strong grid grid-rows-[auto_auto_1fr] overflow-hidden">
      <div className="p-4 border-b border-strong flex items-center justify-between">
        <button
          onClick={() => setCurrentView("analysis")}
          className="flex items-center space-x-3"
        >
          <LogoIcon />

          <h2 className="text-lg font-semibold text-primary">EasyApply.ai</h2>
        </button>

        <button onClick={() => setCurrentView("profile")}>
          <ProfileIcon />
        </button>
      </div>

      {currentView !== "profile" ? (
        <div className="flex border-b border-strong">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentView(tab.id)}
              className={`tab-btn ${currentView === tab.id ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="h-px"></div>
      )}

      <div className="p-4 overflow-y-auto">{renderContent()}</div>
    </aside>
  );
};

export default CareerHubSidebar;
