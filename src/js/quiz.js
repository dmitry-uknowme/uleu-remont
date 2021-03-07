let questions = $('.quiz-main__question');
let answers1 = $('.quiz-answer');
let answers2 = $('.quiz-answer-2');
let answers3 = $('.quiz-answer-3');
let btn1 = $('#quiz-answers-2__btn');
let btn2 = $('#quiz-answers-3__btn');

let d1 = 'Неизвестно';
let d2 = 'Неизвестно';
let d3 = 'Неизвестно';

btn1.click(function () {
	$(questions[2]).find('a').click();
});

btn2.click(function () {
	$(questions[3]).find('a').click();
});

questions.click(function (event) {
	let el = $(event.currentTarget);

	if (el.hasClass('active')) {
	} else {
		for (let i = 0; i < questions.length; i++) {
			if ($(questions[i]).hasClass('active')) {
				$(questions[i]).removeClass('active');
			}

			if ($(questions[i]).find('a').hasClass('active')) {
				$(questions[i]).find('a').removeClass('active');
			}
		}

		el.addClass('active');
	}
});

answers1.click(function (event) {
	let el = $(event.currentTarget);

	for (let i = 0; i < answers1.length; i++) {
		if ($(answers1[i]).hasClass('active')) {
			$(answers1[i]).removeClass('active');
		}
	}
	//тут можно обойтись без цикла
	// const activeAnswer = $('.quiz-answer.active');
	// if (activeAnswer) {
	// 	activeAnswer.removeClass('active');
	// }
	// el.addClass('active');

	el.addClass('active');

	d1 = el.data('answer-1');

	$(questions[1]).find('a').click();
});

answers2.click(function (event) {
	let el = $(event.currentTarget);

	for (let i = 0; i < answers2.length; i++) {
		if ($(answers2[i]).hasClass('active')) {
			$(answers2[i]).removeClass('active');
		}
	}

	el.addClass('active');

	d2 = el.data('answer-2');

	$(questions[2]).find('a').click();
});

answers3.click(function (event) {
	let el = $(event.currentTarget);

	for (let i = 0; i < answers3.length; i++) {
		if ($(answers3[i]).hasClass('active')) {
			$(answers3[i]).removeClass('active');
		}
	}

	el.addClass('active');

	d3 = el.data('answer-3');

	$(questions[3]).find('a').click();
});

const timer = () => {
	const answers1 = document.querySelectorAll('.quiz-answer');
	const answers2 = document.querySelectorAll('.quiz-answer-2');
	const answers3 = document.querySelectorAll('.quiz-answer-3');
	const timerTitle = document.querySelector('.quiz__subtitle');
	let isRunning = false;
	let timerValue = 25;
	const allAnswers = [...answers1, ...answers2, ...answers3];
	const runTimer = () => {
		isRunning = true;
		setInterval(() => {
			if (timerValue <= 1) {
				timerTitle.classList.add('_hide');
				return timerValue;
			}
			timerValue -= 1;
			document.querySelector('.quiz__timer-value').innerHTML = timerValue;
		}, 1000);
	};

	allAnswers.forEach((answer) => {
		answer.addEventListener('mouseover', () => {
			if (!isRunning) {
				isRunning = true;
				runTimer();
			}
		});
	});

	return false;
};

timer();

function send(event) {
	let form = $(event.target).parents('.support-form');

	let name_i = form.find('.name')
	let name = name_i.val();
	let phone_i = form.find('.phone');
	let phone = phone_i.val();
	let errors = 0;

	if (name == null || name == undefined || name == "") {
		$('.name-error').css('display', 'block');
		errors++;
	} else {
		$('.name-error').css('display', 'none');
	}

	if (phone == null || phone == undefined || phone == "") {
		$('.phone-error').css('display', 'block');
		errors++;
	} else {
		$('.phone-error').css('display', 'none');
	}

	if (errors > 0) {
		return;
	}

	let data = { form: { name: name, phone: phone }, quiz: { answer1: d1, answer2: d2, answer3: d3 } };

	$.ajax({
		url: 'server/mail.php',
		type: 'POST',
		data: data,
		success: function (msg) {
			let timerValue = 9;
			let word = form.find(".support-form__success-word");
			let count = form.find('.support-form__success-count');

			console.log(msg);

			form.find('.support-form_before').css('opacity', 0);
			form.find('.support-form_after').css('opacity', 1);

			setInterval(() => {
				count.html(timerValue);

				if (timerValue == 4 || timerValue == 3 || timerValue == 2) {
					word.html('секунды')
				}

				if (timerValue == 1) {
					word.html('секунду')
				}

				if (timerValue < 1) {
					name_i.val("");
					phone_i.val("");
					form.find('.support-form_before').css('opacity', 1);
					form.find('.support-form_after').css('opacity', 0);
					return timerValue;
				}

				timerValue -= 1;
			}, 1000);

		},
		error: function () {
			alert('Ошибка отправки заявки, попробуйте позднее.');
		},
	});
}
