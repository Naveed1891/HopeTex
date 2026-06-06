export type OrderStatus = "processing" | "completed" | "action_required";

export type MockOrder = {
  id: string;
  service: string;
  company: string;
  status: OrderStatus;
  createdAt: string;
  amount: number;
};

export type MockDocument = {
  id: string;
  name: string;
  type: string;
  company: string;
  uploadedAt: string;
};

export type MockTicket = {
  id: string;
  subject: string;
  status: "open" | "resolved" | "pending";
  updatedAt: string;
};

export type MockInvoice = {
  id: string;
  description: string;
  amount: number;
  status: "paid" | "due" | "overdue";
  dueDate: string;
};

export type MockMessage = {
  id: string;
  from: string;
  preview: string;
  time: string;
  unread?: boolean;
};

export const mockOrders: MockOrder[] = [
  {
    id: "HTX-2401",
    service: "US LLC Formation — Elite",
    company: "Acme Global Holdings LLC",
    status: "processing",
    createdAt: "2026-05-28",
    amount: 222,
  },
  {
    id: "HTX-2398",
    service: "EIN Application",
    company: "Acme Global Holdings LLC",
    status: "completed",
    createdAt: "2026-05-20",
    amount: 75,
  },
  {
    id: "HTX-2385",
    service: "BOIR Filing",
    company: "Nova Commerce LLC",
    status: "action_required",
    createdAt: "2026-05-12",
    amount: 50,
  },
];

export const mockDocuments: MockDocument[] = [
  {
    id: "doc-1",
    name: "Certificate of Formation.pdf",
    type: "Formation",
    company: "Acme Global Holdings LLC",
    uploadedAt: "2026-05-22",
  },
  {
    id: "doc-2",
    name: "EIN Confirmation CP575.pdf",
    type: "Tax ID",
    company: "Acme Global Holdings LLC",
    uploadedAt: "2026-05-24",
  },
  {
    id: "doc-3",
    name: "Operating Agreement.pdf",
    type: "Legal",
    company: "Nova Commerce LLC",
    uploadedAt: "2026-05-18",
  },
];

export const mockTickets: MockTicket[] = [
  {
    id: "TK-102",
    subject: "Annual filing deadline reminder",
    status: "open",
    updatedAt: "2h ago",
  },
  {
    id: "TK-098",
    subject: "EIN document clarification",
    status: "resolved",
    updatedAt: "3d ago",
  },
];

export const mockInvoices: MockInvoice[] = [
  {
    id: "INV-8842",
    description: "LLC Formation — Elite Package",
    amount: 222,
    status: "paid",
    dueDate: "2026-05-28",
  },
  {
    id: "INV-8901",
    description: "Annual compliance filing",
    amount: 149,
    status: "due",
    dueDate: "2026-06-15",
  },
];

export const mockChatMessages: MockMessage[] = [
  {
    id: "1",
    from: "HopeTex Support",
    preview: "Your BOIR filing is ready for final review.",
    time: "10:42 AM",
    unread: true,
  },
  {
    id: "2",
    from: "You",
    preview: "Thanks — I'll upload the passport copy today.",
    time: "Yesterday",
  },
];

export const mockCompanies = [
  { id: "c1", name: "Acme Global Holdings LLC", jurisdiction: "Delaware, US", status: "Active" },
  { id: "c2", name: "Nova Commerce LLC", jurisdiction: "Wyoming, US", status: "Active" },
];
