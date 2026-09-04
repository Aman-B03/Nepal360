import React from 'react';

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl animate-fade-up">
          <div className="eyebrow mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c8102e]" /> {eyebrow}
          </div>
          <h1 className="font-display text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-[#003893] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">{intro}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

export function InfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-2 border-[#003893] bg-white p-7 shadow-sm">
      <h3 className="font-display text-xl font-semibold text-[#003893]">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{children}</p>
    </div>
  );
}

export function FeatureCard({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#003893]/30 hover:shadow-xl hover:shadow-blue-950/5">
      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#003893]">
          {icon}
        </span>
        <span className="font-display text-3xl text-slate-200">{number}</span>
      </div>
      <h3 className="mt-7 font-display text-2xl font-medium text-[#003893]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

export function Field({
  label,
  required,
  wide,
  children,
}: {
  label: string;
  required?: boolean;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${wide ? 'md:col-span-2' : ''}`}>
      <span className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="text-[#c8102e]"> *</span>}
      </span>
      {children}
    </label>
  );
}