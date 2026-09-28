import { BriefcaseBusiness, Cpu, GraduationCap, MapPinned, type LucideIcon } from "lucide-react";

export type Programme = { title: string; description: string; icon: LucideIcon };
export const programmes: Programme[] = [
  { title: "Enterprise Development", description: "Supporting entrepreneurs and small businesses with practical business capability, digital tools and pathways to sustainable growth.", icon: BriefcaseBusiness },
  { title: "Digital Enablement", description: "Helping underserved businesses and communities participate in the digital economy.", icon: Cpu },
  { title: "Skills & Capacity Development", description: "Building practical entrepreneurial, business and digital capabilities through structured training and development.", icon: GraduationCap },
  { title: "Community Activation", description: "Mobilising communities and ecosystem partners around practical development initiatives and economic opportunities.", icon: MapPinned },
];

export const pathway = ["Registration", "Business Orientation", "Digital Business Profile", "QR Payment Enablement", "Online Marketplace Listing", "Business Workshops", "Market Access", "Growth"];
export const partnerCategories = ["Government & Public Sector", "Corporate & Financial Institutions", "Development Agencies", "Chambers & Business Organisations", "Skills & Training Organisations", "Technology & Digital Partners", "Community Organisations"];
export const links = {
  linkedin: "https://www.linkedin.com/company/asihwebe-foundation/",
  bgrForm: "https://forms.gle/7j7BwPahG8q5zCwt6",
  webinar: "https://luma.com/js8ij26g",
  whatsapp: `https://wa.me/27781668533?text=${encodeURIComponent("Hello Asihwebe Foundation, I would like to find out more about your programmes and how I can get involved.")}`,
  whatsappDisplay: "+27 78 166 8533",
};

export type Leader = { name: string; role: string; purpose: string; focus: string[]; photo?: string };
export const leaders: Leader[] = [
  { name: "Deon Ncwane", role: "Executive Director: Enterprise Development & Community Activation", purpose: "Leads enterprise development initiatives, township and rural activations, entrepreneur support programmes, innovation, technology-enabled initiatives and community mobilisation efforts that advance township and rural economic development.", focus: ["Enterprise development", "Community activation", "SME and informal trader empowerment", "Grassroots engagement", "Local economic participation", "Digital enterprise and business innovation", "Technology solutions and SME digitisation", "AI and automation"] },
  { name: "Anita Tsimane", role: "Executive Director: Community Programmes & Stakeholder Relations", purpose: "Oversees community development programmes, stakeholder engagement and social impact initiatives that support township and rural empowerment.", focus: ["Community programmes", "Stakeholder engagement", "Youth and women empowerment", "Public relations and partnerships", "Social impact initiatives"] },
  { name: "Sthembiso Langa", role: "Executive Director: Strategy, Digital Transformation & Ecosystem Development", purpose: "Leads the strategic direction, ecosystem partnerships, digital transformation initiatives and organisational growth of Asihwebe Foundation.", focus: ["Strategic partnerships", "Ecosystem development", "Digital transformation", "Fundraising and sponsorships", "Innovation and stakeholder engagement"] },
  { name: "Elroy Shilling", role: "Executive Director: Operations, Systems & Programme Delivery", purpose: "Oversees operational systems, programme implementation coordination, monitoring and evaluation, and organisational support functions.", focus: ["Programme delivery", "Operations management", "Monitoring and evaluation", "Organisational systems", "Reporting and coordination"] },
];
