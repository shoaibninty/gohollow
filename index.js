$(document).ready(function(){
  $(".dots").click(function(){
	 $("#rem").toggleClass("mobhide");
  });
});


                         $(function(){
    $('input').data('holder',$('input').attr('placeholder'));
    $('input').focusin(function(){
        $(this).attr('placeholder','');
    });
    $('input').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });
})