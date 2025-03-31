import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Subscription {
  id: number;
  name: string;
  expiryDate: string;
  status: "active" | "inactive";
  price: string;
}

const subscriptions: Subscription[] = [
  {
    id: 1,
    name: "Юридическое обслуживание",
    expiryDate: "до 01.02.2026",
    status: "active",
    price: "8.900 тенге/мс"
  },
  {
    id: 2,
    name: "Библиотека юриста",
    expiryDate: "до 01.02.2024",
    status: "inactive",
    price: "1.500 тенге/год"
  }
];

export function SubscriptionTable() {
  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold">Подписки</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="text-xs font-medium text-[#B3B3B3]">Название</div>
            <div className="text-xs font-medium text-[#B3B3B3]">Срок годности</div>
            <div className="text-xs font-medium text-[#B3B3B3]">Статус</div>
            <div className="text-xs font-medium text-[#B3B3B3]">Стоимость</div>
          </div>
          <div>
            <div className="space-y-6">
              {subscriptions.map((subscription) => (
                <div key={subscription.id} className="grid grid-cols-4 gap-4 items-center">
                  <div className="text-sm">{subscription.name}</div>
                  <div className="text-sm">{subscription.expiryDate}</div>
                  <div className={`text-sm ${
                    subscription.status === "active" 
                      ? "text-[#60D54E]" 
                      : "text-[#DF2B2B]"
                  }`}>
                    {subscription.status === "active" ? "активный" : "деактив."}
                  </div>
                  <div className="text-sm">{subscription.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
