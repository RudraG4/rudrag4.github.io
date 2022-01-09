const navMenu = document.getElementById("nav-menu");
const hamMenu = document.getElementById("ham-menu");
const hamBurger = document.getElementById("hamburger");
const splash = document.querySelector('.welcome-splash');
const skillBtns = document.querySelectorAll('.skill-btn-grp input[type=radio]');

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
  document.querySelectorAll("li.active-window").forEach(node => {
    node.classList.remove("active-window");
  });
  var selector = 'li[data-menuid="' + menuId + '"]';
  document.querySelectorAll(selector).forEach(node => {
    node.classList.toggle("active-window");
  });
}

function navMenuHandler(e) {
  if (e.target && e.target.matches("a.nav-link")) {
    setActiveWindow(e.target.parentNode.dataset.menuid);
    hamBurger.click();
  }
  e.stopPropagation();
}

function hamBurgerHandler(e) {
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
  }, 500);
}

function skillBtnHandler(event) {
  document.querySelectorAll(`div.skill-detail-card[data-detailname=${event.target.name}].active`).forEach(node => {
    node.classList.remove("active");
  });
  document.querySelectorAll(`div.skill-detail-card[data-detailbtnid=${event.target.id}]:not(.active)`).forEach(node => {
    node.classList.toggle('active');
  });
  event.stopPropagation();
}

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('clear');
  }, 4000);
});
navMenu.addEventListener("click", navMenuHandler);
hamBurger.addEventListener("click", hamBurgerHandler);
hamMenu.addEventListener("click", navMenuHandler);
window.addEventListener("scroll", animateOnScroll);
skillBtns.forEach((btn) => btn.addEventListener('change', skillBtnHandler));