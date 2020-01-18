$(document).ready(function(){

	var SUCCESS_STATUS = 200;
	var url = 'http://134.209.138.34/item/' + document.location.hash.slice(1);
	
	var xhr = new XMLHttpRequest();
	xhr.responseType = 'json';

	xhr.open('GET', url);
	xhr.send();

	xhr.addEventListener('load', function () {
		if (xhr.status === SUCCESS_STATUS) {
			renderText(xhr.response);
			renderImg(xhr.response, document.querySelector('.slider'));
			renderImg(xhr.response, document.querySelector('.slider-for'));
			
			$('.slider-for').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				fade: true,
				asNavFor: '.slider'
			});
			$('.slider').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.slider-for',
				dots: false,
				arrows: false,
				centerMode: true,
				focusOnSelect: true
			});

		} else {
			alert('Ошибка загрузки данных')
		}
	});

	var renderText = function (info) {
		$('.item__title').text(info[0].title);
		$('.item__adress').text(info[0].address);
		$('.item__description').text(info[0].description)
		$('.item__price').text(info[0].price)
		$('.item__seller-name').text(info[0].sellerName)
	};

	var renderImg = function (info, imgContainer) {
		var imgArr = info[0].images;
		var fragment = document.createDocumentFragment();
		var sliderTemplate = document.querySelector('#slider__template').content.querySelector('.slider__item');
		
		
		for (let i = 0; i < imgArr.length; i++) {
			
			var currentSlide = sliderTemplate.cloneNode(true);
			currentSlide.querySelector('img').src = imgArr[i];
			fragment.appendChild(currentSlide);	
		}
		imgContainer.appendChild(fragment)
		
	};
	
});
