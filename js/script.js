const navMenu = document.getElementById("nav-list");
const navLogo = document.querySelector("#navbar > img.logo");
const hamMenu = document.getElementById("ham-menu");
const hamBurger = document.getElementById("hamburger");
const themeBtn = document.getElementById("nav-theme");

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

function navMenuHandler(e) {
  if (e.target && e.target.matches("a.nav-link")) {
    setActiveWindow(e.target.parentNode.dataset.menuid);
    const view = document.getElementById(e.target.parentNode.dataset.menuid);
    view && view.scrollIntoView(true);
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
}

function themeHandler() {
  let rootNodeDataset = document.getElementsByTagName('html')[0].dataset;
  setTheme(rootNodeDataset.theme == "dark" ? "light" : "dark");
}

navMenu.addEventListener("click", navMenuHandler);
hamBurger.addEventListener("click", hamBurgerHandler);
hamMenu.addEventListener("click", navMenuHandler);
themeBtn.addEventListener('click', themeHandler);
window.addEventListener("scroll", animateOnScroll);
navLogo.addEventListener("click", () => { location.reload() });