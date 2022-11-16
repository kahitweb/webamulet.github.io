<?php

// from the form
$name = trim(strip_tags($_POST['user_name']));
$mail = trim(strip_tags($_POST['user_email']));
$phone = trim(strip_tags($_POST['user_phone']));
$msg = trim(strip_tags($_POST['MESSAGE']));
$country = trim(strip_tags($_POST['contact_country']));

// set here
$subject = "Kah-it - new question $sub";
$to = 'contact@kah-it.com';
$email = 'contact@kah-it.com';
$body = <<<HTML

<strong>Name:</strong> $name <br>
<strong>E-mail:</strong> $mail <br>
<strong>Phone:</strong> $phone <br>
<strong>Message:</strong> $msg <br>
<strong>Country:</strong> $country <br><br>
HTML;

$headers = "From: $email\r\n";
$headers .= "Content-type: text/html; charset=utf-8";


// Проверка без капчи
//mail($to, $subject, $body, $headers);


// Проверяем была ли отправлена форма

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['recaptcha_response'])) {
 
    // Создаем POST запрос
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LcesqshAAAAABHpEAXyxbxCF5E2pTM-XjnN4l4s';
    $recaptcha_response = $_POST['recaptcha_response'];
 
    // Отправляем POST запрос и декодируем результаты ответа
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
    $recaptcha = json_decode($recaptcha);
 
    // Принимаем меры в зависимости от полученного результата
    if ($recaptcha->score >= 0.3) {
        // Проверка пройдена - отправляем сообщение.
        mail($to, $subject, $body, $headers);
        header('Location: https://kah-it.com/?success=Y');      
    } else {
        // Проверка не пройдена. Показываем ошибку.
      header('Location: https://kah-it.com/?success=N');
    }
 
}

?>