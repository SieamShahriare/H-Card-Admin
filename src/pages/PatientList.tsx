import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PatientList() {
  const navigate = useNavigate();

  return (
    <div className="p-8 min-h-screen">
      {/* Header Section */}
      <section className="mb-10 flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[2.75rem] font-semibold text-on-surface leading-tight tracking-tight">All Patients</h1>
          <p className="text-on-surface-variant text-sm max-w-lg leading-relaxed">Central medical registry for Dhaka Medical College. Manage records, appointments, and diagnostic history.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-surface-container-highest text-primary font-medium text-sm rounded-md hover:bg-surface-container-high transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">ios_share</span>
            Export CSV
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white font-semibold text-sm rounded-md shadow-sm hover:opacity-90 transition-all flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
            + Register New Patient
          </button>
        </div>
      </section>

      {/* Search & Filter Card */}
      <div className="mb-8 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-[0_20px_40px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col gap-6">
          {/* Large Search */}
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant">search</span>
            <input 
              className="w-full pl-12 pr-4 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-on-surface-variant/60 font-medium transition-all" 
              placeholder="Search by name, ID, phone..." 
              type="text"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-high rounded-full">
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70">Blood Group</span>
              <select className="bg-transparent border-none p-0 text-sm font-semibold text-primary focus:ring-0 cursor-pointer outline-none">
                <option>All Groups</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB-</option>
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-high rounded-full">
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70">Age Range</span>
              <select className="bg-transparent border-none p-0 text-sm font-semibold text-primary focus:ring-0 cursor-pointer outline-none">
                <option>All Ages</option>
                <option>0 - 18</option>
                <option>19 - 45</option>
                <option>46 - 65</option>
                <option>65+</option>
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-high rounded-full">
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70">Gender</span>
              <select className="bg-transparent border-none p-0 text-sm font-semibold text-primary focus:ring-0 cursor-pointer outline-none">
                <option>All</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-surface-container-high rounded-full">
              <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70">Insurance Tier</span>
              <select className="bg-transparent border-none p-0 text-sm font-semibold text-primary focus:ring-0 cursor-pointer outline-none">
                <option>All Tiers</option>
                <option>Platinum</option>
                <option>Gold</option>
                <option>Silver</option>
              </select>
            </div>
            <button className="ml-auto text-sm text-on-surface-variant font-medium hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[18px]">filter_list_off</span>
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/15">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50">
              <th className="px-6 py-4 w-12">
                <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.04em] font-bold text-on-surface-variant">Patient Info</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.04em] font-bold text-on-surface-variant">Demographics</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.04em] font-bold text-on-surface-variant">Contact & Region</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.04em] font-bold text-on-surface-variant">Insurance</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.04em] font-bold text-on-surface-variant">Visit Timeline</th>
              <th className="px-6 py-4 text-[10px] uppercase tracking-[0.04em] font-bold text-on-surface-variant">Status</th>
              <th className="px-6 py-4 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-container-low">
            {/* Patient: Fatema Begum */}
            <tr 
              className="hover:bg-surface-container-low transition-colors duration-150 cursor-pointer"
              onClick={() => navigate('/patients/BD-2025-00142')}
            >
              <td className="px-6 py-5" onClick={e => e.stopPropagation()}>
                <input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  <img alt="Fatema Begum" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZP_UVm9rDci8aZIVkCNxU3TYXPv5LXmPtKV7sUKbivW47aWw3ILuhIWCdlnaDl_qF6P42yPrH7CXbu4QhVJs9U37nLiuIf9b3CsmUS_kLJrjtHMUzrSrx5jiY-FolHNoXG2Dw3Y9R6GXxHAx1GfqA0yGAjexLsjaPOY-pmWUYd5Ao0QhyE5wIEs0nOnxfBqe1lkSVYLkFia6nVUk7ndFmxn-edbdyNBV3LNaWbf-84CrtJOLGzvPEPjESdzLTfhpuDpKxT3N3IcW1" />
                  <div>
                    <p className="font-semibold text-on-surface tracking-tight">Fatema Begum</p>
                    <p className="font-mono text-[11px] text-on-surface-variant">DMCH-2024-8842</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">62 yrs • Female</p>
                <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-[10px] font-bold bg-primary/10 text-primary">B+ Group</span>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">+880 1711-223344</p>
                <p className="text-[11px] text-on-surface-variant">Dhanmondi, Dhaka</p>
              </td>
              <td className="px-6 py-5">
                <span className="px-3 py-1 bg-yellow-400/10 text-yellow-700 text-[10px] font-bold rounded-full uppercase">Gold Tier</span>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1">
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">history</span> 12 May 2024</p>
                  <p className="text-[11px] text-primary font-bold flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> In-Patient</p>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container/10 text-tertiary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container mr-2"></span>
                  Active
                </span>
              </td>
              <td className="px-6 py-5 text-right" onClick={e => e.stopPropagation()}>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
              </td>
            </tr>

            {/* Patient: Mohammad Hossain */}
            <tr className="hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
              <td className="px-6 py-5" onClick={e => e.stopPropagation()}>
                <input defaultChecked className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  <img alt="Mohammad Hossain" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClXEPo2rgOtvTulOEy_OZcnbOVrPfO7BJMxe1FBCrfS25FpvqLWNuNpYBti27hEGhCnZH_jal-b2Oik-NZePPWQMmU6IEFpl79yBtIlPnQtzPvcwXfHzTQyIS_8NrELdciADQ4Ir6rUu_7UR0Unhkm2W2yydRGtxXxtvv04PpUADqmRwwkKehBw6G_YaqSoe4RJe1_KpUHlAt850ckQwjH44lgP80zgIttKYxmKwdMYZ0ttempvs-rqdPIr51Opa4v0o8CBMNz-Yri" />
                  <div>
                    <p className="font-semibold text-on-surface tracking-tight">Mohammad Hossain</p>
                    <p className="font-mono text-[11px] text-on-surface-variant">DMCH-2024-9012</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">45 yrs • Male</p>
                <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-[10px] font-bold bg-primary/10 text-primary">A+ Group</span>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">+880 1812-445566</p>
                <p className="text-[11px] text-on-surface-variant">Uttara, Dhaka</p>
              </td>
              <td className="px-6 py-5">
                <span className="px-3 py-1 bg-slate-200 text-slate-700 text-[10px] font-bold rounded-full uppercase">Silver Tier</span>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1">
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">history</span> 28 May 2024</p>
                  <p className="text-[11px] text-on-surface-variant font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> 05 Jun 2024</p>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container/10 text-tertiary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container mr-2"></span>
                  Active
                </span>
              </td>
              <td className="px-6 py-5 text-right" onClick={e => e.stopPropagation()}>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
              </td>
            </tr>

            {/* Patient: Nasrin Akhter */}
            <tr className="hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
              <td className="px-6 py-5" onClick={e => e.stopPropagation()}>
                <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  <img alt="Nasrin Akhter" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYYOJd5WAKSwNEyBJ5nXQ67f2Os_4eQd-m9cTIF6l3ph6RL5U0KVqqCbKxlDmiOG5aIz8wewzSV4TRsJE8b5TLXewbq4cCtlUk52yKWBltEbgf5-iI2mB8jjTFDPLA8q0N8ofrQ2mT1JJavHV8GdhDSIoBnGanuJH5S8g85s-PG2eTaaX7Shmc0-DQFTKK1HC-XohFtIiA3ocGZnaa6HuLrMmNajVh73wu2ItaQiY7ZrJ_9jKxcuF-Jie29fFOhXOkfqNBqHBFGuZ6" />
                  <div>
                    <p className="font-semibold text-on-surface tracking-tight">Nasrin Akhter</p>
                    <p className="font-mono text-[11px] text-on-surface-variant">DMCH-2024-7711</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">29 yrs • Female</p>
                <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-[10px] font-bold bg-secondary/10 text-secondary">O+ Group</span>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">+880 1622-998877</p>
                <p className="text-[11px] text-on-surface-variant">Mirpur, Dhaka</p>
              </td>
              <td className="px-6 py-5">
                <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase">Platinum Tier</span>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1">
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">history</span> 15 Apr 2024</p>
                  <p className="text-[11px] text-on-surface-variant font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> 12 Jun 2024</p>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container/10 text-tertiary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container mr-2"></span>
                  Active
                </span>
              </td>
              <td className="px-6 py-5 text-right" onClick={e => e.stopPropagation()}>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
              </td>
            </tr>

            {/* Patient: Karim Uddin */}
            <tr className="hover:bg-surface-container-low transition-colors duration-150 cursor-pointer">
              <td className="px-6 py-5" onClick={e => e.stopPropagation()}>
                <input className="rounded border-outline-variant text-primary focus:ring-primary" type="checkbox" />
              </td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary font-bold text-xs">KU</div>
                  <div>
                    <p className="font-semibold text-on-surface tracking-tight">Karim Uddin</p>
                    <p className="font-mono text-[11px] text-on-surface-variant">DMCH-2024-5544</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">58 yrs • Male</p>
                <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-[10px] font-bold bg-primary/10 text-primary">AB- Group</span>
              </td>
              <td className="px-6 py-5">
                <p className="text-sm font-medium text-on-surface">+880 1511-332211</p>
                <p className="text-[11px] text-on-surface-variant">Banani, Dhaka</p>
              </td>
              <td className="px-6 py-5">
                <span className="px-3 py-1 bg-yellow-400/10 text-yellow-700 text-[10px] font-bold rounded-full uppercase">Gold Tier</span>
              </td>
              <td className="px-6 py-5">
                <div className="space-y-1">
                  <p className="text-[11px] text-on-surface-variant flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">history</span> 02 May 2024</p>
                  <p className="text-[11px] text-on-surface-variant font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">event</span> 15 Jul 2024</p>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-tertiary-container/10 text-tertiary-container">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container mr-2"></span>
                  Active
                </span>
              </td>
              <td className="px-6 py-5 text-right" onClick={e => e.stopPropagation()}>
                <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Bulk Actions Floating Bar */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 ml-[120px] bg-inverse-surface text-inverse-on-surface px-8 py-4 rounded-full shadow-2xl flex items-center gap-10 z-50 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold">2</span>
          <p className="text-sm font-medium tracking-tight">2 patients selected</p>
        </div>
        <div className="h-6 w-[1px] bg-white/20"></div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
            Book Appointment
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[20px]">export_notes</span>
            Export
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold text-error hover:opacity-80 transition-opacity ml-4">
            <span className="material-symbols-outlined text-[20px]">delete</span>
            Remove
          </button>
        </div>
        <button className="ml-4 p-1 hover:bg-white/10 rounded-full transition-colors">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>
    </div>
  );
}
