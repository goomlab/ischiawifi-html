/**
* isMobile
*/
function isMobile() {
  var IS_IPAD = navigator.userAgent.match(/iPad/i) != null,
    IS_IPHONE = !IS_IPAD && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
    IS_IOS = IS_IPAD || IS_IPHONE,
    IS_ANDROID = !IS_IOS && navigator.userAgent.match(/android/i) != null,
    IS_MOBILE = IS_IOS || IS_ANDROID;
  return navigator.userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
}

/**
* PageLoader
*/
function PageLoaderShow(){
  $('#page-loader').addClass('show');
}
function PageLoaderHide(){
  $('#page-loader').removeClass('show');
}

/**
* Rellax
*/
// var rellax = null;
// var rellaxHorizontal = null;
// function parallax(className) {
//   if(document.getElementsByClassName(className).length <= 0)
//     return;
  
//   windowWidth = window.innerWidth;
//   if( !rellax && !isMobile() )
//     rellax = new Rellax('.'+className);
//   if( rellax && (isMobile() || windowWidth < 992) )
//     rellax.destroy();
//   if( rellax && !isMobile() && windowWidth >= 992 )
//     rellax.refresh();
// }
// function parallaxHorizontal(className) {
//   if(document.getElementsByClassName(className).length <= 0)
//     return;
  
//   windowWidth = window.innerWidth;
//   if( !rellaxHorizontal && !isMobile() )
//   rellaxHorizontal = new Rellax('.'+className,{
//     vertical: false,
//     horizontal: true
//   });
//   if( rellaxHorizontal && (isMobile() || windowWidth < 992) )
//   rellaxHorizontal.destroy();
//   if( rellaxHorizontal && !isMobile() && windowWidth >= 992 )
//   rellaxHorizontal.refresh();
// }

// $(document).ready(function(){
//   if( $('.rellax').length > 0 )
//     rellax = new Rellax('.rellax');

  // $(".fancybox-gallery").fancybox({
  //   // topRatio: 0,
  //   // width: '100%',
  //   // height: '100%',
  //   // wrapCSS    : 'fancybox-fullscreen',
  //   // afterLoad  : function () {
  //   //     $.extend(this, {
  //   //         aspectRatio : false,
  //   //         type    : 'html',
  //   //         width   : '100%',
  //   //         height  : '100%',
  //   //         content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
  //   //     });
  //   //     $('.fancybox-wrap').css({'position':'fixed', 'top':'0'});
  //   // }
  // });
// })

$(document).ready(function(){
  if( $('.rellax').length > 0 ){
    var rellax = new Rellax('.rellax');
  }
  // var rellaxH = new Rellax('.rellaxH',{
  //   horizontal: true,
  //   vertical: false
  // });
  // if( $('.rellaxH').length > 0 ){
    // $(window).enllax({
    //   type: 'foreground',  // another value for type is 'foreground'.
    //   ratio: 0.5,  // multiplier for scrolling speed. Less is slower. Default: '0'.
    //   direction: 'horizontal' // another value for direction is 'horizontal'.
    // });
  // }
  if( $('.enllax').length > 0 ){
    $(window).enllax();
  }
})

/**
 * Navbar
 */
$(document).on('click', '.navbar-toggler', function(){
  if( $('.navbar-toggler').hasClass('collapsed') ){
    $('.navbar-toggler').removeClass('collapsed')
    // $('.navbar-toggler').addClass('opacity0')
    $('#menu1').addClass('show')
  }
  else {
    $('.navbar-toggler').addClass('collapsed')
    // $('.navbar-toggler').removeClass('opacity0')
    $('#menu1').removeClass('show')
  }
})
$(document).on('click', '#menu1', function(){
  $('.navbar-toggler').addClass('collapsed')
  $('#menu1').removeClass('show')
})
$(document).on('click', '#menu1 .dropdown-toggle', function(e){
  e.preventDefault();
  if( $(this).hasClass('active') ){
    $(this).removeClass('active');
    $(this).next('.dropdown-menu').removeClass('show');
  }
  else {
    $(this).addClass('active');
    $(this).next('.dropdown-menu').addClass('show');
  }
  
  return false;
})



/**
 * Header: Scroll
 */
$(window).on('scroll', function(){
  if( window.pageYOffset > 150 ){
    $('#nav-1').addClass('navbar-scroll')
    $('#menu1').addClass('navbar-scroll')
  }
  else {
    $('#nav-1').removeClass('navbar-scroll')
    $('#menu1').removeClass('navbar-scroll')
  }
})



/**
 * ScrollTo
 */
$('.scrollto').click(function(){
  var scrollto = $(this).attr('href'); console.log('href', scrollto, $(this));
  $('html, body').animate({
    scrollTop: parseInt($(scrollto).offset().top) - 60
  }, 1000);
  return false;
});


/**
 * Animate
 */
// function isScrolledIntoView(elem) {
//   var docViewTop = $(window).scrollTop();
//   var docViewBottom = docViewTop + $(window).height();

