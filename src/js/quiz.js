let questions = $('.quiz-main__question');
let answers1 = $('.quiz-answer');
let answers2 = $('.quiz-answer-2');
let answers3 = $('.quiz-answer-3');
let btn1 = $('#quiz-answers-2__btn');
let btn2 = $('#quiz-answers-3__btn');

let d1 = 1;
let d2 = 1;
let d3 = 1;

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
	const answers1 = document.querySelector('.quiz-answer');
	const answers2 = document.querySelector('.quiz-answer-2');
	const answers3 = document.querySelector('.quiz-answer-3');
	const timerTitle = document.querySelector('.quiz__subtitle');
	let isRunning = false;
	let timerValue = 25;
	const allAnswers = [answers1, answers2, answers3];
	const runTimer = () => {
		isRunning = true;
		setInterval(() => {
			if (timerValue <= 0) {
				timerTitle.style.opacity = '0';
				return timerValue;
			}
			timerValue -= 1;
			document.querySelector('.quiz__timer-value').innerHTML = timerValue;
		}, 1000);
	};
	if (!isRunning) {
		allAnswers.forEach((answer) => {
			answer.addEventListener('mouseover', () => {
				runTimer();
			});
		});
	}
	return false;
};

timer();

function send(event) {
	let form = $(event.target).parents('form');

	let name = form.find('.name').val();
	let phone = form.find('.phone').val();

	//console.log({form: {name: name, phone: phone}, quiz: {answer1: d1, answer2: d2, answer3: d3}})

	$.ajax({
		url: 'server/mail.php',
		type: 'POST',
		data: { form: { name: name, phone: phone }, quiz: { answer1: d1, answer2: d2, answer3: d3 } },
		success: function (msg) {
			console.log(msg);
			alert('Заявка принята');
			// $("#exampleModal .modal-info").css('opacity', 0);
			// $("#exampleModal .modal-success").css('opacity', 1);
		},
		error: function () {
			alert('Ошибка отправки заявки, попробуйте позднее.');
		},
	});
}
