// //스크롤 할 때마다 기록을 출력
// window.addEventListener("scroll", function(){
//   console.log("clientHeight: " + document.body.clientHeight);
//   console.log("innerHeight: " + window.innerHeight);
//   console.log("scrollY: " + window.scrollY);
// });

// //어떤 변수를 박스형태로.
// const element = document.getElementById("box");
// window.addEventListener("scroll", function(){
//   document.getElementById("t1").innerText = "clientHeight: " + document.body.clientHeight;
//   document.getElementById("t2").innerText = "innerHeight: " + window.innerHeight;
//   //스크롤바의 윗선이 해당하는 값의 부분
//   document.getElementById("t3").innerText = "scrollY: " + window.scrollY;
//   document.getElementById("t4").innerText = "clientHeight-innerHeight: "+ (document.body.clientHeight - window.innerHeight);


//변수 img는 document안의 id선택자가 bottom에 해당하는 부분이다.
var img = document.getElementById("bottom");
//윈도우 화면에서 scroll과 function에 해당하는 이벤트를 불러와서 사용
window.addEventListener("scroll", function(){
  //console.log(window.scrollY);
  //윈도우의 scrollY 값이 300보다 크다면
  if(window.scrollY > 300){
    //bottom에 해당하는 부분의 스타일중 아래에서의 위치를 -1000px만큼 움직인다.
    bottom.style.bottom = -1000 + "px";
    //그게 아니라면(window.scrollY가 300픽셀보다 같거나 작다면 요소를 원위치 시킨다)
  } else {
    bottom.style.bottom = 0 + "px";
  }
});

