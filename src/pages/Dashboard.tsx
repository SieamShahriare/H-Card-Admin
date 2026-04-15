import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-8 flex-1">
      {/* Page Header */}
      <div className="mb-10 flex flex-col gap-1">
        <h1 className="text-[2.75rem] font-semibold tracking-tight text-on-surface leading-tight">Good morning, Dr. Islam</h1>
        <p className="text-on-surface-variant font-medium">Monday, 14 April 2025</p>
      </div>

      {/* SECTION A — 3 KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* KPI 1 */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">calendar_today</span>
            <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">Today</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-on-surface">14</span>
            <span className="text-xs text-on-surface-variant mt-1 font-medium">Today's Appointments</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-teal-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined text-teal-600 bg-teal-50 p-2 rounded-lg">check_circle</span>
            <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">Updated</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-on-surface">6</span>
            <span className="text-xs text-on-surface-variant mt-1 font-medium">Patients Seen Today</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-amber-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <span className="material-symbols-outlined text-amber-600 bg-amber-50 p-2 rounded-lg">biotech</span>
            <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase">Pending</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-on-surface">5</span>
            <span className="text-xs text-on-surface-variant mt-1 font-medium">Pending Test Results</span>
          </div>
        </div>
      </div>

      {/* SECTION B — Two columns */}
      <div className="grid grid-cols-12 gap-[20px]">
        {/* LEFT: Today's Schedule */}
        <div className="col-span-12 lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <div className="bg-surface-container-lowest rounded-2xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-on-surface">Today's Schedule</h2>
                <p className="text-xs text-on-surface-variant mt-1 font-medium">Dr. Islam's Clinic Shift</p>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Shift Progress</span>
                <div className="w-32 h-1.5 bg-surface-container-high rounded-full mt-1 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '45%' }}></div>
                </div>
                <span className="text-[10px] text-primary font-bold mt-1 block">8 AM - 3 PM</span>
              </div>
            </div>

            <div className="space-y-0">
              {/* Header Row */}
              <div className="grid grid-cols-12 pb-4 mb-4 border-b border-surface-container-low text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                <div className="col-span-2">Time</div>
                <div className="col-span-4">Patient</div>
                <div className="col-span-3">Patient ID</div>
                <div className="col-span-3 text-right">Status</div>
              </div>

              {/* 09:00 Appointment */}
              <div className="grid grid-cols-12 items-center py-4 px-2 rounded-xl transition-colors hover:bg-surface-container-low">
                <div className="col-span-2 font-mono text-sm text-on-surface-variant">09:00</div>
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-primary">MH</div>
                  <span className="text-sm font-semibold">Mohammad Hossain</span>
                </div>
                <div className="col-span-3">
                  <span className="font-mono text-[11px] text-on-surface-variant">BD-2025-00198</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-500">Scheduled</span>
                </div>
              </div>

              {/* 10:30 Appointment (In Progress) */}
              <div className="grid grid-cols-12 items-center py-5 px-4 rounded-2xl bg-teal-50/50 border border-teal-100 shadow-sm relative -mx-2 my-2">
                <div className="col-span-2 font-mono text-sm text-primary font-bold">10:30</div>
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-teal-500 p-0.5">
                    <img alt="Nasrin Akhter" className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaajufJlU1JvzNOxATRs0zobGbVoYQ_jVZux5wNF4jq4OhD-B1t5q-gf0AVsAXkrXOriF-hZSRuGpLFFQD-qWxBIg-0ypQtrN2yapHXEh1Q27hUH3Nyt2WUP_ZzxSrx9f6O27bWIc1IzYEcqjNfYJ761XefmSPxVFaP4nZgkl1EoGcQRVWHmcXib3cUdpvm6VGUFsQQrvKZIRQtIblrqqqneYBY7QNAvp0Gka_htzoI6ij0zn-zgoViJplVPoJdA6-QcEpC3P6oG2N" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary block">Nasrin Akhter</span>
                    <span className="text-[10px] text-teal-600 font-medium">Routine Checkup</span>
                  </div>
                </div>
                <div className="col-span-3">
                  <span className="font-mono text-[11px] text-primary/80 font-semibold">BD-2025-00217</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-teal-500 text-white animate-pulse">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    In Progress
                  </span>
                </div>
              </div>

              {/* 12:00 Appointment (Completed) */}
              <div className="grid grid-cols-12 items-center py-4 px-2 rounded-xl transition-colors hover:bg-surface-container-low opacity-60">
                <div className="col-span-2 font-mono text-sm text-on-surface-variant line-through">12:00</div>
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-primary">KU</div>
                  <span className="text-sm font-semibold">Karim Uddin</span>
                </div>
                <div className="col-span-3">
                  <span className="font-mono text-[11px] text-on-surface-variant">BD-2025-00104</span>
                </div>
                <div className="col-span-3 text-right">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-green-50 text-green-600">Completed</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <button className="flex items-center gap-2 text-xs font-bold text-primary hover:underline">
                <span className="material-symbols-outlined text-sm">add</span>
                Add Emergency Walk-in
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-12 lg:col-span-5 xl:col-span-4 flex flex-col gap-6">
          {/* Pending Actions */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-on-surface mb-4">Pending Actions</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low">
                <span className="material-symbols-outlined text-primary text-xl">medical_services</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">3 Prescriptions</p>
                  <p className="text-[10px] text-on-surface-variant">Awaiting doctor's signature</p>
                </div>
                <button className="ml-auto text-primary">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </li>
              <li className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low">
                <span className="material-symbols-outlined text-amber-600 text-xl">biotech</span>
                <div>
                  <p className="text-xs font-bold text-on-surface">2 Test Results</p>
                  <p className="text-[10px] text-on-surface-variant">Ready for review & comment</p>
                </div>
                <button className="ml-auto text-primary">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm flex-1 flex flex-col min-h-[300px]">
            <h3 className="text-sm font-bold text-on-surface mb-6">Recent Activity</h3>
            <div className="space-y-6 relative overflow-y-auto custom-scrollbar flex-1 pr-2">
              {/* Activity Item 1 */}
              <div className="relative pl-6 border-l border-slate-100 pb-1">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-primary rounded-full"></div>
                <span className="text-[10px] text-on-surface-variant block mb-1">09:45 AM</span>
                <p className="text-xs font-medium text-on-surface">Radiology report uploaded for <strong>Mohammad Hossain</strong></p>
              </div>
              {/* Activity Item 2 */}
              <div className="relative pl-6 border-l border-slate-100 pb-1">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                <span className="text-[10px] text-on-surface-variant block mb-1">09:12 AM</span>
                <p className="text-xs font-medium text-on-surface">New appointment booked: <strong>Anisur Rahman</strong> (Tomorrow, 10:00 AM)</p>
              </div>
              {/* Activity Item 3 */}
              <div className="relative pl-6 border-l border-slate-100 pb-1">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                <span className="text-[10px] text-on-surface-variant block mb-1">08:30 AM</span>
                <p className="text-xs font-medium text-on-surface">Patient <strong>Karim Uddin</strong> check-in confirmed</p>
              </div>
              {/* Activity Item 4 */}
              <div className="relative pl-6 border-l border-slate-100 pb-1">
                <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                <span className="text-[10px] text-on-surface-variant block mb-1">08:15 AM</span>
                <p className="text-xs font-medium text-on-surface">Duty shift started. System sync complete.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-2xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center group z-50">
        <span className="material-symbols-outlined text-2xl transition-transform group-hover:rotate-90">add</span>
        <div className="absolute right-full mr-4 bg-primary px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          <span className="text-xs font-bold">New Record</span>
        </div>
      </button>
    </div>
  );
}
