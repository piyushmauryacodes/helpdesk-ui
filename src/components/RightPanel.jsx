import React, { useState } from 'react';
import { ChevronDown, Calendar, User, Tag, ChevronRight, X, Clock, HelpCircle } from 'lucide-react';

export default function RightPanel({ ticket }) {
  if (!ticket) return <div className="w-80 bg-white border-l border-gray-200"></div>;

  return (
    <div className="w-80 bg-white border-l border-gray-200 h-full flex flex-col flex-shrink-0 overflow-y-auto">
      {/* Header Controls */}
      <div className="p-4 flex gap-2 border-b border-gray-100">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 shadow-sm shadow-blue-200">
            {ticket.status} <ChevronDown size={14}/>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400"><X size={18}/></button>
      </div>

      <div className="p-4 space-y-6">
        
        {/* Properties Form */}
        <div className="space-y-4">
            <Dropdown label="Priority" value={ticket.priority} color={ticket.priority === 'High' ? 'red' : 'green'} />
            
            <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Assigned To</label>
                <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-200 cursor-pointer group transition-all">
                    <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600">AH</div>
                         <span className="text-sm text-slate-700">Allie Harmon</span>
                    </div>
                    <span className="text-blue-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Change</span>
                </div>
                <div className="text-right">
                    <button className="text-xs text-blue-600 hover:underline">Assign to me</button>
                </div>
            </div>

            <Dropdown label="Project" value="Administrative" />
            <Dropdown label="Ticket Type" value="Task" icon={<div className="w-4 h-4 border-2 border-blue-600 rounded flex items-center justify-center"><div className="w-2 h-2 bg-blue-600 rounded-[1px]"></div></div>} />
        </div>

        {/* Due Date */}
        <div className="border-t border-gray-100 pt-4">
             <label className="text-xs font-semibold text-gray-500 block mb-2 uppercase tracking-wide">Due Date</label>
             <button className="w-full text-left p-2.5 border border-gray-200 rounded-lg flex items-center gap-2 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 transition-colors bg-white">
                <Calendar size={16}/> <span className="text-slate-700">Select date...</span>
             </button>
        </div>

        {/* Reporter Info */}
        <div className="border-t border-gray-100 pt-4">
             <label className="text-xs font-semibold text-gray-500 block mb-2 uppercase tracking-wide">Reporter</label>
             <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg border border-gray-100">
                 <img src={ticket.reporterAvatar} className="w-8 h-8 rounded-full" alt="reporter"/>
                 <div>
                    <div className="text-sm font-semibold text-slate-700">{ticket.reporter}</div>
                    <div className="text-[10px] text-gray-400">Timezone: EST (GMT-5)</div>
                 </div>
             </div>
        </div>
        
        {/* Accordions */}
        <div className="border-t border-gray-100 pt-2 space-y-1">
            <Accordion label="Tasks" />
            <Accordion label="Collected Fields" />
            <Accordion label="Linked Tickets" badge="2" />
            <Accordion label="History" />
        </div>

      </div>
    </div>
  );
}

function Dropdown({ label, value, color, icon }) {
    return (
        <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
            <button className="w-full flex items-center justify-between p-2.5 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-sm transition-all group">
                <div className="flex items-center gap-2">
                    {icon}
                    {color === 'red' && <div className="w-2 h-2 rounded-full bg-red-500 border border-red-200 ring-2 ring-red-50"></div>}
                    {color === 'green' && <div className="w-2 h-2 rounded-full bg-emerald-500 border border-emerald-200 ring-2 ring-emerald-50"></div>}
                    <span className="text-sm text-slate-700 font-medium">{value}</span>
                </div>
                <ChevronDown size={14} className="text-gray-400 group-hover:text-blue-500"/>
            </button>
        </div>
    )
}

function Accordion({ label, badge }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded transition-colors"
            >
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{label}</span>
                <div className="flex items-center gap-2">
                    {badge && <span className="text-[10px] bg-gray-200 px-1.5 rounded text-gray-600 font-bold">{badge}</span>}
                    <ChevronRight size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-90' : ''}`}/>
                </div>
            </button>
            {isOpen && (
                <div className="px-2 pb-3 text-xs text-gray-500">
                    Placeholder content for {label}...
                </div>
            )}
        </div>
    )
}