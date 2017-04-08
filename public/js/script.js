$( document ).ready(function() {
  $("button").click(function(){
    console.log($('#taskInput').val() );
    $(".todo-list").append('<li class="task"><input type = "checkbox"/>' + $('#taskInput').val()+'</li>');
  });

  $(document).on("click",".task",function(){
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
