<?php
session_start();
if( $_SESSION['security_code'] == $_POST['security_code'] && !empty($_SESSION['security_code'] ) ) {

$EmailTo = "praveenlnx@yahoo.com";
$Subject = "SCRAP NEED ENQUIRY FORM";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$Mobile = Trim(stripslashes($_POST['Mobile'])); 
$Subject = Trim(stripslashes($_POST['Subject'])); 
$Message = Trim(stripslashes($_POST['Message'])); 
$EmailFrom = $email;
// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Mobile: ";
$Body .= $Mobile;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $Subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=thankyou.html\">";
  
  $msg="Thank you for contacting us. We will revert to you at the earliest.\n\n
	   Admin\n
	   Scrap Need\n
	   http://www.scrapneed.com\n\n";
	   
	   $subject="From scrapNeed";
	   $mail_header = "From:$EmailTo\n";
	   mail($email,$subject,$msg,$mail_header);

}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}

}
else 
{
echo "<script>alert('Wrong Security Code. So Your Message is not send')</script>";
	    echo "<script>window.location='http://www.scrapneed.com/contact.html#contactform'</script>";

}
?>