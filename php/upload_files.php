<?php 
$files = $_FILES['file']['tmp_name'];
// Set postdata array
$postData = [];
// Create array of files to post
foreach ($files as $index => $file) {
    $postData['files'] = curl_file_create(
        realpath($_FILES['file']['tmp_name'][$index]),
        mime_content_type($_FILES['file']['tmp_name'][$index]),
        basename($_FILES['file']['name'][$index])
    );
}

$request = curl_init('http://closed-beta-load-balancer-369913841.ap-south-1.elb.amazonaws.com/closed_beta/upload_files');
curl_setopt($request, CURLOPT_POST, true);
curl_setopt($request, CURLOPT_POSTFIELDS, $postData);
curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($request);
if ($result === false) {
error_log(curl_error($request));
}
curl_close($request);
$httpcode=curl_getinfo($request, CURLINFO_HTTP_CODE);

// if ($httpcode == 200) {
    print_r($result);
// }
// else if ($httpcode == 500) {
    
// }
// else{
//     echo "This is taking longer than usual, sorry! Please try again in sometime.";
// }

?>