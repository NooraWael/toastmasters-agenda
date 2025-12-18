'use client';

import { BreakSegment } from '@/types/agenda';

interface BreakEditorProps {
  segment: BreakSegment;
  onUpdate: (segment: BreakSegment) => void;
}

export default function BreakEditor({ segment, onUpdate }: BreakEditorProps) {
  const updateField = (field: keyof BreakSegment, value: any) => {
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
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
          className="w-full px-6 py-6 text-[17px] border-2 border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors resize-none bg-white placeholder:text-gray-400 leading-relaxed"
        />
        <p className="mt-4 text-sm text-gray-500">{segment.description.length} characters</p>
      </div>
    </div>
  );
}