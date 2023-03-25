<?php 
$url_links = $_POST['url_links'];
//$str[] = implode(',', $url_links);

// echo json_encode($str);

 // $data = array($data_string);
 $data_string = json_encode($url_links); 
//  //$data_string = json_encode($str);
$ch = curl_init("http://closed-beta-load-balancer-369913841.ap-south-1.elb.amazonaws.com/closed_beta/upload_urls");  
// $ch = curl_init("http://172.31.30.190/closed_beta/upload_urls");  
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                       
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);        
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);              
curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                     
	'Content-Type: application/json',                                                     
	'Content-Length: ' . strlen($data_string))                                 
);                                                                                        
$result = curl_exec($ch);
// print_r($result);
print_r($result);
?>