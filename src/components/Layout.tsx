import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/appointments', label: 'Appointments', icon: 'calendar_today' },
  { path: '/patients', label: 'Patient List', icon: 'groups' },
  { path: '/prescriptions', label: 'Prescriptions', icon: 'medical_services' },
  { path: '/test-results', label: 'Test Results', icon: 'biotech' },
  { path: '/vaccinations', label: 'Vaccinations', icon: 'vaccines' },
  { path: '/reports', label: 'Reports', icon: 'bar_chart' },
];

export default function Layout() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const location = useLocation();

  const currentNavItem = NAV_ITEMS.find(item => 
    item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path)
  );

  return (
    <div className="min-h-screen bg-surface text-on-surface flex">
      {/* Sidebar Navigation */}
      <aside className="fixed left-0 top-0 h-full w-[240px] bg-white border-r border-slate-100 flex flex-col py-6 z-40">
        <div className="px-6 mb-8">
          <div className="text-teal-600 font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>medical_services</span>
            <span className="font-headline tracking-tighter text-lg uppercase">e-Health-Care</span>
          </div>
        </div>
        
        <nav className="flex-1 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => cn(
                "flex items-center px-6 py-3 transition-colors cursor-pointer",
                isActive 
                  ? "text-teal-700 font-semibold border-r-4 border-teal-600 bg-teal-50/50" 
                  : "text-slate-500 hover:bg-slate-50 hover:text-teal-600"
              )}
            >
              <span className="material-symbols-outlined mr-3">{item.icon}</span>
              <span className="font-sans text-sm font-medium leading-relaxed">{item.label}</span>
            </NavLink>
          ))}
          
          <div 
            onClick={() => setIsNotificationsOpen(true)}
            className="flex items-center px-6 py-3 text-slate-500 hover:bg-slate-50 hover:text-teal-600 transition-colors cursor-pointer mt-2"
          >
            <span className="material-symbols-outlined mr-3">notifications</span>
            <span className="font-sans text-sm font-medium leading-relaxed">Notifications</span>
          </div>
        </nav>

        <div className="px-6 pt-6 mt-auto border-t border-slate-100">
          <div className="flex items-center gap-3">
            <img 
              className="w-10 h-10 rounded-full object-cover" 
              alt="Dr. Rafiqul Islam" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_9dPLA7v3SI6eJoeG88VR2XUXbN6XaiZO32MBtHC23UdECFFNLtQQawBmJPjQfZs5iwhPw0SJHLOJYq-GMZNNUc-PH5_kEj5iw7vNjCDAA8txd7vUCSgp98inZxO8R0dPs9jrnvcOUNmE-W5oqfzsQJ3KRbKaZcx2MZy71J67OSpR6UqnEX-wgN8DKtQC-RuF3LVIrHQx8v4ta60L9E28LX9yu0TUM-JkN4SPnd3Gi0L8fcvRRwMrNlp1Q2aWtOnckljItERYe37V"
            />
            <div>
              <p className="text-xs font-bold text-on-surface">Dr. Rafiqul Islam</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Senior Consultant</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Top AppBar */}
      <header className="fixed top-0 right-0 left-[240px] h-14 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-8 z-30">
        <div className="flex items-center flex-1 max-w-xl">
          <div className="relative w-full group">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
            <input 
              className="w-full h-9 pl-10 pr-4 rounded-full bg-surface-container-high border-none focus:ring-2 focus:ring-teal-500/20 text-sm outline-none transition-all" 
              placeholder="Search patients, results..." 
              type="text"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-sans tracking-tight">
            <NavLink to="/" className="text-slate-500 hover:text-teal-600 transition-colors">Dashboard</NavLink>
            {currentNavItem && currentNavItem.path !== '/' && (
              <span className="text-teal-700 font-bold border-b-2 border-teal-600 py-4">{currentNavItem.label}</span>
            )}
          </div>
          <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsNotificationsOpen(true)}
              className="p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-500 relative"
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-50 transition-colors text-slate-500">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary-container flex items-center justify-center text-white text-xs font-bold ml-2">RI</div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="ml-[240px] pt-14 min-h-screen w-full relative">
        <Outlet />
      </main>

      {/* Notification Panel Overlay */}
      {isNotificationsOpen && (
        <div className="fixed inset-0 bg-slate-900/10 backdrop-blur-[2px] z-50 flex justify-end">
          {/* Sidebar Slider Panel */}
          <div className="w-[400px] h-full bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Panel Header */}
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-on-surface">Notifications</h2>
                <button className="text-sm font-semibold text-primary hover:underline transition-all">Mark all read</button>
              </div>
              {/* Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium whitespace-nowrap">All</button>
                <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium whitespace-nowrap hover:bg-slate-200 transition-colors">Unread</button>
                <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium whitespace-nowrap hover:bg-slate-200 transition-colors">Critical</button>
                <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium whitespace-nowrap hover:bg-slate-200 transition-colors">Appointments</button>
              </div>
            </div>
            
            {/* Notification List */}
            <div className="flex-1 overflow-y-auto bg-surface-container-low">
              {/* Item 1: Critical (Unread) */}
              <div className="p-5 border-l-4 border-teal-600 bg-white mb-0.5 group hover:bg-teal-50/30 transition-colors">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-error/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>flare</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-error uppercase tracking-widest">Critical Alert</span>
                      <span className="text-[10px] text-on-surface-variant">2m ago</span>
                    </div>
                    <h4 className="text-sm font-bold text-on-surface mt-1 leading-tight">Critical test result for Fatema Begum — Hemoglobin 4.8 g/dL</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Requires immediate intervention and transfusion consultation.</p>
                    <div className="mt-3">
                      <button className="px-4 py-1.5 bg-primary text-white rounded-lg text-xs font-bold shadow-sm hover:opacity-90 transition-opacity">Review Now</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Item 2: Appointment (Read) */}
              <div className="p-5 bg-white/60 mb-0.5 group hover:bg-white transition-colors">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-secondary-container/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-secondary">notifications_active</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Upcoming</span>
                      <span className="text-[10px] text-on-surface-variant">15m ago</span>
                    </div>
                    <h4 className="text-sm font-medium text-on-surface mt-1 leading-tight">Appointment in 30 minutes — Mohammad Hossain</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Follow-up: Post-cardiac surgery recovery.</p>
                    <div className="mt-3">
                      <button className="px-4 py-1.5 bg-surface-container-highest text-primary rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">View Details</button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Item 3: Lab Result (Unread) */}
              <div className="p-5 border-l-4 border-teal-600 bg-white mb-0.5 group hover:bg-teal-50/30 transition-colors">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-amber-600">biotech</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Lab Report</span>
                      <span className="text-[10px] text-on-surface-variant">1h ago</span>
                    </div>
                    <h4 className="text-sm font-bold text-on-surface mt-1 leading-tight">New test result available — CBC for Nasrin Akhter</h4>
                    <p className="text-xs text-on-surface-variant mt-1">Patient ID: 45092-B. Results ready for physician sign-off.</p>
                  </div>
                </div>
              </div>
              
              {/* Earlier Notifications */}
              <div className="px-6 py-4">
                <h5 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Yesterday</h5>
              </div>
              <div className="p-5 bg-white/60 mb-0.5 group hover:bg-white transition-colors opacity-70">
                <div className="flex gap-4">
                  <div className="mt-1 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-slate-500">task</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-on-surface leading-tight">Daily summary report generated</h4>
                    <p className="text-[10px] text-on-surface-variant mt-1">Oct 23 • 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Panel Footer */}
            <div className="p-4 bg-white border-t border-slate-100 text-center">
              <button className="text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center gap-1 mx-auto">
                See all activity history
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
          
          {/* Close Area */}
          <button 
            onClick={() => setIsNotificationsOpen(false)}
            className="absolute top-6 right-[420px] bg-white/90 backdrop-blur p-2 rounded-full shadow-lg text-slate-600 hover:text-error transition-all group"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      )}
    </div>
  );
}
