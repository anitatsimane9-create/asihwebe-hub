import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const enquirySchema = z.object({
  formType: z.enum(["contact", "involvement"]),
  fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number.").max(30),
  organisation: z.string().trim().max(150).optional(),
  enquiryType: z.string().trim().min(2, "Please select an enquiry type.").max(80),
  message: z.string().trim().min(10, "Please include at least 10 characters.").max(2000),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("enquiries").insert({
      form_type: data.formType,
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      organisation: data.organisation || null,
      enquiry_type: data.enquiryType,
      message: data.message,
      // Interim routing destination. Email delivery activates once a sender domain is configured.
      route_to: "asihwebe@phakama-marketplace.co.za",
      email_status: "pending_email_setup",
    });
    if (error) throw new Error("We could not submit your enquiry. Please try again.");
    return { success: true };
  });
