const navMenu = document.getElementById("nav-menu");
const hamMenu = document.getElementById("ham-menu");
const hamBurger = document.getElementById("hamburger");
const themeBtn = document.getElementById("nav-theme");
const skillBtns = document.querySelectorAll('.skill-btn-grp input[type=radio]');
const skillTabs = document.querySelectorAll('ul.skill-tab-header-wrapper li.skill-tab-head');

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

function isVisible(el) {
  const viewTop = window.pageYOffset;
  const viewBottom = viewTop + window.innerHeight;
  const compareBottom = getOffset(el).top;
  const compareTop = getOffset(el).top + el.offsetHeight;
  // const hviewBottom = viewBottom - (viewBottom * 0.6);
  return compareBottom <= viewBottom; //&& compareTop >= viewTop;
}

function setActiveWindow(menuId) {
  document.querySelectorAll("li.active-window").forEach(node => node.classList.toggle("active-window"));
  var selector = 'li[data-menuid="' + menuId + '"]';
  document.querySelectorAll(selector).forEach(node => node.classList.toggle("active-window"));
}

function setActiveTab(e) {
  if (e.target && e.target.matches('li.skill-tab-head')) {
    document.querySelectorAll("ul.skill-tab-header-wrapper li.active").forEach(node => node.classList.remove("active"));
    document.querySelectorAll("ul.skill-tab-body-wrapper li.skill-tab-body.active").forEach(node => node.classList.remove("active"));
    var selector = 'ul.skill-tab-body-wrapper li[data-tabid="' + e.target.dataset.tabid + '"]';
    document.querySelectorAll(selector).forEach(node => node.classList.toggle("active"));
    e.target.classList.toggle('active');
  }
}

function navMenuHandler(e) {
  if (e.target && e.target.matches("a.nav-link")) {
    setActiveWindow(e.target.parentNode.dataset.menuid);
    hamBurger.click();
  }
  e.stopPropagation();
}

function hamBurgerHandler(e) {
  e.currentTarget.classList.toggle('active');
  document.getElementById("ham-menu").classList.toggle("is-show");
  e.stopPropagation();
}

function animateOnScroll(event) {
  clearTimeout(animateOnScroll.timeRef);
  animateOnScroll.timeRef = setTimeout(function () {
    let sections = document.getElementsByTagName("section");
    let footers = document.getElementsByTagName("footer");
    for (el of [...sections, ...footers]) {
      if (isVisible(el)) {
        if (el.id == 'projects') {
          let projectTiles = document.querySelectorAll('div.project-tile:not(.anim-slide)');
          for (pel of projectTiles) {
            if (isVisible(pel)) {
              pel.classList.add("anim-slide");
            }
          }
        }
        let activeWindows = document.querySelectorAll("li.active-window");
        if (activeWindows && activeWindows.length && activeWindows[0].dataset.menuid != el.id) {
          setActiveWindow(el.id);
        }
      }
    }
  }, 0);
}

function skillBtnHandler(event) {
  document.querySelectorAll(`div.skill-detail-card[data-detailname=${event.target.name}].active`).forEach(node => node.classList.remove("active"));
  document.querySelectorAll(`div.skill-detail-card[data-detailbtnid=${event.target.id}]:not(.active)`).forEach(node => node.classList.toggle('active'));
  event.stopPropagation();
}

function setTheme(theme) {
  let navLogo = document.querySelectorAll('.logo');
  let navThemeBtn = document.getElementById("nav-theme");
  let rootNodeDataset = document.getElementsByTagName('html')[0].dataset;
  if (theme == 'dark') {
    navThemeBtn.src = './images/moon.png';
    rootNodeDataset.theme = 'dark';
    Array.from(navLogo).forEach(el => el.src = './images/logo-light.png');
  } else {
    navThemeBtn.src = './images/sun.png';
    rootNodeDataset.theme = 'light';
    Array.from(navLogo).forEach(el => el.src = './images/logo-dark.png');
  }
  localStorage.setItem(location.hostname + "_prefered_theme", rootNodeDataset.theme);
}

function themeHandler() {
  let rootNodeDataset = document.getElementsByTagName('html')[0].dataset;
  setTheme(rootNodeDataset.theme == "dark" ? "light" : "dark");
}

setTheme(localStorage.getItem(location.hostname + "_prefered_theme"));

navMenu.addEventListener("click", navMenuHandler);
hamBurger.addEventListener("click", hamBurgerHandler);
hamMenu.addEventListener("click", navMenuHandler);
themeBtn.addEventListener('click', themeHandler);
window.addEventListener("scroll", animateOnScroll);
skillBtns.forEach((btn) => btn.addEventListener('change', skillBtnHandler));
skillTabs.forEach((tab) => tab.addEventListener('click', setActiveTab));