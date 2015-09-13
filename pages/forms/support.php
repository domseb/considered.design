---
permalink: /support/php/support.php
---

<!DOCTYPE html>
<html>
	<head>
	<?php
	define("ZDAPIKEY", "tvQ1a3VV6Nc12WNIPKUDBXyLA5hAlEaicKZxDlgJ");
	define("ZDUSER", "gary@smartsparrow.com");
	define("ZDURL", "https://smartsparrow.zendesk.com/api/v2");

	function curlWrap($url, $json)
	{
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true );
		curl_setopt($ch, CURLOPT_MAXREDIRS, 10 );
		curl_setopt($ch, CURLOPT_URL, ZDURL.$url);
		curl_setopt($ch, CURLOPT_USERPWD, ZDUSER."/token:".ZDAPIKEY);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
		curl_setopt($ch, CURLOPT_USERAGENT, "MozillaXYZ/1.0");
		curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);
		$output = curl_exec($ch);
		curl_close($ch);
		$decoded = json_decode($output);
		return $decoded;
	}

	function curlImageWrap($url, $filename){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true );
		curl_setopt($ch, CURLOPT_MAXREDIRS, 10 );
		curl_setopt($ch, CURLOPT_URL, ZDURL.$url);
		curl_setopt($ch, CURLOPT_USERPWD, ZDUSER."/token:".ZDAPIKEY);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: application/binary'));

		$file = fopen($filename, 'r');
		$size = filesize($filename);
		$imageData = fread($file, $size);

		curl_setopt($ch, CURLOPT_POSTFIELDS, $imageData);
		curl_setopt($ch, CURLOPT_INFILE, $file);
		curl_setopt($ch, CURLOPT_INFILESIZE, $size);

		curl_setopt($ch, CURLOPT_USERAGENT, "MozillaXYZ/1.0");
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, 10);

		$output = curl_exec($ch);
		curl_close($ch);
		$decoded = json_decode($output, true);
		return $decoded['upload']['token'];
	}

	if($_FILES['z_file']['size'] !== 0){
		$check = getimagesize($_FILES["z_file"]["tmp_name"]);

		if($check !== false){
			$imageToken = curlImageWrap("/uploads.json", $_FILES["z_file"]["tmp_name"]);
		}
	}

	foreach($_POST as $key => $value){
		if(preg_match('/^z_/i',$key)){
			$arr[strip_tags($key)] = strip_tags($value);
		}
	}

	$messageBody = "I am a {$arr['z_role']} from {$arr['z_organisation']}.\n"
							. $arr['z_message'];

	$comment = array( "value"=> $messageBody);
	if(isset($imageToken)){
		$comment["uploads"] = array($imageToken);
	}

	$create = json_encode(array('ticket' => array('subject' => "Support Request from smartsparrow.com", 'comment' => $comment, 'requester' => array('name' => $arr['z_firstName'] . " " . $arr['z_lastName'] , 'email' => $arr['z_requester'] , 'phone' => $arr['z_phone']))));

	$return = curlWrap("/tickets.json", $create);

	header("Location: /support/support-received/");
	?>
	</head>
	<body>
	</body>
</html>