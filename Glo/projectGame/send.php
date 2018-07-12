<?php
$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$form=$_POST['form'];
$to = "wiseangelgames@gmail.com";
$subject = "Заявка на мастер-класс Игры Разума";
$message = "
Форма: ".htmlspecialchars($form)."<br />
Имя клиента: ".htmlspecialchars($name)."<br />
Телефон: <a href='tel:$phone'>".htmlspecialchars($phone)."</a>";
$headers = "From: no-reply.ru <no-reply@no-reply.ru>\r\nContent-type: text/html; charset=UTF-8 \r\n";
mail ($to, $subject, $message, $headers);
header ('Location: thx.html');
exit();
?>