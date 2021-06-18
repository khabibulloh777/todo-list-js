const  wra = document.querySelector('.wrapper');
const BTN = document.querySelector('.btn_1');
const back = document.querySelector('.backend');

BTN.addEventListener('click', func)

function func(){
    if(BTN.value == '')
    alert('ism kiriting')

else{
   wra.style.display = 'none'
  back.style.display = 'block';
  
}
}