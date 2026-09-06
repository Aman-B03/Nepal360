import { ArrowRight, Globe2, Search, Sparkles, Users, ChevronDown } from 'lucide-react';
import { Page } from '@/types';
import { SectionLabel, FeatureCard } from './UI';
import { useState } from 'react';

function StatsBanner() {
  const stats = [
    ['$100M+', 'Combined diaspora economic footprint'],
    ['500,000+', 'Active Nepali diaspora in key hubs'],
    ['4 to 6', 'Niche social media brands'],
    ['100%', 'Nepali-based creator cohort'],
  ];
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl md:grid-cols-4">
        {stats.map(([value, label], index) => (
          <div
            key={value}
            className={`px-5 py-7 sm:px-8 lg:px-10 ${index < 3 ? 'border-b border-slate-200 md:border-b-0 md:border-r' : ''
              }`}
          >
            <p className="font-display text-3xl font-semibold text-[#003893]">{value}</p>
            <p className="mt-1 text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50/50 transition"
      >
        <span className="flex-1">
          <h3 className="font-display text-lg font-semibold text-[#003893]">{question}</h3>
        </span>
        <span className={`mt-1 flex-shrink-0 text-[#c8102e] transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={20} />
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-slate-600 leading-7 animate-fade-up">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this fellowship completely free to join?",
      answer: "Absolutely! There are no application fees or hidden charges. The entire fellowship program is completely free for all selected participants.",
    },
    {
      question: "Will I receive compensation for my contributions?",
      answer: "Yes! Fellows earn a monthly stipend of NPR 5,000, plus performance-based bonuses that reflect the quality and reach of your published work. The more impact your content creates, the more you can earn.",
    },
    {
      question: "Will I receive attribution for the content I create?",
      answer: "Definitely! Every piece of work you create will include proper credit to you as the author. Your contributions will be publicly attributed, helping build your professional portfolio and credibility.",
    },
    {
      question: "Are there any age requirements for applicants?",
      answer: "Applicants under 25 years old are particularly encouraged to apply and will receive preferential consideration. However, we welcome talented creators of all ages to apply.",
    },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_0%,rgba(0,56,147,0.1),transparent_34%),linear-gradient(120deg,#fbfbf9_0%,#f5f8fc_52%,#fbfbf9_100%)]" />
        <div className="absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full border-[38px] border-[#c8102e]/[0.05] lg:h-[500px] lg:w-[500px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="animate-fade-up">
            <div className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" /> Global media & research network
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#003893] sm:text-6xl lg:text-[76px]">
              Bridging the{' '}
              <span className="relative whitespace-nowrap text-[#c8102e]">
                global Nepali diaspora
                <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 400 12" fill="none">
                  <path d="M3 8C125 1 266 3 397 7" stroke="#c8102e" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Research-backed stories, high-signal media, and a creator network built for Nepalis living across borders.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => onNavigate('fellowship')} className="button-primary">
                Explore the fellowship <ArrowRight size={17} />
              </button>
              <button onClick={() => onNavigate('about')} className="button-secondary">
                Read our strategic vision <ArrowRight size={17} />
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
              {/* <div className="flex -space-x-2">
                <span className="avatar bg-[#003893]">A</span>
                <span className="avatar bg-[#c8102e]">S</span>
                <span className="avatar bg-[#5275ae]">K</span>
                <span className="avatar bg-[#630505]">N</span>
              </div> */}
              <span>Built by Nepalis, for Nepalis everywhere.</span>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="relative overflow-hidden rounded-[28px] border border-white bg-[#003893] p-5 shadow-2xl shadow-blue-950/20">
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[22px] border-white/10" />
              <div className="relative rounded-[20px] border border-white/15 bg-gradient-to-br from-[#184da0] to-[#002861] p-7 text-white sm:p-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">
                    The diaspora brief
                  </span>
                  <span className="text-white/50"><Sparkles size={18} /></span>
                </div>
                <div className="mt-16 max-w-sm">
                  <div className="mb-5 h-1 w-14 rounded-full bg-[#c8102e]" />
                  <p className="font-display text-3xl font-medium leading-tight sm:text-4xl">
                    One global community. Many stories worth telling.
                  </p>
                </div>
                <div className="mt-20 flex items-end justify-between border-t border-white/15 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Connected across</p>
                    <p className="mt-1 text-sm font-semibold">North America · Australia · Gulf</p>
                  </div>
                  <Globe2 size={36} className="text-white/30" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#c8102e]">
                  <Search size={19} />
                </span>
                <div>
                  <p className="text-lg font-bold text-[#003893]">Research first</p>
                  <p className="text-xs text-slate-500">Stories with substance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <StatsBanner /> */}

      {/* Our Story Section */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Creative for centuries */}
            <div className="animate-fade-up">
              <h2 className="font-display text-4xl font-semibold leading-tight text-[#003893] sm:text-5xl">
                Creative for centuries. Informed for the future.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Nepalis have always been builders: creativity, and resilience carved a thriving civilization into some of the world's most rugged terrain. Nepal365 exists to carry that same spirit into the digital age, 365 days a year.
              </p>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We bridge research, rigorous reporting, and modern storytelling to give our global community the clarity it deserves.
              </p>
            </div>

            {/* Why we exist */}
            <div className="animate-fade-up [animation-delay:150ms]">
              <h2 className="font-display text-4xl font-semibold leading-tight text-[#003893] sm:text-5xl">
                Why we exist
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The world moved fast, and the feed moved faster. Today, Nepalis at home and across the diaspora swim in endless headlines, punchlines, and half-truths. Communities once denied formal education now scroll smartphones with no habit of asking where information comes from.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Misinformation shapes how we vote, spend, migrate, marry, and interact. We believe Nepali society deserves better—in a format people actually want to watch.              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>What we do</SectionLabel>
          <div className="mt-4 grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <h2 className="section-title">A sharper lens on the Nepali experience.</h2>
              <p className="mt-5 max-w-md leading-7 text-slate-600">
                Nepali365 operates at the intersection of culture, media, and opportunity — making the diaspora more visible, informed, and connected.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <FeatureCard number="01" icon={<Search size={20} />} title="Targeted media brands" text="Niche channels for students, young professionals, settled families, and people planning their next move." />
              <FeatureCard number="02" icon={<Users size={20} />} title="Creator incubator" text="A practical pipeline for researchers, storytellers, and operators who want to make work that travels." />
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[28px] bg-[#c8102e] p-7 text-white shadow-xl shadow-red-900/10 sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">For the next generation</p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">
              Your perspective can help shape the future of diaspora media.
            </h2>
          </div>
          <button onClick={() => onNavigate('apply')} className="mt-8 button-light lg:mt-0">
            Apply to the 2026 cohort <ArrowRight size={17} />
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="section-pad">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 animate-fade-up">
            <div className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" /> Got questions?
            </div>
            <h2 className="font-display text-4xl font-semibold leading-tight text-[#003893] sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Everything you need to know about the Nepali365 fellowship program, benefits, and what we're looking for in our creators.
            </p>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white shadow-sm overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-transparent p-8 text-center">
            <p className="text-slate-700">
              Still have questions? Reach out to our team at{' '}
              <a href="mailto:contact@nepali365.com" className="font-semibold text-[#003893] hover:text-[#c8102e] transition">
                contact@nepali365.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}