'use strict';

import { menu, projects, projectData } from './data.js';

/** element */
const navbar = document.querySelector('#navbar');
const navContainer = document.querySelector('.nav-container');
const navbarUl = document.querySelector('.navbar__menu');
const navbarLeft = document.querySelector('.navbar__left');
const home = document.querySelector('#home');
const homeContainer = document.querySelector('.home__container');
const about = document.querySelector('#about');
const skills = document.querySelector('#skills');
const work = document.querySelector('#work');
const contact = document.querySelector('#contact');
const contactMeBtn = document.querySelector('.home__contact');
const arrowUpBtn = document.querySelector('.arrow-up');
const selectWorkFilter = document.querySelector('.select-work');
const tabContents = document.querySelector('#tab_contents');
const projectCategory = document.querySelector('.project-category');
const projectDetail = document.querySelector('#project-detail');
const projectLinkDiv = document.querySelector('#project-link');
const projectInfoDiv = document.querySelector('#project-info');
const projectFunctionDiv = document.querySelector('#project-function');
const projectStackDiv = document.querySelector('#project-stack');
const projectImgsDiv = document.querySelector('#project-imgs');
const mobileNavContainer = document.querySelector('.mobile_nav-container');
const mobileMenuBtn = document.querySelector('.menu-btn');
const mobileMenuCancelBtn = document.querySelector('.menu-cancel-btn');
const mobileLogoName = document.querySelector('.logo-name');
const mobileNavbarUl = document.querySelector('.mobile_navbar__menu');
const mobileProjectDetailBackBtn = document.querySelector('.mobile-back-btn');

/**
 * navbar의 margin, padding, border, content가 포함된 높이
 */
const navbarHeight = navbar.getBoundingClientRect().height; // offsetHeight
const homeHeight = home.getBoundingClientRect().height;

/**
 * State
 */
let projectFilterSelected = 'select-all';
let nextSelectedProject = '';
let preSelectProject = document.querySelector('#tab-none');

/** ul밑에 list 만드는 함수 */
const handleNavbarMenuList = () => {
  menu.map((menuName) => {
    const li = document.createElement('li');
    li.classList.add(
      'px-2',
      'mr-2',
      'text-[#bf360c]',
      'navbar__menu__item',
      'hover:cursor-pointer'
    );
    li.textContent = `${menuName}`;

    li.addEventListener('click', () => {
      li.scrollTo({ top: 500, left: 100, behavior: 'smooth' });
    });

    navbarUl.append(li);
  });

  return navbarUl;
};

/** navbar container에 class 주는 함수 */
const handleNavbarMenuContainerClass = (isScroll) => {
  isScroll
    ? navContainer.classList.add(
        'px-4',
        'items-center',
        'w-[100%]',
        'h-[70px]',
        'left-0',
        'flex',
        'justify-between',
        'transition',
        'fixed',
        'top-0',
        'duration-200',
        'ease-in-out',
        'bg-[#ffab91]'
      )
    : navContainer.classList.remove(
        'bg-[#ffab91]',
        'fixed',
        'top-0',
        'px-4',
        'h-[70px]'
      );
};

/** logo */
const handleNavbarLogoAddClass = (isScroll) => {
  if (isScroll) {
    navbarLeft.firstElementChild.classList.remove('fill-amber-400');
    navbarLeft.firstElementChild.classList.add('fill-white');
    navbarLeft.lastElementChild.classList.remove('text-amber-400');
    navbarLeft.lastElementChild.classList.add('text-white');
  } else {
    navbarLeft.firstElementChild.classList.remove('fill-white');
    navbarLeft.firstElementChild.classList.add('fill-amber-400');
    navbarLeft.lastElementChild.classList.remove('text-white');
    navbarLeft.lastElementChild.classList.add('text-amber-400');
  }
};

/** scroll 여부에 따른 list 클래스 다르게 주는 함수 */
const handleNavbarMenuListAddClass = (isScroll) => {
  // navbarUl.children는 HtmlCollection(유사배열), list들 담을 배열로 변환
  const navbarUlElements = Array.from(navbarUl.children);

  isScroll
    ? navbarUlElements.map((li) => li.classList.add('text-white', 'text-bold'))
    : navbarUlElements.map((li) =>
        li.classList.remove('text-white', 'text-bold')
      );
};

