"use client";

import { useState } from "react";
import { X } from "lucide-react";

function MessengerIcon({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.2 5.42 3.15 7.15V22l3.03-1.67c.81.22 1.67.34 2.56.34h.26c5.64 0 10-4.13 10-9.7S17.64 2 12 2zm1.08 13.02L10.44 12l-4.35 3.02L10.8 10l2.67 3.02 4.31-3.02-4.7 5.02z" />
    </svg>
  );
}

export default function MessengerButton() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / Chat bubble */}
      {showTooltip && (
        <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-[260px] animate-fade-in">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="ปิด"
          >
            <X size={16} />
          </button>
          <p className="text-sm text-gray-700 pr-4 leading-relaxed">
            สวัสดีครับ! มีอะไรให้ช่วยไหม?
            <br />
            <span className="text-gray-500 text-xs">ทักแชทได้เลยครับ</span>
          </p>
        </div>
      )}

      {/* Messenger FAB */}
      <a
        href="https://m.me/LupinxTaxandAccounting"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-[60px] h-[60px] rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        aria-label="Chat on Messenger"
        onClick={() => setShowTooltip(false)}
      >
        <MessengerIcon size={30} />
        {/* Pulse ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-30 animate-ping pointer-events-none" />
      </a>
    </div>
  );
}
