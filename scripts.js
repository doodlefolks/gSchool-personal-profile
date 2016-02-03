$(document).ready(function(){
  $('.accordion').click(function() {
      $(this).next().toggle('fast');
      return false;
  }).next().hide();
});