/** scroll event 관련 navbar 설정 */
const navbarScrollEventListener = () =>
  window.addEventListener('scroll', (e) => {
    let scrollY = window.pageYOffset;

    if (scrollY > navbarHeight) {
      navContainer.classList.remove('bg-transparent');
      handleNavbarMenuContainerClass(true);
      handleNavbarMenuListAddClass(true);
      handleNavbarLogoAddClass(true);
    } else {
      handleNavbarMenuContainerClass(false);
      handleNavbarMenuListAddClass(false);
      handleNavbarLogoAddClass(false);
    }
  });

/** list click event -> scroll */
const handleListClick = () => {
  navbarUl.addEventListener('click', (e) => {
    e.preventDefault();
    let selectMenu = e.target;

    switch (selectMenu.textContent) {
      case 'Home':
        scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        break;
      case 'About':
        about.classList.add('scroll-mt-14');
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Skills':
        skills.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      case 'My Work':
        work.classList.add('scroll-mt-14');
        work.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 'Contact Me':
        contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
        break;
      default:
        return;
    }
  });
};

/** mobile menu li click */
const handleMobileListClick = (menu) => {
  mobileNavbarUl.addEventListener('click', (e) => {
    const menu = e.target.textContent;

    if (menu === 'Home') {
      scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else if (menu === 'About') {
      about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (menu === 'Skills') {
      skills.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (menu === 'My Work') {
      work.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (menu === 'Contact Me') {
      contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    mobileMenuStyleRemove();
  });
};

/** mobile menu */
const mobileMenuLi = () => {
  menu.map((menuName) => {
    const li = document.createElement('li');
    li.classList.add(
      'hover:cursor-pointer',
      'hover:text-[#ff8a65]',
      'text-white',
      'font-bold',
      'text-lg',
      'mt-2'
    );

    li.textContent = menuName;
    li.addEventListener('click', handleMobileListClick);

    mobileNavbarUl.append(li);
  });
  return mobileNavbarUl;
};

/** mobile menu style 사라지게 */
const mobileMenuStyleAdd = () => {
  mobileNavContainer.classList.remove('animate-fade-in-up', 'bg-[#ffe0b2]');
  mobileNavContainer.classList.add(
    'bg-[#ffb74d]',
    'h-[300px]',
    'transition',
    'duration-150',
    'ease-out',
    'animate-fade-in-down'
  );
  mobileMenuCancelBtn.classList.remove('hidden');
  mobileLogoName.classList.add('text-white');
};

const mobileMenuStyleRemove = () => {
  mobileNavContainer.classList.remove(
    'bg-[#ffb74d]',
    'h-[300px]',
    'animate-fade-in-down'
  );
  mobileNavContainer.classList.add('animate-fade-in-up', 'bg-[#ffe0b2]');
  mobileMenuBtn.classList.remove('hidden', 'menu-click');
  mobileMenuCancelBtn.classList.add('hidden');
  mobileLogoName.classList.remove('text-white');
  Array.from(mobileNavbarUl.childNodes).forEach((list) => list.remove());
};

/** mobile menu button click */
mobileMenuBtn.addEventListener('click', (e) => {
  mobileMenuBtn.classList.add('hidden', 'menu-click');
  mobileMenuStyleAdd();
  mobileMenuLi();
});

/** mobile menu cancel button click */
mobileMenuCancelBtn.addEventListener('click', () => {
  mobileMenuStyleRemove();
});

/** contactMe btn click -> scroll */
contactMeBtn.addEventListener('click', () =>
  contact.scrollIntoView({ behavior: 'smooth', block: 'center' })
);

/** transparent home */
document.addEventListener('scroll', () => {
  homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
  navContainer.style.zIndex = 10;
});

/** show arrow up btn */
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUpBtn.classList.remove('opacity-0', 'pointer-events-none');
    arrowUpBtn.classList.add(
      'transition',
      'ease-in-out',
      'delay-100',
      'hover:-translate-y-1',
      'hover:scale-110'
    );
  } else {
    arrowUpBtn.classList.add('opacity-0', 'pointer-events-none');
  }
});

/** arrowUp btn click */
arrowUpBtn.addEventListener('click', () => {
  home.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/** filter 선택시 보여지는 요소들 지우는 함수 */
const handleFilteringRemove = () => {
  Array.from(tabContents.children).forEach((child) => child.remove());
};

/** project 선택시 보여지는 요소들 지우는 함수 */
const handleProjectDetailRemove = () => {
  Array.from(projectDetail.children).forEach((child) =>
    Array.from(child.children).forEach((element) => element.remove())
  );
};

/** 선택한 필터에 따라 요소 만들어주는 함수 */
const handleSelectedFilteredProject = (project) => {
  const tabContentsCard = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  const span = document.createElement('span');

  tabContentsCard.classList.add(
    'tab-contents-box',
    'transition',
    `item-${project.id}`,
    'sm:w-[100%]',
    'sm:bg-purple-100',
    'lg:w-[100%]',
    'lg:bg-blue-100',
    'drop-shadow-lg'
  );
  tabContentsCard.setAttribute('id', `${project.id}`);
  h4.classList.add('mb-2', 'font-bold', 'text-[#5680cb]');
  h4.setAttribute('id', `${project.id}`);
  img.classList.add('w-[200px]', 'h-[160px]', 'rounded', `${project.id}`);
  img.setAttribute('id', `${project.id}`);
  img.src = project.src;
  img.alt = project.alt;
  span.classList.add('mt-2', 'text-blue-300', `${project.id}`);
  span.setAttribute('id', `${project.id}`);

  h4.textContent = project.name;
  span.textContent = project.scale;

  tabContentsCard.append(h4, img, span);
  tabContents.classList.add(
    'sm:w-[90vw]',
    'sm:grid',
    'sm:grid-rows-2',
    'sm:m-2',
    'web:w-[90%]',
    'xl:w-[70%]'
    // '2xl:w-3/5'
  );
  tabContents.append(tabContentsCard);

  return tabContents;
};

/**
 * project filter 선택에 따라 보여지는 프로젝트 다르게 만들기
 */
const handleMakeFilteringProject = (selectedFilterKeyword) => {
  handleFilteringRemove();

  if (selectedFilterKeyword === 'select-all') {
    projects.forEach((project) => {
      handleSelectedFilteredProject(project);
    });
  } else if (selectedFilterKeyword === 'select-ongoning') {
    projects.forEach((project) => {
      if (project.state === 0) {
        handleSelectedFilteredProject(project);
      }
    });
  } else if (selectedFilterKeyword === 'select-done') {
    projects.forEach((project) => {
      if (project.state === 1) {
        handleSelectedFilteredProject(project);
      }
    });
  }
};

/** select work filter state update */
selectWorkFilter.addEventListener('click', (e) => {
  projectFilterSelected = e.target.id;

  if (
    projectFilterSelected === 'select-all' ||
    projectFilterSelected === 'select-ongoning' ||
    projectFilterSelected === 'select-done'
  ) {
    handleMakeFilteringProject(projectFilterSelected);
    handleProjectDetailRemove();
  }
});
//////////////////
const handleProjectCard = () => {
  projects.map((project) => {
    const tabContentsCard = document.createElement('div');
    const h4 = document.createElement('h4');
    const img = document.createElement('img');
    const span = document.createElement('span');

    tabContentsCard.classList.add(
      'tab-contents-box',
      'transition',
      `item-${project.id}`,
      'sm:w-[100%]',
      'sm:bg-purple-100',
      'lg:w-[100%]',
      'lg:bg-blue-100',
      'drop-shadow-lg'
    );
    tabContentsCard.setAttribute('id', `${project.id}`);
    h4.classList.add('mb-2', 'font-bold', 'text-[#5680cb]');
    h4.setAttribute('id', `${project.id}`);
    img.classList.add('w-[200px]', 'h-[160px]', 'rounded', `${project.id}`);
    img.setAttribute('id', `${project.id}`);
    img.src = project.src;
    img.alt = project.alt;
    span.classList.add('mt-2', 'text-blue-300', `${project.id}`);
    span.setAttribute('id', `${project.id}`);

    h4.textContent = project.name;
    span.textContent = project.scale;

    tabContentsCard.append(h4, img, span);
    tabContents.classList.add(
      'sm:w-[90vw]',
      'sm:grid',
      'sm:grid-rows-2',
      'sm:m-2',
      'web:w-[90%]',
      'xl:w-[70%]'
      // '2xl:w-3/5'
    );
    tabContents.append(tabContentsCard);

    return tabContents;
  });
};

/** mobile project detail 페이지에서 돌아가기 버튼 누르면 프로젝트 이미지 보이도록 */
mobileProjectDetailBackBtn.addEventListener('click', () => {
  handleProjectDetailRemove();
  handleProjectCard();
  mobileProjectDetailBackBtn.classList.add('hidden');
});

/**
 * project detail tab click시 생기는 프로젝트 상세페이지 요소들 만들기
 */
const handleMakeProjectDetailPage = (page) => {
  mobileProjectDetailBackBtn.classList.remove('hidden');
  mobileProjectDetailBackBtn.classList.add(
    'mobile:pb-4',
    'text-pink-900',
    'font-bold'
  );

  handleProjectDetailRemove();

  projectData.forEach((project) => {
    if (project.name === page.id) {
      /** link 부분 */
      let h3 = document.createElement('h3');
      let h3InnerSpan = document.createElement('span');
      h3.textContent = project.projectLink.title;
      h3InnerSpan.classList.add('mr-2');
      h3InnerSpan.innerHTML = '&#128391;';

      project.projectLink.link.forEach((link) => {
        let a = document.createElement('a');
        let aInnerSpan = document.createElement('span');
        let spanInnerSpan = document.createElement('span');
        let linkSpan = document.createElement('span');

        a.href = `${link[1]}`;
        a.target = '_blank';
        a.classList.add('w-[180px]');
        aInnerSpan.classList.add('ml-6');
        linkSpan.classList.add('ml-2');
        spanInnerSpan.innerHTML = '&#10004';
        linkSpan.textContent = link[0];

        aInnerSpan.append(spanInnerSpan, linkSpan);
        a.append(aInnerSpan);
        h3.prepend(h3InnerSpan);
        projectLinkDiv.prepend(h3);
        projectLinkDiv.append(a);
      });

      /** info 부분 */
      let infoH3 = document.createElement('h3');
      let infoH3InnerSpan = document.createElement('span');
      let infoUl = document.createElement('ul');
      infoH3.textContent = project.introduction.title;
      infoH3InnerSpan.classList.add('mr-2');
      infoH3InnerSpan.innerHTML = '&#128276;';
      infoUl.classList.add('px-6');

      project.introduction.contents.forEach((content) => {
        let infoLi = document.createElement('li');
        let liInnerSpan = document.createElement('span');
        liInnerSpan.classList.add('mr-1');
        liInnerSpan.innerHTML = '&#10004;';
        infoLi.textContent = content;

        infoLi.prepend(liInnerSpan);
        infoUl.append(infoLi);
        infoH3.prepend(infoH3InnerSpan);
        projectInfoDiv.prepend(infoH3);
        projectInfoDiv.append(infoUl);
      });

      /** function 부분 */
      let funcH3 = document.createElement('h3');
      let funcH3InnerSpan = document.createElement('span');
      let funcUl = document.createElement('ul');
      funcH3InnerSpan.classList.add('mr-2');
      funcH3InnerSpan.innerHTML = '&#128270;';
      funcH3.textContent = project.function.title;

      project.function.contents.forEach((content) => {
        let funcLi = document.createElement('li');
        let funcLiInnerSpan = document.createElement('span');
        funcLi.classList.add('ml-6');
        funcLiInnerSpan.classList.add('mr-2');
        funcLi.textContent = content;
        funcLiInnerSpan.innerHTML = '&#10003;';

        funcH3.prepend(funcH3InnerSpan);
        funcLi.prepend(funcLiInnerSpan);
        funcUl.append(funcLi);
        projectFunctionDiv.prepend(funcH3);
        projectFunctionDiv.append(funcUl);
      });

      /** stack 부분 */
      let stackH3 = document.createElement('h3');
      let stackH3InnerSpan = document.createElement('span');
      stackH3.textContent = project.stacks.title;
      stackH3InnerSpan.classList.add('mr-2');
      stackH3InnerSpan.innerHTML = '&#128736;';

      project.stacks.useStack.forEach((stack) => {
        let stackSpan = document.createElement('span');
        let stackSpanInnerSpan = document.createElement('span');
        stackSpan.classList.add('ml-6');
        stackSpanInnerSpan.classList.add('mr-1');
        stackSpan.textContent = stack;
        stackSpanInnerSpan.innerHTML = '&#10004';

        stackSpan.prepend(stackSpanInnerSpan);
        stackH3.prepend(stackH3InnerSpan);
        projectStackDiv.prepend(stackH3);
        projectStackDiv.appendChild(stackSpan);
      });

      /** project img 부분 */
      let imgH3 = document.createElement('h3');
      let imgH3InnerSpan = document.createElement('span');
      let imgDivContainer = document.createElement('div');
      imgH3.classList.add('mt-8', 'mb-4');
      imgH3.textContent = project.picture.title;
      imgH3InnerSpan.innerHTML = '&#128247;';
      imgH3InnerSpan.classList.add('mr-2');
      imgDivContainer.classList.add(
        'sm:grid',
        'sm:grid-rows-3',
        'sm:grid-gap-4',
        'md:grid',
        'md:grid-rows-2',
        'md:grid-gap-4',
        'grid',
        'grid-rows-2',
        'grid-flow-col',
        'gap-3',
        'mobile:flex',
        'mobile:flex-col',
        'mobile:items-center'
      );

      project.picture.contents.forEach((content) => {
        let imgDiv = document.createElement('div');
        let imgBox = document.createElement('img');
        let imgSpan = document.createElement('span');
        imgBox.classList.add('w-60', 'h-44', 'rounded-lg', 'ml-2');
        imgSpan.classList.add('mt-1', 'font-bold', 'block', 'text-center');
        imgDiv.classList.add('drop-shadow-xl');
        imgBox.src = content.src;
        imgBox.alt = content.alt;
        imgSpan.textContent = content.summary;

        imgH3.prepend(imgH3InnerSpan);
        imgDiv.append(imgBox, imgSpan);
        imgDivContainer.append(imgDiv);
        projectImgsDiv.prepend(imgH3);
        projectImgsDiv.append(imgDivContainer);
      });
    }
  });
};

/**
 * project select tab style
 */
const handleMakeProjectCategoryTabLiStyle = (nextSelectedProject) => {
  if (nextSelectedProject.id !== preSelectProject.id) {
    nextSelectedProject.classList.remove('text-gray-500', 'bg-[#e0deff]');
    nextSelectedProject.classList.add('bg-[#5c007a]', 'text-white');
    preSelectProject.classList.remove('bg-[#5c007a]', 'text-white');
    preSelectProject.classList.add('text-gray-500', 'bg-[#e0deff]');
  } else {
    nextSelectedProject.classList.remove('text-gray-500', 'bg-[#e0deff]');
    nextSelectedProject.classList.add('bg-[#5c007a]', 'text-white');
    preSelectProject.classList.remove('bg-[#5c007a]', 'text-white');
    preSelectProject.classList.add('text-gray-500', 'bg-[#e0deff]');
  }
  preSelectProject = nextSelectedProject;
  handleMakeProjectDetailPage(nextSelectedProject);
  handleFilteringRemove();
};

/**
 * selected project category state update
 * 현재 선택된 탭 정보를 탭 스타일 바꾸는 함수로 전달하는 함수
 */
projectCategory.addEventListener('click', (e) => {
  nextSelectedProject = e.target;

  if (nextSelectedProject.id === 'hamkke-hr') {
    handleMakeProjectCategoryTabLiStyle(nextSelectedProject);
  } else if (nextSelectedProject.id === 'hamkke-study') {
    handleMakeProjectCategoryTabLiStyle(nextSelectedProject);
  } else if (nextSelectedProject.id === 'quokka-board') {
    handleMakeProjectCategoryTabLiStyle(nextSelectedProject);
  } else if (nextSelectedProject.id === 'nodongu') {
    handleMakeProjectCategoryTabLiStyle(nextSelectedProject);
  }
});

/** filtering에 따라 보여지는 프로젝트 tab_summary 클릭 시 */
// detail 부분 보여주는 것 + 탭 스타일이 중복으로 눌리는 경우(필터에서 선택한 프로젝트 탭이 스타일 적용이 되어있고, 다른 탭 누를 경우 중복 스타일 적용 되는 버그)
tabContents.addEventListener('click', (e) => {
  let id = e.target.id;

  if (id === 'hamkke-hr') {
    handleFilteringRemove();
    // console.log(e.target.parentElement.classList.contains(`item-${id}`));
    handleMakeProjectCategoryTabLiStyle(e.target);
  } else if (id === 'hamkke-study') {
    handleFilteringRemove();
    // console.log(e.target.parentElement.classList.contains(`item-${id}`));
    handleMakeProjectCategoryTabLiStyle(e.target);
  } else if (id === 'quokka-board') {
    handleFilteringRemove();
    // console.log(e.target.parentElement.classList.contains(`item-${id}`));
    handleMakeProjectCategoryTabLiStyle(e.target);
  } else if (id === 'nodongu') {
    handleFilteringRemove();
    // console.log(e.target.parentElement.classList.contains(`item-${id}`));
    handleMakeProjectCategoryTabLiStyle(e.target);
  }
});

/** 함수 호출 */
navbarScrollEventListener();
handleNavbarMenuList();
handleListClick();
handleMakeFilteringProject(projectFilterSelected);
