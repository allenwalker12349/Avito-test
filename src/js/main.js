(function () {
  var SUCCESS_STATUS = 200;
	var url = 'http://134.209.138.34/items';
	var cardsInfo;

	var xhr = new XMLHttpRequest();
	xhr.responseType = 'json';

	xhr.open('GET', url);
	xhr.send();

	xhr.addEventListener('load', function () {
		if (xhr.status === SUCCESS_STATUS) {
			cardsInfo = xhr.response;

			var cardTemplate = document.querySelector('#card-template').content.querySelector('.card__item');
			var fragment = document.createDocumentFragment();
		
			cardsInfo.forEach(function (item) {
				var currentCard = cardTemplate.cloneNode(true);
				currentCard.querySelector('.card-img-top').src = item.previewImage;
				currentCard.querySelector('.card-title').innerText = item.title;
				currentCard.querySelector('.card-price').innerText = item.price;
				currentCard.querySelector('.card-adress').innerText = item.address;
				fragment.appendChild(currentCard);
			});
			document.querySelector('.row').appendChild(fragment);

			console.log(cardsInfo)
		} else {
			console.log('провал')
		}
	});
})();
