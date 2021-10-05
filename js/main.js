function gotoAbout(){
    document.getElementById("about").scrollIntoView()
}

var prevScrollpos = window.pageYOffset;
if(prevScrollpos==0){
  document.getElementById("navbar").style.top = "-80px";
}
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "-80px";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
  prevScrollpos = currentScrollPos;
}

onmousemove = function(e){
  if (e.clientY <= 10){
    this.document.getElementById("navbar").style.top = "0px";
  }
  // else if(e.clientY > 200){
    // this.document.getElementById("navbar").style.top = "-80px";
  // }
}

var inactivityTime = function () {
  var time;
  document.onscroll = resetTimer;

  function hideNav() {
    document.getElementById("navbar").style.top = "-80px";
  }

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(hideNav, 3000)
  }
};


inactivityTime();
