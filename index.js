$(document).ready(function(){
 $(".show").click(function(){
    $(".div1").show();
 });
 $(".hide").click(function(){
    $(".div1").hide();
 })



//  for toogle
$(".linkcourse").click(function(){
    $(".course").toggle();
 });

 //for short course
 $(".show").click(function(){
   $(".longcourse").show();
});

$(".hide").click(function(){
   $(".longcourse").hide();
});


});

//for search
$(document).ready(function(){
   $("#find").on("keyup", function() {
     var value = $(this).val().toLowerCase();
     $(".div1 .row").filter(function() {
       $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
     });
   });
 });