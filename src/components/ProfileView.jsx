import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <div className="flex items-center space-x-2 text-xs text-secondary font-medium">
      <span>Light</span>
      <label htmlFor="theme-toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input 
            type="checkbox" 
            id="theme-toggle" 
            className="sr-only" 
            checked={isDark} 
            onChange={toggleTheme} 
          />
          <div className={`toggle-bg block w-10 h-6 rounded-full ${isDark ? 'bg-gradient-to-r from-amber-500 to-pink-500' : 'bg-zinc-600'}`}></div>
        </div>
      </label>
      <span>Dark</span>
    </div>
  );
};

const EditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-secondary hover:text-primary transition-colors cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>;
const FileIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const SubscriptionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="url(#icon-gradient)" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L13 12l-1.293-1.293a1 1 0 010-1.414L14 7l2.293-2.293a1 1 0 011.414 0L21 7M5 21v-4m-2 2h4m5-4l2.293-2.293a1 1 0 011.414 0L21 17l-1.293 1.293a1 1 0 01-1.414 0L16 16l-2.293 2.293a1 1 0 01-1.414 0L10 16l-2.293 2.293a1 1 0 01-1.414 0L3 17" /></svg>;
const AppearanceIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="url(#icon-gradient)" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>;

const SectionTitle = ({ children }) => (
  <h3 className="text-sm font-semibold text-secondary mb-2 px-1">{children}</h3>
);

export const ProfileView = () => {
  return (
    <div>
      <div className="text-center pt-4 pb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-500 to-pink-500 mx-auto flex items-center justify-center mb-3">
          <span className="text-3xl font-bold text-white">JD</span>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-xl font-bold text-primary">John Doe</h2>
            <button><EditIcon /></button>
          </div>
          <p className="text-sm text-secondary">j.doe@example.com</p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <SectionTitle>Master Resume</SectionTitle>
          <div className="card-bg p-3 rounded-md border-strong flex items-center justify-between">
            <div className="flex items-center space-x-3 overflow-hidden">
              <FileIcon />
              <div className="overflow-hidden">
                <p className="text-sm font-medium text-primary truncate">John_Doe_Resume_2025.pdf</p>
                <p className="text-xs text-secondary">Uploaded May 28</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-primary hover:text-gradient-apex transition-colors flex-shrink-0 ml-2">Replace</button>
          </div>
        </div>

        <div>
          <SectionTitle>Subscription</SectionTitle>
          <div className="card-bg p-3 rounded-md border-strong flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SubscriptionIcon />
              <p className="text-sm font-medium text-primary">Premium Plan</p>
            </div>
            <button className="text-xs font-semibold text-primary hover:text-gradient-apex transition-colors">Manage</button>
          </div>
        </div>

        <div>
          <SectionTitle>Appearance</SectionTitle>
          <div className="card-bg p-3 rounded-md border-strong flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AppearanceIcon />
              <p className="text-sm font-medium text-primary">Theme</p>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <div className="pt-4">
          <button className="w-full text-left card-bg p-3 rounded-md border-strong hover:border-zinc-600 transition-colors flex items-center space-x-3">
            <LogoutIcon />
            <span className="text-sm text-red-500 font-medium">Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};