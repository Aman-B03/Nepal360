import { Globe2, Mail, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Page } from '@/types';

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="bg-[#003893] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-10 lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <Globe2 size={20} />
            </span>
            <span className="font-display text-2xl font-semibold">
              Nepali<span className="text-[#ff7184]">365</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/65">
            The premier research and media network connecting, informing, and empowering the global Nepali diaspora.
          </p>
          <div className="mt-7 flex gap-2">
            <a className="social-link" href="mailto:contact@nepal365.com" aria-label="Email"><Mail size={16} /></a>
            <a className="social-link" href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a className="social-link" href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a className="social-link" href="#" aria-label="YouTube"><Youtube size={16} /></a>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Explore</h3>
          <div className="space-y-3 text-sm text-white/65">
            <button onClick={() => onNavigate('home')} className="footer-link">Home</button>
            <button onClick={() => onNavigate('about')} className="footer-link">Strategic vision</button>
            <button onClick={() => onNavigate('fellowship')} className="footer-link">Global fellowship</button>
            <button onClick={() => onNavigate('apply')} className="footer-link">Apply</button>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Global hubs</h3>
          <div className="space-y-3 text-sm text-white/65">
            <p>United States · Minnesota</p>
            <p>Australia · Sydney</p>
            <p>Middle East · Sharjah</p>
            <p>Operations · Kathmandu</p>
          </div>
        </div>
        <div>
          <h3 className="footer-heading">Contact</h3>
          <p className="text-sm leading-7 text-white/65">
            General inquiries<br />
            <a href="mailto:contact@nepali365.com" className="text-white hover:text-[#ff7184]">contact@nepali365.com</a>
            <br /><br />
          </p>
        </div>
      </div>
      <div className="border-t border-white/10"> 
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <span>© 2026 Nepal365 Media Network. All rights reserved.</span>
          <span>Made for the global Nepali diaspora.</span>
        </div>
      </div>
    </footer>
  );
}