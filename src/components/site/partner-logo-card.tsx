export type EcosystemPartner = { name: string; logo: string; url?: string; logoClassName?: string };

export function PartnerLogoCard({ partner }: { partner: EcosystemPartner }) {
  const card = (
    <figure className="flex h-32 w-full items-center justify-center rounded-md border border-border bg-card p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-navy/25 hover:shadow-md sm:h-36">
      <div className="flex h-20 w-full max-w-[9.5rem] items-center justify-center sm:h-24">
        <img src={partner.logo} alt={`${partner.name} logo`} className={`max-h-full max-w-full object-contain ${partner.logoClassName ?? ""}`} loading="lazy" decoding="async" />
      </div>
      <figcaption className="sr-only">{partner.name}</figcaption>
    </figure>
  );
  return partner.url ? <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block rounded-md focus-visible:outline-2 focus-visible:outline-ring">{card}</a> : card;
}

export function PartnerLogoGrid({ partners }: { partners: EcosystemPartner[] }) {
  return <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{partners.map((p) => <PartnerLogoCard key={p.name} partner={p} />)}</div>;
}
