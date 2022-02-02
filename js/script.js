$(function(){
	var mixer = mixitup('.gallery__content');
});

$(function(){
	$('.blog__slider').slick({
		arrows: false,
		dots: true
	});

	$('.menu__btn, .header__menu a').on('click', function(){
		//добавляет класс
		//$('.header__menu-ul').addClass('header__menu-ul--active')	
		//добавляет/удаляет класс
		$('.header__top').toggleClass('header__top--active');
	})

	$(".header__menu a, .header__content a, .footer a").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr("href"),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;

		//анимируем переход на расстояние - top за 1500 мс
		$("body,html").animate({ scrollTop: top }, 500);
	});
});

$(document).ready(function () {
	setTimeout(function () {
		 
		  $('a[href]#no-link').each(function () {
			  var href = this.href;

			  $(this).removeAttr('href').css('cursor', 'pointer').click(function () {
				  if (href.toLowerCase().indexOf("#") >= 0) {

				  } else {
					  window.open(href, '_blank');
				  }
			  });
		  });
	}, 500);
});