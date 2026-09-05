import { ArrowRight, Quote } from 'lucide-react';
import { Page } from '@/types';
import { PageShell, InfoPanel, SectionLabel } from './UI';

export function AboutPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const segments = ['Students & post-grads', 'Young professionals', 'Settled families & citizens', 'Aspirants in Nepal'];
  return (
    <PageShell
      eyebrow="Our strategy & people"
      title="Architecting the future of diaspora media"
      intro="Nepal365 exists to solve a critical gap: high-quality, research-backed media made specifically for the lived experiences of Nepalis abroad and the people preparing to join them."
    >
      <div className="grid gap-6 lg:grid-cols-2 mt-5">
        <InfoPanel title="Our vision">
          To become the most engaging, research-driven, and influential media network for Nepalis living abroad — using data, human stories, and practical guides to make global Nepali life easier to navigate.
        </InfoPanel>
        <InfoPanel title="Our 12-month mission">
          Build and scale a portfolio of 4 to 6 targeted social media channels, each serving a high-intent diaspora niche. Prove sustainable organic reach with an empowered Nepal-based fellowship cohort.
        </InfoPanel>
      </div>
      <div className="mt-20">
        <SectionLabel>Who we serve</SectionLabel>
        <h2 className="section-title mt-4 max-w-2xl">Four audiences. One connected ecosystem.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {segments.map((segment, index) => (
            <div key={segment} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#003893]/30 hover:shadow-xl hover:shadow-blue-950/5">
              <span className="text-sm font-bold text-[#c8102e]">0{index + 1}</span>
              <h3 className="mt-8 font-display text-2xl font-medium text-[#003893]">{segment}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Useful, credible content for the questions, decisions, and transitions that define this stage of the journey.</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <SectionLabel>Leadership footprint</SectionLabel>
        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="hidden grid-cols-[1.1fr_1fr_1.6fr] bg-[#003893] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white sm:grid">
            <span>Name & role</span><span>Hub</span><span>Focus</span>
          </div>
          {[
            ['Asmod Khakurel', 'Minnesota, USA', 'Business policy & frameworks'],
            ['Arun Lamsal', 'Australia', 'Senior strategy & institutional growth'],
            ['Aman Bhandari', 'Sharjah, UAE', 'Middle East growth & Research'],
            ['Kasam Bhusal', 'Kathmandu, Nepal', 'Operations & fellow bridge'],
            ['Nischit Bhandari', 'South Dakota, USA', 'Technology, platforms & analytics'],
            ['Saksham Rupakheti', 'Iowa, USA', 'Economics, research & market sizing'],
          ].map(([name, hub, focus]) => (
            <div key={name} className="grid gap-2 border-t border-slate-200 px-5 py-4 sm:grid-cols-[1.1fr_1fr_1.6fr] sm:items-center">
              <div className="font-semibold text-slate-800">{name}</div>
              <div><span className="tag">{hub}</span></div>
              <div className="text-sm text-slate-600">{focus}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 rounded-[28px] bg-[#003893] p-8 text-white sm:p-12">
        <div className="max-w-2xl">
          <Quote size={32} className="text-white/40" />
          <p className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
            We are building the infrastructure to connect diaspora experiences through storytelling, data, and digital innovation.
          </p>
          <button onClick={() => onNavigate('fellowship')} className="button-light mt-8">
            Meet the fellowship <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </PageShell>
  );
}