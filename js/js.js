 $(document).ready(function(){
   $(".nav-item").addClass("sumir");
   $(".max").css("background-image","url('imgs/274-2743012_walle-8-wall-e-and-roach.png')");
});
var cont=0;
function recolher(){

if(cont % 2 == 0){
  $(".nav-item").removeClass("sumir");
cont++;
}
else {
  $(".nav-item").addClass("sumir");
  cont++;

}
}
