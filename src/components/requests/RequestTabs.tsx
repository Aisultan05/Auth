
import { useState } from "react";

type TabType = 'current' | 'past' | 'history';

interface RequestTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const RequestTabs = ({ activeTab, onTabChange }: RequestTabsProps) => {
  return (
    <div className="border-b border-gray-100">
      <div className="flex space-x-6 px-6">
        <button 
          className={`py-4 font-medium transition-colors duration-200 ${
            activeTab === 'current' 
              ? 'text-[#4338ca] border-b-2 border-[#4338ca]' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onTabChange('current')}
        >
          Текущие запросы
        </button>
        <button 
          className={`py-4 font-medium transition-colors duration-200 ${
            activeTab === 'past' 
              ? 'text-[#4338ca] border-b-2 border-[#4338ca]' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onTabChange('past')}
        >
          Прошлые запросы
        </button>
        <button 
          className={`py-4 font-medium transition-colors duration-200 ${
            activeTab === 'history' 
              ? 'text-[#4338ca] border-b-2 border-[#4338ca]' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => onTabChange('history')}
        >
          История запросов
        </button>
      </div>
    </div>
  );
};
