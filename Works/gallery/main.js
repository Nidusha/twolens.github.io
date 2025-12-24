// 3D Tilt + Staggered Scroll Reveal
const cards = document.querySelectorAll('.card');

const revealCards = () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      setTimeout(()=>{ card.classList.add('show'); }, index * 120);
    }
  });
};

cards.forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width/2;
    const centerY = rect.height/2;
    const rotateX = ((y - centerY)/centerY) * 8;
    const rotateY = ((x - centerX)/centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
  });
  card.addEventListener('mouseleave', ()=>{
    card.style.transform = "translateY(0) scale(1)";
  });
});

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);
