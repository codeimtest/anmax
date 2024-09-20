$('.toggle_btn').click(function(e) {
	e.stopPropagation(); // Останавливаем всплытие события
	$(".mega_menu").toggleClass('active');
	$(this).toggleClass('active')
});
$(document).mouseup(function (e) {
	var container = $(".mega_menu ,.main_nav");
	
	// Проверяем, кликнули ли мы вне контейнера
	if (container.has(e.target).length === 0) {
			// Скрываем все активные mega_menu
			$(".mega_menu").removeClass('active');

	}
});


$('.menu_button').click(function(){
	$(this).toggleClass('active');
	$('aside').toggleClass('active');
	$('header').toggleClass('active');
	$('body').toggleClass('lock')
	$('.mega_menu').removeClass('active')
	$('.toggle_btn').removeClass('active')
})

$(".sidebar_widget div").click(function(){
	$(this).next().toggleClass('active')
	$(this).toggleClass('active')
})
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	var header = $('header');

	if (scroll >= 200) {
		header.addClass('toggled');
	} else {
		header.removeClass('toggled');
	}
});
// $('.mega_menu nav > ul > li > a').first().addClass('active')
// $('.mega_menu nav > ul > li > a').first().next().addClass('active')
$('.mega_menu nav > ul > li > a').each(function() {
	if ($(this).siblings('.sub-menu').length) {
			$(this).click(function(e) {
					e.preventDefault(); // Отменить действие ссылки, если есть подменю
			});
	}
});
$('.mega_menu nav > ul > li > a').click(function(){
	$('.mega_menu nav > ul > li > a').removeClass('active')
	$(this).addClass('active')
	$('.mega_menu nav > ul > li > a').next().removeClass('active')
	$(this).next().addClass('active')
})
$('.back_btn').click(function() {
	// Находим родительский элемент, который содержит submenu
	const $currentMenu = $(this).closest('.mega_menu');

	// Проверяем наличие активного подменю внутри этого родительского элемента
	const $submenu = $currentMenu.find('ul.sub-menu');

	if ($submenu.hasClass('active')) {
			// Если submenu активно, то просто выключаем его
			$submenu.removeClass('active');
			$('.toggle_btn').removeClass('active')
			console.log('123');
	} else {
			// Если submenu не активно, то закрываем mega_menu
			$currentMenu.removeClass('active');
			$('.toggle_btn').removeClass('active')
			console.log('Mega Menu закрыто');
	}
});
$('.tabs_widget a').click(function(){
	$('.tabs_widget a').removeClass('active')
	$(this).addClass('active')
})
//home slider
var swiper = new Swiper(".first_screen_slider", {
	slidesPerView: 1,
	watchOverflow: true,
	loop: false,
	watchSlidesProgress: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	autoplay: {
		delay: 4000,
	}
});
//case slider
var swiper2 = new Swiper(".works_slider", {
	slidesPerView: 1.2,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 12,
	navigation: {
		nextEl: ".next_btn.slider_nav_works",
		prevEl: ".prev_btn.slider_nav_works",
	},
	breakpoints: {
		1400: {
			slidesPerView: 4,
			spaceBetween: 20,
	 },
		993: {
			slidesPerView: 3,
			spaceBetween: 16,
	 },
		576: {
			slidesPerView: 2.2,
			spaceBetween: 14,
	 },

	}
});
var swiper3 = new Swiper(".brands_slider", {
	slidesPerView: 3.2,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 20,
	navigation: {
		nextEl: ".next_btn.slider_nav_brands",
		prevEl: ".prev_btn.slider_nav_brands",
	},
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		1400: {
			slidesPerView: 8,
			spaceBetween: 80,
	 },
		993: {
			slidesPerView: 6,
			spaceBetween: 40,
	 },
		576: {
			slidesPerView: 4,
			spaceBetween: 30,
	 },

	}
});
var swiper4 = new Swiper(".testi_slider", {
	slidesPerView: 1,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".next_btn.slider_nav_testi",
		prevEl: ".prev_btn.slider_nav_testi",
	},
	pagination: {
		el: ".swiper-pagination.swiper-pagination-alt",
		clickable: true,
	},
	breakpoints: {
		993: {
			slidesPerView: 2,
			spaceBetween: 40,
	 },

	}
});
var swiper5 = new Swiper(".docs_slider", {
	slidesPerView: 1.7,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 10,
	navigation: {
		nextEl: ".next_btn.slider_nav_docs",
		prevEl: ".prev_btn.slider_nav_docs",
	},
	breakpoints: {
		993: {
			slidesPerView: 4,
			spaceBetween: 20,
	 },
	 576: {
		slidesPerView: 2.2,
		spaceBetween: 20,
 },
	}
});
var swiper6 = new Swiper(".product_slider", {
	slidesPerView: 1,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 9,
	pagination: {
		el: ".swiper-pagination.swiper-pagination-alt",
		clickable: true,
	},

});
var swiper7 = new Swiper(".related_slider", {
	slidesPerView: 1.2,
	watchOverflow: true,
	watchSlidesProgress: true,
	spaceBetween: 12,
	navigation: {
		nextEl: ".next_btn.slider_nav_works",
		prevEl: ".prev_btn.slider_nav_works",
	},
	pagination: {
		el: ".swiper-pagination.swiper-pagination-alt",
		clickable: true,
	},
	breakpoints: {
		1400: {
			slidesPerView: 4,
			spaceBetween: 20,
	 },
		993: {
			slidesPerView: 3,
			spaceBetween: 16,
	 },
		576: {
			slidesPerView: 2.2,
			spaceBetween: 14,
	 },

	}
});
Fancybox.bind('[data-fancybox="gallery"]', {
	// Your custom options
});