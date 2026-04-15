import React from 'react';

export default function Vaccinations() {
  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <section className="mb-8 flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[2.75rem] font-semibold text-on-surface leading-tight tracking-tight">Vaccinations</h1>
          <p className="text-on-surface-variant text-sm max-w-lg leading-relaxed">Manage hospital immunizations and patient schedules.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Record Vaccination
          </button>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-outline-variant/20 mb-8">
        <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary">Due Today (3)</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">All Records</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">National Schedule</button>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: Upcoming Administrations */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-on-surface uppercase tracking-widest">Upcoming Administrations</h2>
            <span className="px-3 py-1 bg-error/10 text-error text-[10px] font-bold rounded-full">1 Action Required</span>
          </div>

          {/* Card 1: Overdue */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img src="https://i.pravatar.cc/150?img=5" alt="Rokeya Sultana" className="w-12 h-12 rounded-full object-cover" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-error rounded-full border-2 border-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[12px] font-bold">priority_high</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-on-surface">Rokeya Sultana</h3>
                  <span className="text-[10px] text-on-surface-variant font-mono">PID-90231</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-[16px]">vaccines</span>
                  <span className="text-sm font-bold text-primary">BCG Booster</span>
                  <span className="text-xs text-on-surface-variant"># Dose 1 of 1</span>
                </div>
                <p className="text-xs font-bold text-error">Due: 10 Apr 2025 (4 days overdue)</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Administer</button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface text-sm font-bold rounded-lg hover:bg-surface-container-highest transition-colors">Postpone</button>
            </div>
          </div>

          {/* Card 2: Due Today */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/150?img=9" alt="Bilkis Khanam" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-on-surface">Bilkis Khanam</h3>
                  <span className="text-[10px] text-on-surface-variant font-mono">PID-10442</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-[16px]">vaccines</span>
                  <span className="text-sm font-bold text-primary">Hepatitis B</span>
                  <span className="text-xs text-on-surface-variant"># Dose 3 of 3</span>
                </div>
                <p className="text-xs font-bold text-primary">Due: Today</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="px-6 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity">Administer</button>
              <button className="px-6 py-2 bg-surface-container-high text-on-surface text-sm font-bold rounded-lg hover:bg-surface-container-highest transition-colors">Postpone</button>
            </div>
          </div>
        </div>

        {/* Right Column: Alerts & Stats */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Inventory Alert */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
            <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Inventory Alert</h3>
            <div className="mb-2">
              <p className="text-xs text-on-surface-variant mb-1">BCG Vaccines</p>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-on-surface">12 Vials Left</span>
                <span className="px-2 py-0.5 bg-error/10 text-error text-[10px] font-bold rounded uppercase">Low Stock</span>
              </div>
            </div>
            <div className="w-full h-2 bg-surface-container-high rounded-full mt-3 overflow-hidden">
              <div className="h-full bg-error rounded-full" style={{ width: '15%' }}></div>
            </div>
          </div>

          {/* Today's Clinic Completion */}
          <div className="bg-primary rounded-2xl p-6 shadow-sm text-white">
            <h3 className="text-[10px] font-bold text-white/80 uppercase tracking-widest mb-4">Today's Clinic Completion</h3>
            <div className="mb-4">
              <span className="text-5xl font-bold">64%</span>
            </div>
            <p className="text-sm text-white/90 mb-6 leading-relaxed">
              9 out of 14 scheduled doses successfully administered.
            </p>
            <button className="text-sm font-bold text-white flex items-center gap-1 hover:underline">
              View performance <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* EPI Guidelines */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">menu_book</span>
              <h3 className="text-sm font-bold text-on-surface">EPI Guidelines</h3>
            </div>
            <div className="space-y-3">
              <div className="p-3 bg-surface-container-low rounded-xl">
                <p className="text-sm font-bold text-on-surface mb-1">Measles-Rubella (MR)</p>
                <p className="text-[10px] text-on-surface-variant">Recommended age: 9 months & 15 months.</p>
              </div>
              <div className="p-3 bg-surface-container-low rounded-xl">
                <p className="text-sm font-bold text-on-surface mb-1">Pentavalent (DPT, HepB, Hib)</p>
                <p className="text-[10px] text-on-surface-variant">3 doses: 6, 10, and 14 weeks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
