import React from 'react';
import { Inbox, Clock, AlertCircle, FileQuestion, MessageCircle } from 'lucide-react';

export default function ViewsPanel({ isOpen }) {
  return (
    <div 
      className={`bg-[#F4F5F7] border-r border-gray-200 h-full transition-all duration-300 ease-in-out overflow-hidden flex-shrink-0 ${isOpen ? 'w-[240px] opacity-100' : 'w-0 opacity-0'}`}
    >
      <div className="p-4 w-[240px]"> {/* Fixed width inner container prevents text squishing during animation */}
        <div className="flex justify-between items-center mb-6 pl-2">
          <h2 className="font-bold text-slate-700 text-xs tracking-wider uppercase flex items-center gap-2">
             Ticket Views <span className="text-gray-400 font-normal lowercase ml-auto">▼</span>
          </h2>
        </div>

        <div className="space-y-1">
          <FilterItem label="My Tickets" count={9} active icon={<Inbox size={16}/>} />
          <FilterItem label="Past Due" count={4} icon={<Clock size={16}/>} />
          <FilterItem label="High Priority" count={11} icon={<AlertCircle size={16}/>} />
          <FilterItem label="Unassigned" count={98} icon={<FileQuestion size={16}/>} />
          <FilterItem label="All Tickets" count="2,192" icon={<MessageCircle size={16}/>} />
        </div>
        
        <div className="mt-8 pl-2">
             <h2 className="font-bold text-slate-700 text-xs tracking-wider uppercase mb-4 flex gap-2 items-center">
                 Live Chats <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             </h2>
             <h2 className="font-bold text-slate-700 text-xs tracking-wider uppercase">Boards</h2>
        </div>
      </div>
    </div>
  );
}

function FilterItem({ label, count, active, icon }) {
  return (
    <div className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer text-sm font-medium transition-colors ${active ? 'bg-blue-600 text-white shadow-md shadow-blue-200' : 'text-slate-600 hover:bg-gray-200'}`}>
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-blue-500 text-blue-50' : 'bg-gray-200 text-gray-600 group-hover:bg-white'}`}>
        {count}
      </span>
    </div>
  );
}