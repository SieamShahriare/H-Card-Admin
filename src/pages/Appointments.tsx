import React from 'react';

export default function Appointments() {
  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <section className="mb-8 flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[2.75rem] font-semibold text-on-surface leading-tight tracking-tight">Appointments</h1>
          <p className="text-on-surface-variant text-sm max-w-lg leading-relaxed">Manage your clinical schedule with editorial precision.</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex bg-surface-container-high rounded-lg p-1">
            <button className="px-4 py-1.5 text-sm font-bold bg-white shadow-sm rounded-md text-on-surface">Day</button>
            <button className="px-4 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface">Week</button>
            <button className="px-4 py-1.5 text-sm font-medium text-on-surface-variant hover:text-on-surface">Month</button>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant/20 rounded-lg px-4 py-2 shadow-sm">
            <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
            <span className="text-sm font-bold text-on-surface">Mon, 14 Apr 2025</span>
            <button className="text-on-surface-variant hover:text-on-surface"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
          </div>
          <button className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            New Appointment
          </button>
        </div>
      </section>

      {/* Filters */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mr-2">Filters:</span>
          <button className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold">All</button>
          <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest text-xs font-medium transition-colors">Checkup</button>
          <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest text-xs font-medium transition-colors">Follow-up</button>
          <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest text-xs font-medium transition-colors">Emergency</button>
          <button className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest text-xs font-medium transition-colors">Surgery</button>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-container-lowest border border-outline-variant/20 rounded-full shadow-sm cursor-pointer">
          <span className="text-sm font-semibold text-on-surface">All Status</span>
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant">expand_more</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* Left: Daily Schedule Timeline */}
        <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-on-surface">Daily Schedule</h2>
            <span className="px-2 py-1 bg-error/10 text-error text-[10px] font-bold rounded uppercase tracking-wider">10:20 AM</span>
          </div>
          
          <div className="relative pl-12 space-y-0 before:absolute before:left-[42px] before:top-2 before:bottom-2 before:w-px before:bg-surface-container-high">
            {/* Time slots */}
            <div className="relative h-20">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">07:00</span>
            </div>
            <div className="relative h-20">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">08:00</span>
              <div className="absolute top-4 left-4 right-0 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3 shadow-sm">
                <p className="text-sm font-bold text-blue-900">Zahir Raihan</p>
                <p className="text-[10px] text-blue-700 font-medium">Routine Checkup</p>
              </div>
            </div>
            <div className="relative h-24">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">09:00</span>
              <div className="absolute top-4 left-4 right-0 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-3 shadow-sm">
                <p className="text-sm font-bold text-emerald-900">Nusrat Jahan</p>
                <p className="text-[10px] text-emerald-700 font-medium">Consultation</p>
              </div>
            </div>
            
            {/* Current Time Indicator */}
            <div className="absolute left-0 right-0 top-[220px] flex items-center z-10">
              <div className="w-12 text-right pr-2">
                <span className="text-[10px] font-bold text-error bg-error/10 px-1.5 py-0.5 rounded">NOW</span>
              </div>
              <div className="flex-1 h-px bg-error relative">
                <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-error"></div>
              </div>
            </div>

            <div className="relative h-24">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">10:00</span>
            </div>
            <div className="relative h-24">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">11:00</span>
              <div className="absolute top-0 left-4 right-0 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg p-3 shadow-sm">
                <p className="text-sm font-bold text-emerald-900">Anika Tabassum</p>
                <p className="text-[10px] text-emerald-700 font-medium">Post-Op Review</p>
              </div>
            </div>
            <div className="relative h-20">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">12:00</span>
            </div>
            <div className="relative h-20">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">13:00</span>
            </div>
            <div className="relative h-20">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">14:00</span>
            </div>
            <div className="relative h-10">
              <span className="absolute -left-12 top-0 text-xs font-mono text-on-surface-variant">15:00</span>
            </div>
          </div>
        </div>

        {/* Right: Daily Appointments List */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold text-on-surface">Daily Appointments</h2>
              <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest mt-1">Monday, 14 April 2025</p>
            </div>
            <div className="flex gap-6 text-center">
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total</p>
                <p className="text-xl font-bold text-primary">45</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Done</p>
                <p className="text-xl font-bold text-green-600">06</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Pending</p>
                <p className="text-xl font-bold text-blue-600">32</p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-surface-container-low">
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Time & Type</th>
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Patient</th>
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Age/Gender</th>
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Complaint</th>
                  <th className="pb-4 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low">
                {/* Row 1 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-on-surface">08:30</span>
                      <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded uppercase">Checkup</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-primary overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=11" alt="Zahir" className="w-full h-full object-cover"/>
                      </div>
                      <span className="text-sm font-bold text-on-surface">Zahir Raihan</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-on-surface-variant">42Y / M</td>
                  <td className="py-4 text-sm text-on-surface-variant italic">Hypertension follow-up</td>
                  <td className="py-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                      Completed
                    </span>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors bg-blue-50/30">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-on-surface">09:15</span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded uppercase">Consult</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-primary overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=5" alt="Nusrat" className="w-full h-full object-cover"/>
                      </div>
                      <span className="text-sm font-bold text-on-surface">Nusrat Jahan</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-on-surface-variant">28Y / F</td>
                  <td className="py-4 text-sm text-on-surface-variant italic">Acute Migraine</td>
                  <td className="py-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-700 border border-blue-200 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse"></span>
                      In Progress
                    </span>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-on-surface">11:00</span>
                      <span className="px-2 py-0.5 bg-red-50 text-red-700 text-[10px] font-bold rounded uppercase">Surgery</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-primary overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=8" alt="Anwarul" className="w-full h-full object-cover"/>
                      </div>
                      <span className="text-sm font-bold text-on-surface">Anwarul Kabir</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-on-surface-variant">65Y / M</td>
                  <td className="py-4 text-sm text-on-surface-variant italic">Post-operative review</td>
                  <td className="py-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-surface-container-high text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                      Upcoming
                    </span>
                  </td>
                </tr>
                {/* Row 4 */}
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold text-on-surface">11:45</span>
                      <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded uppercase">Consult</span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center text-xs font-bold text-primary overflow-hidden">
                        <img src="https://i.pravatar.cc/150?img=9" alt="Samira" className="w-full h-full object-cover"/>
                      </div>
                      <span className="text-sm font-bold text-on-surface">Samira Azim</span>
                    </div>
                  </td>
                  <td className="py-4 text-sm text-on-surface-variant">34Y / F</td>
                  <td className="py-4 text-sm text-on-surface-variant italic">Annual health check</td>
                  <td className="py-4 text-right">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-surface-container-high text-on-surface-variant">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span>
                      Upcoming
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-between border-t border-surface-container-low pt-4">
            <span className="text-xs text-on-surface-variant font-medium">Showing 12 of 45 appointments</span>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low"><span className="material-symbols-outlined text-[18px]">chevron_left</span></button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs">1</button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface hover:bg-surface-container-low font-bold text-xs">2</button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface hover:bg-surface-container-low font-bold text-xs">3</button>
              <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-low"><span className="material-symbols-outlined text-[18px]">chevron_right</span></button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">calendar_today</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Today's Load</p>
            <p className="text-2xl font-bold text-on-surface">45 Patients</p>
          </div>
        </div>
        <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
            <span className="material-symbols-outlined">pending_actions</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Remaining</p>
            <p className="text-2xl font-bold text-on-surface">32 Upcoming</p>
          </div>
        </div>
        <div className="bg-green-50 rounded-2xl p-6 border border-green-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
            <span className="material-symbols-outlined">verified</span>
          </div>
          <div>
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Efficiency</p>
            <p className="text-2xl font-bold text-on-surface">88% Completion</p>
          </div>
        </div>
      </div>
    </div>
  );
}
