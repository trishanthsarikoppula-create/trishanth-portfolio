const menuBtn=document.getElementById('menuBtn');
const header=document.querySelector('.site-header');
const navLinks=document.querySelectorAll('#nav a');
if(menuBtn){menuBtn.addEventListener('click',()=>{const open=header.classList.toggle('menu-open');menuBtn.setAttribute('aria-expanded',String(open));});}
navLinks.forEach(link=>link.addEventListener('click',()=>{header.classList.remove('menu-open');menuBtn?.setAttribute('aria-expanded','false');}));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const copyEmail=document.getElementById('copyEmail');
if(copyEmail){copyEmail.addEventListener('click',async()=>{try{await navigator.clipboard.writeText('trishanthsarikoppula@gmail.com');const em=copyEmail.querySelector('em');const old=em.textContent;em.textContent='Copied';setTimeout(()=>em.textContent=old,1400);}catch(e){window.location.href='mailto:trishanthsarikoppula@gmail.com';}});}
