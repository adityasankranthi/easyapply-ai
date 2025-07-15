import React from 'react';

// A small helper component for each item in the card
const SponsorshipItem = ({ icon, title, status }) => (
  <div className="space-y-1">
    {icon}
    <p className="text-xs text-secondary">{title}</p>
    <p className="text-xs font-bold text-green-400">{status}</p>
  </div>
);

// SVG Icons for the card
const H1BIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>;
const EVerifyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const StemOptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;


const SponsorshipDetails = () => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-secondary mb-2 px-1">Sponsorship Details</h3>
      <div className="card-bg p-4 rounded-md border-strong grid grid-cols-3 gap-3 text-center">
        <SponsorshipItem icon={<H1BIcon />} title="H-1B Sponsor" status="Yes" />
        <SponsorshipItem icon={<EVerifyIcon />} title="E-Verify" status="Yes" />
        <SponsorshipItem icon={<StemOptIcon />} title="STEM OPT" status="Yes" />
      </div>
    </div>
  );
};

export default SponsorshipDetails;