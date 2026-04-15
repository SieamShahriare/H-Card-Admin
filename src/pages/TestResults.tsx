import React from 'react';

export default function TestResults() {
  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <section className="mb-8 flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[2.75rem] font-semibold text-on-surface leading-tight tracking-tight">Test Results</h1>
          <p className="text-on-surface-variant text-sm max-w-lg leading-relaxed">Review and manage patient test results.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">add</span>
            Order New Test
          </button>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-outline-variant/20 mb-8">
        <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary">PENDING REVIEW (2)</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">ALL RESULTS</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">ORDERED BY ME</button>
      </div>

      {/* Content */}
      <div className="max-w-4xl space-y-6">
        {/* Result Card 1: Critical */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border-l-4 border-l-error border-y border-r border-outline-variant/15 relative overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-bold text-on-surface">Fatema Begum</h3>
                <span className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant text-[10px] font-mono font-bold rounded">BD-2025-00142</span>
              </div>
              <p className="text-sm text-on-surface-variant font-medium">Complete Blood Count</p>
            </div>
            <span className="px-3 py-1 bg-error/10 text-error text-[10px] font-bold rounded-full uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
              Critical
            </span>
          </div>

          <div className="bg-surface-container-low rounded-xl p-5 mb-6">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Key Finding</p>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-error">Hemoglobin: 4.8 g/dL</span>
              <span className="material-symbols-outlined text-error text-xl translate-y-1">arrow_downward</span>
              <span className="text-sm text-on-surface-variant font-medium ml-2">[Normal: 12-16]</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Mark Reviewed
              </button>
              <button className="px-5 py-2 bg-surface-container-high text-on-surface text-sm font-bold rounded-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">note_add</span>
                Add Note
              </button>
            </div>
            <button className="text-sm font-bold text-primary hover:underline">Order Follow-up</button>
          </div>
        </div>

        {/* Result Card 2: Abnormal */}
        <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border-l-4 border-l-amber-500 border-y border-r border-outline-variant/15 relative overflow-hidden">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-bold text-on-surface">Mohammad Hossain</h3>
                <span className="px-2 py-0.5 bg-surface-container-high text-on-surface-variant text-[10px] font-mono font-bold rounded">BD-2025-00089</span>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-sm text-on-surface-variant font-medium">Lipid Profile</p>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="px-2 py-0.5 bg-amber-50 text-amber-700 text-[10px] font-bold rounded uppercase tracking-widest">Abnormal</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low rounded-xl p-5 mb-6">
            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Key Finding</p>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-bold text-amber-600">LDL Cholesterol: 190 mg/dL</span>
              <span className="material-symbols-outlined text-amber-600 text-xl translate-y-1">arrow_upward</span>
              <span className="text-sm text-on-surface-variant font-medium ml-2">[Normal: &lt;100]</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <button className="px-5 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                Mark Reviewed
              </button>
              <button className="px-5 py-2 bg-surface-container-high text-on-surface text-sm font-bold rounded-lg hover:bg-surface-container-highest transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">visibility</span>
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
