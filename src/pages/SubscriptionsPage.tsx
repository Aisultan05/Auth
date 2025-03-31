import { SubscriptionTable } from "@/components/subscriptions/SubscriptionTable";
import { PaymentHistory } from "@/components/subscriptions/PaymentHistory";
import { PaymentCards } from "@/components/subscriptions/PaymentCards";

export default function SubscriptionsPage() {
  return (
    <div className="w-full bg-[#F5F7FA]">
      {/* Breadcrumb */}
      <div className="h-12 border-b border-gray-100 flex items-center justify-center px-4">
        <span className="text-lg leading-none text-[#202295]">
          Подписки и платежи
        </span>
      </div>
      
      {/* Main content - explicitly centered */}
      <div className="w-full max-w-6xl mx-auto p-4">
        {/* Top section with payment cards on mobile */}
        <div className="mb-6 sm:mb-8">
          <div className="md:hidden">
            <PaymentCards />
          </div>
        </div>
        
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-6">
          {/* Left column with tables */}
          <div className="space-y-6">
            <SubscriptionTable />
            <PaymentHistory />
          </div>
          
          {/* Right column with payment cards (desktop only) */}
          <div className="hidden md:block">
            <PaymentCards />
          </div>
        </div>
      </div>
    </div>
  );
}
