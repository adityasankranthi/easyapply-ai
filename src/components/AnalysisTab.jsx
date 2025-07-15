import React from 'react';
import SpiderChart from './SpiderChart';
import SponsorshipDetails from './SponsorshipDetails'; // Import the new component

const SkillBadge = ({ text, type }) => {
  const baseClasses = "text-xs font-medium px-2 py-1 rounded-full";
  const typeClasses = {
    matching: "bg-green-400/10 text-green-400 border border-green-400/20",
    missing: "bg-amber-400/10 text-amber-400 border border-amber-400/20",
  };
  return <span className={`${baseClasses} ${typeClasses[type]}`}>{text}</span>;
};


const AnalysisTab = () => {
  // We no longer need the `isDetailsVisible` state or the button to toggle it.
  return (
    <div className="space-y-5">
      {/* Resume Analysis */}
      <div>
        <h3 className="text-sm font-semibold text-secondary mb-2 px-1">Resume Analysis</h3>
        <div className="card-bg p-4 rounded-md border-strong">
          <div className="text-center border-b border-zinc-700 pb-3 mb-3">
            <p className="text-xs font-medium text-secondary">Overall ATS Score</p>
            <p className="text-5xl font-extrabold text-gradient-apex">82</p>
            <p className="text-sm text-primary mt-1"><span className="font-bold">Key Insight:</span> Strong keywords and relevance. Improve clarity.</p>
          </div>
          <div className="flex justify-center items-center my-2">
            <div className="relative w-48 h-48">
              <SpiderChart />
            </div>
          </div>
          {/* This section is now always visible */}
          <div className="mt-4 space-y-4 text-left border-t border-zinc-700 pt-4">
            <div>
              <h4 className="font-medium text-sm text-secondary mb-2">Matching Skills</h4>
              <div className="flex flex-wrap gap-2">
                <SkillBadge text="Java" type="matching" />
                <SkillBadge text="Python" type="matching" />
                <SkillBadge text="Data Structures" type="matching" />
              </div>
            </div>
            <div>
              <h4 className="font-medium text-sm text-secondary mb-2">Missing Skills</h4>
              <div className="flex flex-wrap gap-2">
                <SkillBadge text="Cloud (AWS/GCP)" type="missing" />
                <SkillBadge text="Go" type="missing" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sponsorship Details Card */}
      <SponsorshipDetails />
    </div>
  );
};

export default AnalysisTab;