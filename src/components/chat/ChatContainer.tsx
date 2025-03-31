import { useState, useRef, useEffect } from 'react';
import { ArrowRightCircle, PaperclipIcon } from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { ChatDocument } from './ChatDocument';
import { cn } from '@/lib/utils';

interface ChatContainerProps {
  title?: string;
  isFullscreen?: boolean;
  onFullscreenChange?: (isFullscreen: boolean) => void;
}

export const ChatContainer = ({ 
  title = "AI Chat", 
  isFullscreen = false,
  onFullscreenChange 
}: ChatContainerProps) => {
  const [messages, setMessages] = useState<{
    id: number;
    text: string;
    type: 'user' | 'ai';
    document?: {
      title: string;
      content: string;
    };
  }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, {
      id: Date.now(),
      text: inputValue,
      type: 'user'
    }]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: 'Это автоматический ответ на ваше сообщение.',
        type: 'ai',
        document: {
          title: 'Пример документа',
          content: 'Содержание документа...'
        }
      }]);
    }, 1000);
  };

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messages.length && containerRef.current) {
      const scrollArea = containerRef.current.querySelector('.messages-scroll-area');
      if (scrollArea) {
        scrollArea.scrollTop = scrollArea.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex flex-col h-full bg-white relative",
        "transition-all duration-300 ease-in-out",
        isFullscreen && "fixed inset-0 z-50"
      )}
    >
      {/* Messages Area with additional padding at bottom for the fixed input */}
      <div className="messages-scroll-area flex-1 overflow-y-auto p-6 space-y-6 mb-24">
        {messages.map(message => (
          message.type === 'user' ? (
            <ChatMessage 
              key={message.id}
              text={message.text}
              align="right"
            />
          ) : (
            <div key={message.id} className="space-y-4">
              <ChatMessage text={message.text} align="left" />
              {message.document && (
                <ChatDocument
                  title={message.document.title}
                  content={message.document.content}
                  isFullscreen={isFullscreen}
                  onFullscreenChange={onFullscreenChange}
                />
              )}
            </div>
          )
        ))}
      </div>

      {/* Fixed input container that stays in place even during scroll */}
      <div className="fixed bottom-10 inset-x-0 z-10 flex justify-center">
        <div className="w-full max-w-[814px] mx-4 bg-white rounded-lg shadow-md">
          <div className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-4 py-3">
            <PaperclipIcon className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Введите сообщение..."
              className="flex-1 outline-none text-sm"
            />
            <button
              onClick={handleSend}
              className="text-[#202295] hover:opacity-80 transition-opacity"
            >
              <ArrowRightCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
