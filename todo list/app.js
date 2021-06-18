const container = document.querySelector('.container')
const taskInput = document.querySelector('#task_name');
const taskFrom = document.querySelector('#task_adderPanel');
const taskCollection = document.querySelector('#collect')
const btn = document.querySelector('#delete__all');
const noo = document.querySelector('.alert_ask')
const yes__btn = document.querySelector('#yes__btn')
const no__btn = document.querySelector('#no_btn')
taskFrom.addEventListener('submit', addTask );
// freecodecamp
// w3schools
// MonzillaDeveloper MDN
// css-trick
function addTask(e){
if(taskInput.value === ''){
    alert("ples enter some task!")
}
else{
const li = document.createElement('li');
const p = document.createElement('p');
const a = document.createElement ('a');
a.innerHTML = '<i class="fas fa-times"></i>';
a.className = 'delete__action';
p.appendChild(document.createTextNode(taskInput.value));
li.appendChild(p);
li.appendChild(a);
li.className = 'task';
taskCollection.appendChild(li);
taskInput.value= '';
console.log (a);
a.addEventListener('click', deleteTask);
function deleteTask(e){
    if(e.target.parentElement.classList.contains("delete__action")){
        e.target.parentElement.parentElement.remove();
    }
}
btn.addEventListener('click', yess )
no__btn.addEventListener('click', yo_btn)
yes__btn.addEventListener('click', xa_btn)
function yess(e){
    container.style.display='none'
   btn.style.display = 'none'
   noo.style.display = 'block'
   taskCollection.innerHTML= '';
}
function yo_btn(e){
    container.style.display='block'
    btn.style.display = 'block'
    noo.style.display = 'none'
}
function xa_btn(e){
    container.style.display ='block';
    btn.style.display='block';
    noo.style.display = 'none'
    alert("Rostan xammasini uchirib yubora veraylikmi?");
    taskCollection.innerHTML = '';
}
}
  e.preventDefault();
}