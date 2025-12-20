export type Lang = 'en' | 'ar' | 'hi';

export type Translations = {
  labels: {
    clubInfoTitle: string;
    clubInfoSubtitle: string;
    clubName: string;
    supportedBy: string;
    supporterLogo: string;
    meetingDetailsTitle: string;
    meetingDetailsSubtitle: string;
    meetingNumber: string;
    meetingDate: string;
    startTime: string;
    endTime: string;
    location: string;
    theme: string;
    project: string;
    timingCriteria: string;
    timingTitles: {
      iceBreaker: string;
      preparedSpeeches: string;
      workshops: string;
      evaluations: string;
      tableTopics: string;
    };
    clubTeam: string;
    clubMission: string;
    wordOfDay: string;
    executiveCommitteeTitle: string;
    executiveCommitteeSubtitle: string;
    rolePlayersTitle: string;
    rolePlayersSubtitle: string;
    openingSequenceTitle: string;
    openingSequenceSubtitle: string;
    meetingSegmentsTitle: string;
    preparedSpeeches: string;
    tableTopics: string;
    break: string;
    evaluation: string;
    adjournment: string;
    generalEvaluator: string;
    description: string;
    person: string;
    duration: string;
    title: string;
    level: string;
    evaluator: string;
    speakerName: string;
    speechTitle: string;
    tableTopicsMaster: string;
    optional: string;
    addMember: string;
    addRole: string;
    addSpeaker: string;
    addActivity: string;
    noItems: string;
    addFirst: string;
  };
  preview: {
    agenda: string;
    meetingNumberShort: string;
    meetingDate: string;
    meetingCommencement: string;
    meetingAdjournment: string;
    location: string;
    executiveCommittee: string;
    rolePlayers: string;
    openingSequence: string;
    supportedBy: string;
    clubMission: string;
  };
};

