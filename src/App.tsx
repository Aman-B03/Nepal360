import { useEffect, useState } from 'react';
import { Page } from '@/types';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/HomePage';
import { AboutPage } from '@/components/AboutPage';
import { FellowshipPage } from '@/components/FellowshipPage';

function navigate(page: Page) {
  window.location.hash = page === 'home' ? '' : page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '');
  return hash === 'about' || hash === 'fellowship' || hash === 'apply' ? hash : 'home';
}

export default function App() {
  const [page, setPage] = useState<Page>(() => getPageFromHash());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const goTo = (nextPage: Page) => {
    setMenuOpen(false);
    navigate(nextPage);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfbf9] text-[#182238]">
      <Header page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} goTo={goTo} />

      <main>
        {page === 'home' && <HomePage onNavigate={goTo} />}
        {page === 'about' && <AboutPage onNavigate={goTo} />}
        {page === 'fellowship' && <FellowshipPage onNavigate={goTo} />}
      </main>

      <Footer onNavigate={goTo} />
    </div>
  );
}