(function(){
  const nav = document.querySelector('.nav');
  const btn = document.getElementById('navToggle');
  if(btn && nav){
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // scroll reveal
  const els = Array.from(document.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
    }, { threshold: 0.12 });
    els.forEach(el=>io.observe(el));
  } else {
    els.forEach(el=>el.classList.add('visible'));
  }
})();
