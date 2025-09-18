(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
			//>> Mobile Menu Js Start <<//
			$("#mobile-menu").meanmenu({
				meanMenuContainer: ".mobile-menu",
				meanScreenWidth: "991",
				meanExpand: ['<i class="far fa-plus"></i>'],
			});

			$("#mobile-menus").meanmenu({
				meanMenuContainer: ".mobile-menus",
				meanScreenWidth: "1920",
				meanExpand: ['<i class="far fa-plus"></i>'],
			});

			//>> Sidebar Toggle Js Start <<//
			$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
				$(".offcanvas__info").removeClass("info-open");
				$(".offcanvas__overlay").removeClass("overlay-open");
			});
			$(".sidebar__toggle").on("click", function () {
				$(".offcanvas__info").addClass("info-open");
				$(".offcanvas__overlay").addClass("overlay-open");
			});

			//>> Body Overlay Js Start <<//
			$(".body-overlay").on("click", function () {
				$(".offcanvas__area").removeClass("offcanvas-opened");
				$(".df-search-area").removeClass("opened");
				$(".body-overlay").removeClass("opened");
			});

			/* ================================
     Back To Top Button Js Start
    ================================ */

			// Function to toggle back-to-top button visibility
			function toggleBackTop() {
				if (
					$(window).scrollTop() + $(window).height() >=
					$(document).height()
				) {
					$("#back-top").addClass("show");
				} else {
					$("#back-top").removeClass("show");
				}
			}

			// On scroll
			$windowOn.on("scroll", function () {
				toggleBackTop();
			});

			// On document ready, force hide the button
			$(document).ready(function () {
				$("#back-top").removeClass("show");
			});

			// On click
			$documentOn.on("click", "#back-top", function () {
				$("html, body").animate({ scrollTop: 0 }, 800);
				return false;
			});

			//faq item
			const accordionItems = document.querySelectorAll(".accordion-item");
			accordionItems.forEach((item) => {
				item.addEventListener("click", function () {
					// Remove 'active' class from all other accordion items
					accordionItems.forEach((otherItem) => {
						if (otherItem !== this) {
							otherItem.classList.remove("active");
						}
					});

					// Toggle 'active' class on the clicked item
					this.classList.toggle("active");
				});
			});

			//>> Sticky Header Js Start <<//

			$windowOn.on("scroll", function () {
				if ($(this).scrollTop() > 250) {
					$("#header-sticky").addClass("sticky");
				} else {
					$("#header-sticky").removeClass("sticky");
				}
			});

			//>> Video Popup Start <<//
			$(".img-popup").magnificPopup({
				type: "image",
				gallery: {
					enabled: true,
				},
			});

			$(".img-popup2").magnificPopup({
				type: "image",
				gallery: {
					enabled: true,
				},
			});

			$(".video-popup").magnificPopup({
				type: "iframe",
				callbacks: {},
			});

			//>> Counterup Start <<//
			$(".count").counterUp({
				delay: 15,
				time: 4000,
			});

			//>> Wow Animation Start <<//
			new WOW().init();

			//>> Nice Select Start <<//
			if ($(".single-select").length) {
				$(".single-select").niceSelect();
			}

			//>> Brand Slider Start <<//
			if ($(".brand-slider").length > 0) {
				const BrandSlider = new Swiper(".brand-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					centeredSlides: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},

					breakpoints: {
						1199: {
							slidesPerView: 7,
						},
						991: {
							slidesPerView: 5,
						},
						767: {
							slidesPerView: 3,
						},
						575: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> Project Slider Start <<//
			if ($(".project-slider").length > 0) {
				const ProjectSlider = new Swiper(".project-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 5,
						},
						991: {
							slidesPerView: 3,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> Project Slider Start <<//
			if ($(".studies-slider").length > 0) {
				const studiesSlider = new Swiper(".studies-slider", {
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1499: {
							slidesPerView: 3.5,
							spaceBetween: 64,
						},
						991: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 24,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 18,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> Project Slider Start <<//
			if ($(".news-slider").length > 0) {
				const NewsSlider = new Swiper(".news-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 2,
						},
						991: {
							slidesPerView: 2,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> service-three-slider Start <<//
			if ($(".service-three-slider").length > 0) {
				const serviceThreeSlider = new Swiper(".service-three-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 3,
						},
						991: {
							slidesPerView: 2,
						},
						767: {
							slidesPerView: 2,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//>> Testimonial Slider Start <<//
			if ($(".testimonial-slider").length > 0) {
				const TestimonialSlider = new Swiper(".testimonial-slider", {
					spaceBetween: 30,
					speed: 1300,
					loop: true,
					autoplay: {
						delay: 2000,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: ".array-prev",
						prevEl: ".array-next",
					},
					breakpoints: {
						1199: {
							slidesPerView: 2,
						},
						991: {
							slidesPerView: 1,
						},
						767: {
							slidesPerView: 1,
						},
						575: {
							slidesPerView: 1,
						},
						0: {
							slidesPerView: 1,
						},
					},
				});
			}

			//testimonial with thumb-slider
			var swiper_thumb = new Swiper(".testimonial-thumb-active", {
				loop: true,
				// spaceBetween: 10,
				slidesPerView: 3,
				centeredSlides: true,
				// freeMode: true,
				watchSlidesProgress: true,
			});
			var swiper_content = new Swiper(".testimonial-content-active", {
				loop: true,
				spaceBetween: 10,
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				thumbs: {
					swiper: swiper_thumb,
				},
			});

			//testimonial with thumb-slider02
			var swiper_thumb = new Swiper(".testimonial-thumb-active2", {
				loop: true,
				spaceBetween: 22,
				slidesPerView: 3,
				direction: "vertical",
				centeredSlides: true,
				// freeMode: true,
				watchSlidesProgress: true,
			});
			var swiper_content = new Swiper(".testimonial-content-active02", {
				loop: true,
				slidesPerView: 1,
				spaceBetween: 0,
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				thumbs: {
					swiper: swiper_thumb,
				},
			});

			//>> Hero-Image Slider Start <<//
			if ($(".hero-image-slider").length > 0) {
				const HeroImageSlider = new Swiper(".hero-image-slider", {
					spaceBetween: 30,
					speed: 2000,
					loop: true,
					pagination: {
						el: ".dot",
						clickable: true,
					},
					autoplay: {
						delay: 1,
						disableOnInteraction: true,
					},
				});
			}

			//>> Hero-1 Slider Start <<//
			const sliderActive2 = ".hero-slider";
			const sliderInit2 = new Swiper(sliderActive2, {
				loop: true,
				slidesPerView: 1,
				effect: "fade",
				speed: 3000,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				navigation: {
					nextEl: ".array-prev",
					prevEl: ".array-next",
				},
				pagination: {
					el: ".dot",
					clickable: true,
				},
			});

			function animated_swiper(selector, init) {
				const animated = function animated() {
					$(selector + " [data-animation]").each(function () {
						let anim = $(this).data("animation");
						let delay = $(this).data("delay");
						let duration = $(this).data("duration");
						$(this)
							.removeClass("anim" + anim)
							.addClass(anim + " animated")
							.css({
								webkitAnimationDelay: delay,
								animationDelay: delay,
								webkitAnimationDuration: duration,
								animationDuration: duration,
							})
							.one("animationend", function () {
								$(this).removeClass(anim + " animated");
							});
					});
				};
				animated();
				init.on("slideChange", function () {
					$(sliderActive2 + " [data-animation]").removeClass("animated");
				});
				init.on("slideChange", animated);
			}
			animated_swiper(sliderActive2, sliderInit2);

			// circle-progress
			$(".circle-bar").loading();
		}); // End Document Ready Function

       $.fn.loading = function() {
        const DEFAULTS = {
            backgroundColor: '#b3cef6',
            progressColor: '#4b86db',
            percent: 75,
            duration: 2000
        };

        $(this).each(function() {
            const $target = $(this);

            const opts = {
                backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
                progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
                percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
                duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
            };
            // console.log(opts);

            $target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');

            $target.find('.background').css('background-color', opts.backgroundColor);
            $target.find('.left').css('background-color', opts.backgroundColor);
            $target.find('.rotate').css('background-color', opts.progressColor);
            $target.find('.right').css('background-color', opts.progressColor);

            const $rotate = $target.find('.rotate');
            setTimeout(function() {
                $rotate.css({
                    'transition': 'transform ' + opts.duration + 'ms linear',
                    'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
                });
            }, 1);

            if (opts.percent > 50) {
                let animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
                let animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';
                $target.find('.right').css({
                    animation: animationRight,
                    opacity: 1
                });
                $target.find('.left').css({
                    animation: animationLeft,
                    opacity: 0
                });
            }
        });
    }
    // function loader() {
    //     $windowOn.on('load', function() {
    //         // Animate loader off screen
    //         $(".preloader").addClass('loaded');
    //         $(".preloader").delay(200).fadeOut();
    //     });
    // }
    
    // loader();
  
  })(jQuery); // End jQuery