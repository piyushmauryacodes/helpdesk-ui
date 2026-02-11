import React from 'react';
import { Search, Filter, Menu, User } from 'lucide-react';

export default function TicketList({ tickets, selectedId, onSelect, toggleFilters, isFilterOpen }) {
  return (
    // Mobile: Height 400px scrollable. Desktop: Full height.
    <div className="w-full md:w-[380px] h-[400px] md:h-full flex flex-col z-10">
      {/* Header */}
      <div className="h-16 border-b border-gray-100 flex items-center justify-between px-4 flex-shrink-0 sticky top-0 bg-white z-20">
          <div className="flex items-center gap-3">
             {/* The Toggle Button (Hidden on Mobile) */}
             <button 
                onClick={toggleFilters}
                className={`hidden md:block p-2 rounded-md transition-colors ${!isFilterOpen ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-100'}`}
             >
                <Menu size={20} />
             </button>
             <span className="font-bold text-lg text-slate-800">My Tickets</span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-500"><Filter size={18}/></button>
      </div>
      
      {/* Search */}
      <div className="p-4 pt-3 pb-2 bg-white">
        <div className="relative group">
          <Search className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={16} />
          <input 
            type="text" 
            placeholder="Search tickets" 
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* List */}
      <div className="overflow-y-auto flex-1 px-2 pb-4 space-y-1 bg-white">
        {tickets.map((t) => (
          <div 
            key={t.id} 
            onClick={() => onSelect(t.id)}
            className={`p-3 rounded-xl cursor-pointer border border-transparent transition-all duration-200 ${selectedId === t.id ? 'bg-blue-50 border-blue-200 shadow-sm' : 'hover:bg-gray-50 hover:border-gray-100'}`}
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className={`font-semibold text-sm leading-tight pr-2 ${selectedId === t.id ? 'text-blue-900' : 'text-slate-700'}`}>
                {t.title}
              </h3>
              <span className="text-[11px] text-gray-400 whitespace-nowrap">{t.date}</span>
            </div>
            
            <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4" onClick={(e) => e.stopPropagation()}/>
                    <span className="text-xs font-mono text-gray-500">{t.id}</span>
                    <Badge status={t.status} />
                </div>
                
                <div className="flex items-center -space-x-2">
                    {t.priority === 'High' && <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center border border-white z-10 text-[10px] text-red-600 font-bold">!</div>}
                     <img src={t.reporterAvatar} className="w-5 h-5 rounded-full border border-white" alt="avatar"/>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Badge({ status }) {
    const styles = {
        'To Do': 'bg-blue-100 text-blue-700',
        'In Progress': 'bg-amber-100 text-amber-700',
        'Done': 'bg-emerald-100 text-emerald-700'
    };
    return <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wide ${styles[status] || 'bg-gray-100'}`}>{status}</span>;
}