import React from 'react';

export default function Reports() {
  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <section className="mb-8 flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[2.75rem] font-semibold text-on-surface leading-tight tracking-tight">Reports</h1>
          <p className="text-on-surface-variant text-sm max-w-lg leading-relaxed">Generate clinical and administrative reports.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Generate Report
          </button>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-outline-variant/20 mb-8">
        <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary">CLINICAL</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">ADMINISTRATIVE</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">FINANCIAL</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Report Card 1 */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">group</span>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">Patient Demographics</h3>
          <p className="text-sm text-on-surface-variant mb-4">Breakdown of patient population by age, gender, and location.</p>
          <div className="flex items-center justify-between text-xs font-bold text-primary">
            <span>Last generated: Today</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </div>
        </div>

        {/* Report Card 2 */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">coronavirus</span>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">Disease Prevalence</h3>
          <p className="text-sm text-on-surface-variant mb-4">Statistical overview of common diagnoses and chronic conditions.</p>
          <div className="flex items-center justify-between text-xs font-bold text-teal-600">
            <span>Last generated: 2 days ago</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </div>
        </div>

        {/* Report Card 3 */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">vaccines</span>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">Immunization Coverage</h3>
          <p className="text-sm text-on-surface-variant mb-4">Tracking of vaccination rates against national targets.</p>
          <div className="flex items-center justify-between text-xs font-bold text-amber-600">
            <span>Last generated: 1 week ago</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </div>
        </div>

        {/* Report Card 4 */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 hover:shadow-md transition-shadow cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined">calendar_month</span>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">Appointment Analytics</h3>
          <p className="text-sm text-on-surface-variant mb-4">No-show rates, average wait times, and clinic utilization.</p>
          <div className="flex items-center justify-between text-xs font-bold text-blue-600">
            <span>Last generated: Yesterday</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </div>
        </div>
      </div>
    </div>
  );
}
