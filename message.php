<?php
    	$name = $_POST['name'];
    	$email = $_POST['email'];
    	$body = $_POST['message'];
    	$subject = 'Potential Work w/ ' . $name;
	$to = 'campbell@campbellyamane.com';
	$headers = "MIME-Version: 1.0\r\n"; 
	$headers .= "Content-type:text/html;charset=UTF-8\r\n";
	$headers .= "Reply-To: $name <$email>\r\n";  

	if(mail($to,$subject,$body,$headers)) { 
		echo 'Congratulations, your message has been sent!';
	}
	else{	
		echo 'Unforunately we have encountered a server error. Please try again.';
	}
?>