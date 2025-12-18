'use client';

import { TableTopicsSegment } from '@/types/agenda';

interface TableTopicsEditorProps {
  segment: TableTopicsSegment;
  onUpdate: (segment: TableTopicsSegment) => void;
}

export default function TableTopicsEditor({ segment, onUpdate }: TableTopicsEditorProps) {
  const updateField = (field: keyof TableTopicsSegment, value: any) => {
    onUpdate({ ...segment, [field]: value });
  };

  const inputClass = 'w-full px-6 py-6 text-[17px] border-2 border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors bg-white placeholder:text-gray-400';
  const labelClass = 'block text-[15px] font-medium text-gray-700 mb-4';

  return (
    <div>
      <div className="mb-16">
        <label className={labelClass}>Start Time</label>
        <input
          type="time"
          value={segment.startTime}
          onChange={(e) => updateField('startTime', e.target.value)}
          className="w-full max-w-sm px-6 py-6 text-[17px] border-2 border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors bg-white"
        />
      </div>

      <div className="mb-16">
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
          className="w-full px-6 py-6 text-[17px] border-2 border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors resize-none bg-white placeholder:text-gray-400 leading-relaxed"
        />
      </div>
    </div>
  );
}