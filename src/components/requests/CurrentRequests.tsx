
interface Request {
  id: number;
  title: string;
  status: string;
  date: string;
  time: string;
}

interface CurrentRequestsProps {
  requests: Request[];
}

export const CurrentRequests = ({ requests }: CurrentRequestsProps) => {
  return (
    <div className="space-y-4 relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 z-0" />
      {requests.map(request => (
        <div key={request.id} className="relative z-10 flex items-start pl-8">
          <div className="absolute left-3 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[#4338ca] bg-white my-[34px] mx-[5px] py-[4px] px-[4px]" />
          <div className="flex-1 p-4 bg-white border border-gray-100 rounded-lg hover:border-[#4338ca] transition-colors">
            <h4 className="font-medium mb-1">{request.title}</h4>
            <div className="text-sm text-gray-500">
              {request.date} {request.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
