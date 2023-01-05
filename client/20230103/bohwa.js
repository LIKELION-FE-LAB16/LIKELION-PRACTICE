<1번 문제 - 함수표현식>
let pow = function(a,b){
return Math.pow(a,b);}

pow(2,53);


<1번 문제 - 화살표 함수>
let pow = (a,b) => Math.pow(a,b);

alert(pow(2,53));

// // 

<2번 문제 - 함수표현식>
let repeat = function(n){
return String.prototype.repeat(n);}

"hello".repeat(3);


<2번 문제 - 화살표 함수>
let repeat = n => String.prototype.repeat(n);

alert("hello".repeat(3));