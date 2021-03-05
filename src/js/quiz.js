console.log('hi');

const renderHTML = (id, img, text) => `<div class=\"col-xl-4 col-6 quiz-answer${id !== 0 ? `-${id + 1}` : ''}__container\">
                                        <div class=\"quiz-answer quiz-${id !== 0 ? 'answer' : 'main__answer'}${id !== 0 ? `-${id + 1}` : ''}\">
                                            <div class="quiz-answer${id !== 0 ? `-${id + 1}` : ''}__img">
                                                <img class="" src=${img}>
                                            </div>
                                            <div class=\"quiz-answer${id !== 0 ? `-${id + 1}` : ''}__text\">
                                                ${text}
                                            </div>
                                        </div>
                                    </div>`;

const quizData = [
	{
		text: [
			'РЕМОНТ ТЕЛЕВИЗОРОВ',
			'РЕМОНТ СТИРАЛЬНОЙ МАШИНЫ',
			'РЕМОНТ АУДИОТЕХНИКИ',
			'РЕМОНТ НОУТБУКОВ',
			'РЕМОНТ АВТОЭЛЕКТРОНИКИ',
			'РЕМОНТ ФОТОАППАРАТОВ',
			'РЕМОНТ МУЛЬТИВАРОК',
			'РЕМОНТ ПЛАНШЕТОВ И СМАРТФОНОВ',
			'РЕМОНТ ВИНТАЖНОЙ',
		],
	},
	{
		text: ['РАБОТАЕТ С ПЕРЕБОЯМИ', 'РЕСТАВРАЦИЯ ИЗДЕЛИЯ', 'НЕ РАБОТАЕТ ВООБЩЕ'],
	},
];

// console.log(quizData.length);
let html = '';
for (let i = 0; i < quizData.length; i++) {
	console.log(`answers ${i}`);
	for (let j = 0; j < quizData[i].text.length; j++) {
		// console.log(renderHTML(i, quizData[i].text[j], quizData[i].text[j]));

		html += renderHTML(i, quizData[i].text[j], quizData[i].text[j]);
	}
}
console.log(html);

document.body.insertAdjacentHTML('afterbegin', html);

console.log('bye');
