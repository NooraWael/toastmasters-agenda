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

  const inputClass = 'w-full px-6 py-6 text-[17px] border-2 border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors bg-white placeholder:text-gray-400';
  const labelClass = 'block text-[15px] font-medium text-gray-700 mb-4';
  const sectionClass = 'mb-20';
  const sectionTitleClass = 'text-2xl font-semibold text-gray-900 mb-3';
  const sectionSubtitleClass = 'text-[15px] text-gray-500 mb-12';

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-4xl font-semibold text-gray-900 mb-3">Agenda Builder</h1>
          <p className="text-[17px] text-gray-500">Create your Toastmasters meeting agenda</p>
        </div>

        {/* Club Information */}
        <section className={sectionClass}>
          <h2 className={sectionTitleClass}>Club Information</h2>
          <p className={sectionSubtitleClass}>Club name, supporter, and logos</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

        {/* Meeting Details */}
        <section className={sectionClass}>
          <h2 className={sectionTitleClass}>Meeting Details</h2>
          <p className={sectionSubtitleClass}>Date, time, location, and theme</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
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

          <div className="mb-12">
            <label className={labelClass}>Location</label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => updateField('location', e.target.value)}
              className={inputClass}
              placeholder="Meeting venue"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

        {/* Executive Committee */}
        <section className={sectionClass}>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className={sectionTitleClass}>Executive Committee</h2>
              <p className={sectionSubtitleClass}>Leadership team and officers</p>
            </div>
            <button
              onClick={addExecutiveMember}
              className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
            >
              Add Member
            </button>
          </div>

          <div className="space-y-8">
            {data.executiveCommittee.map((member, index) => (
              <div key={member.id} className="border-2 border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-500">Member {index + 1}</span>
                  <button
                    onClick={() => removeExecutiveMember(member.id)}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <div className="text-center py-20 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 mb-6 text-[15px]">No members added yet</p>
                <button
                  onClick={addExecutiveMember}
                  className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
                >
                  Add First Member
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Role Players */}
        <section className={sectionClass}>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className={sectionTitleClass}>Role Players</h2>
              <p className={sectionSubtitleClass}>TMOD, Timer, Grammarian, and others</p>
            </div>
            <button
              onClick={addRolePlayer}
              className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
            >
              Add Role
            </button>
          </div>

          <div className="space-y-8">
            {data.rolePlayers.map((role, index) => (
              <div key={role.id} className="border-2 border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-500">Role {index + 1}</span>
                  <button
                    onClick={() => removeRolePlayer(role.id)}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <div className="text-center py-20 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 mb-6 text-[15px]">No roles added yet</p>
                <button
                  onClick={addRolePlayer}
                  className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
                >
                  Add First Role
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Opening Sequence */}
        <section className={sectionClass}>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className={sectionTitleClass}>Opening Sequence</h2>
              <p className={sectionSubtitleClass}>Welcome and opening activities</p>
            </div>
            <button
              onClick={addOpeningItem}
              className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
            >
              Add Item
            </button>
          </div>

          <div className="space-y-8">
            {data.openingItems.map((item, index) => (
              <div key={item.id} className="border-2 border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-500">Item {index + 1}</span>
                  <button
                    onClick={() => removeOpeningItem(item.id)}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              <div className="text-center py-20 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 mb-6 text-[15px]">No items added yet</p>
                <button
                  onClick={addOpeningItem}
                  className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
                >
                  Add First Item
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Meeting Segments */}
        <section className={sectionClass}>
          <div className="flex items-end justify-between mb-12">
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
              className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors cursor-pointer border-none"
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

          <div className="space-y-8">
            {sortedSegments.map((segment, index) => (
              <div key={segment.id} className="border-2 border-gray-200">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium">
                        #{segment.order}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900">{getSegmentTitle(segment.type)}</h3>
                      {segment.startTime && (
                        <span className="text-[15px] text-gray-500">{segment.startTime}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => moveSegment(segment.id, 'up')}
                        disabled={index === 0}
                        className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => moveSegment(segment.id, 'down')}
                        disabled={index === sortedSegments.length - 1}
                        className="p-3 hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => setEditingSegmentId(editingSegmentId === segment.id ? null : segment.id)}
                        className="px-6 py-3 text-[15px] font-medium text-gray-900 hover:bg-gray-100 transition-colors"
                      >
                        {editingSegmentId === segment.id ? 'Close' : 'Edit'}
                      </button>
                      <button
                        onClick={() => removeSegment(segment.id)}
                        className="p-3 text-gray-500 hover:text-red-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {editingSegmentId === segment.id && (
                    <div className="mt-8 pt-8 border-t-2 border-gray-200">
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
              <div className="text-center py-20 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 mb-6 text-[15px]">No segments added yet</p>
              </div>
            )}
          </div>
        </section>

        {/* Club Team */}
        <section className={sectionClass}>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className={sectionTitleClass}>Club Team</h2>
              <p className={sectionSubtitleClass}>Mentors and counselors</p>
            </div>
            <button
              onClick={addClubTeamMember}
              className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
            >
              Add Member
            </button>
          </div>

          <div className="space-y-8">
            {data.clubTeam.map((member, index) => (
              <div key={member.id} className="border-2 border-gray-200 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-gray-500">Member {index + 1}</span>
                  <button
                    onClick={() => removeClubTeamMember(member.id)}
                    className="text-sm text-gray-500 hover:text-red-600 transition-colors font-medium"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              <div className="text-center py-20 border-2 border-dashed border-gray-300">
                <p className="text-gray-500 mb-6 text-[15px]">No members added yet</p>
                <button
                  onClick={addClubTeamMember}
                  className="px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-none hover:bg-gray-800 transition-colors"
                >
                  Add First Member
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Mission Statement */}
        <section className={sectionClass}>
          <h2 className={sectionTitleClass}>Mission Statement</h2>
          <p className={sectionSubtitleClass}>Club mission and values</p>
          
          <div>
            <label className={labelClass}>Club Mission Statement</label>
            <textarea
              value={data.clubMission}
              onChange={(e) => updateField('clubMission', e.target.value)}
              rows={8}
              className="w-full px-6 py-6 text-[17px] border-2 border-gray-200 rounded-none focus:outline-none focus:border-gray-400 transition-colors resize-none bg-white placeholder:text-gray-400 leading-relaxed"
              placeholder="Enter your club's mission statement..."
            />
            <p className="mt-4 text-sm text-gray-500">
              {data.clubMission.length} characters
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}