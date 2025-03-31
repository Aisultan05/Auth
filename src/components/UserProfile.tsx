
import { PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UserProfile() {
  return (
    <div className="flex flex-col lg:flex-row gap-[7px]">
      {/* Left Profile Section */}
      <div className="w-full lg:w-[366px] lg:h-[271px] bg-white">
        <div className="flex flex-row lg:flex-col items-center p-4 lg:p-0 lg:pt-8">
          <div className="relative">
            <img
              src="https://picsum.photos/200/300"
              alt="Profile"
              className="w-[60px] h-[60px] lg:w-[89px] lg:h-[86px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col ml-4 lg:ml-0 lg:items-center">
            <h2 className="text-[18px] lg:text-[24px] font-normal text-[#202295] lg:mt-4">Иван Иванов</h2>
            <p className="text-[12px] lg:text-[14px] text-[#B3B3B3] lg:mt-1">ivanov@gmail.com</p>
          </div>
          <Button 
            variant="ghost"
            className="ml-auto lg:ml-0 h-[32px] w-[120px] lg:w-[150px] text-[12px] text-[#B3B3B3] border border-[#D9D9D9] rounded-none lg:mt-3"
          >
            редактировать
          </Button>
        </div>
      </div>

      {/* Right Details Section */}
      <div className="w-full lg:w-[467px] lg:h-[271px] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-x-12 lg:gap-y-4 p-4 lg:p-6">
          <div className="flex justify-between lg:block">
            <p className="text-sm text-[#B3B3B3] lg:mb-1">Пол</p>
            <p className="text-[#202295]">Мужской</p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="text-sm text-[#B3B3B3] lg:mb-1">Адрес</p>
            <p className="text-[#202295]">Название 3/2</p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="text-sm text-[#B3B3B3] lg:mb-1">Контакты</p>
            <p className="text-[#202295]">+8101238923</p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="text-sm text-[#B3B3B3] lg:mb-1">ИП/ТОО</p>
            <p className="text-[#202295]">отсутствует</p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="text-sm text-[#B3B3B3] lg:mb-1">Дата регистрации</p>
            <p className="text-[#202295]">11.12.2023</p>
          </div>
          <div className="flex justify-between lg:block">
            <p className="text-sm text-[#B3B3B3] lg:mb-1">Статус</p>
            <p className="text-[#202295]">активный</p>
          </div>
        </div>
      </div>
    </div>
  );
}
