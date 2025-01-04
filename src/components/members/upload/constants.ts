import { DefaultValues } from 'react-hook-form';

import { MemberUploadForm } from '@/components/members/upload/types';

export const DEFAULT_CAREER = { title: '', companyName: '', isCurrent: false, startDate: '', endDate: '' } as const;
export const DEFAULT_ACTIVITY = { generation: '', part: '', team: '' };
export const DEFAULT_LINK = { title: '', url: '' };
export const DEFAULT_FAVOR = {
  sweetAndSourPork: null,
  mintChocolate: null,
  alcohol: null,
  peach: null,
  fishBread: null,
  tteokbokki: null,
};

export const MEMBER_DEFAULT_VALUES: DefaultValues<MemberUploadForm> = {
  profileImage: '',
  name: '',
  birthday: { year: '', month: '', day: '' },
  phone: '',
  email: '',
  address: '',
  university: '',
  major: '',
  introduction: '',
  skill: '',
  links: [DEFAULT_LINK],
  activities: [DEFAULT_ACTIVITY],
  allowOfficial: false,
  isPhoneBlind: false,
  careers: [DEFAULT_CAREER],
  mbti: null,
  favor: { peach: null, alcohol: null, fishBread: null, tteokbokki: null, sweetAndSourPork: null, mintChocolate: null },
};

export const PARTS = [
  {
    value: '기획',
    label: '기획',
  },
  {
    value: '디자인',
    label: '디자인',
  },
  {
    value: '서버',
    label: '서버',
  },
  {
    value: '안드로이드',
    label: '안드로이드',
  },
  {
    value: '웹',
    label: '웹',
  },
  {
    value: 'iOS',
    label: 'iOS',
  },
  {
    value: '회장',
    label: '회장',
  },
  {
    value: '부회장',
    label: '부회장',
  },
  {
    value: '총무',
    label: '총무',
  },
  {
    value: '운영 팀장',
    label: '운영 팀장',
  },
  {
    value: '미디어 팀장',
    label: '미디어 팀장',
  },
  {
    value: '기획 파트장',
    label: '기획 파트장',
  },
  {
    value: '디자인 파트장',
    label: '디자인 파트장',
  },
  {
    value: '서버 파트장',
    label: '서버 파트장',
  },
  {
    value: '웹 파트장',
    label: '웹 파트장',
  },
  {
    value: '안드로이드 파트장',
    label: '안드로이드 파트장',
  },
  {
    value: 'iOS 파트장',
    label: 'iOS 파트장',
  },
  {
    value: '메이커스 리드',
    label: '메이커스 리드',
  },
];

export const TEAMS = [
  {
    value: '',
    label: '해당없음',
  },
  {
    value: '운영팀',
    label: '운영팀',
  },
  {
    value: '미디어팀',
    label: '미디어팀',
  },
];

export const LINK_TITLES = ['Facebook', 'Instagram', 'LinkedIn', 'GitHub', 'Behance'];

export const DEFAULT_DATE = '1970-01-01';

export const SOJU_CAPACITY_RANGE = ['못마셔요', '0.5병', '1병', '1.5병', '2병', '2.5병', '3병 이상'] as const;

export const MBTI_INDICATORS = ['E', 'I', 'N', 'S', 'F', 'T', 'P', 'J'] as const;
