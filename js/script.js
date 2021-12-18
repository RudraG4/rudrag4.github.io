var navMenu = document.getElementById("nav-menu");
var hamMenu = document.getElementById("ham-menu");
var hamBurger = document.getElementById("hamburger");

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY };

}

function isVisible(el) {
  const viewTop = window.pageYOffset;
  const viewBottom = viewTop + window.innerHeight;
  const compareBottom = getOffset(el).top;
  const compareTop = getOffset(el).top + el.offsetHeight;
  return compareBottom <= viewBottom && compareTop >= viewTop;
}

function navMenuHandler(e) {
  if (e.target && e.target.matches("a.nav-link")) {
    document.querySelectorAll("li.active-window").forEach(node => {
      node.classList.remove("active-window");
    });
    var dataMenuId = e.target.parentNode.dataset.menuid;
    var selector = 'li[data-menuid="' + dataMenuId + '"]';
    document.querySelectorAll(selector).forEach(node => {
      node.classList.toggle("active-window");
    });
    hamBurger.click();
  }
  e.stopPropagation();
}

function hamBurgerHandler(e) {
  document.getElementById("ham-menu").classList.toggle("is-show");
  e.stopPropagation();
}

function animateOnScroll(event) {
  let elements = document.getElementsByClassName("project-tile");
  for (el of elements) {
    if (isVisible(el)) {
      el.classList.add("anim-slide");
    } else {
      el.classList.remove("anim-slide");
    }
  }
}

navMenu.addEventListener("click", navMenuHandler);
hamBurger.addEventListener("click", hamBurgerHandler);
hamMenu.addEventListener("click", navMenuHandler);
window.addEventListener("scroll", animateOnScroll);