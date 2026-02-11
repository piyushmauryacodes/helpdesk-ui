// src/data.js
export const tickets = [
  { 
    id: 'OPS-102', 
    title: 'Unable to access VPN from remote location', 
    status: 'To Do', 
    priority: 'High', 
    date: '10:30 AM', 
    active: true,
    reporter: 'Sarah Jenkins',
    reporterAvatar: 'https://i.pravatar.cc/150?u=sarah',
    messages: [
      {
        id: 1,
        author: 'Sarah Jenkins',
        role: 'Reporter',
        avatar: 'https://i.pravatar.cc/150?u=sarah',
        date: 'Feb 10, 2026 10:31 AM',
        content: "Hi IT support, I'm trying to connect to the VPN from my home office but I keep getting a 'Handshake Failed' error. I've restarted my router but it didn't help. This is urgent as I have a client meeting in an hour.",
        attachments: [{ name: 'Error_Screenshot.png', size: '1.2 MB' }]
      }
    ]
  },
  { 
    id: 'APPS-217', 
    title: 'Dashboard charts not loading on Safari', 
    status: 'In Progress', 
    priority: 'Medium', 
    date: 'Yesterday',
    reporter: 'Mike Ross',
    reporterAvatar: 'https://i.pravatar.cc/150?u=mike',
    messages: [
      {
        id: 1,
        author: 'Mike Ross',
        role: 'Reporter',
        avatar: 'https://i.pravatar.cc/150?u=mike',
        date: 'Feb 09, 2026 4:15 PM',
        content: "The sales analytics charts are just showing a spinning loader when I access them via Safari v17. It works fine on Chrome.",
        attachments: []
      }
    ]
  },
  { 
    id: 'HR-330', 
    title: 'New employee onboarding request: John Doe', 
    status: 'To Do', 
    priority: 'Low', 
    date: 'Feb 8',
    reporter: 'Jessica Pearson',
    reporterAvatar: 'https://i.pravatar.cc/150?u=jessica',
    messages: []
  },
  { 
    id: 'OPS-115', 
    title: 'Printer on 3rd floor is jamming repeatedly', 
    status: 'Done', 
    priority: 'Low', 
    date: 'Feb 7',
    reporter: 'Louis Litt',
    reporterAvatar: 'https://i.pravatar.cc/150?u=louis',
    messages: []
  },
  { 
    id: 'SEC-009', 
    title: 'Phishing email alert - "Urgent Invoice"', 
    status: 'To Do', 
    priority: 'High', 
    date: 'Feb 6',
    reporter: 'System Alert',
    reporterAvatar: 'https://ui-avatars.com/api/?name=System+Alert&background=ef4444&color=fff',
    messages: []
  },
];