import { Globe2, ArrowRight, Menu, X } from 'lucide-react';
import { Page } from '@/types';

interface HeaderProps {
  page: Page;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  goTo: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About us', page: 'about' },
  { label: 'Fellowship', page: 'fellowship' },
  { label: 'FAQs', page: 'faq' },
];

export function Header({ page, menuOpen, setMenuOpen, goTo }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#fbfbf9]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button className="group flex items-center gap-3 text-left" onClick={() => goTo('home')}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#003893] text-white shadow-lg shadow-blue-950/15 transition-transform group-hover:-rotate-6">
            <Globe2 size={21} strokeWidth={1.8} />
          </span>
          <span>
            <span className="block font-display text-[21px] font-semibold leading-none tracking-[-0.03em] text-[#003893]">
              Nepali<span className="text-[#c8102e]">365</span>
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              Global Nepali Diaspora Network
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => goTo(item.page)}
              className={`nav-link ${page === item.page ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button onClick={() => goTo('apply')} className="button-primary px-5 py-3 text-sm">
            Join fellowship <ArrowRight size={16} />
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-[#003893] md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-200 bg-[#fbfbf9] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => goTo(item.page)}
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#003893]"
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => goTo('apply')} className="button-primary mt-2 justify-center">
              Join fellowship <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}