$(document).ready(function(){
  $(".dots").click(function(){
	 $("#rem").toggleClass("mobhide");
  });




    
     jQuery('.home-section-hide').slideToggle('.home-section-hide');
        if(jQuery('#iconchange11').hasClass('fa-angle-down')){
jQuery('#iconchange11').removeClass('fa-angle-down');
jQuery('#iconchange11').addClass('fa-angle-up');
          jQuery(".barmob22").html("Read Less");
}
else{
jQuery('#iconchange11').removeClass('fa-angle-up');
jQuery('#iconchange11').addClass('fa-angle-down');
  jQuery(".barmob22").html("Read More");
}
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


