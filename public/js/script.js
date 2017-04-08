$( document ).ready(function() {
  $('.task').click(function() {
      $(this).fadeOut( "slow", function() {
        if($(this).find("input").is(':checked')){
          $(this).appendTo(".finished-list").addClass("finished-task");
        }else{
          $(this).appendTo(".todo-list").removeClass("finished-task");
        }
        $(this).fadeIn("slow");
      });
  });
  $(".finished-task input").prop( "disabled", true ); //Disable
});
