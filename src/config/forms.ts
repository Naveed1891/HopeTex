/**
 * Service form schema registry — drives reusable order/intake forms.
 * Field definitions align with markdown service content (not rendered yet).
 */

export type FormFieldType =
  | "text"
  | "email"
  | "tel"
  | "select"
  | "textarea"
  | "checkbox"
  | "file"
  | "date"
  | "country"
  | "us-state";

export type FormField = {
  name: string;
  label: string;
  type: FormFieldType;
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string }[];
  helpText?: string;
};

export type FormStep = {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
};

export type ServiceFormConfig = {
  serviceId: string;
  title: string;
  basePrice?: number;
  currency?: "USD" | "GBP" | "PKR";
  steps: FormStep[];
};

const sharedBusinessFields: FormField[] = [
  {
    name: "businessName",
    label: "Legal business name",
    type: "text",
    required: true,
    placeholder: "Acme Holdings LLC",
  },
  {
    name: "entityType",
    label: "Entity type",
    type: "select",
    required: true,
    options: [
      { label: "LLC", value: "llc" },
      { label: "Corporation", value: "corp" },
      { label: "Sole proprietorship", value: "sole" },
      { label: "Partnership", value: "partnership" },
    ],
  },
  {
    name: "country",
    label: "Country of formation",
    type: "country",
    required: true,
  },
];

const sharedContactFields: FormField[] = [
  {
    name: "fullName",
    label: "Responsible party name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    required: true,
  },
  {
    name: "phone",
    label: "Phone / WhatsApp",
    type: "tel",
    required: true,
  },
];

export const serviceForms: Record<string, ServiceFormConfig> = {
  ein: {
    serviceId: "ein",
    title: "EIN Application",
    basePrice: 75,
    currency: "USD",
    steps: [
      {
        id: "business",
        title: "Business details",
        description: "Information required for IRS Form SS-4.",
        fields: [...sharedBusinessFields],
      },
      {
        id: "contact",
        title: "Responsible party",
        fields: [...sharedContactFields],
      },
      {
        id: "reason",
        title: "Application reason",
        fields: [
          {
            name: "einReason",
            label: "Reason for applying",
            type: "select",
            required: true,
            options: [
              { label: "Open US bank account", value: "banking" },
              { label: "Hire employees", value: "employees" },
              { label: "File federal taxes", value: "taxes" },
              { label: "New business", value: "new_business" },
            ],
          },
        ],
      },
    ],
  },
  itin: {
    serviceId: "itin",
    title: "ITIN Application",
    basePrice: 0,
    currency: "USD",
    steps: [
      {
        id: "applicant",
        title: "Applicant information",
        fields: [...sharedContactFields],
      },
      {
        id: "documents",
        title: "Supporting documents",
        fields: [
          {
            name: "passport",
            label: "Passport scan",
            type: "file",
            required: true,
            helpText: "Clear color scan of passport bio page.",
          },
        ],
      },
    ],
  },
  "usa-llc": {
    serviceId: "usa-llc",
    title: "USA LLC Formation",
    steps: [
      {
        id: "name",
        title: "Company name",
        fields: [
          {
            name: "proposedName",
            label: "Proposed company name",
            type: "text",
            required: true,
          },
          {
            name: "state",
            label: "Formation state",
            type: "us-state",
            required: true,
          },
        ],
      },
      {
        id: "package",
        title: "Select package",
        fields: [],
      },
      {
        id: "contact",
        title: "Founder details",
        fields: [...sharedContactFields],
      },
    ],
  },
};

export function getServiceForm(serviceId: string): ServiceFormConfig | undefined {
  return serviceForms[serviceId];
}
