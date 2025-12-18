import { AgendaData } from "@/types/agenda";

export const defaultAgendaData: AgendaData = {
  clubName: "REBOOT TOASTMASTER CLUB",
  clubSupporter: "REBOOT CODING INSTITUTE",
  clubLogo: undefined,
  supporterLogo: undefined,
  
  meetingNumber: "08",
  meetingDate: "2025-12-15",
  startTime: "16:30",
  endTime: "18:10",
  location: "Reboot Coding Institute, Seef",
  theme: "NATIONAL DAY",
  wordOfDay: "JOY",
  
  executiveCommittee: [
    { id: "1", role: "President", name: "TM Noora Qasim" },
    { id: "2", role: "VP Education", name: "TM Mohamed Alhabbash" },
    { id: "3", role: "VP Membership", name: "TM Sara Al Shamari" },
    { id: "4", role: "VP Public Relations", name: "TM Moataz Ibrahim" },
    { id: "5", role: "Secretary", name: "TM Reem Mohammed" },
    { id: "6", role: "Treasurer", name: "TM Abdelrahman Ahmed" },
    { id: "7", role: "Sergeant-at-Arms", name: "TM Mohammed Nader" },
  ],
  
  rolePlayers: [
    { id: "1", role: "TMOD", name: "TM Sara Al Shamari" },
    { id: "2", role: "TTM", name: "TM Abdelrahman Nasser" },
    { id: "3", role: "GE", name: "TM Noora Qassim" },
    { id: "4", role: "Timer", name: "TM Hussain Ali" },
    { id: "5", role: "Grammarian", name: "TM Layla Abdulla" },
  ],
  
  openingItems: [
    { id: "1", time: "04:00", item: "Networking", person: "Everyone" },
    { id: "2", time: "04:25", item: "Sergeant at Arms", person: "TM Mohammed Nader" },
    { id: "3", time: "04:30", item: "Presidential Address", person: "TM Noora Qasim" },
    { id: "4", time: "04:33", item: "Toastmaster of the Day (TMOD)", person: "TM Sara Al Shamari" },
  ],
  
  // New segment-based structure
  segments: [
    // Segment 1: Prepared Speeches
    {
      id: "seg-1",
      type: "prepared_speeches",
      startTime: "04:45",
      order: 1,
      speakers: [
        {
          id: "1",
          level: "LV1 P2",
          name: "TM Reem Mohamed",
          title: "You don't owe everyone a yes",
          evaluator: "TM Mohamed Nader"
        },
        {
          id: "2",
          level: "LV1 P1",
          name: "TM Motaz Ibrahim",
          title: "Breaking the silence",
          evaluator: "TM Mohamed Alhabbash"
        },
      ]
    },
    
    // Segment 2: Break
    {
      id: "seg-2",
      type: "break",
      startTime: "05:15",
      order: 2,
      title: "Prayer Break",
      duration: "15 Minute Break",
      description: "Enjoy your break - take a prayer break, enjoy a tea or coffee, mingle with other members and guests, and write a nice message for the role takers, speakers, and evaluators.",
    },
    
    // Segment 3: Table Topics
    {
      id: "seg-3",
      type: "table_topics",
      startTime: "05:30",
      order: 3,
      description: "Table Topics is a long-standing Toastmasters tradition intended to help members develop their ability to organize their thoughts quickly and respond to an impromptu question or topic.\n\n• Your response should express your thoughts clearly and succinctly, lasting one to two minutes.",
      tableTopicsMaster: "TM Abdelrahman Nasser"
    },
    
    // Segment 4: Evaluation
    {
      id: "seg-4",
      type: "evaluation",
      startTime: "05:50",
      order: 4,
      generalEvaluator: "TM Noora Qassim",
      activities: [
        { id: "eval-1", time: "", description: "Timer", person: "TM Hussain Ali" },
        { id: "eval-2", time: "", description: "Evaluator 1", person: "TM Mohamed Nader" },
        { id: "eval-3", time: "", description: "Evaluator 2", person: "TM Mohamed Alhabbash" },
        { id: "eval-4", time: "", description: "Listener", person: "TM Abdelrahman Ahmed" },
        { id: "eval-5", time: "", description: "Grammarian", person: "TM Layla Abdulla" },
        { id: "eval-6", time: "", description: "General Evaluation", person: "TM Noora Qassim" },
      ]
    },
    
    // Segment 5: Meeting Adjournment
    {
      id: "seg-5",
      type: "adjournment",
      startTime: "06:05",
      order: 5,
      activities: [
        { id: "adj-1", time: "06:05", description: "Awarding & Recognition", person: "TM Noora Qasim" },
        { id: "adj-2", time: "06:10", description: "Closing Remarks", person: "TM Noora Qasim" },
      ]
    }
  ],
  
  clubTeam: [
    { id: "1", role: "Club Counsellor", name: "Mona Alaqab, DTM" },
    { id: "2", role: "Club Mentor", name: "TM Abdalrahman Nasser" },
  ],
  
  // Static timing criteria (not editable in form)
  timingCriteria: [
    { category: "ICE-BREAKER", green: "4", yellow: "5", red: "6" },
    { category: "PREPARED SPEECHES", green: "5", yellow: "6", red: "7" },
    { category: "WORKSHOPS/TRAININGS", green: "12", yellow: "12.5", red: "15" },
    { category: "EVALUATIONS", green: "2", yellow: "2.5", red: "3" },
    { category: "TABLE TOPIC SPEECHES", green: "1", yellow: "1.5", red: "2" },
  ],
  
  clubMission: "To provide a supportive and positive learning environment in which individuals are empowered to develop oral communication and leadership skills, resulting in self-confidence and personal growth.",
};