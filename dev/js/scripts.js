$(document).ready(function(){

	const width = $(window).width();
	const height = $(window).height();

	console.log('Width: ' + width + 'px');
	console.log('Height: ' + height + 'px');

	svg4everybody();

	var lazyLoadInstance = new LazyLoad({
		elements_selector: ".lazy",
		load_delay: 100
	});


	if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /rv:10.0/i.test(navigator.userAgent)) {

		//Добавить класс ie в боди
		document.body.className = "ie";
		//Перенаправить на другую страницу
		window.location = '/ie.html';

	}


// Smooth fadeUp

	const categoriesItem = document.querySelectorAll('.categories__item'),
		descrUp = [...document.querySelectorAll('.categories__descr')];

	categoriesItem.forEach((item, i) => {
		item.addEventListener('mouseenter', () => {
			descrUp[i].style.display = 'block';
		});
	});

	categoriesItem.forEach((item, i) => {
		item.addEventListener('mouseleave', () => {
			descrUp[i].style.display = 'none';
		});

	});


	// Contacts accordion

	const showArrow = document.querySelectorAll('.footer__arrow'),
		contactsMore = [...document.querySelectorAll('.footer__more')];

	showArrow.forEach((item, i) => {
		item.addEventListener('click', (e) => {
			if (!contactsMore[i].classList.contains('hidden')) {
				contactsMore[i].classList.add('hidden');
				showArrow[i].style.transform = 'rotate(0)';
			} else {
				contactsMore[i].classList.remove('hidden');
				showArrow[i].style.transform = 'rotate(180deg)';
			}
		});
	});


	// Mobile menu

	const menu = document.querySelector('.mobile__menu'), menuItem = document.querySelectorAll('.mobile__item'),
		burger = document.querySelector('.burger');


	burger.addEventListener('click', () => {
		if (!burger.classList.contains('burger_active')) {
			burger.classList.add('burger_active');
			menu.classList.add('mobile__menu_active');
		} else {
			burger.classList.remove('burger_active');
			menu.classList.remove('mobile__menu_active');
		}
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			burger.classList.remove('burger_active');
			menu.classList.remove('mobile__menu_active');
		});
	});


	// Slider
	//
	// let slideIndex = 1;
	// const items = document.querySelectorAll('.slider__item'),
	// 	prevBtn = document.querySelector('#prev'),
	// 	nextBtn = document.querySelector('#next');
	//
	// showSlides(slideIndex);
	//
	// function showSlides(n) {
	// 	if (n > items.length) {
	// 		slideIndex = 1;
	// 	}
	// 	if (n < 1) {
	// 		slideIndex = items.length;
	// 	}
	//
	// 	items.forEach(item => {
	// 		item.style.display = 'none';
	// 	});
	//
	// 	items[slideIndex - 1].style.display = 'block';
	// }
	//
	//
	// prevBtn.addEventListener('click', () => {
	// 	plusSlides(-1);
	// 	items[slideIndex - 1].classList.add('animatedToLeft');
	// 	items[slideIndex - 1].classList.remove('animatedToRight');
	// });
	//
	// nextBtn.addEventListener('click', () => {
	// 	plusSlides(1);
	// 	items[slideIndex - 1].classList.add('animatedToRight');
	// 	items[slideIndex - 1].classList.remove('animatedToLeft');
	// });
	//
	// function plusSlides(n) {
	// 	showSlides(slideIndex += n);
	// }



	//Клик в не блока
	// $(document).mouseup(function (e){
	// 	var div = $(БЛОК);
	// 	if (!div.is(e.target)
	// 		&& div.has(e.target).length === 0) {
	// 		div.removeClass('open');
	// 	}
	// });


	//Попап инит
	// $('.ajax-form').magnificPopup({
	// 	type: 'ajax',
	// 	ajaxContentAdded: function() {
	// 		console.log(this.content);
	// 	}
	// });



	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		speed: 300,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev arrow-btn"><img src="img/svg/left.svg"></button>',
		nextArrow: '<button type="button" class="slick-next arrow-btn"><img src="img/svg/right.svg"></button>',
	});


	if($('.styler').length){
		$('.styler').styler();
	}

});


$(window).resize(function () {

	let width = $(window).width();
	let height = $(window).height();

	if(width > 991){
		$('.header').attr('data-mob', 'false');
		menuDex()
	}
	else{
		$('.header').attr('data-mob', 'true');
		menuMob();
	}
});


function menuMob() {

}

function menuDex() {

}
function paralax(elem, vertical, horizontal) {

	if (elem.length) {
		var elementX = 0,
			elementY = 0,
			elementW = 0,
			elementH = 0,
			mouseX = 0,
			mouseY = 0;
		$(document).mousemove(function (e) {
			var position = elem.offset(),
				obj = elem;
			elementX = position.left;
			elementY = position.top;
			elementW = obj.width();
			elementH = obj.height();
			var halfW = elementW / 2;
			var halfH = elementH / 2;
			mouseX = (e.pageX - elementX - halfW) / halfW;
			mouseY = (e.pageY - elementY - halfH) / halfH;
			mouseX = Math.round(mouseX * 100) / 100;
			mouseY = Math.round(mouseY * 100) / 100;

			elem.css({
				"transform": "translateY(" + mouseY * vertical + "px)  translateX(" + mouseX * horizontal + "px) ",
				"-webkit-transform": "translateY(" + mouseY * vertical  + "px) translateX(" + mouseX * horizontal + "px) ",
				"-ms-transform": "translateY(" + mouseY * vertical/ + "px) translateX(" + mouseX * horizontal + "px) ",
				"-o-transform": "translateY(" + mouseY * vertical  + "px) translateX(" + mouseX * horizontal + "px) ",
				"-moz-transform": "translateY(" + mouseY * vertical + "px) translateX(" + mouseX * horizontal + "px) "
			});
		});
	}
}