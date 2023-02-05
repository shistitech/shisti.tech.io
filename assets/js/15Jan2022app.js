$(function () {
    $('.contact').on('click', function () {
        $('html,body').animate({ scrollTop: document.body.scrollHeight }, "slow");
    })
    $('form button').on('click',function(){
        alert('Message has been sent');
    })
})