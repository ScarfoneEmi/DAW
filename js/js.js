 $(document).ready(function(){
   $(".nav-item").addClass("sumir");
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
