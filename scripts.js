$(document).ready(function(){
  $('.accordion').click(function() {
      var $this = $(this);
      $this.next().toggle('fast', function () {
        var headerText = $this.text();
        if ($this.next().is(':hidden')) {
          $this.text(headerText.slice(0, headerText.length - 2) + '+]');
        } else {
          $this.text(headerText.slice(0, headerText.length - 2) + '-]');
        }
      });
      return false;
  }).next().hide();
});
