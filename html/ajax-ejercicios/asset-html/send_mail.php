<?php
if(isset($_POST)){
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];

  $domain= $_SERVER["HTTP_HOST"];
  $to="yony.zarate96@gmail.com";
  $subject="Contacto desde el formulario del sitio $domain: $subject";
  $message="
  <p>
  Datos enviados desde el formulario del sitio <b>$domain</b>
  </p>
  <ul>
    <il>Nombre:<b>$name</b></il>  
    <il>Email:<b>$email</b></il>  
    <il>Asunto:$subject</il>  
    <il>Comentarios:$comments</il>  
  </ul>
  ";
$headers="MIME-Version: 1.0\r\n"."Content-Type:text/html;charset=utf-8\r\n".
"From:Envío Automatico No Responder <no-reply@$domain>";

$send_mail = mail($to, $subject, $message, $headers);
if($send_mail){
  $res=[
    "err"=>false,
    "message"=>"Tus datos han sido enviados"
  ];
}else{
  $res=[
    "err"=>true,
    "message"=>"Error al enviar tus datos. Intenta nuevamente."
  ];
}
header('Content-type:application/json');
echo json_encode($res);
exit;
}