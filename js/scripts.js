$(document).ready(function(){
    $('#myCarousel').carousel({interval:2000});
    $('#carouselBtn').click(function(){
        if($('#carouselBtn').children('span').hasClass('fa-pause')){
            $('#myCarousel').carousel('pause');
            $('#carouselBtn').children('span').removeClass('fa-pause').addClass('fa-play');
        }
        else{
            $('#myCarousel').carousel('cycle');
            $('#carouselBtn').children('span').removeClass('fa-play').addClass('fa-pause');
        }
    });
    $('#reserveBtn').click(function () {
        $('#reserveModal').modal('show'); 
    });
    $('#loginBtn').click(function () {
        $('#loginModal').modal('show'); 
    });
});