export type MembershipPlan = {
  id: string;
  name: string;
  monthlyPriceDzd: number;
  visitsPerWeek: number;
};

export type Member = {
  id: string;
  fullName: string;
  planId: string;
  joinedAt: string;
  status: "active" | "paused" | "expired";
};

export type PaymentRecord = {
  id: string;
  memberId: string;
  amountDzd: number;
  method: "card" | "cash" | "qr";
  status: "paid" | "pending" | "failed";
  paidAt: string;
};