export const translations: Record<Lang, Translations> = {
  en: {
    labels: {
      clubInfoTitle: 'Club Information',
      clubInfoSubtitle: 'Club name, supporter, and logos',
      clubName: 'Club Name',
      supportedBy: 'Supported By',
      supporterLogo: 'Supporter Logo',
      meetingDetailsTitle: 'Meeting Details',
      meetingDetailsSubtitle: 'Date, time, location, and theme',
      meetingNumber: 'Meeting Number',
      meetingDate: 'Meeting Date',
      startTime: 'Start Time',
      endTime: 'End Time',
      location: 'Location',
      theme: 'Theme',
    wordOfDay: 'Word of the Day',
    project: 'Project',
    timingCriteria: 'Timing Criteria',
    clubTeam: 'Club Team',
    clubMission: 'Club Mission',
    executiveCommitteeTitle: 'Executive Committee',
      executiveCommitteeSubtitle: 'Leadership team and officers',
      rolePlayersTitle: 'Role Players',
      rolePlayersSubtitle: 'TMOD, Timer, Grammarian, and others',
      openingSequenceTitle: 'Opening Sequence',
      openingSequenceSubtitle: 'Opening items and speakers',
      meetingSegmentsTitle: 'Meeting Segments',
      preparedSpeeches: 'Prepared Speeches',
      tableTopics: 'Table Topics',
      break: 'Break',
      evaluation: 'Evaluation Segment',
      adjournment: 'Meeting Adjournment',
      generalEvaluator: 'General Evaluator',
      description: 'Description',
      person: 'Person',
      duration: 'Duration',
      title: 'Title',
      level: 'Level',
      evaluator: 'Evaluator',
      speakerName: 'Speaker Name',
      speechTitle: 'Speech Title',
      tableTopicsMaster: 'Table Topics Master',
      project: 'Project',
      timingCriteria: 'Timing Criteria',
      timingTitles: {
        iceBreaker: 'Ice-Breaker',
        preparedSpeeches: 'Prepared Speeches',
        workshops: 'Workshops/Trainings',
        evaluations: 'Evaluations',
        tableTopics: 'Table Topic Speeches',
      },
      clubTeam: 'Club Team',
      clubMission: 'Club Mission',
      optional: '(optional)',
      addMember: 'Add Member',
      addRole: 'Add Role',
      addSpeaker: 'Add Speaker',
      addActivity: 'Add Activity',
      noItems: 'No items added yet',
    addFirst: 'Add First',
    },
    preview: {
      agenda: 'Agenda',
      meetingNumberShort: 'Meeting #',
      meetingDate: 'Meeting Date',
      meetingCommencement: 'Meeting Commencement',
    meetingAdjournment: 'Meeting Adjournment',
    location: 'Location',
    executiveCommittee: 'Executive Committee',
    rolePlayers: 'Role Players',
    openingSequence: 'Opening Sequence',
    supportedBy: 'Supported by',
    clubMission: 'Club Mission',
  },
},
  ar: {
    labels: {
      clubInfoTitle: 'معلومات النادي',
      clubInfoSubtitle: 'اسم النادي، الراعي، والشعارات',
      clubName: 'اسم النادي',
      supportedBy: 'بدعم من',
      supporterLogo: 'شعار الداعم',
      meetingDetailsTitle: 'تفاصيل الاجتماع',
      meetingDetailsSubtitle: 'التاريخ، الوقت، الموقع، والموضوع',
      meetingNumber: 'رقم الاجتماع',
      meetingDate: 'تاريخ الاجتماع',
      startTime: 'وقت البداية',
      endTime: 'وقت الانتهاء',
      location: 'الموقع',
      theme: 'موضوع الاجتماع',
      project: 'المشروع',
      timingCriteria: 'معايير التوقيت',
      clubTeam: 'فريق النادي',
      clubMission: 'رسالة النادي',
      wordOfDay: 'كلمة اليوم',
      executiveCommitteeTitle: 'اللجنة التنفيذية',
      executiveCommitteeSubtitle: 'فريق القيادة والضباط',
      rolePlayersTitle: 'المشاركون بالأدوار',
      rolePlayersSubtitle: 'مدير الاجتماع، الموقت، النحوي، وغيرهم',
      openingSequenceTitle: 'الافتتاح',
      openingSequenceSubtitle: 'عناصر الافتتاح والمتحدثون',
      meetingSegmentsTitle: 'فقرات الاجتماع',
      preparedSpeeches: 'خطب معدة',
      tableTopics: 'خطب ارتجالية',
      break: 'استراحة',
      evaluation: 'فقرة التقييم',
      adjournment: 'اختتام الاجتماع',
      generalEvaluator: 'المقيّم العام',
      description: 'الوصف',
      person: 'الشخص',
      duration: 'المدة',
      title: 'العنوان',
      level: 'المستوى',
      evaluator: 'المقيّم',
      speakerName: 'اسم المتحدث',
      speechTitle: 'عنوان الخطاب',
      tableTopicsMaster: 'مسؤول الارتجال',
      project: 'المشروع',
      timingCriteria: 'معايير التوقيت',
      timingTitles: {
        iceBreaker: 'كسر الجليد',
        preparedSpeeches: 'خطب معدة',
        workshops: 'ورش/تدريبات',
        evaluations: 'التقييمات',
        tableTopics: 'خطب المواضيع',
      },
      clubTeam: 'فريق النادي',
      clubMission: 'رسالة النادي',
      optional: '(اختياري)',
      addMember: 'إضافة عضو',
      addRole: 'إضافة دور',
      addSpeaker: 'إضافة متحدث',
      addActivity: 'إضافة نشاط',
      noItems: 'لا توجد عناصر بعد',
      addFirst: 'أضف الأول',
    },
    preview: {
      agenda: 'جدول الاجتماع',
      meetingNumberShort: 'رقم الاجتماع',
      meetingDate: 'تاريخ الاجتماع',
      meetingCommencement: 'بداية الاجتماع',
    meetingAdjournment: 'انتهاء الاجتماع',
    location: 'الموقع',
    executiveCommittee: 'اللجنة التنفيذية',
    rolePlayers: 'المشاركون بالأدوار',
    openingSequence: 'الافتتاح',
    supportedBy: 'بدعم من',
    clubMission: 'رسالة النادي',
  },
},
  hi: {
    labels: {
      clubInfoTitle: 'क्लब जानकारी',
      clubInfoSubtitle: 'क्लब नाम, समर्थक, और लोगो',
      clubName: 'क्लब का नाम',
      supportedBy: 'समर्थित द्वारा',
      supporterLogo: 'समर्थक लोगो',
      meetingDetailsTitle: 'मीटिंग विवरण',
      meetingDetailsSubtitle: 'तारीख, समय, स्थान, और थीम',
      meetingNumber: 'मीटिंग संख्या',
      meetingDate: 'मीटिंग तिथि',
      startTime: 'प्रारंभ समय',
      endTime: 'समापन समय',
      location: 'स्थान',
      theme: 'थीम',
      project: 'प्रोजेक्ट',
      timingCriteria: 'समय मानदंड',
      clubTeam: 'क्लब टीम',
      clubMission: 'क्लब मिशन',
      wordOfDay: 'दिन का शब्द',
      executiveCommitteeTitle: 'कार्यकारी समिति',
      executiveCommitteeSubtitle: 'नेतृत्व टीम और अधिकारी',
      rolePlayersTitle: 'भूमिका निभाने वाले',
      rolePlayersSubtitle: 'TMOD, टाइमर, ग्रामरियन, आदि',
      openingSequenceTitle: 'उद्घाटन क्रम',
      openingSequenceSubtitle: 'उद्घाटन आइटम और वक्ता',
      meetingSegmentsTitle: 'मीटिंग खंड',
      preparedSpeeches: 'तैयार भाषण',
      tableTopics: 'तालिका विषय',
      break: 'विराम',
      evaluation: 'मूल्यांकन खंड',
      adjournment: 'समापन',
      generalEvaluator: 'मुख्य मूल्यांकनकर्ता',
      description: 'विवरण',
      person: 'व्यक्ति',
      duration: 'अवधि',
      title: 'शीर्षक',
      level: 'स्तर',
      evaluator: 'मूल्यांकनकर्ता',
      speakerName: 'वक्ता का नाम',
      speechTitle: 'भाषण का शीर्षक',
      tableTopicsMaster: 'टेबल टॉपिक्स मास्टर',
      project: 'प्रोजेक्ट',
      timingCriteria: 'समय मानदंड',
      timingTitles: {
        iceBreaker: 'आइस-ब्रेकर',
        preparedSpeeches: 'तैयार भाषण',
        workshops: 'कार्यशाला/प्रशिक्षण',
        evaluations: 'मूल्यांकन',
        tableTopics: 'टेबल टॉपिक भाषण',
      },
      clubTeam: 'क्लब टीम',
      clubMission: 'क्लब मिशन',
      optional: '(वैकल्पिक)',
      addMember: 'सदस्य जोड़ें',
      addRole: 'भूमिका जोड़ें',
      addSpeaker: 'वक्ता जोड़ें',
      addActivity: 'गतिविधि जोड़ें',
      noItems: 'अभी तक कोई प्रविष्टि नहीं',
      addFirst: 'पहला जोड़ें',
    },
    preview: {
      agenda: 'एजेंडा',
      meetingNumberShort: 'मीटिंग #',
      meetingDate: 'मीटिंग तिथि',
      meetingCommencement: 'मीटिंग आरंभ',
    meetingAdjournment: 'मीटिंग समाप्ति',
    location: 'स्थान',
    executiveCommittee: 'कार्यकारी समिति',
    rolePlayers: 'भूमिका निभाने वाले',
    openingSequence: 'उद्घाटन क्रम',
    supportedBy: 'समर्थित द्वारा',
    clubMission: 'क्लब मिशन',
  },
},
};

export function getTranslations(lang: Lang): Translations {
  return translations[lang] ?? translations.en;
}
