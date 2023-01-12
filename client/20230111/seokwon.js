/* ******************************style****************************** */

// const first = getNode('.first');

// addClass('.first','aaa')  // <span class="first hello">hello</span>
// removeClass('.first','aaa')


// let size = getComputedStyle(first).margin;
// console.log( size );

// css('.first','font-size','100px'); // set
// setTimeout(() => {
//   console.log(css('.first','font-size'));
// }, 1000);

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`??? 이거 뭐임

/* ******************************event****************************** */
const first = getNode('.first');
const second = getNode('.second');
const ground = getNode('.ground');
const ball = getNode('.ball');


function handler(){
  console.log('hit !');

  // css('.second','display','none')
}

first.addEventListener('click', handler);



// const off = bindEvent('.first','click',handler);
// bindEvent('.second','click',off);


ground.addEventListener('click',function(e){
  
  console.log(e.offsetX, e.offsetY);

  ball.style.transform = `translate(${e.offsetX - ball.offsetWidth / 2}px,${e.offsetY - ball.offsetHeight / 2}px)`;

})


function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}

function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


// resize
ground.addEventListener('mousemove',function debounce(callback, limit = 100) {
((e)=>{
  console.log(e.offsetX, e.offsetY);

  let posX = e.offsetX;
  let posY = e.offsetY;

  const emotion = /* html */`<div class="emotion" style="left:${posX}px;top:${posY}px">😘</div>`  

  insertLast(ground,emotion);
  
},1000)})


second.addEventListener('click',function(){
  first.removeEventListener('click', handler);
})

/* ******************************버블링****************************** */
// const visual = getNode('.visual');
// const news = getNode('.news');
// const desc = getNode('.desc');


// visual.addEventListener('click',(e) => {
//   let elem = e.currentTarget;
//     // console.log('target : ',e.target);
//     // console.log('currentTarget :  ' ,e.currentTarget);
//     // console.log(this === e.currentTarget);
//     // console.log(this);
//     console.log('%c visual','background:dodgerblue');

//     css('.pop','display','block');
// })



// getNode('.pop').addEventListener('click',(e)=>{
//   e.stopPropagation()
//   css('.pop','display','none');
// })


// news.addEventListener('click',function(e){
//   e.stopPropagation()
//     console.log('%c news','background:orange');
// })
// desc.addEventListener('click',function(e){
//     e.stopPropagation()
//     console.log('cccc');
// })
// desc.addEventListener('click',function(e){
//     e.stopImmediatePropagation()
//     // e.stopPropagation()
//     console.log('%c desc','background:hotpink');
// })
// desc.addEventListener('click',function(e){
//     e.stopPropagation()
//     console.log('aaaa');
// })