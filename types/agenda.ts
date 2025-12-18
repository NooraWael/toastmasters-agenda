// Base interfaces that remain the same
export interface ExecutiveMember {
  id: string;
  role: string;
  name: string;
}

export interface RolePlayer {
  id: string;
  role: string;
  name: string;
}

export interface OpeningItem {
  id: string;
  time: string;
  item: string;
  person: string;
}

export interface Speaker {
  id: string;
  level: string;
  name: string;
  title: string;
  evaluator: string;
}

export interface ClubTeamMember {
  id: string;
  role: string;
  name: string;
}

export interface TimingCriteria {
  category: string;
  green: string;
  yellow: string;
  red: string;
}

// New: Activity within a segment
export interface SegmentActivity {
  id: string;
  time: string;
  description: string;
  person: string;
}

// New: Segment types
export type SegmentType = 
  | 'prepared_speeches' 
  | 'table_topics' 
  | 'break' 
  | 'evaluation'
  | 'adjournment';

// New: Base segment interface
export interface BaseSegment {
  id: string;
  type: SegmentType;
  startTime: string;
  order: number; // For ordering segments
}

// Prepared Speeches Segment
export interface PreparedSpeechesSegment extends BaseSegment {
  type: 'prepared_speeches';
  speakers: Speaker[];
}

// Table Topics Segment
export interface TableTopicsSegment extends BaseSegment {
  type: 'table_topics';
  description: string;
  tableTopicsMaster: string;
}

// Break Segment
export interface BreakSegment extends BaseSegment {
  type: 'break';
  title: string;
  duration: string;
  description: string;
}

// Evaluation Segment
export interface EvaluationSegment extends BaseSegment {
  type: 'evaluation';
  generalEvaluator: string;
  activities: SegmentActivity[]; // Timer, Evaluators, Listener, Grammarian, GE
}

// Meeting Adjournment Segment
export interface AdjournmentSegment extends BaseSegment {
  type: 'adjournment';
  activities: SegmentActivity[]; // Awarding & Recognition, Closing Remarks
}

// Union type for all segments
export type Segment = 
  | PreparedSpeechesSegment 
  | TableTopicsSegment 
  | BreakSegment 
  | EvaluationSegment
  | AdjournmentSegment;

// Main AgendaData interface
export interface AgendaData {
  // Club Info
  clubName: string;
  clubSupporter: string;
  clubLogo?: string;
  supporterLogo?: string;
  
  // Meeting Info
  meetingNumber: string;
  meetingDate: string;
  startTime: string;
  endTime: string;
  location: string;
  theme: string;
  wordOfDay: string;
  
  // People
  executiveCommittee: ExecutiveMember[];
  rolePlayers: RolePlayer[];
  openingItems: OpeningItem[];
  clubTeam: ClubTeamMember[];
  
  // Segments (ordered and flexible)
  segments: Segment[];
  
  // Timing Criteria (static, not editable)
  timingCriteria: TimingCriteria[];
  
  // Mission
  clubMission: string;
}