import { Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgrQr from "@/assets/bgr-qr.png.asset.json";
import { links } from "@/lib/site-content";

const nt = <span className="sr-only"> (opens in a new tab)</span>;
const journey = ["Free BGR Assessment", "Discover your growth readiness", "Free Business Growth Webinar", "Learn about TRDEA", "Programme & partnership opportunities"];

export function BgrJourney() {
  return <section id="bgr" className="section-pad scroll-mt-24">
    <div className="site-container">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-orange">Business Growth Readiness / BGR Index™</p>
      <h2 className="mt-3 font-display text-3xl font-bold text-brand-navy md:text-4xl">Discover Your Business Growth Readiness</h2>
      <p className="mt-4 max-w-3xl leading-7 text-muted-foreground"><strong className="text-brand-navy">How ready is your business for growth?</strong> Asihwebe Foundation’s Business Growth Readiness / BGR Index™ gives entrepreneurs an opportunity to assess their current business growth readiness and receive a BGR Index score. The assessment is free — there is no charge.</p>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="border border-border bg-background p-6 md:p-8">
          <p className="text-xs font-bold text-brand-orange">OPTION 1</p>
          <h3 className="mt-1 font-display text-xl font-bold text-brand-navy">Scan to Take the Free BGR Assessment</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Use your phone camera to scan the QR code and complete the free Business Growth Readiness assessment.</p>
          <div className="mt-6 inline-block bg-background p-4 ring-1 ring-border"><img src={bgrQr.url} alt="QR code to take the free Asihwebe Business Growth Readiness / BGR Index assessment." width={400} height={403} className="h-auto w-56 sm:w-64" /></div>
        </div>
        <div className="flex flex-col border border-border bg-muted p-6 md:p-8">
          <p className="text-xs font-bold text-brand-orange">OPTION 2</p>
          <h3 className="mt-1 font-display text-xl font-bold text-brand-navy">Prefer to use a link?</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">Access the free assessment online.</p>
          <Button asChild variant="gold" size="lg" className="mt-6 self-start"><a href={links.bgrForm} target="_blank" rel="noopener noreferrer">Take the Free BGR Assessment<ExternalLink/>{nt}</a></Button>
          <p className="mt-auto pt-8 text-xs leading-5 text-muted-foreground">The BGR Index™ is a readiness self-assessment that helps identify support needs. It is not financial, accounting, legal or investment advice and does not predict business outcomes.</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-start justify-between gap-4 border-l-4 border-brand-gold bg-brand-gold-soft p-6 sm:flex-row sm:items-center"><p className="font-display text-lg font-bold text-brand-navy">Complete Your Free Assessment</p><Button asChild variant="navy"><a href={links.bgrForm} target="_blank" rel="noopener noreferrer">Start now<ArrowRight/>{nt}</a></Button></div>

      <div className="mt-14 bg-brand-navy p-6 text-primary-foreground md:p-10">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Free | Online | Entrepreneur Development</p>
        <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">Join Our Free Business Growth Webinar</h3>
        <p className="mt-3 max-w-2xl leading-7 text-primary-foreground/75">Learn how Asihwebe Foundation supports township and rural entrepreneurs — and discover more about the TRDEA Business Growth Accelerator programme.</p>
        <Button asChild variant="gold" size="lg" className="mt-6"><a href={links.webinar} target="_blank" rel="noopener noreferrer">Register for the Free Webinar<ExternalLink/>{nt}</a></Button>
      </div>

      <div className="mt-14"><h3 className="font-display text-xl font-bold text-brand-navy">Your journey with Asihwebe</h3>
        <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{journey.map((j, i) => <li key={j} className="border border-border p-4"><span className="text-xs font-bold text-brand-orange">STEP {i + 1}</span><p className="mt-1 text-sm font-semibold text-brand-navy">{j}</p></li>)}</ol>
        <div className="mt-6 flex flex-wrap gap-3"><Button asChild variant="navy"><Link to="/trdea">Learn About TRDEA<ArrowRight/></Link></Button><Button asChild variant="outline"><Link to="/partnerships">Programme & Partnership Opportunities</Link></Button></div>
      </div>
    </div>
  </section>;
}
