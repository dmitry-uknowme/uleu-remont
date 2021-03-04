let questions = $('.quiz-main__question');

questions.click(function(event) {
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
})