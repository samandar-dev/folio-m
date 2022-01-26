let openBtn = document.getElementById('leftBtn');
let closeButton = document.getElementById('closeBtn');
let hideVersion = document.getElementById('hideContent');

openBtn.addEventListener('click', function(){
  hideVersion.classList.add('show');
})
closeButton.addEventListener('click', function(){
  hideVersion.classList.remove('show');
})
document.getElementById('darkBtn').addEventListener('click', function(){
  document.body.classList.add('dark');
})
document.getElementById('lightBtn').addEventListener('click', function(){
  document.body.classList.remove('dark');
})