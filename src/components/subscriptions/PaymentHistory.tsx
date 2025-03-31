import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Payment {
  id: string;
  date: string;
  name: string;
  amount: string;
  status: "paid" | "reserved";
}

const payments: Payment[] = [
  {
    id: "202502013498",
    date: "01.02.2025",
    name: "Оплата юридических услуг",
    amount: "2300 тенге",
    status: "paid"
  },
  {
    id: "202501203498",
    date: "01.02.2025",
    name: "Оплата юридических услуг",
    amount: "9000 тенге",
    status: "reserved"
  },
  {
    id: "202402013498",
    date: "11.08.2024",
    name: "Оплата юридических услуг",
    amount: "2300 тенге",
    status: "paid"
  },
  {
    id: "202501203498",
    date: "01.02.2025",
    name: "Оплата юридических услуг",
    amount: "9000 тенге",
    status: "paid"
  }
];

export function PaymentHistory() {
  return (
    <Card className="mx-auto w-full max-w-[814px] bg-[#F5F7FA]">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold">История платежей</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-xs font-medium text-[#B3B3B3]">Номер заказа</div>
            <div className="text-xs font-medium text-[#B3B3B3]">Название</div>
            <div className="text-xs font-medium text-[#B3B3B3]">Стоимость</div>
            <div className="text-xs font-medium text-[#B3B3B3]">Статус</div>
          </div>
          <div>
            <div className="space-y-6 divide-y divide-[#D9D9D9]">
              {payments.map((payment, index) => (
                <div key={`${payment.id}-${index}`} className="pt-6 first:pt-0">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div>
                      <div className="text-sm">{payment.id}</div>
                      <div className="text-xs text-[#B3B3B3] mt-1">{payment.date}</div>
                    </div>
                    <div className="text-sm">{payment.name}</div>
                    <div className="text-sm">{payment.amount}</div>
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-3xl text-xs
                        ${payment.status === "paid" 
                          ? "bg-[#BEFCB5] text-[#49AE39]" 
                          : "bg-[#D9D9D9] text-[#979897]"}`}>
                        {payment.status === "paid" ? "оплачено" : "бронь"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
