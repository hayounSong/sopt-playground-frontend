export const COFFECHAT_SAMPLE_DATA = {
  coffeeChatList: [
    {
      memberId: 6,
      bio: '놀기 상담',
      topicTypeList: ['직무 전문성', '커리어'],
      profileImage: null,
      name: '이솝트',
      career: '아직 없어요',
      organization: '서울대학교',
      companyJob: null,
      soptActivities: ['35기 기획'],
    },
    {
      memberId: 4,
      bio: '솝트 활동 상담',
      topicTypeList: ['이력서/자소서'],
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//dev/image/project/2e41c0b4-abe5-4aaa-be5d-39b5a5d51a63-스크린샷 2022-11-02 오후 9.16.25.png',
      name: '이정민',
      career: '미들 (4-8년)',
      organization: '우아한형제들',
      companyJob: '프론트엔드 개발',
      soptActivities: [
        '27기 디자인',
        '30기 미디어 팀장',
        '30기 미디어 팀장',
        '27기 기획',
        '30기 미디어 팀장',
        '30기 미디어 팀장',
      ],
    },
    {
      memberId: 3,
      bio: '디자인 커리어 상담',
      topicTypeList: ['포트폴리오'],
      profileImage: null,
      name: '김솝트',
      career: '미들 (4-8년)',
      organization: 'Google Korea',
      companyJob: '디자인',
      soptActivities: ['28기 기획'],
    },
    {
      memberId: 3,
      bio: '디자인 커리어 상담',
      topicTypeList: ['포트폴리오'],
      profileImage: null,
      name: '김솝트',
      career: '미들 (4-8년)',
      organization: '네이버',
      companyJob: '백엔드 개발',
      soptActivities: ['35기 기획', '28기 기획'],
    },
    {
      memberId: 2,
      bio: '기획 커리어 상담',
      topicTypeList: ['커리어'],
      profileImage: null,
      name: '박솝트',
      career: '시니어 (9년 이상)',
      organization: '국민대학교',

      companyJob: null,
      soptActivities: ['29기 기획', '29기 기획'],
    },
    {
      memberId: 1,
      bio: '백엔드 커리어 상담',
      topicTypeList: ['창업'],
      profileImage:
        'https://s3.ap-northeast-2.amazonaws.com/sopt-makers-internal//dev/image/project/d06f0b1d-0f1f-4d2f-8d4a-1145074c3acd-Screenshot 2023-03-05 at 4.30.18 PM.png',
      name: '송정우',
      career: '주니어 (0-3년)',
      organization: '솝트대학교',
      companyJob: null,
      soptActivities: [
        '28기 서버 파트장',
        '27기 서버',
        '29기 안드로이드',
        '30기 안드로이드 파트장\n\n',
        '28기 서버 파트장',
      ],
    },
  ],
};
export const categoryList = {
  categoryList: [
    {
      categoryName: '전체',
      icon: '/icons/logo/coffeechatCategory/ic_default.svg',
    },
    {
      categoryName: 'SOPT 활동',
      icon: '/icons/logo/coffeechatCategory/ic_sopt.svg',
    },
    {
      categoryName: '기획',
      icon: '/icons/logo/coffeechatCategory/ic_plan.svg',
    },
    {
      categoryName: '디자인',
      icon: '/icons/logo/coffeechatCategory/ic_design.svg',
    },
    {
      categoryName: '프론트엔드',
      icon: '/icons/logo/coffeechatCategory/ic_frontend.svg',
    },
    {
      categoryName: '백엔드',
      icon: '/icons/logo/coffeechatCategory/ic_backend.svg',
    },
    {
      categoryName: '앱 개발',
      icon: '/icons/logo/coffeechatCategory/ic_app.svg',
    },
    {
      categoryName: '기타',
      icon: '/icons/logo/coffeechatCategory/ic_etc.svg',
    },
  ],
};

export const TOPIC_FILTER_OPTIONS = [
  {
    label: '전체',
    value: 1,
  },
  {
    label: '창업',
    value: 2,
  },
  {
    label: '네트워킹',
    value: 3,
  },
  {
    label: '커리어',
    value: 4,
  },
  {
    label: '포트폴리오',
    value: 5,
  },
  {
    label: '이력서/자소서',
    value: 6,
  },
  {
    label: '면접',
    value: 7,
  },
  {
    label: '직무 전문성',
    value: 8,
  },
  {
    label: '프로젝트',
    value: 9,
  },
  {
    label: '자기계발',
    value: 10,
  },
  {
    label: '기타',
    value: 11,
  },
];

export const CAREER_FILTER_OPTIONS = [
  {
    label: '전체',
    value: 1,
  },
  {
    label: '아직 없음',
    value: 2,
  },
  {
    label: '인턴',
    value: 3,
  },
  {
    label: '주니어 (0-3년)',
    value: 4,
  },
  {
    label: '미들 (4-8년)',
    value: 5,
  },
  {
    label: '시니어 (9년 이상)',
    value: 6,
  },
  {
    label: '창업 중',
    value: 7,
  },
];

export const PART_FILTER_OPTIONS = [
  {
    label: '전체',
    value: 1,
  },
  {
    label: '기획',
    value: 2,
  },
  {
    label: '디자인',
    value: 3,
  },
  {
    label: '안드로이드',
    value: 4,
  },
  {
    label: 'iOS',
    value: 5,
  },
  {
    label: '웹',
    value: 6,
  },
  {
    label: '서버',
    value: 7,
  },
];

export const SECTION_FILTER_OPTIONS = [
  {
    label: '전체',
    value: 1,
  },
  {
    label: 'SOPT 활동',
    value: 2,
  },
  {
    label: '기획',
    value: 3,
  },
  {
    label: '디자인',
    value: 4,
  },
  {
    label: '프론트',
    value: 5,
  },
  {
    label: '백엔드',
    value: 6,
  },
  {
    label: '앱 개발',
    value: 7,
  },
  {
    label: '기타',
    value: 8,
  },
];
