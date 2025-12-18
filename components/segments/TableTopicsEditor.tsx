'use client';

import { TableTopicsSegment } from '@/types/agenda';

interface TableTopicsEditorProps {
  segment: TableTopicsSegment;
  onUpdate: (segment: TableTopicsSegment) => void;
}

export default function TableTopicsEditor({ segment, onUpdate }: TableTopicsEditorProps) {
  const updateField = <K extends keyof TableTopicsSegment>(field: K, value: TableTopicsSegment[K]) => {
    onUpdate({ ...segment, [field]: value });
  };

  const inputClass =
    'w-full rounded-[3px] bg-[#eff2f9] px-4 py-3 text-base font-medium text-slate-900 placeholder:text-slate-500 caret-[#1a91f0] border border-transparent focus:border-[#1a91f0] focus:ring-2 focus:ring-[#1a91f0]/20 focus:outline-none transition';
  const labelClass = 'block text-sm font-semibold text-slate-700 mb-2';

  return (
    <div>
      <div className="mb-10">
        <label className={labelClass}>Start Time</label>
        <input
          type="time"
          value={segment.startTime}
          onChange={(e) => updateField('startTime', e.target.value)}
          className={`${inputClass} max-w-sm`}
        />
      </div>

      <div className="mb-10">
        <label className={labelClass}>Table Topics Master</label>
        <input
          type="text"
          value={segment.tableTopicsMaster}
          onChange={(e) => updateField('tableTopicsMaster', e.target.value)}
          placeholder="e.g., TM Abdelrahman Nasser"
          className={inputClass}
        />
      </div>

      <div>
        <label className={labelClass}>
          Description <span className="text-gray-400 text-sm font-normal">(optional)</span>
        </label>
        <textarea
          value={segment.description}
          onChange={(e) => updateField('description', e.target.value)}
          rows={8}
          placeholder="Describe the Table Topics segment and guidelines..."
          className={`${inputClass} resize-none leading-relaxed min-h-[140px]`}
        />
      </div>
    </div>
  );
}
