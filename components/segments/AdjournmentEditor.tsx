'use client';

import { AdjournmentSegment, SegmentActivity } from '@/types/agenda';

interface AdjournmentEditorProps {
  segment: AdjournmentSegment;
  onUpdate: (segment: AdjournmentSegment) => void;
}

export default function AdjournmentEditor({ segment, onUpdate }: AdjournmentEditorProps) {
  const updateField = <K extends keyof AdjournmentSegment>(field: K, value: AdjournmentSegment[K]) => {
    onUpdate({ ...segment, [field]: value });
  };

  const addActivity = () => {
    const newActivity: SegmentActivity = {
      id: Date.now().toString(),
      time: '',
      description: '',
      person: '',
    };
    updateField('activities', [...segment.activities, newActivity]);
  };

  const updateActivity = (id: string, field: keyof SegmentActivity, value: string) => {
    const updated = segment.activities.map(a =>
      a.id === id ? { ...a, [field]: value } : a
    );
    updateField('activities', updated);
  };

  const removeActivity = (id: string) => {
    updateField('activities', segment.activities.filter(a => a.id !== id));
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

      <div className="border-t border-slate-200 pt-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold text-slate-900">Closing Activities</h3>
          <button
            onClick={addActivity}
            className="px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            Add Activity
          </button>
        </div>
        
        <div className="space-y-6">
          {segment.activities.map((activity, index) => (
            <div key={activity.id} className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-600">Activity {index + 1}</span>
                <button
                  onClick={() => removeActivity(activity.id)}
                  className="text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div>
                  <label className={labelClass}>Time</label>
                  <input
                    type="time"
                    value={activity.time}
                    onChange={(e) => updateActivity(activity.id, 'time', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Activity</label>
                  <input
                    type="text"
                    value={activity.description}
                    onChange={(e) => updateActivity(activity.id, 'description', e.target.value)}
                    placeholder="e.g., Awarding & Recognition"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Person</label>
                  <input
                    type="text"
                    value={activity.person}
                    onChange={(e) => updateActivity(activity.id, 'person', e.target.value)}
                    placeholder="Name"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          ))}

          {segment.activities.length === 0 && (
            <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white">
              <p className="text-slate-500 mb-4 text-base">No activities added yet</p>
              <button
                onClick={addActivity}
                className="px-5 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Add First Activity
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
