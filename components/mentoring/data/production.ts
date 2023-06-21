import { Mentor, Mentoring, MentoringData } from '@/components/mentoring/data/types';

const MENTOR_LIST = [
  { id: 3, name: '이준호' },
  { id: 7, name: '송정우' },
  { id: 13, name: '김은수' },
  { id: 183, name: '김의진' },
  { id: 534, name: '김성윤' },
  { id: 536, name: '윤희성' },
  { id: 539, name: '이희원' },
] as const;
// FIXME: satisfies 사용 위해 스토리북 7.0 업데이트 필요
// satisfies readonly Mentor[];

type MentorList = typeof MENTOR_LIST[number];

type MentoringByMentorId<Mentor extends MentorList> = {
  [M in Mentor as M['id']]: {
    mentorName: M['name'];
  } & Mentoring;
};

const MENTORING_BY_MENTOR_ID: MentoringByMentorId<MentorList> = {
  '3': {
    mentorName: '이준호',
    title: '메이커스 3기 고민된다면 🤔\n함께 얘기해요. 같이 고민해봐요!',
    keywords: ['메이커스', '커리어 고민', '프론트엔드'],
    introduce: `
      안녕하세요! 현재 카카오스타일에서 근무하고 있고, 
      곧 토스에서 프론트엔드 개발자로 근무할 3년차 프론트엔드 개발자 이준호라고 합니다 😄
      지금 여러분들이 보고 계신 SOPT Playground를 처음부터 개발해온 사람이기도 해요.
  
      커리어를 걸어오는 만들어오는 과정에서, Makers가 저에게 줬던 가치들이 정말 큰 도움이 되었어요.(2기를 병행하면서 큰 도움을 받아 이직할 수 있었다고 생각해요.)
  
      Makers에서 얻은 좋은 가치들을 함께 나누고 싶어 멘토링을 신청하게 되었습니다! (저만 알고 있기 아쉽잖아요?!)
  
      SOPT를 경험해보신 여러분들의 Next Step으로 SOPT Makers 3기를 고민하신다면, 제가 그 고민 들어드릴게요!
      `,
    howTo: `
      - 대면 / 비대면 / 유선 어떤 방식이던 좋아요. 편하신 방향으로 진행하고자 해요! 
      (다만, 대면 진행시 강남, 선릉 방면에서 진행할 예정이에요)
  
      - 진행 시간은 정해두고 진행하진 않으려 해요. 짧고 간단히 얘기해봐도 좋고, 고민이 풀릴때 까지 얘기해봐도 좋아요.(무려 F가 80%인 ESFJ, 이야기 듣는걸 잘하고 좋아해요 ☺️)
  
      - 간단한 자기소개와 함께 연락처를 커피챗 쪽지로 보내주세요! 직접 제 번호로 연락주셔도 좋아요.
  
      - 어떤 고민이 있으신지 사전에 공유주시면 좋겠어요. 더 좋은 경험을 드릴 수 있게 고민해볼게요!
      `,
    target: `
      Next Step으로 SOPT Makers를 생각하는 분
      지금 내 상황에서 Makers가 어떤 가치를 줄 수 있을지 고민되는 분
      프론트엔드 분야에서 어떻게 더 잘 성장할 수 있는지, 내가 잘 하고 있는지 고민되는 분도 좋아요.
      어떻게 동기부여를 얻고, 어떻게 Makers를 병행하며 커리어를 쌓아올 수 있었는지 제 이야기가 궁금하신 분도 좋아요!
      `,
    nonTarget: `
      Makers 이야기가 아닌 커리어 고민도 좋아요. 하지만 직무에 대한 고민이라면 프론트엔드가 아닌 다른 고민은 들어드리기 어려울 것 같아요.
      주니어가 아니신 분들에게는 도움이 되지 않을 수 있어요.
      `,
    isOpened: true,
  },
  '7': {
    mentorName: '송정우',
    title: '커리어 Song',
    keywords: ['백엔드 커리어패스 상담', '개발 실력을 키우기 위한 방법'],
    introduce: '성장에 대한 고민, 커리어/이직에 대한 고민을 듣고 이에 대한 도움을 드릴 수 있을 거 같습니다.',
    howTo: `- 대면 혹은 비대면으로 진행됩니다. 대면으로 진행 시 강남, 선릉 방면에서 진행 예정입니다.
- 진행 시간은 약 1시간 정도를 생각하고 있으며, 주기적으로 진행할지는 멘티와 논의를 통해 결정할 생각입니다.
- 쪽지에 다음과 같은 내용을 적어주세요(자기소개, 멘토링 받고 싶은 내용, 답장 받을 연락처)
- 만약 신청 인원이 너무 많을 경우, 멘토링 받고 싶은 내용에 기반하여 인원을 선별할 수 있음을 사전에 안내드립니다.
- (가능하다면) 포폴 링크도 첨부 부탁드립니다.`,
    target: `- 어떻게 공부해야 더 성장할 수 있을지 고민하고 있는 학생 개발자
- 커리어에 대한 고민이 있는 주니어 개발자
- 주기적으로 상황을 공유하고 이에 대한 피드백을 받고 싶은 개발자`,
    nonTarget: `- 지속적으로 성장하고 싶은 욕구가 부족한 분에게는 권장하지 않습니다.
- 안타깝게도 간편하게 성장할 수 있는 방법은 제시하지 않습니다. 따라서 쉽게 취업하기 위한 방법으로 본 멘토링을 택하시는 것은 큰 도움이 되지 않을 수 있습니다.`,
    isOpened: false,
  },
  '13': {
    mentorName: '김은수',
    title: `4년차 웹 프론트엔드 개발자와의 \n커리어 Talk`,
    keywords: ['웹 프론트엔드 개발자의 커리어', '개발 지식', '업무 경험'],
    introduce: `안녕하세요. 4년차 웹 프론트엔드 개발자 김은수입니다. SOPT 26, 27기를 수료하고 현재는 솝트 메이커스에서 솝트 회원님들이 다양한 스터디, 행사를 즐길 수 있도록 돕는 모임서비스를 만들고 있습니다. 지금까지 웹 프론트엔드 개발자로 팀에 기여하면서 쌓아온 경험을 SOPT 회원님들과 나누기위해 멘토링을 시작하려고 합니다.

웹 프론트엔드 개발자로 커리어를 준비하고 계시거나, 이미 현업에서 일하시고 계신 분들과 함께 웹 프론트엔드 개발자의 커리어와 개발 지식, 업무 경험에 대한 얘기를 나누어보려고 합니다. 서로의 커리어적인 고민과 조언을 편하게 나누고 서로의 경험을 바탕으로 지식의 지평을 넓히는 멘토링이 되기를 바랍니다.`,
    howTo: `- 간단한 자기소개
- [optional] 얘기하고 싶은 고민 or 주제(제가 멘토링을 잘 준비할 수 있도록 참고하겠습니다)
- [optional] 회신받을 연락처 or 이메일`,
    target: `- 웹 프론트엔드 개발자로써 커리어를 준비하고 계신 분
- 웹 프론트엔드 개발자로 현업에서 일하시고 계신 분`,
    nonTarget: `- 웹 프론트엔드와 다른 분야 중 커리어로 시작할 분야를 아직 결정하지 않으신 분
- 현업에서 웹 프론트엔드 개발을 하고있으나 다른 분야로의 전환을 고민하고 계신 분`,
    isOpened: true,
  },

  '183': {
    mentorName: '김의진',
    title: `프론트엔드, \n한단계 깊어지고 싶다면?`,
    keywords: ['프론트엔드', '학습전략', '취업전략'],
    introduce: `안녕하세요. 토스에서 프론트엔드 엔지니어로 일하고 있습니다.

	경제학도로서 혼자 프론트엔드 개발을 시작하고, 토스에 오게되기까지 많은 학습 방법과 전략이 있었습니다. 멘티와 동일한 눈높이에서 최선의 방법을 제시해드리고, 고민을 들어드리려고 합니다.
	짧은 멘토링으로 수백시간을 아껴보세요.`,
    howTo: `- 간단한 본인 소개
	- 개발 경력 및 현재 개발 수준 (깃허브나 블로그 링크를 첨부해주시면 더 좋아요)
	- 상의하고 싶은 것 (구체적으로 적어주시면, 제가 더 많이 생각해보고 올 수 있어서 효율적일 거에요. 잘 잡히지 않는다면 그대로 오셔도 돼요)
	- 연락처
	
	1. 위 4가지를 내용을 담아 쪽지로 보냅니다.
	2. 비슷한 고민을 가진 사람을 묶어서 단톡방을 팝니다.
	3. 날짜 및 온/오프라인 진행 방식을 정합니다.
	4. 지정된 날짜에 1시간 가량 멘토링을 진행합니다.
	5. 멘토링이 끝난 후 저에게 솔직한 피드백을 보냅니다.`,
    target: `- SOPT 웹파트 세미나를 잘 이해할 수 있고, 기본적인 웹 어플리케이션을 무난하게 만들 수 있는 사람
	- 앞으로의 학습 방향이 고민인 사람
	- 취업 방향/전략이 고민인 사람
	- 기타 진로/개발 관련 고민이 있는 사람`,
    nonTarget:
      '- SOPT 웹파트 세미나를 따라가기 어렵다면, 추천하지 않아요. 그것을 일단 열심히 하면 됩니다! 다른 고민이라면 상관없어요.',
    isOpened: true,
  },
  '534': {
    mentorName: '김성윤',
    title: '백엔드 입문자를 위한 커피챗 ',
    keywords: ['백엔드 입문', '취업 준비'],
    introduce: `안녕하세요, 김성윤입니다! 저는 학생 때 사용자들이 가까이서 직접 사용하는 애플리케이션 개발에 관심이 있어 Flutter 개발을 주로 했었습니다. Flutter 를 사용해 누적 다운로드 수 5000+ 의 Cross-Platform 애플리케이션을 개발하고 운영하며 서비스 개발의 즐거움을 본격적으로 느겼던 것 같습니다.
		
		그러던 중, 백엔드 개발에도 관심이 생겨 공부를 시작했고 스타트업에서는 Node 개발을, 현재 회사에서는 Spring 을 사용해 백엔드 개발을 하고 있습니다.
		
		처음 백엔드 공부를 시작할 때를 생각해 보면 저도 방대한 백엔드 로드맵에서 어떤 것부터 공부할 지 막막했던 것 같습니다.
		
		모두 배경과 상황이 다르기 때문에 제 경험이 다른 누군가에게는 도움이 되지 않을 수도 있고 누군가에게는 특별할 것 없는 당연한 내용일 수도 있어 조심스럽긴 하지만,
		어떻게 공부하고 시작해야 할지 막막한 분들께 조금이나마 제 경험이 도움이 될 수도 있겠다 생각해 멘토링을 신청해 봅니다. (special thanks to 정우!)
		
		신청자 분의 고민을 듣고 제가 도움드릴 수 있는 부분에 대해 편하게 이야기하는 커피챗 자리라고 생각해 주시면 됩니다 :)`,
    howTo: `쪽지에 아래 내용을 적어서 신청해 주세요. 
		- 간단한 본인 소개
		- 진행해본 토이 프로젝트 1~2개 3줄 설명 (필수는 아니지만 신청자님의 배경을 이해하는데 도움이 될 것 같습니다!)
		- 상의하고 싶은 것
		- 답장 받을 연락처
		
		평일 9시 이후 진행 예정이며, 구체적인 시간은 쪽지를 통해 조율하도록 하겠습니다. :) (온라인 화상 30분 ~1시간진행 예정입니다),`,
    target: '백엔드 공부를 시작하려고 하거나 시작한 지 얼마 지나지 않은 입문자 분',
    nonTarget: '이미 경험이 있으신 입문자 이상 분들께는 도움이 되지 못할 수도 있습니다',
    isOpened: true,
  },
  '536': {
    mentorName: '윤희성',
    title: `안드로이드 프레임워크 개발을 \n하고 있는 윤희성 입니다 :)`,
    keywords: ['진로 고민', '취업 준비', '자기 개발'],
    introduce: `안녕하세요. 삼성전자에서 안드로이드 프레임 워크를 개발하고 있는 윤희성 입니다. AOSP 로 부터 OneUI를 입히거나 라이브러리를 개발하는 플랫폼 개발 업무를 수행하고 있습니다. 20년도 입사하여 현재 4년차 정도 됩니다. 전자전기공학 전공을 들으면서 학기 중에는 멋쟁이 사자처럼과 솝트에서 활동하고, 방학 때 앱잼 및 교내 대회 및 프로젝트를 진행하면서 시간을 보냈습니다. 솝트는 21기 안드로이드 파트로 참여 했고, 24기 서버파트, 25기 서버 파트장으로 활동 했습니다. 3학년 겨울 방학에는 라인에서 인턴하고, 4학년 여름 방학에는 삼성전자에서 인턴 했습니다 :) 입사 이후 경력 채용 TF 업무를 수행 하다가 22년부터 본격적으로 개발을 시작 했습니다. 안드로이드 UI Framework를 개발하고 있고, 최근에 안드로이드 개발자 성빈랜드 컨퍼런스에서 android context를 주제로 연사로 참여 했습니다.

    아래 관정에 대해서 궁금한 사람들이 멘토링을 신청하면 될 거 같습니다.
    1. 삼성전자 무선 사업부에서 수행하게 되는 업무 들과 개발 문화에 대해서 궁금한 사람
    2. 취업 준비 중 진로 혹은 코딩 테스트, CS 공부의 방향에 고민이 있는 사람
    3. 안드로이드 프레임워크에 관심 있는 사람
    
    멘토링 주제는 위와 같지만 실제로는 가볍게 궁금한 점에 대해서 답변 하는 방식으로 진행 될 거 같습니다:)`,
    howTo: `비대면으로 진행하며 멘토와 멘티 일정을 조정하여 Zoom으로 약 1시간 정도 진행 합니다. 멘토링을 신청할 때 간단한 자기 소개와 멘토링을 받고자 하는 내용 혹은 고민을 간략하게 적어서 보내주시면 이후 멘토링 시간을 조정하여 온라인 미팅으로 진행할 예정 입니다. 
    멘토링 시간은 평일 밤 시간 혹은 주말 오전 시간에 진행 가능 하며, 이 시간 중 안되는 시간이 있는 경우는 신청 시 공유 해주세요.`,
    target: '다양한 개발 분야에 대해서 호기심이 있는 사람에게 추천 드립니다 :)',
    nonTarget: '프레임워크 개발이다 보니 서비스 개발 도메인 관점에서는 크게 도움을 드리지는 못할 거 같아요',
    isOpened: true,
  },
  '539': {
    mentorName: '이희원',
    title: `PM에게 필요한 역량에 대해 \n이야기 나눠요`,
    keywords: ['우아한형제들 PM의 역할', 'PM을 지원할 때 어필해야하는 역량'],
    introduce: `안녕하세요 우아한형제들 PM 이희원입니다.
  저는 우아한인턴 1기를 거쳐 PM으로 입사하였고, 현재 '배민스토어'라는 퀵커머스 서비스에서 전시와 플랫폼을 기획하고 프로젝트를 리딩하는 업무를 담당하고 있습니다.
  
  제가 담당하는 서비스는 커머스, 신사업으로 설명할 수 있을 것 같아요. IT업계에서 가장 친숙하다고 말할 수 있는 커머스 서비스지만 런칭된지 2년밖에 되지 않아 하나부터 열가지 만들어야할 게 굉장히 많은 서비스에요.
  그래서 프로젝트를 기획하고, 관리하고, 운영하는 모든 경험을 다이나믹하게 배우고 있는데요. 이러한 저의 경험을 토대로 현업에서 PM이 어떤 업무를 하고, 어떤 역량이 필요한지 공유하고자합니다.
  
  PM 지원서를 보면 '커뮤니케이션 능력', '협업능력' 등 다소 추상적인 역량을 요구하는데요. 저와 멘토링을 진행한 뒤에는 구체적으로 어떤 역량을 말하는 것인지 알 수 있게 되실거에요.
  
  저는 성격이 워낙 밝고 친해지기 쉬운 사람이라 ㅎㅎ 부담없이 얘기 나눈다는 생각으로 지원해주세요~`,
    howTo: `쪽지에 아래 내용을 적어서 신청해 주세요. 

    - 간단한 본인 소개
    - 궁금한 점
    (꼭 질문이 아니어도 좋아요. 어떤 고민이 있는지, 어떤 얘기를 나누고 싶은지를 작성해주셔도 좋습니다.)
    - 답장 받을 연락처
    
    쪽지를 확인한 후 연락드리겠습니다. 일정을 함께 조율하고, 비대면으로 진행합니다.
    
    원할 경우 대면도 가능하며, 필요시 1회 이상 멘토링을 진행할수도 있습니다.`,
    target: `PM 직무를 희망하시는 분들께 도움이 될 수 있어요.
    PM을 희망하진 않더라고 PM이 실제 어떤 역할을 하는지 궁금한 분들께 도움이 될 수 있어요.`,
    nonTarget: `PM이 아닌 '기획'에만 관심이 있는 분은 도움을 드리기 힘들어요.
    현업에서 PM 업무를 경험해보신 분은 멘토링이 부족하다고 느낄 수 있어요.`,
    isOpened: true,
  },
};

export const MENTORING_DATA_FOR_PRODUCTION: MentoringData = {
  mentorList: MENTOR_LIST,
  mentoringByMentorId: MENTORING_BY_MENTOR_ID,
};
