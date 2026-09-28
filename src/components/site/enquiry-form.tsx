import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { enquirySchema, submitEnquiry } from "@/lib/enquiries.functions";

const contactOptions = ["General Enquiry", "Programme Enquiry", "Partnership", "Sponsorship", "Volunteer", "Skills / Expertise", "Media", "Other"];
const involvementOptions = ["Volunteer", "Provide Professional Expertise", "Sponsor a Programme", "Partner With Us", "Support Entrepreneur Development", "General Enquiry"];

export function EnquiryForm({ type = "contact" }: { type?: "contact" | "involvement" }) {
  const save = useServerFn(submitEnquiry);
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<"idle"|"sending"|"success"|"error">("idle");
  const options = type === "contact" ? contactOptions : involvementOptions;
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (status === "sending") return; setStatus("idle");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = { formType: type, fullName: String(form.get("fullName")||""), email: String(form.get("email")||""), phone: String(form.get("phone")||""), organisation: String(form.get("organisation")||""), enquiryType: String(form.get("enquiryType")||""), message: String(form.get("message")||"") };
    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) { const next: Record<string,string> = {}; parsed.error.issues.forEach(issue => { const key=String(issue.path[0]); if (!next[key]) next[key]=issue.message; }); setErrors(next); return; }
    setErrors({}); setStatus("sending");
    try { await save({ data: parsed.data }); formElement.reset(); setStatus("success"); } catch { setStatus("error"); }
  }
  const field = (name:string) => errors[name] ? <p id={`${name}-error`} className="form-error">{errors[name]}</p> : null;
  return <form onSubmit={onSubmit} noValidate className="grid gap-5" aria-label={type === "contact" ? "Contact form" : "Get involved form"}>
    {status === "success" && <div role="status" className="success-message"><CheckCircle2/>Thank you for contacting Asihwebe Foundation. Your enquiry has been received and will be directed to the appropriate team member.</div>}
    {status === "error" && <p role="alert" className="form-error rounded-sm bg-destructive/10 p-3">Your enquiry could not be sent. Please try again.</p>}
    <div className="grid gap-5 sm:grid-cols-2"><FormField label="Full Name" name="fullName" error={field("fullName")}><Input id="fullName" name="fullName" maxLength={100} aria-invalid={!!errors["fullName"]} aria-describedby={errors["fullName"]?"fullName-error":undefined}/></FormField><FormField label="Email Address" name="email" error={field("email")}><Input id="email" name="email" type="email" maxLength={255} aria-invalid={!!errors["email"]} aria-describedby={errors["email"]?"email-error":undefined}/></FormField></div>
    <div className="grid gap-5 sm:grid-cols-2"><FormField label="Phone Number" name="phone" error={field("phone")}><Input id="phone" name="phone" type="tel" maxLength={30} aria-invalid={!!errors["phone"]}/></FormField><FormField label="Organisation (optional)" name="organisation"><Input id="organisation" name="organisation" maxLength={150}/></FormField></div>
    <FormField label={type === "contact" ? "Enquiry Type" : "How would you like to help?"} name="enquiryType" error={field("enquiryType")}><select id="enquiryType" name="enquiryType" defaultValue="" className="form-select" aria-invalid={!!errors["enquiryType"]}><option value="" disabled>Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select></FormField>
    <FormField label="Message" name="message" error={field("message")}><Textarea id="message" name="message" rows={6} maxLength={2000} aria-invalid={!!errors["message"]}/></FormField>
    <Button type="submit" aria-busy={status === "sending"} variant="gold" size="lg" disabled={status === "sending"}>{status === "sending" ? "Submitting…" : "Submit Enquiry"}<Send/></Button>
  </form>;
}
function FormField({label,name,children,error}:{label:string;name:string;children:React.ReactNode;error?:React.ReactNode}) { return <div className="grid gap-2"><Label htmlFor={name}>{label}</Label>{children}{error}</div>; }
