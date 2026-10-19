import { CheckCircle2, X } from 'lucide-react';
import React, { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  onDismiss: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onDismiss }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onDismiss();
    }, 4000);
    return () => clearTimeout(timer);
  }, [message, onDismiss]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#151515] border border-[#E52B2B] text-white p-4 rounded-sm shadow-2xl flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <CheckCircle2 className="w-5 h-5 text-[#E52B2B] shrink-0 mt-0.5" />
      <div className="flex-1 text-xs leading-relaxed text-[#F5F5F5]">
        {message}
      </div>
      <button
        onClick={onDismiss}
        className="text-[#707070] hover:text-white transition-colors"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
