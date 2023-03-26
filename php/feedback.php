<?php 
$response_id = $_POST['response_id'];
$rating = $_POST['rating'];
$text_feedback = $_POST['text_feedback'];
$messagetext = str_replace ( " ","%20", $text_feedback);

$data = array("response_id"=>$response_id, "rating"=>$rating, "text_feedback"=>$text_feedback); 
$data_string = json_encode($data);
$ch = curl_init("http://closed-beta-load-balancer-369913841.ap-south-1.elb.amazonaws.com/closed_beta/feedback?response_id=$response_id&rating=$rating&text_feedback=$messagetext"); 
 
// //$ch = curl_init("http://172.31.30.190/closed_beta/run_workflow?keywords=".$keywords);  
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                       
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);        
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
curl_setopt($ch, CURLOPT_TIMEOUT_MS, 0);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                     
	'Content-Type: application/json',                                                     
	'Content-Length: ' . strlen($data_string))                                 
);                                                                                        
$result = curl_exec($ch);
// print_r($result);
// // print_r($_POST['url_parse_ids']);

print_r($result);

?>