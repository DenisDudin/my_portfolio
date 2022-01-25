function animOnScroll(animItems) {
  for (let i = 0; i < animItems.length; i++) {
    const animItem = animItems[i];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).topl
    const animStart = 4;

    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;
    }

    if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
      animItem.classList.add('active-scroll')
    } else {
      animItem.classList.remove('active-scroll')
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function ScrollAnimation() {
  const animItems = document.querySelectorAll('animation');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll(animItems));
    
  }
}

export { ScrollAnimation };
