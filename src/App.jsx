import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ViewsPanel from './components/ViewsPanel';
import TicketList from './components/TicketList';
import TicketDetail from './components/TicketDetail';
import RightPanel from './components/RightPanel';
import { Search, HelpCircle, Gift, Plus, Menu } from 'lucide-react';
import { tickets } from './data';

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const [selectedTicketId, setSelectedTicketId] = useState(tickets[0].id);

  // Derive the currently selected ticket object
  const selectedTicket = tickets.find(t => t.id === selectedTicketId);

  return (
    // Mobile: Flex Column + Scrollable Body. Desktop: Flex Row + Hidden Body Scroll
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 font-sans overflow-auto md:overflow-hidden">
      
      {/* 1. Left Icon Sidebar (Hidden on Mobile) */}
      <div className="hidden md:block h-full z-50">
        <Sidebar />
      </div>

      {/* Main Layout */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Global Header */}
        <header className="h-14 bg-[#0B2155] text-white flex items-center justify-between px-4 flex-shrink-0 z-40 shadow-md sticky top-0 md:relative">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Icon (Visual only for now) */}
                <button className="md:hidden text-blue-200"><Menu size={24}/></button>
                <span className="font-bold text-lg tracking-tight">Helpdesk</span>
            </div>
            
            {/* Header Search (Hidden on small mobile) */}
            <div className="flex-1 max-w-xl mx-4 hidden sm:block">
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
                <button className="hidden sm:block p-2 hover:bg-[#183375] rounded-full text-blue-200 transition-colors"><HelpCircle size={20}/></button>
                <button className="hidden sm:block p-2 hover:bg-[#183375] rounded-full text-blue-200 transition-colors"><Gift size={20}/></button>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 p-0.5 cursor-pointer hover:scale-105 transition-transform">
                    <img src="https://i.pravatar.cc/150?u=admin" className="w-full h-full rounded-full border-2 border-[#0B2155]" alt="profile" />
                </div>
            </div>
        </header>

        {/* Workspace Columns */}
        {/* Mobile: Stacked Vertical. Desktop: Row Horizontal */}
        <div className="flex flex-col md:flex-row flex-1 md:overflow-hidden relative">
            
            {/* 2. Sliding Ticket Views (Hidden on Mobile) */}
            <div className="hidden md:block h-full">
               <ViewsPanel isOpen={isFilterOpen} />
            </div>

            {/* 3. Ticket List */}
            {/* Mobile: Full Width, Fixed Height Scroll area. Desktop: Fixed Width 380px */}
            <div className="w-full md:w-[380px] flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-200 bg-white">
                <TicketList 
                    tickets={tickets} 
                    selectedId={selectedTicketId} 
                    onSelect={setSelectedTicketId}
                    toggleFilters={() => setIsFilterOpen(!isFilterOpen)}
                    isFilterOpen={isFilterOpen}
                />
            </div>

            {/* 4. Main Detail View */}
            {/* Mobile: Min-Height 500px, Full Width. Desktop: Flex-1, Full Height */}
            <div className="flex-1 w-full min-h-[500px] md:h-full bg-white md:overflow-y-auto">
                <TicketDetail ticket={selectedTicket} />
            </div>

            {/* 5. Right Panel */}
            {/* Mobile: Full Width, Bottom. Desktop: Fixed Width 80px */}
            <div className="w-full md:w-80 flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-200 bg-white">
                <RightPanel ticket={selectedTicket} />
            </div>

        </div>
      </div>
    </div>
  );
}

export default App;