//   var elemTop = $(elem).offset().top;
//   var elemBottom = elemTop + $(elem).height();

//   return elemBottom <= docViewBottom && elemTop >= docViewTop;
// }
// $(window).scroll(function() {
//   $(".animate__animated").each(function() {
//     if (isScrolledIntoView(this) === true) {
//       $(this).addClass($(this).attr('data-animation'));
//       $(this).css('opacity','1');
//     }
//   });
// });



/**
 * Swiper
 */
var swipers = [];
$('.swiper').each(function(index){
  if( $(this).hasClass('swiper-home1') ){
    $(this).attr('data-index', index);
    $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);
    $(this).parent().find('.swiper-pagination').addClass('swiper-pagination-' + index);

    var swiper = new Swiper(this, {
      initialSlide: 0,
      loop: true,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      },
      pagination: {
        el: '.swiper-pagination-' + index,
        clickable: true
      },
    });
  }
  
  if( $(this).hasClass('swiper-notices') ){
    $(this).attr('data-index', index);
    $(this).addClass('swiper-notices-' + index);
    $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);

    $('.swiper-slide .white-box').each(function(){
      $(this).addClass('closed');
      $(this).parent().addClass('closed')
    })

    var swiper = new Swiper(this, {
      initialSlide: 0,
      slidesPerView: 1,
      loop: true,
      speed: 900,
      spaceBetween: 0,
      centeredSlides: true,
      // init: false,
      navigation: {
        nextEl: '.swiper-button-next-' + index,
        prevEl: '.swiper-button-prev-' + index,
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 60,
        }
      },
    })
  }

  if( $(this).hasClass('swiper-reviews') ){
    $(this).attr('data-index', index);
    // $(this).parent().find('.swiper-button-next').addClass('swiper-button-next-' + index);
    // $(this).parent().find('.swiper-button-prev').addClass('swiper-button-prev-' + index);
    // $(this).parent().find('.swiper-pagination').addClass('swiper-pagination-' + index);

    var swiper = new Swiper(this, {
      initialSlide: 0,
      loop: true,
      spaceBetween: 0,
      // navigation: {
      //   nextEl: '.swiper-button-next-' + index,
      //   prevEl: '.swiper-button-prev-' + index,
      // },
      // pagination: {
      //   el: '.swiper-pagination-' + index,
      //   clickable: true
      // },
    });
  }

  swipers[index] = swiper;
  initPalette();
})

function initPalette(){
  $('.swiper-container').each(function(index){
    if( $(this).hasClass('swiper-home-projects') ){

    }
    if( $(this).hasClass('swiper-events') ){
      var palette = $(this).parent().find('.swiper-palette');
      $(palette).css({
        top: ($(this).find('figure').height() - 120)+'px'
      })
    }
  })
}

$(window).on('resize', function(){
  for( let i in swipers ){
    swipers[i].update()
  }
  initPalette();
})

// /**
//  * Disable right click mouse
//  */
// $("html").on("contextmenu",function(e){
//   return false;
// });
// /**
//  * Disable copy and paste
//  */
// $(document).ready(function() {
//   $('body').bind('cut copy', function(e) {
//       e.preventDefault();
//     });
// });


/***
 * Contact Form 7
 */
// $('.form-1 .custom-checkbox label').click(function(){
//   var checkbox = $(this).parent().find('input[type="checkbox"]');
//   if( $(checkbox).is(':checked') ){
//     $(checkbox).prop('checked', false);
//     $(this).removeClass('checked');
//   } else {
//     $(checkbox).prop('checked', true);
//     $(this).addClass('checked');
//   }
// })
// $('.form-1 .custom-control.custom-checkbox').click(function(){
//   var currInput = $(this).find('input[type="checkbox"]'),
//   currLabel = $(this).find('.custom-control-label'),
//   currVal = currInput.prop('checked');
//   currInput.prop('checked', !currVal);

//   if( !currVal )
//     $(currLabel).addClass('checked');
//   else
//     $(currLabel).removeClass('checked');
// });




// /**
//  * Replace all SVG images with inline SVG
//  */
// $('img.svg').each(function(){
//   var $img = $(this);
//   var imgID = $img.attr('id');
//   var imgClass = $img.attr('class');
//   var imgURL = $img.attr('src');
//   $.get(imgURL, function(data) {
//     // Get the SVG tag, ignore the rest
//     var $svg = $(data).find('svg');
//     // Add replaced image's ID to the new SVG
//     if(typeof imgID !== 'undefined') {
//         $svg = $svg.attr('id', imgID);
//     }
//     // Add replaced image's classes to the new SVG
//     if(typeof imgClass !== 'undefined') {
//         $svg = $svg.attr('class', imgClass+' replaced-svg');
//     }
//     // Remove any invalid XML tags as per http://validator.w3.org
//     $svg = $svg.removeAttr('xmlns:a');
//     // Replace image with new SVG
//     $img.replaceWith($svg);
//   }, 'xml');
// });