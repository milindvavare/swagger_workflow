<?php 
// $keywords = $_POST['keywords'];
// $oprations = $_POST['oprations'];
// $file_identifiers = $_POST['url_parse_ids'];
// $workflow_name = ["$oprations"];
// $data = array("file_identifiers"=>$file_identifiers, "workflow_name"=>$workflow_name); 
// $data_string = json_encode($data);
// $ch = curl_init("test_back.php");  
// curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                       
// curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);        
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
// curl_setopt($ch, CURLOPT_TIMEOUT_MS, 0);

// curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                     
// 	'Content-Type: application/json',                                                     
// 	'Content-Length: ' . strlen($data_string))                                 
// );                                                                                        
// $result = curl_exec($ch);
// print_r($result);



// $header_size = curl_getinfo($ch, CURLOPT_HEADER_SIZE);
// $header = substr($result, $header_size);
// $body = substr($result, $header_size);

// $error_data =  curl_error($ch);
// print_r($error_data);


$keywords = '"'.$_GET['data'].'"';
echo  $urllink = "http://closed-beta-load-balancer-369913841.ap-south-1.elb.amazonaws.com/closed_beta/run_workflow?keywords=".$keywords;

?>