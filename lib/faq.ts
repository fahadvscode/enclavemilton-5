import { AREA_FAQ, type FaqItem } from "@/data/area-faq";

export type { FaqItem };

export const PRODUCT_FAQ: FaqItem[] = [
  {
    question: "What is The Enclave Milton Sundial Homes?",
    answer:
      "It is Sundial Homes' freehold townhome community on Britannia Road in Milton — the same project buyers find when they search Sundial Homes The Enclave or Sundial Homes Milton, with occupancy planned for 2027.",
  },
  {
    question: "What is Sundial Homes The Enclave?",
    answer:
      "Sundial Homes The Enclave is the builder's branding for this southeast Milton master plan: Village back-to-back townhomes and Park traditional two- and three-storey layouts between James Snow Parkway and Fourth Line.",
  },
  {
    question: "What are The Enclave Milton Townhomes?",
    answer:
      "They are the freehold townhome product at this address — Village Collection back-to-back models and Park Collection traditional designs, marketed without monthly maintenance fees.",
  },
  {
    question: "Are The Enclave Milton townhomes by Sundial Homes?",
    answer:
      "Yes. The Enclave Milton Sundial Homes community is developed by Sundial Homes, an established Ontario new-home builder. Confirm official pricing and availability with the builder or an authorized sales representative.",
  },
  {
    question: "Who builds The Enclave Milton?",
    answer:
      "Sundial Homes develops The Enclave's Village and Park townhome collections in southeast Milton — the same builder buyers mean when they search The Enclave Milton Sundial Homes.",
  },
  {
    question: "Where exactly is The Enclave in Milton?",
    answer:
      "Britannia Road between James Snow Parkway and Fourth Line in southeast Milton, Halton Region, Ontario, Canada. The site offers quick ties to Highway 401, Highway 407, and Milton GO for GTA commuters.",
  },
  {
    question: "What are prices at The Enclave Milton?",
    answer:
      "Model-specific pricing, elevations, and lot premiums are shared when you register on this site.",
  },
  {
    question: "Do Enclave townhomes charge monthly maintenance fees?",
    answer:
      "No monthly maintenance fees are marketed on either collection — these are freehold townhomes, so you hold title without the recurring condo-style common-element charges typical of condominium towns.",
  },
  {
    question: "How do Village and Park collections differ?",
    answer:
      "Village delivers back-to-back freehold layouts — efficient footprints for first-time buyers and investors. Park offers traditional two- and three-storey designs, including select end and corner units.",
  },
  {
    question: "When can buyers move in?",
    answer:
      "Occupancy at The Enclave Milton is communicated for 2027. Exact closing dates depend on model, phase, and your agreement of purchase and sale — confirm timing when you register.",
  },
  {
    question: "Is ownership freehold or condominium?",
    answer:
      "Freehold. You own your unit and land interest without a condo corporation fee structure.",
  },
  {
    question: "How are pre-construction deposits structured?",
    answer:
      "Deposits are usually paid in installments tied to agreement milestones rather than one lump sum at signing. Request the current schedule from the builder when you register.",
  },
  {
    question: "What is Tarion warranty coverage?",
    answer:
      "New Ontario homes from enrolled builders carry Tarion's statutory warranty — defined periods for defects, delays, and other protections. Confirm enrollment in your purchase agreement.",
  },
  {
    question: "Is there a cooling-off period on freehold townhomes?",
    answer:
      "Statutory condominium rescission rights do not automatically apply to freehold townhome contracts. Your agreement of purchase and sale governs any rescission — review it with a lawyer before signing.",
  },
  {
    question: "Can buyers claim HST rebates on new homes?",
    answer:
      "Eligible purchasers may qualify for federal and provincial new housing HST rebates subject to price caps and occupancy rules. Ask your accountant or lawyer about your situation.",
  },
  {
    question: "What are occupancy fees before final closing?",
    answer:
      "If you occupy before title transfer, the builder may charge occupancy fees covering interest, taxes, and defined common elements per your agreement — separate from post-closing freehold ownership costs.",
  },
  {
    question: "Are builder incentives available?",
    answer:
      "Incentives vary by phase and inventory. Register for the current sheet; first-time buyers should also review federal programs such as the First Home Savings Account where applicable.",
  },
  {
    question: "How do I receive floor plans for The Enclave Milton Sundial Homes?",
    answer:
      "Use the registration form on this site with your contact details and model interest. Floor plan PDFs and builder updates are typically emailed after you register — check spam if nothing arrives within a few minutes.",
  },
  {
    question: "Is this Sundial Homes' official website?",
    answer:
      "No. This is an independent information and marketing site about The Enclave Milton Sundial Homes community, not Sundial's official sales office. Confirm pricing, features, and availability at sundialhomes.com or with an authorized representative.",
  },
];

/** Full FAQ for homepage schema and /schools-and-area page */
export const HOME_FAQ: FaqItem[] = [...PRODUCT_FAQ, ...AREA_FAQ];
