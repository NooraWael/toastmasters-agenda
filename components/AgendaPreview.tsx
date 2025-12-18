'use client';

import Image from 'next/image';
import {
  AgendaData,
  Segment,
  PreparedSpeechesSegment,
  TableTopicsSegment,
  BreakSegment,
  EvaluationSegment,
  AdjournmentSegment,
  SegmentActivity,
  Speaker,
} from '@/types/agenda';

interface AgendaPreviewProps {
  data: AgendaData;
}

export default function AgendaPreview({ data }: AgendaPreviewProps) {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return {
      day: dayNames[date.getDay()],
      date: date.getDate(),
      month: monthNames[date.getMonth()],
      year: date.getFullYear(),
    };
  };

  const formatTime = (time: string) => {
    if (!time) return '';
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}`;
  };

  const dateInfo = formatDate(data.meetingDate);
  const supporterName = data.clubSupporter?.trim() || '';
  const hasSupporter = supporterName.length > 0;
  const sortedSegments = [...data.segments].sort((a, b) => a.order - b.order);

  // Render segment based on type
  const renderSegment = (segment: Segment) => {
    switch (segment.type) {
      case 'prepared_speeches':
        return renderPreparedSpeeches(segment);
      case 'table_topics':
        return renderTableTopics(segment);
      case 'break':
        return renderBreak(segment);
      case 'evaluation':
        return renderEvaluation(segment);
      case 'adjournment':
        return renderAdjournment(segment);
      default:
        return null;
    }
  };

  const renderPreparedSpeeches = (segment: PreparedSpeechesSegment) => (
    <div key={segment.id}>
      <div style={{ 
        background: 'radial-gradient(circle, #781327 0%, #3b0104 100%)',
        color: '#f2df74',
        padding: '4px 12px',
        fontWeight: 900,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontSize: '8.5px',
        textAlign: 'center',
        textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
        letterSpacing: '0em',
        lineHeight: '1.3'
      }}>
        Prepared Speeches {segment.startTime && `• ${formatTime(segment.startTime)}`}
      </div>
      {/* Header Row */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '60px 1fr 1.3fr 1fr', 
        background: 'linear-gradient(90deg, #006094 0%, #014165 100%)', 
        color: '#fff', 
        fontWeight: 700, 
        fontSize: '8px', 
        textTransform: 'uppercase'
      }}>
        <div style={{ padding: '6px 8px', borderRight: '0.5px solid rgba(255,255,255,0.3)' }}>Project</div>
        <div style={{ padding: '6px 8px', borderRight: '0.5px solid rgba(255,255,255,0.3)' }}>Speaker</div>
        <div style={{ padding: '6px 8px', borderRight: '0.5px solid rgba(255,255,255,0.3)' }}>Speech Title</div>
        <div style={{ padding: '6px 8px' }}>Evaluator</div>
      </div>
      {/* Speaker Rows */}
      {segment.speakers.map((speaker: Speaker) => (
        <div key={speaker.id} style={{ 
          display: 'grid', 
          gridTemplateColumns: '60px 1fr 1.3fr 1fr', 
          borderTop: '0.5px solid #fff',
          alignItems: 'center'
        }}>
          <div style={{ 
            background: '#a9b2b1',
            color: '#004165', 
            fontWeight: 700, 
            fontSize: '9.5px',
            padding: '8px',
            borderRight: '0.5px solid #fff'
          }}>
            {speaker.level}
          </div>
          <div style={{ 
            background: '#d4d8d8', 
            color: '#004165', 
            fontWeight: 700, 
            fontSize: '9.5px',
            padding: '8px',
            borderRight: '0.5px solid #fff'
          }}>
            {speaker.name}
          </div>
          <div style={{ 
            background: '#d4d8d8', 
            color: '#004165', 
            fontWeight: 700, 
            fontSize: '9.5px',
            padding: '8px',
            borderRight: '0.5px solid #fff'
          }}>
            {speaker.title}
          </div>
          <div style={{ 
            background: '#efefef', 
            color: '#004165', 
            fontWeight: 700, 
            fontSize: '8.5px',
            padding: '8px'
          }}>
            {speaker.evaluator}
          </div>
        </div>
      ))}
    </div>
  );

  const renderTableTopics = (segment: TableTopicsSegment) => (
    <div key={segment.id}>
      <div style={{ 
        background: 'radial-gradient(circle, #781327 0%, #3b0104 100%)',
        color: '#f2df74',
        padding: '4px 12px',
        fontWeight: 900,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontSize: '8.5px',
        textAlign: 'center',
        textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
        letterSpacing: '0em',
        lineHeight: '1.3'
      }}>
        Impromptu Speeches {segment.startTime && `• ${formatTime(segment.startTime)}`}
      </div>
      <div style={{ 
        background: '#d4d8d8', 
        padding: '8px 12px', 
        display: 'flex', 
        gap: '12px',
        alignItems: 'flex-start'
      }}>
        <div style={{ 
          background: '#a9b2b1', 
          color: '#004165', 
          padding: '10px 8px', 
          fontWeight: 700, 
          fontSize: '9.5px', 
          textAlign: 'center', 
          minWidth: '60px', 
          textTransform: 'uppercase', 
          lineHeight: '1.2'
        }}>
          Table<br />Topics<br />Master
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ 
            fontSize: '9.5px', 
            color: '#004165', 
            fontWeight: 700,
            marginBottom: '6px'
          }}>
            {segment.tableTopicsMaster}
          </div>
          <div style={{ 
            fontSize: '9.5px', 
            color: '#004165', 
            lineHeight: '1.35'
          }}>
            {segment.description}
          </div>
        </div>
      </div>
    </div>
  );

  const renderBreak = (segment: BreakSegment) => (
    <div key={segment.id}>
      <div style={{ 
        background: 'radial-gradient(circle, #781327 0%, #3b0104 100%)',
        color: '#f2df74',
        padding: '4px 12px',
        fontWeight: 900,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontSize: '8.5px',
        textAlign: 'center',
        textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
        letterSpacing: '0em',
        lineHeight: '1.3'
      }}>
        {segment.title} {segment.startTime && `• ${formatTime(segment.startTime)}`}
      </div>
      <div style={{ 
        background: '#d4d8d8', 
        padding: '8px 12px', 
        display: 'flex', 
        gap: '12px',
        alignItems: 'flex-start'
      }}>
        <div style={{ 
          background: '#a9b2b1', 
          color: '#004165', 
          padding: '10px 8px', 
          fontWeight: 800, 
          fontSize: '9px', 
          textAlign: 'center', 
          minWidth: '70px', 
          textTransform: 'uppercase',
          lineHeight: '1.15',
          display: 'grid',
          gap: '4px'
        }}>
          <span style={{ fontSize: '10px' }}>{formatTime(segment.startTime)}</span>
          <span style={{ fontWeight: 700, fontSize: '8.5px', letterSpacing: '0.03em' }}>
            {segment.duration}
          </span>
        </div>
        <div style={{ 
          flex: 1, 
          fontSize: '9.5px', 
          color: '#004165', 
          lineHeight: '1.35'
        }}>
          {segment.description}
          <br /><br />
          • Kindly be seated 2 minutes before we begin.
        </div>
      </div>
    </div>
  );

  const renderEvaluation = (segment: EvaluationSegment) => (
    <div key={segment.id}>
      <div style={{ 
        background: 'radial-gradient(circle, #781327 0%, #3b0104 100%)',
        color: '#f2df74',
        padding: '4px 12px',
        fontWeight: 900,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontSize: '8.5px',
        textAlign: 'center',
        textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
        letterSpacing: '0em',
        lineHeight: '1.3'
      }}>
        Evaluation Segment {segment.startTime && `• ${formatTime(segment.startTime)}`}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '55px 1fr' }}>
        {/* GE column spanning full height */}
        <div style={{ 
          background: '#a9b2b1',
          color: '#004165', 
          fontWeight: 700, 
          fontSize: '9.5px', 
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          borderRight: '1px solid #fff'
        }}>
          GE
        </div>
        
        {/* Right side with all activities */}
        <div>
          {segment.activities.map((activity: SegmentActivity, idx: number) => (
            <div key={activity.id} style={{ 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              background: idx % 2 === 0 ? '#d4d8d8' : '#fff', 
              borderTop: idx > 0 ? '0.5px solid #fff' : 'none'
            }}>
              <div style={{ 
                color: '#004165', 
                fontWeight: 700, 
                fontSize: '9.5px',
                padding: '8px'
              }}>
                {activity.description}
              </div>
              <div style={{ 
                color: '#004165', 
                fontWeight: 700, 
                fontSize: '8.5px',
                padding: '8px',
                borderLeft: '0.5px solid #fff'
              }}>
                {activity.person}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAdjournment = (segment: AdjournmentSegment) => (
    <div key={segment.id}>
      <div style={{ 
        background: 'radial-gradient(circle, #781327 0%, #3b0104 100%)',
        color: '#f2df74',
        padding: '4px 12px',
        fontWeight: 900,
        fontStyle: 'italic',
        textTransform: 'uppercase',
        fontSize: '8.5px',
        textAlign: 'center',
        textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
        letterSpacing: '0em',
        lineHeight: '1.3'
      }}>
        Meeting Adjournment {segment.startTime && `• ${formatTime(segment.startTime)}`}
      </div>
      {segment.activities.map((activity: SegmentActivity, idx: number) => (
        <div key={activity.id} style={{ 
          display: 'grid', 
          gridTemplateColumns: '44px 1fr', 
          background: idx % 2 === 0 ? '#a9b2b1' : '#d4d8d8', 
          padding: '4px 12px',
          alignItems: 'center',
          borderTop: idx > 0 ? '0.5px solid #fff' : 'none'
        }}>
          <div style={{ 
            color: '#004165', 
            fontWeight: 700, 
            fontSize: '9.5px'
          }}>
            {formatTime(activity.time)}
          </div>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 1fr'
          }}>
            <div style={{ 
              color: '#004165', 
              fontWeight: 700, 
              fontSize: '9.5px', 
              padding: '0 8px'
            }}>
              {activity.description}
            </div>
            <div style={{ 
              color: '#004165', 
              fontWeight: 700, 
              fontSize: '8.5px', 
              padding: '0 8px',
              borderLeft: '0.5px solid #fff'
            }}>
              {activity.person}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="agenda-wrapper">
      <div className="agenda-page">
        {/* Top decorative bar */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, #006094 0%, #014165 100%)' }} />
        
        {/* Header with soft gradient background */}
        <div style={{ 
          background: 'radial-gradient(circle at 20% 10%, #f5f5f5 0%, #cfd6d6 55%, #a9b2b1 100%)',
          padding: '14px 18px 12px'
        }}>
          {/* Top row: Logo, Club Name, and Info */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            {/* Left: Logo and Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '56px', height: '56px', flexShrink: 0 }}>
                {data.clubLogo ? (
                  <Image src={data.clubLogo} alt="Club Logo" width={56} height={56} style={{ objectFit: 'contain' }} />
                ) : (
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    background: '#fff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #004165'
                  }}>
                    <span style={{ color: '#004165', fontWeight: 900, fontSize: '18px' }}>TM</span>
                  </div>
                )}
              </div>
              <div>
                <h1 style={{ 
                  fontSize: '24px', 
                  fontWeight: 400, 
                  color: '#004165', 
                  textTransform: 'uppercase',
                  letterSpacing: '-0.037em',
                  lineHeight: '0.95',
                  marginBottom: '6px'
                }}>
                  {data.clubName}
                </h1>
                {hasSupporter && (
                  <p style={{ 
                    fontSize: '10.5px', 
                    color: '#000', 
                    textTransform: 'uppercase',
                    lineHeight: '1.15'
                  }}>
                    Supported by<br />{supporterName}
                  </p>
                )}
              </div>
            </div>

            {/* Right: Supporter Logo and Meeting Info */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              {data.supporterLogo && (
                <div style={{ width: '101px', height: '28px', flexShrink: 0 }}>
                  <Image 
                    src={data.supporterLogo} 
                    alt="Supporter Logo" 
                    width={101} 
                    height={28} 
                    style={{ objectFit: 'contain' }} 
                  />
                </div>
              )}
              <div style={{ 
                fontSize: '10px', 
                color: '#fff', 
                textAlign: 'right', 
                lineHeight: '1.35',
                letterSpacing: '0.05em'
              }}>
                <div>Meeting Commencement - {formatTime(data.startTime)}</div>
                <div>Meeting Adjournment - {formatTime(data.endTime)}</div>
                <div style={{ marginTop: '2px' }}>{data.location}</div>
              </div>
            </div>
          </div>

          {/* Date Info Bar */}
          <div style={{ 
            background: 'linear-gradient(90deg, #006094 0%, #014165 100%)',
            padding: '6px 14px',
            borderRadius: '2px',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '9px',
            color: '#fff',
            letterSpacing: '0.05em',
            lineHeight: '1.4',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div>
              <strong>{dateInfo.day}</strong><br />
              {dateInfo.date} {dateInfo.month} {dateInfo.year}
            </div>
            <div style={{ textAlign: 'center' }}>
              Meeting Commencement - {formatTime(data.startTime)}<br />
              Meeting Adjournment - {formatTime(data.endTime)}
            </div>
            <div style={{ textAlign: 'right' }}>
              {hasSupporter && (
                <>
                  {supporterName},<br />
                </>
              )}
              {data.location}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '25% 1fr', 
          padding: '10px 14px', 
          gap: '10px', 
          flex: 1 
        }}>
          
          {/* Left Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '9px' }}>
            
            {/* Executive Committee */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #006094 0%, #014165 100%)',
                color: '#f2df74',
                padding: '3px 6px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '7.5px',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3'
              }}>
                Executive Committee
              </div>
              {data.executiveCommittee.map((member, idx) => (
                <div key={member.id} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '55px 1fr',
                  borderTop: idx > 0 ? '1px solid #fff' : 'none'
                }}>
                  <div style={{ 
                    background: '#a9b2b1', 
                    color: '#004165', 
                    padding: '4px 3px', 
                    fontWeight: 700, 
                    fontSize: '7.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    lineHeight: '1.1'
                  }}>
                    {member.role.split(' ').join('\n')}
                  </div>
                  <div style={{ 
                    background: '#d4d8d8', 
                    color: '#004165', 
                    padding: '4px 6px', 
                    fontWeight: 700, 
                    fontSize: '8.5px',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: '1.2'
                  }}>
                    {member.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Role Players */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #006094 0%, #014165 100%)',
                color: '#f2df74',
                padding: '3px 6px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '7.5px',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3'
              }}>
                Role-Players
              </div>
              {data.rolePlayers.map((role, idx) => (
                <div key={role.id} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '55px 1fr',
                  borderTop: idx > 0 ? '1px solid #fff' : 'none'
                }}>
                  <div style={{ 
                    background: '#a9b2b1', 
                    color: '#004165', 
                    padding: '4px 3px', 
                    fontWeight: 700, 
                    fontSize: '6.5px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    {role.role}
                  </div>
                  <div style={{ 
                    background: '#d4d8d8', 
                    color: '#004165', 
                    padding: '4px 6px', 
                    fontWeight: 700, 
                    fontSize: '7.5px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    {role.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Timing Criteria */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #006094 0%, #014165 100%)',
                color: '#f2df74',
                padding: '3px 6px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '7.5px',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3'
              }}>
                Timing Criteria
              </div>
              {data.timingCriteria.map((timing, idx) => (
                <div key={timing.category} style={{ 
                  background: idx % 2 === 0 ? '#efefef' : '#fff', 
                  padding: '5px 6px'
                }}>
                  <div style={{ 
                    color: '#004165', 
                    padding: '2px 4px', 
                    fontWeight: 700, 
                    fontSize: '6px', 
                    textTransform: 'uppercase', 
                    marginBottom: '3px', 
                    display: 'inline-block',
                    lineHeight: '1'
                  }}>
                    {timing.category}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2px' }}>
                    <div style={{ 
                      background: '#00bf63', 
                      color: '#000', 
                      textAlign: 'center', 
                      padding: '3px 2px', 
                      fontSize: '6.5px', 
                      fontWeight: 700,
                      lineHeight: '1'
                    }}>
                      {timing.green}
                    </div>
                    <div style={{ 
                      background: '#ffde59', 
                      color: '#000', 
                      textAlign: 'center', 
                      padding: '3px 2px', 
                      fontSize: '6.5px', 
                      fontWeight: 700,
                      lineHeight: '1'
                    }}>
                      {timing.yellow}
                    </div>
                    <div style={{ 
                      background: '#ff3131', 
                      color: '#000', 
                      textAlign: 'center', 
                      padding: '3px 2px', 
                      fontSize: '6.5px', 
                      fontWeight: 700,
                      lineHeight: '1'
                    }}>
                      {timing.red}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Theme */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #006094 0%, #014165 100%)',
                color: '#f2df74',
                padding: '3px 6px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '7.5px',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3',
                textAlign: 'center'
              }}>
                Theme
              </div>
              <div style={{ 
                background: '#004165', 
                color: '#fff', 
                padding: '10px 6px', 
                textAlign: 'center', 
                fontWeight: 400, 
                fontSize: '10.5px', 
                textTransform: 'uppercase', 
                letterSpacing: '0em',
                lineHeight: '1.2'
              }}>
                {data.theme}
              </div>
            </div>

            {/* Meeting Number */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #006094 0%, #014165 100%)',
                color: '#f2df74',
                padding: '3px 6px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '7.5px',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3',
                textAlign: 'center'
              }}>
                Meeting #
              </div>
              <div style={{ 
                background: '#004165', 
                color: '#fff', 
                padding: '10px 6px', 
                textAlign: 'center', 
                fontWeight: 400, 
                fontSize: '15px', 
                letterSpacing: '0em'
              }}>
                {data.meetingNumber}
              </div>
            </div>

            {/* Word of the Day */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #006094 0%, #014165 100%)',
                color: '#f2df74',
                padding: '3px 6px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '7.5px',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3',
                textAlign: 'center'
              }}>
                Word of the Day
              </div>
              <div style={{ 
                background: '#a9b2b1', 
                color: '#004165', 
                padding: '8px 6px', 
                textAlign: 'center', 
                fontWeight: 400, 
                fontSize: '13px', 
                textTransform: 'uppercase',
                lineHeight: '1.2'
              }}>
                {data.wordOfDay}
              </div>
            </div>

            {/* Club Team */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #006094 0%, #014165 100%)',
                color: '#f2df74',
                padding: '3px 6px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '7.5px',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3',
                textAlign: 'center'
              }}>
                Reboot Club Team
              </div>
              {data.clubTeam.map((member, idx) => (
                <div key={member.id} style={{ 
                  background: idx % 2 === 0 ? '#efefef' : '#fff', 
                  padding: '5px 6px', 
                  textAlign: 'center', 
                  borderTop: idx > 0 ? '1px solid #e8e8e8' : 'none'
                }}>
                  <div style={{ 
                    fontWeight: 700, 
                    fontSize: '6.5px', 
                    textTransform: 'uppercase', 
                    color: '#004165', 
                    marginBottom: '2px',
                    lineHeight: '1.1'
                  }}>
                    {member.role}
                  </div>
                  <div style={{ 
                    fontWeight: 700, 
                    fontSize: '6.5px', 
                    color: '#004165',
                    lineHeight: '1.1'
                  }}>
                    {member.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '9px' }}>
            
            {/* Opening Items */}
            <div>
              <div style={{ 
                background: 'radial-gradient(circle, #781327 0%, #3b0104 100%)',
                color: '#f2df74',
                padding: '4px 12px',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '8.5px',
                textAlign: 'center',
                textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
                letterSpacing: '0em',
                lineHeight: '1.3'
              }}>
                Opening Sequence
              </div>
              {data.openingItems.map((item, idx) => (
                <div key={item.id} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '45px 1fr 1fr', 
                  background: idx % 2 === 0 ? '#a9b2b1' : '#d4d8d8', 
                  borderTop: idx > 0 ? '0.5px solid #fff' : 'none',
                  alignItems: 'center'
                }}>
                  <div style={{ 
                    color: '#004165', 
                    fontWeight: 700, 
                    fontSize: '9.5px',
                    padding: '4px 8px',
                    background: idx % 2 === 0 ? '#a9b2b1' : '#a9b2b1'
                  }}>
                    {formatTime(item.time)}
                  </div>
                  <div style={{ 
                    background: idx % 2 === 0 ? '#d4d8d8' : '#d4d8d8', 
                    color: '#004165', 
                    fontWeight: 700, 
                    fontSize: '9.5px', 
                    padding: '4px 8px'
                  }}>
                    {item.item}
                  </div>
                  <div style={{ 
                    background: '#efefef', 
                    color: '#004165', 
                    fontWeight: 700, 
                    fontSize: '8.5px', 
                    padding: '4px 8px'
                  }}>
                    {item.person}
                  </div>
                </div>
              ))}
            </div>

            {/* Dynamic Segments */}
            {sortedSegments.map(segment => renderSegment(segment))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          background: 'linear-gradient(90deg, #006094 0%, #014165 100%)', 
          color: '#fff', 
          padding: '6px 16px'
        }}>
          <div style={{ 
            fontWeight: 900,
            fontStyle: 'italic',
            textTransform: 'uppercase',
            fontSize: '7.5px',
            marginBottom: '3px',
            textShadow: '0 0.5px 3.75px rgba(0,0,0,0.6)',
            color: '#f2df74',
            letterSpacing: '0em'
          }}>
            Club Mission
          </div>
          <div style={{ 
            fontSize: '9.5px', 
            lineHeight: '1.35',
            fontWeight: 400
          }}>
            {data.clubMission}
          </div>
        </div>
      </div>
    </div>
  );
}
