import React from 'react';
import { LayoutDashboard, Ticket, Users, Settings, MessageSquare, BarChart2 } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-16 bg-[#0B1736] h-full flex flex-col items-center py-4 gap-6 text-slate-400 flex-shrink-0 z-50">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-2 shadow-lg shadow-blue-900/50">C</div>
      
      <NavItem icon={<Ticket />} active />
      <NavItem icon={<LayoutDashboard />} />
      <NavItem icon={<Users />} />
      <NavItem icon={<MessageSquare />} />
      <NavItem icon={<BarChart2 />} />
      
      <div className="mt-auto mb-4">
        <NavItem icon={<Settings />} />
      </div>
    </div>
  );
}

function NavItem({ icon, active }) {
  return (
    <div className={`p-3 rounded-xl cursor-pointer transition-all duration-200 group relative ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/50' : 'hover:bg-slate-800 hover:text-blue-400'}`}>
      {React.cloneElement(icon, { size: 22 })}
      {active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full -ml-4"></div>}
    </div>
  );
}