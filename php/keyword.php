<?php 
$keywords = $_POST['keywords'];
//$keywords = '"'.$_POST['keywords'].'"';
$oprations = $_POST['oprations'];
$file_identifiers = $_POST['url_parse_ids'];
$workflow_name = ["$oprations"];
$data = array("file_identifiers"=>$file_identifiers, "workflow_name"=>$workflow_name); 
$data_string = json_encode($data);
$urllink = str_replace ( " ","%20", "http://closed-beta-load-balancer-369913841.ap-south-1.elb.amazonaws.com/closed_beta/run_workflow?keywords=".$keywords);
// $urllink = "http://closed-beta-load-balancer-369913841.ap-south-1.elb.amazonaws.com/closed_beta/run_workflow?keywords=".$keywords;
$ch = curl_init($urllink);  
//$ch = curl_init("http://172.31.30.190/closed_beta/run_workflow?keywords=".$keywords);  
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");                       
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);        
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
//curl_setopt($ch, CURLOPT_TIMEOUT_MS, 480000);
curl_setopt($ch, CURLOPT_TIMEOUT, 110); 

curl_setopt($ch, CURLOPT_HTTPHEADER, array(                                     
	'Content-Type: application/json',                                                     
	'Content-Length: ' . strlen($data_string))                                 
); 

$result = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
 if ($httpcode == 200) {
    print_r($result);
}
else if ($httpcode == 500) {
    
}
else{
     echo "408"; //This is taking longer than usual, sorry! Please try again in sometime.
}
//print_r($data);

?>