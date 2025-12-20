'use client';

import { PreparedSpeechesSegment, Speaker } from '@/types/agenda';
import { Translations } from '@/lib/i18n';

interface PreparedSpeechesEditorProps {
  segment: PreparedSpeechesSegment;
  onUpdate: (segment: PreparedSpeechesSegment) => void;
  t: Translations['labels'];
}

export default function PreparedSpeechesEditor({ segment, onUpdate, t }: PreparedSpeechesEditorProps) {
  const updateField = <K extends keyof PreparedSpeechesSegment>(field: K, value: PreparedSpeechesSegment[K]) => {
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

  const inputClass =
    'w-full rounded-[3px] bg-[#eff2f9] px-4 py-3 text-base font-medium text-slate-900 placeholder:text-slate-500 caret-[#1a91f0] border border-transparent focus:border-[#1a91f0] focus:ring-2 focus:ring-[#1a91f0]/20 focus:outline-none transition';
  const labelClass = 'block text-sm font-semibold text-slate-700 mb-2';

  return (
    <div>
      <div className="mb-10">
        <label className={labelClass}>{t.startTime}</label>
        <input
          type="time"
          value={segment.startTime}
          onChange={(e) => updateField('startTime', e.target.value)}
          className={`${inputClass} max-w-sm`}
        />
      </div>

      <div className="border-t border-slate-200 pt-10">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold text-slate-900">Speakers</h3>
          <button
            onClick={addSpeaker}
            className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
          >
            {t.addSpeaker}
          </button>
        </div>
        
        <div className="space-y-6">
          {segment.speakers.map((speaker, index) => (
            <div key={speaker.id} className="rounded-xl border border-slate-200 bg-[#f7f9fc] p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-slate-600">Speaker {index + 1}</span>
                <button
                  onClick={() => removeSpeaker(speaker.id)}
                  className="text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>{t.level}</label>
                  <input
                    type="text"
                    value={speaker.level}
                    onChange={(e) => updateSpeaker(speaker.id, 'level', e.target.value)}
                    placeholder="e.g., LV1 P2"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.speakerName}</label>
                  <input
                    type="text"
                    value={speaker.name}
                    onChange={(e) => updateSpeaker(speaker.id, 'name', e.target.value)}
                    placeholder="Full name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.speechTitle}</label>
                  <input
                    type="text"
                    value={speaker.title}
                    onChange={(e) => updateSpeaker(speaker.id, 'title', e.target.value)}
                    placeholder="Title of the speech"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>{t.evaluator}</label>
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
            <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white">
              <p className="text-slate-500 mb-4 text-base">{t.noItems}</p>
              <button
                onClick={addSpeaker}
                className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                {t.addFirst} {t.addSpeaker}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
