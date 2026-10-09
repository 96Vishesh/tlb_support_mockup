import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SupportPage } from './components/SupportPage';
import { HomePage } from './components/HomePage';
import { DeleteAccountPage } from './components/DeleteAccountPage';
import { PrototypeBar } from './components/PrototypeBar';

export default function App() {
  // Sync with browser path or hash
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace('#', '');
    if (hash === '/support' || hash === 'support') return '/support';
    if (hash === '/delete-account' || hash === 'delete-account') return '/delete-account';
    if (window.location.pathname === '/support') return '/support';
    if (window.location.pathname === '/delete-account') return '/delete-account';
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === '/support' || hash === 'support') {
        setCurrentPath('/support');
      } else if (hash === '/delete-account' || hash === 'delete-account') {
        setCurrentPath('/delete-account');
      } else if (window.location.pathname === '/support') {
        setCurrentPath('/support');
      } else if (window.location.pathname === '/delete-account') {
        setCurrentPath('/delete-account');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: string) => {
    // If it's an anchor link like /#what-we-do
    if (path.startsWith('/#')) {
      setCurrentPath('/');
      window.history.pushState({}, '', '/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setCurrentPath(path);
    try {
      window.history.pushState({}, '', path);
    } catch {
      window.location.hash = path;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0F1013] text-[#D0D0D0] selection:bg-[#F5A623] selection:text-[#111215]">
      {/* Client Review Prototype Quick Bar */}
      <PrototypeBar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Primary The Little Broadway Navbar */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPath === '/support' ? (
          <SupportPage onNavigate={handleNavigate} />
        ) : currentPath === '/delete-account' ? (
          <DeleteAccountPage onNavigate={handleNavigate} />
        ) : (
          <HomePage onNavigate={handleNavigate} />
        )}
      </main>

      {/* The Little Broadway Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
