const menu = ['Home', 'About', 'Skills', 'My Work', 'Contact Me'];
const projects = [
  {
    name: '협업, 인사 프로젝트',
    src: '../../assets/imgs/portfolio-detail-img7.png',
    alt: 'project image',
    scale: '2인 프로젝트',
    state: 0,
    id: 'hamkke-hr',
  },
  {
    name: '스터디 프로젝트',
    src: '../assets/imgs/portfolio-detail-img6.png',
    alt: 'project image',
    scale: '2인 프로젝트',
    state: 1,
    id: 'hamkke-study',
  },
  {
    name: '칸반보드 프로젝트',
    src: '../assets/imgs/portfolio-detail-img1.png',
    alt: 'project image',
    scale: '4인 프로젝트',
    state: 1,
    id: 'quokka-board',
  },
  {
    name: '키워드 관련 뮤직 추천 프로젝트',
    src: '../assets/imgs/portfolio-detail-img2.png',
    alt: 'project image',
    scale: '4인 프로젝트',
    state: 1,
    id: 'nodongu',
  },
];

const projectData = [
  {
    name: 'hamkke-hr',
    projectLink: {
      title: '프로젝트 링크',
      link: [
        ['깃허브 링크', 'https://github.com/jiye-7'],
        ['배포 링크', 'https://github.com/jiye-7'],
        ['노션 링크', 'https://github.com/jiye-7'],
      ],
    },
    introduction: {
      title: '프로젝트 소개',
      contents: [
        'Hamkke HR 프로젝트는 팀프로젝트 또는 스터디를 같이 진행 할 인원 모집 등의 기능을 제공합니다.',
        '자유글 형식으로 게시글을 작성할 수 있으며, 글 작성시 기술 스택을 선택하여 원하는 멤버를 모집할 수 있습니다.',
        '관심있는 글이나 참여를 원할 땐 좋아요 , 댓글 기능 을 이용하여 스터디에 참여할 수 있습니다.',
      ],
    },
    function: {
      title: '프로젝트 기능',
      contents: [
        '최신 게시글 보기',
        '인기 게시글 보기',
        '모집 중인글과 모집 마감 된 글 보기',
        '기술 스택을 선택하여 게시글 보기',
        '게시글 작성',
        '좋아요 기능',
        '댓글 기능',
        '회원 가입',
        '마이 페이지 정보 수정',
        '회원 탈퇴',
        '내가 작성한 글 목록 보기',
        '내가 좋아요 한 글 목록 보기',
      ],
    },
    stacks: {
      title: '사용 스택',
      useStack: ['React', 'Redux', '스택3', '스택4'],
    },
    picture: {
      title: '주요 기능 화면 캡쳐',
      contents: [
        {
          src: '../../assets/imgs/portfolio-detail-img7.png',
          alt: 'main page img',
          summary: '메인 페이지',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img6.png',
          alt: 'member info page img',
          summary: '회원 정보수정',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img2.png',
          alt: 'summary img',
          summary: '글 목록 화면',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img1.png',
          alt: 'summary img',
          summary: '회원가입',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img3.png',
          alt: 'summary img',
          summary: '글 작성 페이지',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img4.png',
          alt: 'summary img',
          summary: '스택 선택 화면',
        },
      ],
    },
  },
  {
    name: 'hamkke-study',
    projectLink: {
      title: '프로젝트 링크',
      link: [
        ['깃허브 링크', 'https://github.com/jiye-7'],
        ['배포 링크', 'https://github.com/jiye-7'],
        ['노션 링크', 'https://github.com/jiye-7'],
      ],
    },
    introduction: {
      title: '프로젝트 소개',
      contents: [
        'Hamkke Study 프로젝트는 팀프로젝트 또는 스터디를 같이 진행 할 인원 모집 등의 기능을 제공합니다.',
        '자유글 형식으로 게시글을 작성할 수 있으며, 글 작성시 기술 스택을 선택하여 원하는 멤버를 모집할 수 있습니다.',
        '관심있는 글이나 참여를 원할 땐 좋아요 , 댓글 기능 을 이용하여 스터디에 참여할 수 있습니다.',
      ],
    },
    function: {
      title: '프로젝트 기능',
      contents: [
        '최신 게시글 보기',
        '인기 게시글 보기',
        '모집 중인글과 모집 마감 된 글 보기',
        '기술 스택을 선택하여 게시글 보기',
        '게시글 작성',
        '좋아요 기능',
        '댓글 기능',
        '회원 가입',
        '마이 페이지 정보 수정',
        '회원 탈퇴',
        '내가 작성한 글 목록 보기',
        '내가 좋아요 한 글 목록 보기',
      ],
    },
    stacks: {
      title: '사용 스택',
      useStack: ['React', 'Redux', '스택3', '스택4'],
    },
    picture: {
      title: '주요 기능 화면 캡쳐',
      contents: [
        {
          src: '../../assets/imgs/portfolio-detail-img7.png',
          alt: 'main page img',
          summary: '메인 페이지',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img6.png',
          alt: 'member info page img',
          summary: '회원 정보수정',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img2.png',
          alt: 'summary img',
          summary: '글 목록 화면',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img1.png',
          alt: 'summary img',
          summary: '회원가입',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img3.png',
          alt: 'summary img',
          summary: '글 작성 페이지',
        },
        {
          src: '../../assets/imgs/portfolio-detail-img4.png',
          alt: 'summary img',
          summary: '스택 선택 화면',
        },
      ],
    },
  },
  {
    name: 'quokka-board',
    projectLink: {
      title: '프로젝트 링크',
      link: [
        ['깃허브 링크', 'https://github.com/codestates/quokkaBoard-client'],
        [
          '노션 링크',
          'https://codestates.notion.site/12-Coco-Quokka-Board-4aa8dd80e08d44758dbaffe7f2a5fc33',
        ],
      ],
    },
    introduction: {
      title: '프로젝트 소개',
      contents: [
        '여러분은 협업을 어떻게 진행하고 계시나요? Quokka Board에서는 프로젝트 관리와 업무시간 관리를 제공합니다.',
        '프로젝트 관리에서는 개인 프로젝트, 팀 프로젝트 단위로 시각적인 업무 보드를 통해 업무관리를 살펴볼 수 있습니다.',
        '각 업무에는 담당자를 지정 할 수 있으며 진행 상태를 확인 할 수 있습니다.',
        '프로젝트별로 칸반보드 페이지를 이용 할 수 있습니다.',
        '칸반보드에서는 각각의 board들 안에 task를 추가하여 업무관리를 할 수 있습니다.',
      ],
    },
    function: {
      title: '프로젝트 기능',
      contents: [
        '랜딩 페이지',
        '로그인',
        '로그아웃',
        '사용자 정보 페이지',
        '사용자 정보 수정',
        '메인 메뉴, 서브 메뉴를 통한 모달',
        '프로젝트 설정/관리',
        '칸반보드',
        '프로필 창',
      ],
    },
    stacks: {
      title: '사용 스택',
      useStack: ['React', 'Redux', 'Styled-component', 'PostCSS'],
    },
    picture: {
      title: '주요 기능 화면 캡쳐',
      contents: [
        {
          src: '../../assets/gifs/quokkaboard/1.landing-page.gif',
          alt: 'main page img',
          summary: '메인 페이지',
        },
        {
          src: '../../assets/gifs/quokkaboard/5.dashboard.gif',
          alt: 'summary img',
          summary: '대쉬보드',
        },
        {
          src: '../../assets/gifs/quokkaboard/7.column-move-board-update.gif',
          alt: 'summary img',
          summary: '태스크, 보드 생성/이동/수정/삭제',
        },
        {
          src: '../../assets/gifs/quokkaboard/13.project-make.gif',
          alt: 'summary img',
          summary: '프로젝트 생성',
        },
        {
          src: '../../assets/gifs/quokkaboard/14.member-search-add.gif',
          alt: 'summary img',
          summary: '맴버 검색/프로젝트에 추가',
        },
        {
          src: '../../assets/gifs/quokkaboard/12.project-member-update-delete.gif',
          alt: 'summary img',
          summary: '팀원 권한 변경/팀원 삭제',
        },
        {
          src: '../../assets/gifs/quokkaboard/2.signup.gif',
          alt: 'summary img',
          summary: '회원가입',
        },
        {
          src: '../../assets/gifs/quokkaboard/15.myinfo-update.gif',
          alt: 'summary img',
          summary: '회원 정보수정',
        },
      ],
    },
  },
  {
    name: 'nodongu',
    projectLink: {
      title: '프로젝트 링크',
      link: [
        ['깃허브 링크', 'https://github.com/codestates/nodongu-client'],
        ['wiki 링크', 'https://github.com/codestates/nodongu-client/wiki'],
      ],
    },
    introduction: {
      title: '프로젝트 소개',
      contents: [
        '혹시 Youtube로 음악을 들으면서 작업을 하다가 다른 동영상을 보는 등 딴짓을 하고 계시지는 않나요?',
        `NodongU는 오직 작업에만 집중할 수 있도록 생산성을 높여 주는 '노동요' 큐레이팅 & 간편 재생 서비스입니다.`,
        '주목을 끄는 자극적인 youtube 추천 영상과 광고를 배제하고, 오직 노동요를 재생시키는데 초점을 두었습니다.',
        'NodongU를 통해 당신의 작업 생산성을 극대화시켜보세요!',
      ],
    },
    function: {
      title: '프로젝트 기능',
      contents: [
        '키워드선택 페이지',
        '회원 수정 페이지',
        '마이리스트 페이지',
        '로딩 페이지',
        '로그인페이지',
        '메인 페이지 (playlist에 노래 담기, 자동재생기능)',
        '회원정보 모달',
        '노래 리스트 모달',
      ],
    },
    stacks: {
      title: '사용 스택',
      useStack: ['React', 'ReactRouter'],
    },
    picture: {
      title: '주요 기능 화면 캡쳐',
      contents: [
        {
          src: '../../assets/gifs/nodongu/keyword-select.gif',
          alt: 'main page img',
          summary: '키워드 선택 (메인)페이지',
        },
        {
          src: '../../assets/gifs/nodongu/login-signup.gif',
          alt: 'summary img',
          summary: '로그인/회원가입',
        },
        {
          src: '../../assets/gifs/nodongu/music-select.gif',
          alt: 'member info page img',
          summary: '음악 선택 재생',
        },
        {
          src: '../../assets/gifs/nodongu/logout.gif',
          alt: 'summary img',
          summary: '내 정보페이지/로그아웃',
        },
        {
          src: '../../assets/gifs/nodongu/playlist-add.gif',
          alt: 'summary img',
          summary: '재생목록에 음악 추가',
        },
        {
          src: '../../assets/gifs/nodongu/mylist.gif',
          alt: 'summary img',
          summary: '내 재생목록',
        },
      ],
    },
  },
];

export { menu, projects, projectData };
