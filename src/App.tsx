import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight,  Check,  Clock3,  Globe2,  Instagram,  Linkedin,  Mail,  Menu,  Quote,  Search,  Sparkles,  Users,  X,  Youtube,} from 'lucide-react';
import { supabase } from '@/lib/supabase';

type Page = 'home' | 'about' | 'fellowship' | 'apply';

type ApplicationForm = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  educationStatus: string;
  rolePreference: string;
  interest: string;
  portfolioUrl: string;
  pitch: string;
  resumeUrl: string;
  weeklyHoursConfirmed: boolean;
};

const initialForm: ApplicationForm = {
  fullName: '',
  email: '',
  phone: '',
  location: '',
  educationStatus: '',
  rolePreference: '',
  interest: '',
  portfolioUrl: '',
  pitch: '',
  resumeUrl: '',
  weeklyHoursConfirmed: false,
};

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About us', page: 'about' },
  { label: 'Fellowship', page: 'fellowship' },
];

function navigate(page: Page) {
  window.location.hash = page === 'home' ? '' : page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function App() {
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
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-[#fbfbf9]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <button className="group flex items-center gap-3 text-left" onClick={() => goTo('home')}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#003893] text-white shadow-lg shadow-blue-950/15 transition-transform group-hover:-rotate-6">
              <Globe2 size={21} strokeWidth={1.8} />
            </span>
            <span>
              <span className="block font-display text-[21px] font-semibold leading-none tracking-[-0.03em] text-[#003893]">Nepal<span className="text-[#c8102e]">360</span></span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500">Global Nepali Diaspora Network</span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item.page} onClick={() => goTo(item.page)} className={`nav-link ${page === item.page ? 'active' : ''}`}>
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button onClick={() => goTo('apply')} className="button-primary px-5 py-3 text-sm">
              Join fellowship <ArrowRight size={16} />
            </button>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-[#003893] md:hidden" aria-label="Toggle menu">
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-slate-200 bg-[#fbfbf9] px-5 py-4 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <button key={item.page} onClick={() => goTo(item.page)} className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#003893]">
                  {item.label}
                </button>
              ))}
              <button onClick={() => goTo('apply')} className="button-primary mt-2 justify-center">Join fellowship <ArrowRight size={16} /></button>
            </div>
          </div>
        )}
      </header>

      <main>
        {page === 'home' && <HomePage onNavigate={goTo} />}
        {page === 'about' && <AboutPage onNavigate={goTo} />}
        {page === 'fellowship' && <FellowshipPage onNavigate={goTo} />}
        {page === 'apply' && <ApplyPage />}
      </main>

      <Footer onNavigate={goTo} />
    </div>
  );
}

function getPageFromHash(): Page {
  const hash = window.location.hash.replace('#', '');
  return hash === 'about' || hash === 'fellowship' || hash === 'apply' ? hash : 'home';
}

