<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php'
  require 'phpmailer/src/PHPMailer.php'

  $mail =new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);
  
  $mail->setForm('iversuss@yandex.ru', 'Работодатель');
  $mail->addAddress('denis.dudin.a@gmail.com');
  $mail->Subject = 'Сообщение от компании';

  $body = '<h1>Сообщение от работодателя</h1>'
  $body.='<p>Имя:'.$_POST[first-name].'</p>';
  $body.='<p>Имя:'.$_POST[last-name].'</p>';
  $body.='<p>Имя:'.$_POST[email].'</p>';
  $body.='<p>Имя:'.$_POST[phone].'</p>';
  $body.='<p>Имя:'.$_POST[msg].'</p>';

  $mail->Body = $body;

  ?>