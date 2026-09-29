import { ArrowRight, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import qr from "@/assets/phakama-qr.jpeg.asset.json";

export function DonationDemo(){return <div className="border border-border bg-background p-6 md:p-8">
  <div className="flex items-start gap-4"><span className="grid size-12 shrink-0 place-items-center rounded-sm bg-brand-gold-soft text-brand-orange"><QrCode/></span><div><h2 className="font-display text-xl font-bold text-brand-navy">Scan to Support Asihwebe</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Scan the QR code with your mobile phone to access Asihwebe Foundation’s Phakama Marketplace account and make a sponsorship, donation or programme payment.</p></div></div>
  <div className="mt-7 inline-block bg-background p-4 ring-1 ring-border"><img src={qr.url} alt="QR code to open Asihwebe Foundation’s account on Phakama Marketplace for sponsorship, donation and programme payments." width={360} height={360} className="h-auto w-56 sm:w-64"/></div>
  <ol className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-brand-navy" aria-label="How the payment pathway works">{["Asihwebe Foundation website","Phakama Marketplace","Asihwebe account","Payment option"].map((s,i)=><li key={s} className="flex items-center gap-2"><span className="rounded-sm bg-muted px-2 py-1">{s}</span>{i<3&&<ArrowRight className="size-3.5 text-brand-orange" aria-hidden="true"/>}</li>)}</ol>
  <p className="mt-4 text-sm leading-6 text-muted-foreground">The QR code opens the Phakama Marketplace environment, where the payment is initiated. This website does not process or confirm payments.</p>
  <div className="mt-6 border-t pt-5"><p className="text-sm font-bold text-brand-navy">Can’t scan the QR code?</p><Button asChild variant="outline" className="mt-3"><a href="/contact">Access Support & Payment Options</a></Button><p className="mt-2 text-xs text-muted-foreground">Send us a Sponsorship enquiry and our team will share the payment options with you.</p></div>
</div>}
