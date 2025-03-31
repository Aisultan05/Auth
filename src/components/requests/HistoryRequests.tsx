import { Check } from "lucide-react";
interface Step {
  text: string;
  completed: boolean;
}
interface HistoryRequest {
  id: number;
  title: string;
  date: string;
  time: string;
  status: string;
  steps: Step[];
}
interface HistoryRequestsProps {
  requests: HistoryRequest[];
}
export const HistoryRequests = ({
  requests
}: HistoryRequestsProps) => {
  return <div className="space-y-4">
      {requests.map(request => <div key={request.id} className="relative bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md">
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-black">{request.title}</h4>
                <p className="text-xs text-[#202295]">{request.date} {request.time}</p>
              </div>
              
              <div className="relative pl-5 space-y-5">
                
                {request.steps.map((step, index) => <div key={index} className="flex items-center space-x-4">
                    <div className="absolute left-0 w-2 h-2 rounded-full bg-[#60D54E] -translate-x-[2px]" />
                    <span className="text-xs text-[#B3B3B3]">{step.text}</span>
                  </div>)}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-[#202295]">
              <Check className="w-4 h-4" />
              <span>{request.status}</span>
            </div>
          </div>
        </div>)}
    </div>;
};