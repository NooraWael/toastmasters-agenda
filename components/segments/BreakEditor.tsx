'use client';

import { BreakSegment } from '@/types/agenda';

interface BreakEditorProps {
  segment: BreakSegment;
  onUpdate: (segment: BreakSegment) => void;
}

export default function BreakEditor({ segment, onUpdate }: BreakEditorProps) {
  const updateField = <K extends keyof BreakSegment>(field: K, value: BreakSegment[K]) => {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
        <div>
          <label className={labelClass}>Break Title</label>
          <input
            type="text"
            value={segment.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="Enter break name"
            className={inputClass}
          />
          <p className="mt-4 text-sm text-gray-500">e.g., Prayer Break, Coffee Break</p>
        </div>

        <div>
          <label className={labelClass}>Duration</label>
          <input
            type="text"
            value={segment.duration}
            onChange={(e) => updateField('duration', e.target.value)}
            placeholder="Enter duration"
            className={inputClass}
          />
          <p className="mt-4 text-sm text-gray-500">e.g., 15 Minutes, 20 Minutes</p>
        </div>
      </div>

      <div>
        <label className={labelClass}>
          Description <span className="text-gray-400 text-sm font-normal">(optional)</span>
        </label>
        <textarea
          value={segment.description}
          onChange={(e) => updateField('description', e.target.value)}
          rows={8}
          placeholder="What should attendees do during this break? Add any special instructions or notes here..."
          className={`${inputClass} resize-none leading-relaxed min-h-[140px]`}
        />
        <p className="mt-3 text-sm text-slate-500">{segment.description.length} characters</p>
      </div>
    </div>
  );
}
