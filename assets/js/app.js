$(function () {
    $('.contact').on('click', function () {
        $('html,body').animate({ scrollTop: document.body.scrollHeight }, "slow");
        $('.mainNav ul li').removeClass('active');
        $(this).parent().addClass('active');
      })
    $('form button').on('click',function(){
        alert('Form is underconstruction');
    })
    
    $('#closeMenu').on('click',function(){
        $('.menu').removeClass('open')
        $('body').removeClass('openmodal');
      })
      $('#burger').on('click',function(){
        $('.menu').addClass('open')
        $('body').addClass('openmodal');
      })
      $('.btn-close').on('click',function(){
        $('.modal').modal('hide');
      })
      $('.contact').on('click',function(){
        $('.menu').removeClass('open')
        $('body').removeClass('openmodal');
      })
})