function HomePage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_0%,rgba(0,56,147,0.1),transparent_34%),linear-gradient(120deg,#fbfbf9_0%,#f5f8fc_52%,#fbfbf9_100%)]" />
        <div className="absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full border-[38px] border-[#c8102e]/[0.05] lg:h-[500px] lg:w-[500px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:pb-28 lg:pt-24">
          <div className="animate-fade-up">
            <div className="eyebrow mb-6"><span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" /> Global media & research network</div>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#003893] sm:text-6xl lg:text-[76px]">Bridging the <span className="relative whitespace-nowrap text-[#c8102e]">global Nepali diaspora<svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 400 12" fill="none"><path d="M3 8C125 1 266 3 397 7" stroke="#c8102e" strokeWidth="3" strokeLinecap="round" /></svg></span></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">Research-backed stories, high-signal media, and a creator network built for Nepalis living across borders.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => onNavigate('fellowship')} className="button-primary">Explore the fellowship <ArrowRight size={17} /></button>
              <button onClick={() => onNavigate('about')} className="button-secondary">Read our strategic vision <ArrowRight size={17} /></button>
            </div>
            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500"><div className="flex -space-x-2"><span className="avatar bg-[#003893]">A</span><span className="avatar bg-[#c8102e]">S</span><span className="avatar bg-[#5275ae]">K</span></div><span>Built by Nepalis, for Nepalis everywhere.</span></div>
          </div>
          <div className="relative animate-fade-up [animation-delay:150ms]">
            <div className="relative overflow-hidden rounded-[28px] border border-white bg-[#003893] p-5 shadow-2xl shadow-blue-950/20">
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border-[22px] border-white/10" />
              <div className="relative rounded-[20px] border border-white/15 bg-gradient-to-br from-[#184da0] to-[#002861] p-7 text-white sm:p-10">
                <div className="flex items-center justify-between"><span className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]">The diaspora brief</span><span className="text-white/50"><Sparkles size={18} /></span></div>
                <div className="mt-16 max-w-sm"><div className="mb-5 h-1 w-14 rounded-full bg-[#c8102e]" /><p className="font-display text-3xl font-medium leading-tight sm:text-4xl">One global community. Many stories worth telling.</p></div>
                <div className="mt-20 flex items-end justify-between border-t border-white/15 pt-5"><div><p className="text-[10px] uppercase tracking-[0.2em] text-white/50">Connected across</p><p className="mt-1 text-sm font-semibold">North America · Australia · UK · Gulf</p></div><Globe2 size={36} className="text-white/30" /></div>
              </div>
            </div>
            <div className="absolute -bottom-7 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block"><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-[#c8102e]"><Search size={19} /></span><div><p className="text-lg font-bold text-[#003893]">Research first</p><p className="text-xs text-slate-500">Stories with substance</p></div></div></div>
          </div>
        </div>
      </section>

      <StatsBanner />
      <section className="section-pad"><div className="mx-auto max-w-7xl"><SectionLabel>What we do</SectionLabel><div className="mt-4 grid gap-8 lg:grid-cols-[.75fr_1.25fr]"><div><h2 className="section-title">A sharper lens on the Nepali experience.</h2><p className="mt-5 max-w-md leading-7 text-slate-600">Nepal360 operates at the intersection of culture, media, and opportunity — making the diaspora more visible, informed, and connected.</p></div><div className="grid gap-5 md:grid-cols-2"><FeatureCard number="01" icon={<Search size={20} />} title="Targeted media brands" text="Niche channels for students, young professionals, settled families, and people planning their next move." /><FeatureCard number="02" icon={<Users size={20} />} title="Creator incubator" text="A practical pipeline for researchers, storytellers, and operators who want to make work that travels." /></div></div></div></section>
      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-10"><div className="overflow-hidden rounded-[28px] bg-[#c8102e] p-7 text-white shadow-xl shadow-red-900/10 sm:p-10 lg:flex lg:items-center lg:justify-between lg:p-14"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">For the next generation</p><h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight sm:text-4xl">Your perspective can help shape the future of diaspora media.</h2></div><button onClick={() => onNavigate('apply')} className="mt-8 button-light lg:mt-0">Apply to the 2026 cohort <ArrowRight size={17} /></button></div></section>
    </>
  );
}

function StatsBanner() {
  const stats = [['$100B+', 'Combined diaspora economic footprint'], ['500,000+', 'Active Nepali diaspora in key hubs'], ['4 to 6', 'Niche social media brands'], ['100%', 'Nepal-based creator cohort']];
  return <section className="border-y border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl md:grid-cols-4">{stats.map(([value, label], index) => <div key={value} className={`px-5 py-7 sm:px-8 lg:px-10 ${index < 3 ? 'border-b border-slate-200 md:border-b-0 md:border-r' : ''}`}><p className="font-display text-3xl font-semibold text-[#003893]">{value}</p><p className="mt-1 text-sm text-slate-500">{label}</p></div>)}</div></section>;
}

function AboutPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const segments = ['Students & post-grads', 'Young professionals', 'Settled families & citizens', 'Aspirants in Nepal'];
  return <PageShell eyebrow="Our strategy & people" title="Architecting the future of diaspora media" intro="Nepal360 exists to solve a critical gap: high-quality, research-backed media made specifically for the lived experiences of Nepalis abroad — and the people preparing to join them.">
    <div className="grid gap-6 lg:grid-cols-2"><InfoPanel title="Our vision">To become the most engaging, research-driven, and influential media network for Nepalis living abroad — using data, human stories, and practical guides to make global Nepali life easier to navigate.</InfoPanel><InfoPanel title="Our 12-month mission">Build and scale a portfolio of 4 to 6 targeted social media channels, each serving a high-intent diaspora niche. Prove sustainable organic reach with an empowered Nepal-based fellowship cohort.</InfoPanel></div>
    <div className="mt-20"><SectionLabel>Who we serve</SectionLabel><h2 className="section-title mt-4 max-w-2xl">Four audiences. One connected ecosystem.</h2><div className="mt-8 grid gap-4 md:grid-cols-2">{segments.map((segment, index) => <div key={segment} className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#003893]/30 hover:shadow-xl hover:shadow-blue-950/5"><span className="text-sm font-bold text-[#c8102e]">0{index + 1}</span><h3 className="mt-8 font-display text-2xl font-medium text-[#003893]">{segment}</h3><p className="mt-3 text-sm leading-6 text-slate-600">Useful, credible content for the questions, decisions, and transitions that define this stage of the journey.</p></div>)}</div></div>
    <div className="mt-20"><SectionLabel>Leadership footprint</SectionLabel><div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white"><div className="hidden grid-cols-[1.1fr_1fr_1.6fr] bg-[#003893] px-5 py-3 text-xs font-bold uppercase tracking-wider text-white sm:grid"><span>Name & role</span><span>Hub</span><span>Focus</span></div>{[['Arun Lamsal','Australia','Senior strategy & institutional growth'],['Asmod Khakurel','Minnesota, USA','Business policy & frameworks'],['Saksham Rupakheti','Iowa, USA','Economics, research & market sizing'],['Nischit Bhandari','South Dakota, USA','Technology, platforms & analytics'],['Aman','Sharjah, UAE','Middle East growth & monetization'],['Kasen Bhusal','Kathmandu, Nepal','Operations & fellow bridge']].map(([name, hub, focus]) => <div key={name} className="grid gap-2 border-t border-slate-200 px-5 py-4 sm:grid-cols-[1.1fr_1fr_1.6fr] sm:items-center"><div className="font-semibold text-slate-800">{name}</div><div><span className="tag">{hub}</span></div><div className="text-sm text-slate-600">{focus}</div></div>)}</div></div>
    <div className="mt-20 rounded-[28px] bg-[#003893] p-8 text-white sm:p-12"><div className="max-w-2xl"><Quote size={32} className="text-white/40" /><p className="mt-5 font-display text-3xl leading-tight sm:text-4xl">We are building the infrastructure to connect diaspora experiences through storytelling, data, and digital innovation.</p><button onClick={() => onNavigate('fellowship')} className="button-light mt-8">Meet the fellowship <ArrowRight size={17} /></button></div></div>
  </PageShell>;
}

function FellowshipPage({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const pillars = [['01', 'Diaspora research foundation', 'Conduct structured research on migration pathways, student experiences, foreign labor dynamics, remittance flows, and dual-identity culture.'], ['02', 'Masterclass & skill development', 'Learn from global mentors in digital journalism, fact-checking, short-form video, visual design, and algorithmic growth.'], ['03', 'Page launch & digital execution', 'Launch and manage a dedicated niche social media brand alongside a fellow partner. Test content hypotheses in real time.'], ['04', 'Product building & enterprise integration', 'Convert high-performing research concepts into long-term media products, directory tools, and community utility platforms.']];
  return <PageShell eyebrow="Cohort 2026 applications open" title="Global Nepali Diaspora Research & Media Fellowship" intro="A six-month creator fellowship for high-potential students and young creatives in Nepal. Learn the craft, launch a real media property, and get recognized for work that matters.">
    <div className="mt-4 flex flex-wrap gap-3"><span className="pill"><Clock3 size={15} /> 6 months</span><span className="pill"><Users size={15} /> 2 fellows per channel</span><span className="pill"><Globe2 size={15} /> Kathmandu + global mentors</span></div>
    <div className="mt-20"><SectionLabel>The curriculum journey</SectionLabel><div className="mt-6 grid gap-4">{pillars.map(([number, title, text]) => <div key={number} className="group grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#003893]/30 hover:shadow-xl hover:shadow-blue-950/5 sm:grid-cols-[80px_1fr] sm:p-8"><div className="font-display text-4xl font-medium text-[#c8102e]">{number}</div><div><h3 className="font-display text-2xl font-medium text-[#003893]">{title}</h3><p className="mt-2 max-w-3xl leading-7 text-slate-600">{text}</p></div></div>)}</div></div>
    <div className="mt-20 grid gap-8 lg:grid-cols-[1fr_.8fr]"><div><SectionLabel>What you receive</SectionLabel><div className="mt-6 space-y-4">{['Role & channel attachment with a dedicated niche brand', '10 to 12 hours per week of structured, paid work', 'NPR 5,000 monthly base stipend plus milestone bonuses', 'Weekly mentorship and direct access to core team leads', 'Public credit, verified portfolio work, and recommendation letters', 'Priority access to paid part-time roles after the cohort'].map((item) => <div key={item} className="flex items-start gap-3 text-slate-700"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[#c8102e]"><Check size={13} strokeWidth={3} /></span><span>{item}</span></div>)}</div></div><div className="rounded-3xl bg-[#f0f4fa] p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">How we select</p><div className="mt-5 space-y-5">{[['Creativity & storytelling','40%'],['Reliability & punctuality','30%'],['Skill fit for niche gaps','20%'],['Communication & clarity','10%']].map(([label, weight]) => <div key={label}><div className="flex justify-between text-sm font-semibold"><span>{label}</span><span className="text-[#003893]">{weight}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-white"><div className="h-full rounded-full bg-[#003893]" style={{ width: weight }} /></div></div>)}</div></div></div>
    <div className="mt-20 rounded-[28px] bg-[#c8102e] p-8 text-white sm:p-12 lg:flex lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">Ready to make the leap?</p><h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">Bring your point of view to the next cohort.</h2></div><button onClick={() => onNavigate('apply')} className="button-light mt-8 lg:mt-0">Start your application <ArrowRight size={17} /></button></div>
  </PageShell>;
}

function ApplyPage() {
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const update = (field: keyof ApplicationForm, value: string | boolean) => setForm((current) => ({ ...current, [field]: value }));
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    const { error } = await supabase.from('fellowship_applications').insert({ full_name: form.fullName, email: form.email, phone: form.phone, location: form.location, education_status: form.educationStatus, role_preference: form.rolePreference, interest: form.interest, portfolio_url: form.portfolioUrl, pitch: form.pitch, resume_url: form.resumeUrl || null, weekly_hours_confirmed: form.weeklyHoursConfirmed });
    if (error) {
      setStatus('error');
      setErrorMessage('We could not send your application right now. Please check your details and try again.');
      return;
    }
    setStatus('success');
    setForm(initialForm);
  };
  if (status === 'success') return <PageShell eyebrow="Application received" title="Your next chapter starts here." intro="Thank you for putting your work and perspective forward. The Nepal360 team will review your application and reach out to shortlisted candidates with next steps."><div className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-8 text-green-900"><Check size={32} /><h2 className="mt-4 font-display text-3xl font-medium">Application submitted successfully.</h2><p className="mt-2 max-w-xl leading-7">Keep an eye on your inbox. We’re excited to learn more about what you want to build.</p><button onClick={() => setStatus('idle')} className="button-primary mt-7">Submit another application <ArrowRight size={17} /></button></div></PageShell>;
  return <PageShell eyebrow="Fellowship application form" title="Join the next cohort of creators" intro="Complete the official application below. It takes about 10–15 minutes. High-performing applicants will be invited to a 20-minute interview followed by a short paid trial task."><form onSubmit={submit} className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/[0.03] sm:p-8 lg:p-10"><div className="grid gap-7 md:grid-cols-2"><Field label="Full name" required><input required value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="e.g., Aarav Sharma" /></Field><Field label="Email address" required><input required type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" /></Field><Field label="Phone / WhatsApp number" required><input required value={form.phone} onChange={(e) => update('phone', e.target.value)} placeholder="+977 98XXXXXXXX" /></Field><Field label="Current location in Nepal" required><input required value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="Kathmandu / Pokhara / Chitwan" /></Field><Field label="Education status / university" required><select required value={form.educationStatus} onChange={(e) => update('educationStatus', e.target.value)}><option value="">Select one</option><option>Gap year student</option><option>Current student</option><option>Recent graduate</option><option>Working creative</option></select></Field><Field label="Primary role preference" required><select required value={form.rolePreference} onChange={(e) => update('rolePreference', e.target.value)}><option value="">Select one</option><option>On-camera creator</option><option>Host / video editor</option><option>Motion designer</option><option>Content researcher & scriptwriter</option><option>Growth & analytics</option></select></Field><Field label="Preferred niche interest" required><select required value={form.interest} onChange={(e) => update('interest', e.target.value)}><option value="">Select one</option><option>Australia PR & visa reality</option><option>US student life, jobs & OPT</option><option>Remittance, investing & finance</option><option>Diaspora food & nostalgia</option><option>Parenting between cultures</option><option>Nepali small business spotlights</option></select></Field><Field label="Portfolio / work links" required wide><textarea required rows={3} value={form.portfolioUrl} onChange={(e) => update('portfolioUrl', e.target.value)} placeholder="Instagram, TikTok, YouTube, Google Drive, or written work links" /></Field><Field label="Short diaspora page pitch" required wide><textarea required maxLength={1200} rows={5} value={form.pitch} onChange={(e) => update('pitch', e.target.value)} placeholder="What is one specific pain point or theme faced by Nepalis abroad that you want to create content about?" /><span className="field-note">Keep it under 250 words.</span></Field><Field label="Resume / CV link" wide><input value={form.resumeUrl} onChange={(e) => update('resumeUrl', e.target.value)} placeholder="Google Drive PDF or upload link (optional)" /></Field></div><label className="mt-8 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700"><input required type="checkbox" checked={form.weeklyHoursConfirmed} onChange={(e) => update('weeklyHoursConfirmed', e.target.checked)} className="mt-0.5 h-4 w-4 accent-[#003893]" /><span>I confirm that I can dedicate 10 to 12 hours per week for the six-month period.</span></label>{status === 'error' && <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{errorMessage}</p>}<button disabled={status === 'submitting'} className="button-primary mt-8 w-full justify-center py-4 sm:w-auto">{status === 'submitting' ? 'Sending application…' : 'Submit official fellowship application'} <ArrowRight size={17} /></button></form></PageShell>;
}

function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return <section className="section-pad"><div className="mx-auto max-w-7xl"><div className="max-w-4xl animate-fade-up"><div className="eyebrow mb-6"><span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" /> {eyebrow}</div><h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#003893] sm:text-6xl lg:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{intro}</p></div>{children}</div></section>;
}

function SectionLabel({ children }: { children: React.ReactNode }) { return <p className="section-label">{children}</p>; }
function InfoPanel({ title, children }: { title: string; children: React.ReactNode }) { return <div className="rounded-2xl border-l-2 border-[#003893] bg-white p-7 shadow-sm"><h3 className="font-display text-xl font-semibold text-[#003893]">{title}</h3><p className="mt-4 leading-7 text-slate-600">{children}</p></div>; }
function FeatureCard({ number, icon, title, text }: { number: string; icon: React.ReactNode; title: string; text: string }) { return <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#003893]/30 hover:shadow-xl hover:shadow-blue-950/5"><div className="flex items-center justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#003893]">{icon}</span><span className="font-display text-3xl text-slate-200">{number}</span></div><h3 className="mt-7 font-display text-2xl font-medium text-[#003893]">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></div>; }
function Field({ label, required, wide, children }: { label: string; required?: boolean; wide?: boolean; children: React.ReactNode }) { return <label className={`block ${wide ? 'md:col-span-2' : ''}`}><span className="mb-2 block text-sm font-semibold text-slate-800">{label}{required && <span className="text-[#c8102e]"> *</span>}</span>{children}</label>; }
function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) { return <footer className="bg-[#003893] text-white"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:px-10 lg:py-16"><div><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10"><Globe2 size={20} /></span><span className="font-display text-2xl font-semibold">Nepal<span className="text-[#ff7184]">360</span></span></div><p className="mt-5 max-w-xs text-sm leading-6 text-white/65">The premier research and media network connecting, informing, and empowering the global Nepali diaspora.</p><div className="mt-7 flex gap-2"><a className="social-link" href="mailto:contact@nepal360.org" aria-label="Email"><Mail size={16} /></a><a className="social-link" href="#" aria-label="Instagram"><Instagram size={16} /></a><a className="social-link" href="#" aria-label="LinkedIn"><Linkedin size={16} /></a><a className="social-link" href="#" aria-label="YouTube"><Youtube size={16} /></a></div></div><div><h3 className="footer-heading">Explore</h3><div className="space-y-3 text-sm text-white/65"><button onClick={() => onNavigate('home')} className="footer-link">Home</button><button onClick={() => onNavigate('about')} className="footer-link">Strategic vision</button><button onClick={() => onNavigate('fellowship')} className="footer-link">Global fellowship</button><button onClick={() => onNavigate('apply')} className="footer-link">Apply</button></div></div><div><h3 className="footer-heading">Global hubs</h3><div className="space-y-3 text-sm text-white/65"><p>United States · Minnesota</p><p>Australia · Sydney</p><p>Middle East · Sharjah</p><p>Operations · Kathmandu</p></div></div><div><h3 className="footer-heading">Contact</h3><p className="text-sm leading-7 text-white/65">General inquiries<br /><a href="mailto:contact@nepal360.org" className="text-white hover:text-[#ff7184]">contact@nepal360.org</a><br /><br />Fellowship desk<br /><a href="mailto:fellowship@nepal360.org" className="text-white hover:text-[#ff7184]">fellowship@nepal360.org</a></p></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/45 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><span>© 2026 Nepal360 Media Network. All rights reserved.</span><span>Made for the global Nepali diaspora.</span></div></div></footer>; }

export default App;
