
const links = [...document.querySelectorAll('header nav a')];
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
function onScroll(){
  const y = window.scrollY + 120;
  let current = sections[0];
  for(const sec of sections){
    if(sec.offsetTop <= y) current = sec;
  }
  links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current.id));
}
addEventListener('scroll', onScroll);
onScroll();
