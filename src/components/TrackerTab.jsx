// src/components/TrackerTab.jsx
import React from 'react';

const ProgressBar = ({ label, value, percentage }) => (
  <div className="flex items-center">
    <p className="text-sm text-secondary w-20">{label}</p>
    <div className="w-full bg-zinc-700 rounded-full h-2">
      <div className="bg-gradient-to-r from-amber-500 to-pink-500 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
    <p className="text-sm text-primary ml-3 font-mono">{value}</p>
  </div>
);

const TrackerTab = () => {
  return (
    <div className="space-y-4">
      <div className="card-bg p-4 rounded-md border-strong">
        <h3 className="font-semibold text-primary mb-3">This Application</h3>
        <div className="bg-zinc-900 p-3 rounded-md text-center">
          <p className="text-lg font-bold text-gradient-apex">Applied</p>
          <p className="text-xs text-secondary">Added on June 15, 2025</p>
        </div>
        <button className="w-full btn-primary text-white font-semibold py-2.5 rounded-md text-sm mt-4">
          Move to Interview
        </button>
      </div>

      <div className="card-bg p-4 rounded-md border-strong">
        <h3 className="font-semibold text-primary mb-3">My Pipeline</h3>
        <div className="space-y-2">
          <ProgressBar label="Applied" value={15} percentage={100} />
          <ProgressBar label="Interview" value={5} percentage={33} />
          <ProgressBar label="Offer" value={1} percentage={7} />
        </div>
      </div>
    </div>
  );
};

export default TrackerTab;