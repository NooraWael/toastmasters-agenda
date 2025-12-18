'use client';

import { useState, useRef, ChangeEvent } from 'react';
import AgendaForm from '@/components/AgendaForm';
import AgendaPreview from '@/components/AgendaPreview';
import { defaultAgendaData } from '@/lib/DefaultData';
import { AgendaData } from '@/types/agenda';

export default function Home() {
  const [agendaData, setAgendaData] = useState<AgendaData>(defaultAgendaData);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleSaveData = () => {
    const dataStr = JSON.stringify(agendaData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `agenda-meeting-${agendaData.meetingNumber}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadData = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          setAgendaData({
            ...defaultAgendaData,
            ...data,
          });
        } catch (error) {
          console.error('Invalid agenda file loaded', error);
          alert('Invalid file format');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f6fb] text-slate-900">
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-black tracking-wide text-slate-900 uppercase">Toastmasters Agenda Generator</h1>
              <p className="text-sm text-slate-500 mt-1">Live form and preview side by side</p>
            </div>
            <div className="flex gap-3 flex-wrap justify-end">
              <button
                onClick={handleSaveData}
                className="px-5 py-2.5 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition shadow-sm"
              >
                Save Data
              </button>
              <label className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-900 hover:text-white transition cursor-pointer shadow-sm">
                Load Data
                <input
                  type="file"
                  accept=".json"
                  onChange={handleLoadData}
                  className="hidden"
                />
              </label>
              <button
                onClick={handleExport}
                className="px-5 py-2.5 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-900 transition shadow-sm"
              >
                Print/Export PDF
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 items-start">
          <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 border border-slate-200 max-h-[calc(100vh)] overflow-y-auto no-print">
            <AgendaForm data={agendaData} onChange={setAgendaData} />
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6 border border-slate-200 xl:sticky xl:top-6">
            <div ref={previewRef} className="print-content">
              <AgendaPreview data={agendaData} />
            </div>
          </div>
        </div>
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .print-content,
          .print-content * {
            visibility: visible;
          }
          .print-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          header,
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
