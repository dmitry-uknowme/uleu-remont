<?php
header('Content-Type: application/json; charset=utf-8');

$msg = [];
$msg['success'] = 0;

if (!empty($_POST)) {
    $err = [];

//    $messengers = ["SMS", "WhatsApp"];
//    $presents = ["СЕО продвижение", "Контекстная реклама", "Таргетированная реклама"];
//    $types = ["Лендинг", "Интернет магазин", "Квиз сайт", "Корпоративный сайт"];
//    $business = ["Для продажи услуг", "Продажа товаров", "Оптовая поставка товаров"];

    $name_raw = $_POST['form']['name'];
    $phone_raw = $_POST['form']['phone'];
    $quiz_item_name = $_POST['quiz']['answer1'];
    $quiz_stage = $_POST['quiz']['answer2'];
    $quiz_location = $_POST['quiz']['answer3'];

    htmlspecialchars_decode($name_raw);
    htmlspecialchars_decode($phone_raw);
    htmlspecialchars_decode($quiz_item_name);
    htmlspecialchars_decode($quiz_stage);
    htmlspecialchars_decode($quiz_location);

    $data = [];

//    echo json_encode($_POST, JSON_UNESCAPED_UNICODE);

    if (empty($name_raw)) {
        $err[] = "Поле 'имя' должно быть заполнено";
    }

    if (empty($phone_raw)) {
        $err[] = "Поле 'номер телефона' должно быть заполнено";
    }

//    if (empty($messenger_raw)) {
//        $data['messenger'] = "Неизвестно";
//    } else {
//        if (is_numeric($messenger_raw) ) {
//            if ($messenger_raw > 0 and $messenger_raw < 2) {
//                $data['messenger'] = "Неизвестно";
//            }
//        }
//    }


//
    if (count($err) > 0) {
        $msg['msg'] = 'Ошибка отправки формы: ';
        $msg['errors'] = $err;
        echo json_encode($msg);
        die();
    }


    $message = "
        <h1>Заявка на обратный звонок от uleu.ru</h1>
        <hr>
        <p>
            <b>Имя:</b>
            <span>$name_raw</span>
        </p>
        <p>
            <b>Номер телефона:</b>
            <span>$phone_raw</span>
        </p>
        <p>
            <b>Что нужно починить:</b>
            <span>$quiz_item_name</span>
        </p>
        <p>
            <b>Степень поломки:</b>
            <span>$quiz_stage</span>
        </p>
        <p>
            <b>Как вам будет удобнее:</b>
            <span>$quiz_location</span>
        </p>
  
    ";

    $result = mail(
        'd.prytckov@yandex.ru',
        'Получена заявка!', $message,
        "From: support@uleu.ru\r\n"
        . "Content-type: text/html; charset=utf-8\r\n"
        . "X-Mailer: PHP mail script"
    );

    if ($result) {
        $msg['msg'] = 'Ваша заявка принята. Ожидайте звонка.';
        $msg['success'] = 1;
        echo json_encode($msg);
    } else {
        $msg['msg'] = 'Ошибка отправки письма. Попробуйте позже.';
        echo json_encode($msg);
    }
} else {
    $msg['msg'] = 'Ошибка отправки письма. Данные не получены.';
    echo json_encode($msg);
}
