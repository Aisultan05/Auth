import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { File, Key, CheckSquare, PaperclipIcon, ArrowRightCircle } from "lucide-react";

export default function AIChatPage() {
  return (
    <div className="min-h-screen w-full bg-[#F5F7FA] relative">
      <div className="flex-1 h-full flex flex-col max-w-[1559px] mx-auto">
        <div className="flex-1 flex flex-col items-center justify-center p-4 pb-24">
          <div className="w-full max-w-[814px] mx-auto">
            <h1 className="font-roboto text-[48px] leading-[56px] font-semibold text-center text-black mb-3">
              Как я могу вам помочь?
            </h1>
            <p className="font-roboto text-[20px] leading-[23px] font-light text-[#B3B3B3] text-center mb-24">
              ваш личный юридический помощник
            </p>
            <div className="grid grid-cols-3 gap-6 mb-12">
                <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4">
                <File className="w-[25px] h-[25px] mb-6 text-[#202295]" />
                <p className="text-[14px] leading-4 font-normal text-black">
                "Напиши заявление в ЕГОВ для выдачи разрешения"
                </p>
                </Card>
                <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4">
                <Key className="w-[25px] h-[25px] mb-6 text-[#202295]" />
                <p className="text-[14px] leading-4 font-normal text-black">
                "Составь официальный договор NDA для сотрудника компании"
                </p>
                </Card>
                <Card className="w-[255px] h-[137px] bg-white rounded-[9px] p-4">
                <CheckSquare className="w-[25px] h-[25px] mb-6 text-[#202295]" />
                <p className="text-[14px] leading-4 font-normal text-black">
                "Напиши список документов для подачи заявки в ЛДРК"
                </p>
                </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fixed input at bottom, matched with the ChatContainer approach */}
      <div className="fixed bottom-10 inset-x-0 flex justify-center">
        <div className="w-full max-w-[814px] h-[56px] flex items-center bg-white rounded-[9px] px-3 mx-4">
          <PaperclipIcon className="w-[28px] h-[28px] text-[#202295] ml-2" />
          <input
            type="text"
            placeholder="Составь договор NDA для сотрудника компании"
            className="flex-1 h-full px-4 text-[16px] font-light text-[#9898BF] focus:outline-none font-roboto"
          />
          <ArrowRightCircle className="w-[28px] h-[28px] text-[#202295] mr-2" />
        </div>
      </div>
    </div>
  );
}
