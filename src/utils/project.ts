import imgsrc from "assets/images/Project.jpg"

const proejctTitles = [
  {
    id: 1,
    key: 'react',
    items: [ 'A Project’s Creative', '&', 'Reactive Web' ],
  },
  {
    id: 2,
    key: 'animation',
    items: [ 'A Project’s Creative', '&', 'Reactive Animation' ],
  },
  {
    id: 3,
    key: 'effect',
    items: [ 'A Project’s Creative', '&', 'Reactive Effect' ],
  },
]

const projectContents =[
  {
    id: 1,
    key: 'react',
    items:  [
    {
      id: 'Portfolio',
      num: '01',
      title: 'Portfolio',
      subTitle: '리액트 포트폴리오',
      description: 'React와 TypeScript를 활용한 Vite 기반의 사이드 프로젝트입니다. \n현재는 코드의 완성도를 높이기 위해 컴포넌트 개선 및 리팩토링 진행 중에 있습니다. About Me 페이지 및 리액트 사이드 프로젝트로 구성되어있습니다.',
      // imgSrc: imgsrc,
      imgSrc: '',
      imgAlt: '이미지 준비중',
    },
    {
      id: 'Resume',
      num: '02',
      title: 'Resume',
      subTitle: '리액트 이력서',
      description: '이력서와 경력 사이드 프로젝트를 함께  확인 할 수 있는 리액트 기반 이력서 프로젝트입니다. 경력 리스트 팝업창에서 경력을 선택후 이력서 컴포넌트에 반영, 상세보기에서 페이지넘김 기능이 구현되어 있습니다. ',
      imgSrc: '',
      imgAlt: '이미지 준비중',
    }, 
    {
      id: 'Leaflet.js Map',
      num: '03',
      title: 'Leaflet.js Map',
      subTitle: '리액트 Leaflet.js 지도 프로젝트',
      description: 'Leaflet.js라이브러리 지도 구현 및 OpenStreetMap API 활용한 지도 좌표 검색이 가능한 웹 서비스입니다.\nContextAPI를 활용한 외부 상태 관리, TanStack Query (React Query) 라이브러리를 활용한 서버 데이터 캐싱 최적화 및 실시간 데이터 동기화 관리, React Hook UseForm을 활용한 폼 데이터를 관리한 개인 프로젝트입니다.\n기술스택 : Frontend React, MUI CSS Backend Springboot, Express.js, Docker, PostgreSQL',
      imgSrc: '',
      imgAlt: '이미지 준비중',
    } 
    ]
  },
  {
    id: 2,
    key: 'animation',
    items:  [
    {
      id: 'Particle',
      num: '01',
      title: 'Particle Animation',
      subTitle: 'Particle 애니메이션',
      description: '화면에 랜더링시 한번만 각 div 마다  랜덤 위치와 지연 시간을 주어 생성하고, keyframes을 이용해 밝기와 크기가 변하는 애니메이션 입니다. ',
    },
    {
      id: 'Spinning',
      num: '02',
      title: 'Spinning Animation',
      subTitle: 'Spinning 애니메이션',
      description: 'html 요소를 keyframe을 활용해서 360도 회전하는 스피닝 애니메이션',
    }
    ]
  },
  {
    id: 3,
    key: 'effect',
    items:  [
    {
      id: 'Spinning',
      num: '01',
      title: 'Spinning Effect',
      description: 'Spinning 효과\n html 요소를 클릭시 제자리에서 시계 방향으로 360도씩회전하는 ‘스핀 이펙트 컴포넌트',
    }
    ]
  },
]

const getTitles = (value: string) => {
  const NEW_LIST = proejctTitles.filter((item) => {
    return item.key === value
  })
   return NEW_LIST[0].items
}

const getContents = (value: string) => {
  const NEW_LIST = projectContents.filter((item) => {
    return item.key === value
  })
  return NEW_LIST[0].items
}
export { projectContents , getTitles, getContents };
