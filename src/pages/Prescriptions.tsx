import React from 'react';

export default function Prescriptions() {
  return (
    <div className="p-8 min-h-screen">
      {/* Header */}
      <section className="mb-8 flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[2.75rem] font-semibold text-on-surface leading-tight tracking-tight">Prescriptions</h1>
          <p className="text-on-surface-variant text-sm max-w-lg leading-relaxed">Review, sign, and manage patient prescriptions and medication orders.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-primary text-white font-semibold text-sm rounded-lg shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">edit_document</span>
            Write Prescription
          </button>
        </div>
      </section>

      {/* Tabs */}
      <div className="flex items-center gap-8 border-b border-outline-variant/20 mb-8">
        <button className="pb-4 text-sm font-bold text-primary border-b-2 border-primary">PENDING SIGNATURE (4)</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">ACTIVE</button>
        <button className="pb-4 text-sm font-bold text-on-surface-variant hover:text-on-surface transition-colors">HISTORY</button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {/* Prescription Card 1 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-surface-container-low">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold">
                  JS
                </div>
                <div>
                  <h3 className="text-base font-bold text-on-surface">Jasim Uddin</h3>
                  <p className="text-[10px] text-on-surface-variant font-mono">PID-88291 • 45Y / M</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-widest">Awaiting Signature</span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">medication</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Amoxicillin 500mg</p>
                  <p className="text-xs text-on-surface-variant">1 capsule three times daily for 7 days. Take after meals.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">medication</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Paracetamol 500mg</p>
                  <p className="text-xs text-on-surface-variant">1 tablet as needed for fever/pain. Max 4 in 24h.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">Drafted by: Dr. S. Rahman (Resident)</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-surface-container-high text-on-surface text-sm font-bold rounded-lg hover:bg-surface-container-highest transition-colors">Edit</button>
                <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">draw</span>
                  Sign & Issue
                </button>
              </div>
            </div>
          </div>

          {/* Prescription Card 2 */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-surface-container-low">
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?img=1" alt="Ayesha Begum" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h3 className="text-base font-bold text-on-surface">Ayesha Begum</h3>
                  <p className="text-[10px] text-on-surface-variant font-mono">PID-77320 • 58Y / F</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-full uppercase tracking-widest">Awaiting Signature</span>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-primary mt-0.5">medication</span>
                <div>
                  <p className="text-sm font-bold text-on-surface">Losartan 50mg</p>
                  <p className="text-xs text-on-surface-variant">1 tablet daily in the morning.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-xs text-on-surface-variant">Drafted by: System (Refill Request)</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-surface-container-high text-on-surface text-sm font-bold rounded-lg hover:bg-surface-container-highest transition-colors">Review</button>
                <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">draw</span>
                  Sign & Issue
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
            <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">autorenew</span>
                  <span className="text-sm font-bold text-on-surface">Review Refill Requests</span>
                </div>
                <span className="w-6 h-6 rounded-full bg-error text-white text-[10px] font-bold flex items-center justify-center">12</span>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">local_pharmacy</span>
                  <span className="text-sm font-bold text-on-surface">Pharmacy Directory</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low transition-colors text-left">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">history</span>
                  <span className="text-sm font-bold text-on-surface">My Prescription Log</span>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
            <h3 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-4">Commonly Prescribed</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface cursor-pointer hover:bg-surface-container-high">Paracetamol</span>
              <span className="px-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface cursor-pointer hover:bg-surface-container-high">Amoxicillin</span>
              <span className="px-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface cursor-pointer hover:bg-surface-container-high">Omeprazole</span>
              <span className="px-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface cursor-pointer hover:bg-surface-container-high">Metformin</span>
              <span className="px-3 py-1.5 bg-surface-container-low rounded-lg text-xs font-medium text-on-surface cursor-pointer hover:bg-surface-container-high">Losartan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
