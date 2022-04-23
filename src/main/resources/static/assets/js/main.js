$( document ).ready(function() {
    $(".about-direction").click(function(event){
        let direction = event.target.id;
        if(direction == "right"){
            $("div#up > .caracter").eq(0).appendTo('div#up');
            $("div#down > .caracter").eq(0).appendTo('div#down');
            
        }
        if(direction == "left"){
            $("div#up > .caracter").eq(5).prependTo('div#up');
            $("div#down > .caracter").eq(5).prependTo('div#down');
            
        }
      })
      console.log(window.innerWidth);
      if(window.innerWidth <= 1000){
        $('.intro--banner').css('background', 'url("/assets/img/BraveHeartMain2.png") no-repeat center center / cover')
      }
      
});

// $('body').on('scroll touchmove mousewheel', e => {
//     $('body').scrollTop(0);
// });

function videoModal (category) {
    $("#videoModal").modal({
        fadeDuration: 500
      });
    $(".categoryVideo").html(category);
    $("iframe").attr('src', category);
    // $("iframe").attr('width', '100%');
    // $("iframe").attr('height', '40%');
}

function serviceModal () {
    $("#serviceModal").modal({
        fadeDuration: 500
      });
}


