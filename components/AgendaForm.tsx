'use client';

import React, { useState } from 'react';
import { AgendaData, ExecutiveMember, RolePlayer, OpeningItem, ClubTeamMember, Segment } from '@/types/agenda';
import PreparedSpeechesEditor from './segments/PreparedSpeechesEditor';
import TableTopicsEditor from './segments/TableTopicsEditor';
import BreakEditor from './segments/BreakEditor';
import EvaluationEditor from './segments/EvaluationEditor';
import AdjournmentEditor from './segments/AdjournmentEditor';

interface AgendaFormProps {
  data: AgendaData;
  onChange: (data: AgendaData) => void;
}

export default function AgendaForm({ data, onChange }: AgendaFormProps) {
  const [editingSegmentId, setEditingSegmentId] = useState<string | null>(null);

  const updateField = <K extends keyof AgendaData>(field: K, value: AgendaData[K]) => {
    onChange({ ...data, [field]: value });
  };

  // Executive Committee handlers
  const addExecutiveMember = () => {
    const newMember: ExecutiveMember = {
      id: Date.now().toString(),
      role: '',
      name: '',
    };
    updateField('executiveCommittee', [...data.executiveCommittee, newMember]);
  };

  const updateExecutiveMember = (id: string, field: keyof ExecutiveMember, value: string) => {
    const updated = data.executiveCommittee.map(m =>
      m.id === id ? { ...m, [field]: value } : m
    );
    updateField('executiveCommittee', updated);
  };

  const removeExecutiveMember = (id: string) => {
    updateField('executiveCommittee', data.executiveCommittee.filter(m => m.id !== id));
  };

  // Role Players handlers
  const addRolePlayer = () => {
    const newRole: RolePlayer = {
      id: Date.now().toString(),
      role: '',
      name: '',
    };
    updateField('rolePlayers', [...data.rolePlayers, newRole]);
  };

  const updateRolePlayer = (id: string, field: keyof RolePlayer, value: string) => {
    const updated = data.rolePlayers.map(r =>
      r.id === id ? { ...r, [field]: value } : r
    );
    updateField('rolePlayers', updated);
  };

  const removeRolePlayer = (id: string) => {
    updateField('rolePlayers', data.rolePlayers.filter(r => r.id !== id));
  };

  // Opening Items handlers
  const addOpeningItem = () => {
    const newItem: OpeningItem = {
      id: Date.now().toString(),
      time: '',
      item: '',
      person: '',
    };
    updateField('openingItems', [...data.openingItems, newItem]);
  };

  const updateOpeningItem = (id: string, field: keyof OpeningItem, value: string) => {
    const updated = data.openingItems.map(i =>
      i.id === id ? { ...i, [field]: value } : i
    );
    updateField('openingItems', updated);
  };

  const removeOpeningItem = (id: string) => {
    updateField('openingItems', data.openingItems.filter(i => i.id !== id));
  };

  // Club Team handlers
  const addClubTeamMember = () => {
    const newMember: ClubTeamMember = {
      id: Date.now().toString(),
      role: '',
      name: '',
    };
    updateField('clubTeam', [...data.clubTeam, newMember]);
  };

  const updateClubTeamMember = (id: string, field: keyof ClubTeamMember, value: string) => {
    const updated = data.clubTeam.map(m =>
      m.id === id ? { ...m, [field]: value } : m
    );
    updateField('clubTeam', updated);
  };

  const removeClubTeamMember = (id: string) => {
    updateField('clubTeam', data.clubTeam.filter(m => m.id !== id));
  };

  // Segment handlers
  const updateSegment = (updatedSegment: Segment) => {
    const updated = data.segments.map(s =>
      s.id === updatedSegment.id ? updatedSegment : s
    );
    updateField('segments', updated);
  };

  const moveSegment = (segmentId: string, direction: 'up' | 'down') => {
    const sorted = [...data.segments].sort((a, b) => a.order - b.order);
    const index = sorted.findIndex(s => s.id === segmentId);
    
    if (direction === 'up' && index > 0) {
      const temp = sorted[index].order;
      sorted[index].order = sorted[index - 1].order;
      sorted[index - 1].order = temp;
    } else if (direction === 'down' && index < sorted.length - 1) {
      const temp = sorted[index].order;
      sorted[index].order = sorted[index + 1].order;
      sorted[index + 1].order = temp;
    }
    
    updateField('segments', sorted);
  };

  const addSegment = (type: Segment['type']) => {
    const maxOrder = Math.max(...data.segments.map(s => s.order), 0);
    
    let newSegment: Segment;
    
    switch (type) {
      case 'prepared_speeches':
        newSegment = {
          id: Date.now().toString(),
          type: 'prepared_speeches',
          startTime: '',
          order: maxOrder + 1,
          speakers: []
        };
        break;
      case 'table_topics':
        newSegment = {
          id: Date.now().toString(),
          type: 'table_topics',
          startTime: '',
          order: maxOrder + 1,
          description: '',
          tableTopicsMaster: ''
        };
        break;
      case 'break':
        newSegment = {
          id: Date.now().toString(),
          type: 'break',
          startTime: '',
          order: maxOrder + 1,
          title: 'Break',
          duration: '15 Minutes',
          description: ''
        };
        break;
      case 'evaluation':
        newSegment = {
          id: Date.now().toString(),
          type: 'evaluation',
          startTime: '',
          order: maxOrder + 1,
          generalEvaluator: '',
          activities: []
        };
        break;
      case 'adjournment':
        newSegment = {
          id: Date.now().toString(),
          type: 'adjournment',
          startTime: '',
          order: maxOrder + 1,
          activities: []
        };
        break;
    }
    
    updateField('segments', [...data.segments, newSegment]);
  };

  const removeSegment = (segmentId: string) => {
    updateField('segments', data.segments.filter(s => s.id !== segmentId));
  };

  const getSegmentTitle = (type: Segment['type']) => {
    const titles = {
      prepared_speeches: 'Prepared Speeches',
      table_topics: 'Table Topics',
      break: 'Break',
      evaluation: 'Evaluation Segment',
      adjournment: 'Meeting Adjournment'
    };
    return titles[type];
  };

  const sortedSegments = [...data.segments].sort((a, b) => a.order - b.order);

  const inputClass =
    'w-full rounded-[3px] bg-[#eff2f9] px-4 py-3 text-base font-medium text-slate-900 placeholder:text-slate-500 caret-[#1a91f0] border border-transparent focus:border-[#1a91f0] focus:ring-2 focus:ring-[#1a91f0]/20 focus:outline-none transition';
  const labelClass = 'block text-sm font-semibold text-slate-700 mb-2';
  const sectionClass = 'rounded-2xl bg-white shadow-sm border border-slate-200 px-12 py-12 md:px-16 md:py-16 space-y-8';
  const sectionTitleClass = 'text-2xl font-semibold text-slate-900 mb-2';
  const sectionSubtitleClass = 'text-base text-slate-500 mb-8';
  const sectionPadding = { padding: '32px' };
  const sectionWrapperClass = 'w-full px-6 sm:px-10 lg:px-12 max-w-4xl mx-auto';

  return (
    <div className="min-h-screen bg-[#f4f6fb]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-16 flex flex-col gap-20">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-slate-900">Agenda Builder</h1>
          <p className="text-base text-slate-500">Create your Toastmasters meeting agenda</p>
        </div>

        {/* Club Information */}
        <div className={sectionWrapperClass}>
          <section className={sectionClass} style={sectionPadding}>
            <h2 className={sectionTitleClass}>Club Information</h2>
            <p className={sectionSubtitleClass}>Club name, supporter, and logos</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <label className={labelClass}>Club Name</label>
                <input
                  type="text"
                  value={data.clubName}
                  onChange={(e) => updateField('clubName', e.target.value)}
                  className={inputClass}
                  placeholder="Enter club name"
                />
              </div>

              <div>
                <label className={labelClass}>Supported By</label>
                <input
                  type="text"
                  value={data.clubSupporter}
                  onChange={(e) => updateField('clubSupporter', e.target.value)}
                  className={inputClass}
                  placeholder="Sponsor or partner"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>Club Logo URL <span className="text-gray-400 text-sm font-normal">(optional)</span></label>
                <input
                  type="text"
                  value={data.clubLogo || ''}
                  onChange={(e) => updateField('clubLogo', e.target.value || undefined)}
                  className={inputClass}
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className={labelClass}>Supporter Logo URL <span className="text-gray-400 text-sm font-normal">(optional)</span></label>
                <input
                  type="text"
                  value={data.supporterLogo || ''}
                  onChange={(e) => updateField('supporterLogo', e.target.value || undefined)}
                  className={inputClass}
                  placeholder="https://..."
                />
              </div>
            </div>
          </section>
        </div>

        {/* Meeting Details */}
        <div className={sectionWrapperClass}>
          <section className={sectionClass} style={sectionPadding}>
            <h2 className={sectionTitleClass}>Meeting Details</h2>
            <p className={sectionSubtitleClass}>Date, time, location, and theme</p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <div>
                <label className={labelClass}>Meeting Number</label>
                <input
                  type="text"
                  value={data.meetingNumber}
                  onChange={(e) => updateField('meetingNumber', e.target.value)}
                  className={inputClass}
                  placeholder="e.g., 08"
                />
              </div>

              <div className="lg:col-span-2">
                <label className={labelClass}>Meeting Date</label>
                <input
                  type="date"
                  value={data.meetingDate}
                  onChange={(e) => updateField('meetingDate', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <label className={labelClass}>Start Time</label>
                <input
                  type="time"
                  value={data.startTime}
                  onChange={(e) => updateField('startTime', e.target.value)}
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>End Time</label>
                <input
                  type="time"
                  value={data.endTime}
                  onChange={(e) => updateField('endTime', e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-8">
              <label className={labelClass}>Location</label>
              <input
                type="text"
                value={data.location}
                onChange={(e) => updateField('location', e.target.value)}
                className={inputClass}
                placeholder="Meeting venue"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>Theme</label>
                <input
                  type="text"
                  value={data.theme}
                  onChange={(e) => updateField('theme', e.target.value)}
                  className={inputClass}
                  placeholder="e.g., National Day"
                />
              </div>

              <div>
                <label className={labelClass}>Word of the Day</label>
                <input
                  type="text"
                  value={data.wordOfDay}
                  onChange={(e) => updateField('wordOfDay', e.target.value)}
                  className={inputClass}
                  placeholder="e.g., Joy"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Executive Committee */}
        <div className={sectionWrapperClass}>
          <section className={`${sectionClass} mt-12`} style={sectionPadding}>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className={sectionTitleClass}>Executive Committee</h2>
                <p className={sectionSubtitleClass}>Leadership team and officers</p>
              </div>
              <button
                onClick={addExecutiveMember}
                className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Add Member
              </button>
            </div>

            <div className="space-y-6">
              {data.executiveCommittee.map((member, index) => (
                <div key={member.id} className="rounded-xl bg-[#f7f9fc] p-6 space-y-4 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">Member {index + 1}</span>
                    <button
                      onClick={() => removeExecutiveMember(member.id)}
                      className="text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Role</label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => updateExecutiveMember(member.id, 'role', e.target.value)}
                        className={inputClass}
                        placeholder="Role"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => updateExecutiveMember(member.id, 'name', e.target.value)}
                        className={inputClass}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {data.executiveCommittee.length === 0 && (
                <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white">
                  <p className="text-slate-500 mb-4 text-base">No members added yet</p>
                  <button
                    onClick={addExecutiveMember}
                    className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Add First Member
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Role Players */}
        <div className={sectionWrapperClass}>
          <section className={sectionClass} style={sectionPadding}>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className={sectionTitleClass}>Role Players</h2>
                <p className={sectionSubtitleClass}>TMOD, Timer, Grammarian, and others</p>
              </div>
              <button
                onClick={addRolePlayer}
                className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Add Role
              </button>
            </div>

            <div className="space-y-6">
              {data.rolePlayers.map((role, index) => (
                <div key={role.id} className="rounded-xl bg-[#f7f9fc] p-6 space-y-4 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">Role {index + 1}</span>
                    <button
                      onClick={() => removeRolePlayer(role.id)}
                      className="text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Role</label>
                      <input
                        type="text"
                        value={role.role}
                        onChange={(e) => updateRolePlayer(role.id, 'role', e.target.value)}
                        className={inputClass}
                        placeholder="Role"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Name</label>
                      <input
                        type="text"
                        value={role.name}
                        onChange={(e) => updateRolePlayer(role.id, 'name', e.target.value)}
                        className={inputClass}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {data.rolePlayers.length === 0 && (
                <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white">
                  <p className="text-slate-500 mb-4 text-base">No roles added yet</p>
                  <button
                    onClick={addRolePlayer}
                    className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Add First Role
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Opening Sequence */}
        <div className={sectionWrapperClass}>
          <section className={sectionClass} style={sectionPadding}>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className={sectionTitleClass}>Opening Sequence</h2>
                <p className={sectionSubtitleClass}>Welcome and opening activities</p>
              </div>
              <button
                onClick={addOpeningItem}
                className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Add Item
              </button>
            </div>

            <div className="space-y-6">
              {data.openingItems.map((item, index) => (
                <div key={item.id} className="rounded-xl bg-[#f7f9fc] p-6 space-y-4 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">Item {index + 1}</span>
                    <button
                      onClick={() => removeOpeningItem(item.id)}
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
                        value={item.time}
                        onChange={(e) => updateOpeningItem(item.id, 'time', e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Activity</label>
                      <input
                        type="text"
                        value={item.item}
                        onChange={(e) => updateOpeningItem(item.id, 'item', e.target.value)}
                        className={inputClass}
                        placeholder="Activity"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Person</label>
                      <input
                        type="text"
                        value={item.person}
                        onChange={(e) => updateOpeningItem(item.id, 'person', e.target.value)}
                        className={inputClass}
                        placeholder="Person"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {data.openingItems.length === 0 && (
                <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white">
                  <p className="text-slate-500 mb-4 text-base">No items added yet</p>
                  <button
                    onClick={addOpeningItem}
                    className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Add First Item
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Meeting Segments */}
        <div className={sectionWrapperClass}>
          <section className={sectionClass} style={sectionPadding}>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className={sectionTitleClass}>Meeting Segments</h2>
                <p className={sectionSubtitleClass}>Speeches, topics, breaks, evaluation</p>
              </div>
              <select
                onChange={(e) => {
                  if (e.target.value) {
                    addSegment(e.target.value as Segment['type']);
                    e.target.value = '';
                  }
                }}
                className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
                defaultValue=""
              >
                <option value="" disabled>Add Segment</option>
                <option value="prepared_speeches">Prepared Speeches</option>
                <option value="table_topics">Table Topics</option>
                <option value="break">Break</option>
                <option value="evaluation">Evaluation</option>
                <option value="adjournment">Adjournment</option>
              </select>
            </div>

            <div className="space-y-6">
              {sortedSegments.map((segment, index) => (
                <div key={segment.id} className="rounded-xl bg-white shadow-sm border border-slate-200">
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
                          #{segment.order}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-900">{getSegmentTitle(segment.type)}</h3>
                        {segment.startTime && (
                          <span className="text-sm text-slate-500">{segment.startTime}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => moveSegment(segment.id, 'up')}
                          disabled={index === 0}
                          className="p-2 rounded-md hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => moveSegment(segment.id, 'down')}
                          disabled={index === sortedSegments.length - 1}
                          className="p-2 rounded-md hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setEditingSegmentId(editingSegmentId === segment.id ? null : segment.id)}
                          className="px-4 py-2 rounded-md text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
                        >
                          {editingSegmentId === segment.id ? 'Close' : 'Edit'}
                        </button>
                        <button
                          onClick={() => removeSegment(segment.id)}
                          className="p-2 rounded-md text-slate-500 hover:text-red-600 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {editingSegmentId === segment.id && (
                      <div className="mt-6 pt-6 border-t border-slate-200">
                        {segment.type === 'prepared_speeches' && (
                          <PreparedSpeechesEditor segment={segment} onUpdate={updateSegment} />
                        )}
                        {segment.type === 'table_topics' && (
                          <TableTopicsEditor segment={segment} onUpdate={updateSegment} />
                        )}
                        {segment.type === 'break' && (
                          <BreakEditor segment={segment} onUpdate={updateSegment} />
                        )}
                        {segment.type === 'evaluation' && (
                          <EvaluationEditor segment={segment} onUpdate={updateSegment} />
                        )}
                        {segment.type === 'adjournment' && (
                          <AdjournmentEditor segment={segment} onUpdate={updateSegment} />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {data.segments.length === 0 && (
                <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white">
                  <p className="text-slate-500 mb-4 text-base">No segments added yet</p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Club Team */}
        <div className={sectionWrapperClass}>
          <section className={sectionClass} style={sectionPadding}>
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className={sectionTitleClass}>Club Team</h2>
                <p className={sectionSubtitleClass}>Mentors and counselors</p>
              </div>
              <button
                onClick={addClubTeamMember}
                className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
              >
                Add Member
              </button>
            </div>

            <div className="space-y-6">
              {data.clubTeam.map((member, index) => (
                <div key={member.id} className="rounded-xl bg-[#f7f9fc] p-6 space-y-4 shadow-sm border border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-600">Member {index + 1}</span>
                    <button
                      onClick={() => removeClubTeamMember(member.id)}
                      className="text-sm font-semibold text-slate-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>Role</label>
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => updateClubTeamMember(member.id, 'role', e.target.value)}
                        className={inputClass}
                        placeholder="Role"
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Name</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => updateClubTeamMember(member.id, 'name', e.target.value)}
                        className={inputClass}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                </div>
              ))}

              {data.clubTeam.length === 0 && (
                <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white">
                  <p className="text-slate-500 mb-4 text-base">No members added yet</p>
                  <button
                    onClick={addClubTeamMember}
                    className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                  >
                    Add First Member
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Mission Statement */}
        <div className={sectionWrapperClass}>
          <section className={sectionClass} style={sectionPadding}>
            <h2 className={sectionTitleClass}>Mission Statement</h2>
            <p className={sectionSubtitleClass}>Club mission and values</p>
            
            <div>
              <label className={labelClass}>Club Mission Statement</label>
              <textarea
                value={data.clubMission}
                onChange={(e) => updateField('clubMission', e.target.value)}
                rows={8}
                className={`${inputClass} resize-none leading-relaxed min-h-[160px]`}
                placeholder="Enter your club's mission statement..."
              />
              <p className="mt-3 text-sm text-slate-500">
                {data.clubMission.length} characters
              </p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
