import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TicketViews from './components/TicketViews';
import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';
import RightPanel from './components/RightPanel';
import { Search, HelpCircle, Gift, Plus } from 'lucide-react';
import { tickets } from './data'; // Import mock data

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [selectedTicketId, setSelectedTicketId] = useState(tickets[0].id);

  // Derive the currently selected ticket object
  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  return (
    <div className="flex h-screen bg-gray-100 font-sans overflow-hidden">
      {/* 1. Left Icon Sidebar (Fixed) */}
      <Sidebar />

      {/* Main Layout */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Global Header */}
        <header className="h-14 bg-[#0B2155] text-white flex items-center justify-between px-4 flex-shrink-0 z-40 shadow-md">
            <div className="flex items-center gap-4">
                <span className="font-bold text-lg tracking-tight">Helpdesk</span>
            </div>
            
            {/* Header Search */}
            <div className="flex-1 max-w-xl mx-4">
                <div className="relative group">
                    <Search className="absolute left-3 top-2 text-blue-300 group-hover:text-white transition-colors" size={16} />
                    <input 
                        type="text" 
                        placeholder="Search Capacity..." 
                        className="w-full bg-[#183375] border border-transparent focus:border-blue-400 rounded-md py-1.5 pl-10 pr-4 text-sm text-white placeholder:text-blue-300 focus:outline-none transition-all focus:bg-[#1E3A8A]"
                    />
                </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center gap-3">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors shadow-sm shadow-blue-900">Create</button>
                <button className="p-2 hover:bg-[#183375] rounded-full text-blue-200 transition-colors"><HelpCircle size={20}/></button>
                <button className="p-2 hover:bg-[#183375] rounded-full text-blue-200 transition-colors"><Gift size={20}/></button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 p-0.5 cursor-pointer hover:scale-105 transition-transform">
                    <img src="https://i.pravatar.cc/150?u=admin" className="w-full h-full rounded-full border-2 border-[#0B2155]" alt="profile" />
                </div>
            </div>
        </header>

        {/* Workspace Columns */}
        <div className="flex flex-1 overflow-hidden relative">
            
            {/* 2. Sliding Ticket Views (Animation controlled by Width + Opacity) */}
            <TicketViews isOpen={isFilterOpen} />

            {/* 3. Ticket List (Contains the Toggle Button) */}
            <TicketList 
                tickets={tickets} 
                selectedId={selectedTicketId} 
                onSelect={setSelectedTicketId}
                toggleFilters={() => setIsFilterOpen(!isFilterOpen)}
                isFilterOpen={isFilterOpen}
            />

            {/* 4. Main Detail View */}
            <TicketDetail ticket={selectedTicket} />

            {/* 5. Right Panel */}
            <RightPanel ticket={selectedTicket} />

        </div>
      </div>
    </div>
  );
}

export default App;