$(window, document, undefined).ready(function() {

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
  	$(this).removeClass('is-active');
  });



$('.login_btn').click(function(){
  var user_name = $('.user_name').val();
  var password = $('.password').val();

  $.ajax({
    url:'php/login.php',
    method:'POST',
    data:{user_name:user_name, password:password},
    success:function(res){
      if (res == 1) {
        location.href = './';
      }
      else{
        alert("Wrong username or password");
      }
    }
  })
})





});