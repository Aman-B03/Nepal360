import { ArrowRight, Check, Clock3, Globe2, Users } from 'lucide-react';
import { Page } from '@/types';
import { PageShell, SectionLabel } from './UI';

export function FellowshipPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const pillars = [
    ['01', 'Diaspora research foundation', 'Conduct structured research on migration pathways, student experiences, foreign labor dynamics, remittance flows, and dual-identity culture.'],
    ['02', 'Masterclass & skill development', 'Learn from global mentors in digital journalism, fact-checking, short-form video, visual design, and algorithmic growth.'],
    ['03', 'Page launch & digital execution', 'Launch and manage a dedicated niche social media brand alongside a fellow partner. Test content hypotheses in real time.'],
    ['04', 'Product building & enterprise integration', 'Convert high-performing research concepts into long-term media products, directory tools, and community utility platforms.'],
  ];

  return (
    <PageShell
      eyebrow="Cohort 2026 applications open"
      title="Global Nepali Diaspora Research & Media Fellowship"
      intro="A six-month creator fellowship for high-potential students and young creatives in Nepal. Learn the craft, launch a real media property, and get recognized for work that matters."
    >
      <div className="mt-4 flex flex-wrap gap-3">
        <span className="pill"><Clock3 size={15} /> 6 months</span>
        <span className="pill"><Users size={15} /> 2 fellows per channel</span>
        <span className="pill"><Globe2 size={15} /> Kathmandu + global mentors</span>
      </div>
      <div className="mt-20">
        <SectionLabel>The curriculum journey</SectionLabel>
        <div className="mt-6 grid gap-4">
          {pillars.map(([number, title, text]) => (
            <div key={number} className="group grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#003893]/30 hover:shadow-xl hover:shadow-blue-950/5 sm:grid-cols-[80px_1fr] sm:p-8">
              <div className="font-display text-4xl font-medium text-[#c8102e]">{number}</div>
              <div>
                <h3 className="font-display text-2xl font-medium text-[#003893]">{title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_.8fr]">
        <div>
          <SectionLabel>What you receive</SectionLabel>
          <div className="mt-6 space-y-4">
            {[
              'Role & channel attachment with a dedicated niche brand',
              '10 to 12 hours per week of structured, paid work',
              'Monthly base stipend plus milestone bonuses',
              'Weekly mentorship and direct access to core team leads',
              'Public credit, verified portfolio work, and recommendation letters',
              'Priority access to paid part-time roles after the cohort',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#c8102e]">
                  <Check size={13} strokeWidth={3} />
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl bg-[#f0f4fa] p-7 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">How we select</p>
          <div className="mt-5 space-y-5">
            {[
              ['Creativity & storytelling', '40%'],
              ['Reliability & punctuality', '30%'],
              ['Skill fit for niche gaps', '20%'],
              ['Communication & clarity', '10%'],
            ].map(([label, weight]) => (
              <div key={label}>
                <div className="flex justify-between text-sm font-semibold">
                  <span>{label}</span>
                  <span className="text-[#003893]">{weight}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                  <div className="h-full rounded-full bg-[#003893]" style={{ width: weight }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-20 rounded-[28px] bg-[#c8102e] p-8 text-white sm:p-12 lg:flex lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Ready to make the leap?</p>
          <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">Bring your point of view to the next cohort.</h2>
        </div>
        <button onClick={() => onNavigate('apply')} className="button-light mt-8 lg:mt-0">
          Start your application <ArrowRight size={17} />
        </button>
      </div>
    </PageShell>
  );
}