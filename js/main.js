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