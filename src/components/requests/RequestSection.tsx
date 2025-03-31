import { useState } from "react";
import { RequestTabs } from "./RequestTabs";
import { CurrentRequests } from "./CurrentRequests";
import { HistoryRequests } from "./HistoryRequests";
type TabType = 'current' | 'past' | 'history';
interface Request {
  id: number;
  title: string;
  status: string;
  date: string;
  time: string;
}
interface HistoryRequest {
  id: number;
  title: string;
  date: string;
  time: string;
  status: string;
  steps: {
    text: string;
    completed: boolean;
  }[];
}
export const RequestSection = () => {
  const [activeTab, setActiveTab] = useState<TabType>('current');
  const requests: Request[] = [{
    id: 1,
    title: "Запрос на получение лицензии/разрешения",
    status: "В процессе",
    date: "05.02.2024",
    time: "10:35"
  }, {
    id: 2,
    title: "Запрос на изменение юридического адреса",
    status: "Новый",
    date: "05.02.2024",
    time: "10:35"
  }];
  const historyRequests: HistoryRequest[] = [{
    id: 1,
    title: "Запрос на выписку от ЕГРЮЛ",
    date: "05.02.2025",
    time: "10:35",
    status: "исполнено",
    steps: [{
      text: "Получено ЕГРЮЛ РК",
      completed: true
    }, {
      text: "Направлено в отдел кадров",
      completed: true
    }, {
      text: "Готово к скачиванию",
      completed: true
    }]
  }];
  const renderContent = () => {
    switch (activeTab) {
      case 'history':
        return <HistoryRequests requests={historyRequests} />;
      default:
        return <CurrentRequests requests={requests} />;
    }
  };
  return <div className="bg-white rounded-lg shadow-sm">
      <RequestTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-medium">Запросы</h3>
          
        </div>
        {renderContent()}
      </div>
    </div>;
};