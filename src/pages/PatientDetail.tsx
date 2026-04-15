import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function PatientDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-8 min-h-screen">
      {/* Top Navigation */}
      <div className="mb-6 flex items-center gap-4">
        <button 
          onClick={() => navigate('/patients')}
          className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-colors text-on-surface-variant"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
          <span className="hover:text-primary cursor-pointer transition-colors" onClick={() => navigate('/patients')}>Patients</span>
          <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          <span className="text-on-surface font-bold">{id || 'BD-2025-00142'}</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* LEFT COLUMN: Profile & Vitals */}
        <div className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-primary/10 to-transparent"></div>
            
            <div className="relative mt-4 mb-4 inline-block">
              <img 
                alt="Fatema Begum" 
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md mx-auto" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZP_UVm9rDci8aZIVkCNxU3TYXPv5LXmPtKV7sUKbivW47aWw3ILuhIWCdlnaDl_qF6P42yPrH7CXbu4QhVJs9U37nLiuIf9b3CsmUS_kLJrjtHMUzrSrx5jiY-FolHNoXG2Dw3Y9R6GXxHAx1GfqA0yGAjexLsjaPOY-pmWUYd5Ao0QhyE5wIEs0nOnxfBqe1lkSVYLkFia6nVUk7ndFmxn-edbdyNBV3LNaWbf-84CrtJOLGzvPEPjESdzLTfhpuDpKxT3N3IcW1" 
              />
              <span className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            
            <h2 className="text-xl font-bold text-on-surface">Fatema Begum</h2>
            <p className="font-mono text-xs text-on-surface-variant mt-1">{id || 'BD-2025-00142'}</p>
            
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-surface-variant">62 yrs</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full text-[11px] font-bold text-on-surface-variant">Female</span>
              <span className="px-3 py-1 bg-error/10 text-error rounded-full text-[11px] font-bold">B+</span>
            </div>

            <div className="mt-6 pt-6 border-t border-outline-variant/15 flex flex-col gap-3 text-left">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">call</span>
                <span className="text-sm font-medium text-on-surface">+880 1711-223344</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">mail</span>
                <span className="text-sm font-medium text-on-surface">fatema.b@example.com</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">location_on</span>
                <span className="text-sm font-medium text-on-surface leading-tight">House 12, Road 5, Dhanmondi, Dhaka</span>
              </div>
            </div>
            
            <button className="w-full mt-6 py-2.5 bg-primary/10 text-primary font-bold text-sm rounded-xl hover:bg-primary/20 transition-colors">
              Edit Profile
            </button>
          </div>

          {/* Vitals Card */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Latest Vitals</h3>
              <span className="text-[10px] text-on-surface-variant font-medium">Taken 2h ago</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-error text-[16px]">favorite</span>
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant">Heart Rate</span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-xl font-bold text-on-surface">84</span>
                  <span className="text-[10px] text-on-surface-variant mb-1">bpm</span>
                </div>
              </div>
              
              <div className="p-3 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-[16px]">blood_pressure</span>
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant">BP</span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-xl font-bold text-on-surface">120/80</span>
                  <span className="text-[10px] text-on-surface-variant mb-1">mmHg</span>
                </div>
              </div>
              
              <div className="p-3 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-primary text-[16px]">water_drop</span>
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant">Hemoglobin</span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-xl font-bold text-on-surface">5.2</span>
                  <span className="text-[10px] text-on-surface-variant mb-1">g/dL</span>
                </div>
              </div>
              
              <div className="p-3 bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="material-symbols-outlined text-amber-600 text-[16px]">device_thermostat</span>
                  <span className="text-[10px] uppercase font-bold text-on-surface-variant">Temp</span>
                </div>
                <div className="flex items-end gap-1">
                  <span className="text-xl font-bold text-on-surface">98.6</span>
                  <span className="text-[10px] text-on-surface-variant mb-1">°F</span>
                </div>
              </div>
            </div>
            
            <button className="w-full mt-4 py-2 text-primary font-bold text-xs hover:underline transition-all">
              Record New Vitals
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Tabs & Content */}
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          {/* Tabs */}
          <div className="bg-surface-container-lowest rounded-2xl p-2 shadow-sm border border-outline-variant/15 flex overflow-x-auto no-scrollbar">
            <button className="px-6 py-2.5 rounded-xl bg-primary/10 text-primary font-bold text-sm whitespace-nowrap">Overview</button>
            <button className="px-6 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors whitespace-nowrap">Clinical Notes</button>
            <button className="px-6 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors whitespace-nowrap">Lab Results</button>
            <button className="px-6 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors whitespace-nowrap">Prescriptions</button>
            <button className="px-6 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-low font-medium text-sm transition-colors whitespace-nowrap">Appointments</button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {/* Active Conditions */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Active Conditions</h3>
                <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-error"></span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Severe Iron Deficiency Anemia</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Diagnosed: 12 Apr 2025 • Dr. R. Islam</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-amber-500"></span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Type 2 Diabetes Mellitus</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Diagnosed: 15 Jan 2020 • Dr. S. Rahman</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-teal-500"></span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Essential Hypertension</p>
                    <p className="text-[11px] text-on-surface-variant mt-0.5">Diagnosed: 03 Mar 2018 • Dr. K. Ahmed</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Current Medications */}
            <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest">Current Medications</h3>
                <button className="text-primary hover:bg-primary/10 p-1 rounded transition-colors"><span className="material-symbols-outlined">add</span></button>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">medication</span>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Metformin 500mg</p>
                      <p className="text-[10px] text-on-surface-variant">1 tablet twice daily with meals</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Active</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">medication</span>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Amlodipine 5mg</p>
                      <p className="text-[10px] text-on-surface-variant">1 tablet daily in the morning</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Active</span>
                </li>
                <li className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl border border-primary/20">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">vaccines</span>
                    <div>
                      <p className="text-sm font-bold text-on-surface">Ferric Carboxymaltose (IV)</p>
                      <p className="text-[10px] text-on-surface-variant">Pending administration</p>
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">Pending</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Timeline */}
          <div className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm border border-outline-variant/15 flex-1">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-widest mb-6">Clinical Timeline</h3>
            
            <div className="relative pl-6 border-l-2 border-surface-container-high space-y-8">
              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-sm"></div>
                <div className="bg-surface-container-low p-4 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-on-surface">Outpatient Visit</h4>
                    <span className="text-[10px] font-mono text-on-surface-variant">12 Apr 2025, 10:15 AM</span>
                  </div>
                  <p className="text-xs text-on-surface-variant mb-3">Patient presented with extreme fatigue, shortness of breath on exertion, and pallor. Ordered urgent CBC and iron panel.</p>
                  <div className="flex items-center gap-2">
                    <img className="w-5 h-5 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_9dPLA7v3SI6eJoeG88VR2XUXbN6XaiZO32MBtHC23UdECFFNLtQQawBmJPjQfZs5iwhPw0SJHLOJYq-GMZNNUc-PH5_kEj5iw7vNjCDAA8txd7vUCSgp98inZxO8R0dPs9jrnvcOUNmE-W5oqfzsQJ3KRbKaZcx2MZy71J67OSpR6UqnEX-wgN8DKtQC-RuF3LVIrHQx8v4ta60L9E28LX9yu0TUM-JkN4SPnd3Gi0L8fcvRRwMrNlp1Q2aWtOnckljItERYe37V" alt="Dr. Islam" />
                    <span className="text-[10px] font-medium text-on-surface-variant">Dr. Rafiqul Islam</span>
                  </div>
                </div>
              </div>
              
              {/* Timeline Item 3 */}
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 bg-slate-300 rounded-full border-4 border-white shadow-sm"></div>
                <div className="bg-surface-container-low p-4 rounded-xl opacity-70">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-bold text-on-surface">Routine Diabetes Follow-up</h4>
                    <span className="text-[10px] font-mono text-on-surface-variant">15 Jan 2025</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">HbA1c at 7.2%. Adjusted diet plan. Medications continued as before.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
