'use client';

import { PreparedSpeechesSegment, Speaker } from '@/types/agenda';

interface PreparedSpeechesEditorProps {
  segment: PreparedSpeechesSegment;
  onUpdate: (segment: PreparedSpeechesSegment) => void;
}

export default function PreparedSpeechesEditor({ segment, onUpdate }: PreparedSpeechesEditorProps) {
  const updateField = (field: keyof PreparedSpeechesSegment, value: any) => {
    onUpdate({ ...segment, [field]: value });
  };

  const addSpeaker = () => {
    const newSpeaker: Speaker = {
      id: Date.now().toString(),
      level: '',
      name: '',
      title: '',
      evaluator: '',
    };
    updateField('speakers', [...segment.speakers, newSpeaker]);
  };

  const updateSpeaker = (id: string, field: keyof Speaker, value: string) => {
    const updated = segment.speakers.map(s =>
      s.id === id ? { ...s, [field]: value } : s
    );
    updateField('speakers', updated);
  };

  const removeSpeaker = (id: string) => {
    updateField('speakers', segment.speakers.filter(s => s.id !== id));
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

      <div className="border-t-2 border-gray-200 pt-16">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-xl font-semibold text-gray-900">Speakers</h3>
          <button
            onClick={addSpeaker}
            className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
          >
            Add Speaker
          </button>
        </div>
        
        <div className="space-y-12">
          {segment.speakers.map((speaker, index) => (
            <div key={speaker.id} className="border-2 border-gray-200 p-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-gray-500">Speaker {index + 1}</span>
                <button
                  onClick={() => removeSpeaker(speaker.id)}
                  className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                >
                  Remove
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Level</label>
                  <input
                    type="text"
                    value={speaker.level}
                    onChange={(e) => updateSpeaker(speaker.id, 'level', e.target.value)}
                    placeholder="e.g., LV1 P2"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Speaker Name</label>
                  <input
                    type="text"
                    value={speaker.name}
                    onChange={(e) => updateSpeaker(speaker.id, 'name', e.target.value)}
                    placeholder="Full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Speech Title</label>
                  <input
                    type="text"
                    value={speaker.title}
                    onChange={(e) => updateSpeaker(speaker.id, 'title', e.target.value)}
                    placeholder="Title of the speech"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Evaluator</label>
                  <input
                    type="text"
                    value={speaker.evaluator}
                    onChange={(e) => updateSpeaker(speaker.id, 'evaluator', e.target.value)}
                    placeholder="Evaluator name"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          ))}

          {segment.speakers.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-gray-300">
              <p className="text-gray-500 mb-6 text-[15px]">No speakers added yet</p>
              <button
                onClick={addSpeaker}
                className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
              >
                Add First Speaker
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}