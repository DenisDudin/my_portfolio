<?php

$firstName = $_POST['first-name'];
$lastName = $_POST['last-name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
$token = "5148268816:AAGPNrJz5Zuzu2O6TG-KetkUuVzH6UZFjsk";
$chat_id = "435554305";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email,
  'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram && $sendToTelegram2) {
  header('Location: thanks.html');
} else {
  echo "Error";
}

?>