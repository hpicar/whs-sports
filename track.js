function toggleSidebar(){
document.getElementById("sidebar").classList.toggle('active')
}

var myTimer;
 function clock() {
   myTimer = setInterval(myClock, 1000);
   var c = 600;

   function myClock() {
     var min = Math.floor(c / 60);
     var sec = c % 60;
     n = zero(sec);
     function zero(n) {
 if (n < 10) {
   return n = "0" + n;
 }
 else {
   return n = n;
 }
}
     document.getElementById("one").innerHTML = min + ":" + n;
     --c;
     if (c == 0) {
       clearInterval(myTimer);
       document.getElementById("one").innerHTML = "0"
   }
 }
}
