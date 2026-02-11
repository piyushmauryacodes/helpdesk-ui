import React, { useState } from 'react';
import { MoreHorizontal, Mail, Paperclip, Bold, Italic, Underline, Smile, Image, Send, X } from 'lucide-react';

export default function TicketDetail({ ticket }) {
  const [activeTab, setActiveTab] = useState('public'); // 'public' or 'private'
  const [replyText, setReplyText] = useState('');

  if (!ticket) return <div className="flex-1 flex items-center justify-center text-gray-400">Select a ticket</div>;

  return (
    <div className="flex-1 flex flex-col bg-white h-full min-w-[500px]">
      {/* Header */}
      <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0 bg-white">
        <div className="overflow-hidden">
          <h1 className="font-bold text-slate-900 text-lg truncate">{ticket.title}</h1>
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
             <div className="flex items-center gap-1 text-blue-600 font-medium font-mono">
                <div className="p-1 bg-blue-100 rounded text-[10px]">⚙️</div>
                {ticket.id} (100669518)
             </div>
             <span>•</span>
             <span>Created {ticket.date}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Mail size={18}/></button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><MoreHorizontal size={18}/></button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><X size={18}/></button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-6 space-y-6">
        
        {/* Reply Editor */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ring-1 ring-gray-100">
            <div className="flex border-b border-gray-100">
                <button 
                    onClick={() => setActiveTab('public')}
                    className={`px-6 py-3 text-sm font-semibold transition-colors border-b-2 ${activeTab === 'public' ? 'border-blue-600 text-blue-600 bg-blue-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                    Public Reply
                </button>
                <button 
                    onClick={() => setActiveTab('private')}
                    className={`px-6 py-3 text-sm font-semibold transition-colors border-b-2 ${activeTab === 'private' ? 'border-amber-500 text-amber-600 bg-amber-50/50' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                >
                    Private Comment
                </button>
            </div>
            
            <div className={`p-4 transition-colors ${activeTab === 'private' ? 'bg-amber-50/30' : 'bg-white'}`}>
                <div className="flex items-center gap-2 mb-3">
                    <div className="bg-gray-100 rounded-md px-2 py-1 text-xs text-gray-600 flex items-center gap-1 border border-gray-200">
                        To: <span className="font-semibold text-gray-800">{ticket.reporter}</span>
                        <button className="hover:text-red-500"><X size={12}/></button>
                    </div>
                    <span className="text-xs text-gray-400">Cc...</span>
                </div>

                <textarea 
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full h-32 resize-none focus:outline-none text-sm text-slate-700 placeholder:text-gray-400 bg-transparent" 
                    placeholder={activeTab === 'public' ? "Type a reply to the customer..." : "Add an internal note for the team..."}
                ></textarea>
                
                <div className="flex items-center justify-between mt-2 pt-3 border-t border-gray-100">
                    <div className="flex gap-1 text-gray-400">
                        <ToolBtn icon={<Bold size={16}/>} />
                        <ToolBtn icon={<Italic size={16}/>} />
                        <ToolBtn icon={<Underline size={16}/>} />
                        <div className="w-px h-4 bg-gray-200 mx-1 self-center"></div>
                        <ToolBtn icon={<Paperclip size={16}/>} />
                        <ToolBtn icon={<Image size={16}/>} />
                        <ToolBtn icon={<Smile size={16}/>} />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                             <input type="checkbox" id="kb" className="rounded text-blue-600"/>
                             <label htmlFor="kb" className="text-xs text-gray-600 cursor-pointer select-none">Add to KB</label>
                        </div>
                        <button className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium text-white shadow-sm transition-transform active:scale-95 ${activeTab === 'public' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-amber-500 hover:bg-amber-600'}`}>
                            {activeTab === 'public' ? 'Send' : 'Post'} <Send size={14}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Message Stream */}
        {ticket.messages && ticket.messages.map((msg) => (
             <div key={msg.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex gap-3">
                        <img src={msg.avatar} alt="Avatar" className="w-10 h-10 rounded-full border border-gray-100"/>
                        <div>
                            <h4 className="text-sm font-bold text-slate-800">{msg.author}</h4>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                {msg.role === 'Reporter' && <span className="text-blue-600 font-semibold">Customer</span>}
                                <span>•</span>
                                <span>{msg.date}</span>
                            </div>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={16}/></button>
                </div>
                
                <div className="pl-13 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                    {msg.content}
                </div>
                
                {msg.attachments.length > 0 && (
                     <div className="pl-13 mt-4 flex gap-3">
                        {msg.attachments.map((att, idx) => (
                             <div key={idx} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-lg p-2 pr-4 hover:border-blue-400 cursor-pointer transition-colors group">
                                <div className="w-8 h-8 bg-white rounded border border-gray-200 flex items-center justify-center text-gray-500 group-hover:text-blue-500"><Image size={16}/></div>
                                <div>
                                    <div className="text-xs font-semibold text-slate-700 group-hover:text-blue-700">{att.name}</div>
                                    <div className="text-[10px] text-gray-400">{att.size}</div>
                                </div>
                            </div>
                        ))}
                     </div>
                )}
            </div>
        ))}
        
        {(!ticket.messages || ticket.messages.length === 0) && (
            <div className="text-center py-10 text-gray-400 text-sm">No messages yet. Start the conversation above!</div>
        )}

      </div>
    </div>
  );
}

function ToolBtn({ icon }) {
    return <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700 transition-colors">{icon}</button>
}