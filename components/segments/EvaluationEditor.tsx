'use client';

import { EvaluationSegment, SegmentActivity } from '@/types/agenda';

interface EvaluationEditorProps {
  segment: EvaluationSegment;
  onUpdate: (segment: EvaluationSegment) => void;
}

export default function EvaluationEditor({ segment, onUpdate }: EvaluationEditorProps) {
  const updateField = (field: keyof EvaluationSegment, value: any) => {
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

  const inputClass = 'w-full px-6 py-6 text-[17px] border-2 border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors bg-white placeholder:text-gray-400';
  const labelClass = 'block text-[15px] font-medium text-gray-700 mb-4';

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <label className={labelClass}>Start Time</label>
          <input
            type="time"
            value={segment.startTime}
            onChange={(e) => updateField('startTime', e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>General Evaluator</label>
          <input
            type="text"
            value={segment.generalEvaluator}
            onChange={(e) => updateField('generalEvaluator', e.target.value)}
            placeholder="e.g., TM Noora Qassim"
            className={inputClass}
          />
        </div>
      </div>

      <div className="border-t-2 border-gray-200 pt-16">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-xl font-semibold text-gray-900">Evaluation Activities</h3>
          <button
            onClick={addActivity}
            className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
          >
            Add Activity
          </button>
        </div>
        
        <div className="space-y-12">
          {segment.activities.map((activity, index) => (
            <div key={activity.id} className="border-2 border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-gray-500">Activity {index + 1}</span>
                <button
                  onClick={() => removeActivity(activity.id)}
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                >
                  Remove
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <label className={labelClass}>Time <span className="text-gray-400 text-sm font-normal">(optional)</span></label>
                  <input
                    type="time"
                    value={activity.time}
                    onChange={(e) => updateActivity(activity.id, 'time', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Role</label>
                  <input
                    type="text"
                    value={activity.description}
                    onChange={(e) => updateActivity(activity.id, 'description', e.target.value)}
                    placeholder="e.g., Timer, Evaluator 1"
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
            <div className="text-center py-20 border-2 border-dashed border-gray-300">
              <p className="text-gray-500 mb-6 text-[15px]">No activities added yet</p>
              <button
                onClick={addActivity}
                className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
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