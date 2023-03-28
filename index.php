<?php
session_start();
if (!isset($_SESSION['user'])) {
	header('location:login.php');
}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Grok</title>
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	  rel="stylesheet"/>
	<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
	  rel="stylesheet"/>
	<link  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.css"
	  rel="stylesheet"/>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<style type="text/css">
	/*body{
		background: black;
	}*/
	.left_menu{
		height: 99vh;
		background: white;
		overflow-x: auto;
	}
	.menu-ul .menu-li-head-title{
			font-weight: bold;
	}
	   .menu-ul{
			list-style: none;
			margin-top: 5px;
		}
		.menu-ul li{

		}
		.menu-ul .menu-li-head-title{
			font-weight: bold;
		}
		.menu-ul .active{
			color: #117A65;
			font-weight: bold;
		}
		.footer{
			background: white;
			height: 10vh;
		}
		.box_head1{

		}
		.right-box{
		height: 90vh;
		background: white;
		overflow-x: auto;
		}

		.right-footer-box{
			margin-top: 1vh;
			height: 8vh;
		background: white;
		overflow-x: auto;
		}
		.content{
			margin-top: 10vh
		}
		.icon{
			font-size: 25px;
			margin-left: 20px;
		}
		.home-section{
			display: ;
		}
		.next-section{
			display: none;
		}
		.overlay {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.5);
    display: none;
	}

	.overlay__inner {
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    position: absolute;
	}

	.overlay__content {
	    left: 50%;
	    position: absolute;
	    top: 50%;
	    transform: translate(-50%, -50%);
	}

	.spinner {
	    width: 75px;
	    height: 75px;
	    display: inline-block;
	    border-width: 2px;
	    border-color: rgba(255, 255, 255, 0.05);
	    border-top-color: #fff;
	    animation: spin 1s infinite linear;
	    border-radius: 100%;
	    border-style: solid;
	}

	@keyframes spin {
	  100% {
	    transform: rotate(360deg);
	  }
	}
	.content-p{
		margin-bottom: 20px;
	}
	.openBtn:hover{
		cursor: pointer;
	}
</style>
<body>







<section class="home-section">
	<br><br><br>
	<div class="container">

		<div class="card" style="padding: 20px 20px;">
			<div class="row">
				<div class="col-md-3">
				<label class="label-text">What are you looking at getting today?</label>
			</div>
			<div class="col-md-9">
				<div class="row">
					<div class="col-md-5">
						<input type="radio" name="oprations" class="oprations" id="stats_quotes" value="StatsQuotes"><label for="stats_quotes" style="font-weight: 500">&nbsp;Stats & Quotes (Works best with Podcasts)</label>
					</div>
					<div class="col-md-2">
						<input type="radio" name="oprations" class="oprations" id="povs" value="PoV"><label for="povs" style="font-weight: 500">&nbsp;Common POVs</label>
					</div>
					<div class="col-md-5">
						<input type="radio" name="oprations" class="oprations" id="questions" value="Questions" disabled><label for="questions" style="font-weight: 500;">&nbsp;Interesting Insights (Coming Soon)</label>
					</div>
				</div>
			</div>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-12">
				<div class="card" style="padding: 20px 20px;">
					<div>
					<label class="label-text">What is the theme of your research?</label>
					<input style="height: 40px;" type="text" class="form-control keywords" name="keywords" placeholder="Context / Keyword / Topic">
				    </div>
				   <br>
				    <div class="main-box">
				    	<div class="box-left">
				    		<div>
								<label class="label-text">Select Files</label>
								<div style="width: 100%;height: 40px;border:1px solid  #F63309;border-radius: 5px;line-height: 40px;padding: 0px 20px;color: black;">
									<label for="file">Choose Files</label>
										<form id="form" method="POST" enctype="multipart/form-data">
									<input style="display:none;" type="file"  id="file" name="file[]"  accept=".csv, .pdf" >
								</form>
								</div>
								  <div style="margin-top: 10px;" class="row">
								    	<div class="col-md-3">
								    												
											<i class="far fa-question-circle open_upload_limit openBtn" style="font-size: 14px;" data-mdb-toggle="modal" data-mdb-target="#exampleModal"></i>
											<span style="font-size: 14px;" class="open_upload_limit openBtn" data-mdb-toggle="modal" data-mdb-target="#exampleModal">Upload Limit</span>

								    	</div>								    	
								    </div>



								<style type="text/css">
									.modal{
								    position: fixed;
								    top: 0;
								    left: 0;
								    background: rgba(0,0,0,0.5);
								    width: 100%;
								    height: 100%;
								    display: none;
								}

								.showModal{
								    display: block;
								}

								.modal .modal-content{
								    background: #f4f4f4;
								    max-width: 30%;
								    margin: 10% auto;
								    box-shadow: 0px 5px 13px 0px rgba(0,0,0,0.5), 5px 3px 10px 0px rgba(0,0,0,0.5);
								}

								.modal-content > *{
								    padding: 1em;
								}

								.close{
								    float: right;
								    font-size: 30px;
								    color: #fff;
								    opacity: 0.6;
								}

								.close:hover{
								    cursor: pointer;
								    opacity: 1;
								}

								.modal .modal-header{
								    background: #029999;
								    color: #fff;
								    padding: .2em 1em;
								}

								.modal-header h2{
								    font-weight: 300;
								}

								.modal-body p{
								    margin: 1em 0;
								}
								.modal-body label{
								    display: block;
								    font-size: 16px;
								}

								.modal-body form input, .modal-body form button{
								    width: 100%;
								    padding: 0.7em;
								    border: 1px solid #029999;
								}
								</style>




    <div class="container">
      
        <div class="modal" id="modal">
            <div class="modal-content animated bounceIn">
                <div class="modal-header">
                        
                        <h2 style="font-size: 17px;">Upload Limits</h2>
                        <span class="close">&times;</span>
                </div>
                <div class="modal-body">
                    <form action="">
                       <div class="row">
										<div class="col-md-4">
											<label style="font-weight: bold;font-size: 14px;">PDF/Text:</label>
										</div>
										<div class="col-md-8">
											<label>Not more than 5,000 words</label>
										</div>
									</div>	
									<div style="margin-top: 10px;" class="row">
										<div class="col-md-4">
											<label style="font-weight: bold;font-size: 14px;">Audio/Video Files:</label>
										</div>
										<div class="col-md-8">
											<label style="font-size:14px;">We currently support a max of 45 min of content.</label>
										</div>
									</div>	
                    </form>
                </div>
            </div>
        </div>
    </div>






















							</div>
				    	</div>
				    	<div class="box-middle">
				    		<center><label class="or-text">OR</label></center>
				    	</div>
				    	<div class="box-right">
				    		<div class="row">
				    			<div class="col-md-9">
				    				<label class="label-text">Paste Links</label>
								    <input style="height: 40px;" type="text" class="form-control url_links" name="" placeholder=" Podcast / Articles url">

								    <div style="margin-top: 5px;" class="row">
								    	<div class="col-md-3">
								    		<input type="radio" name="domain_link" class="domain_link" id="podcast" value="podcast" checked>&nbsp;&nbsp;<label for="podcast">Podcast</label>
								    	</div>
								    	<div class="col-md-3">
								    		<input type="radio" name="domain_link" class="domain_link" id="articles" value="articles">&nbsp;&nbsp;<label for="articles">Articles</label>
								    	</div>
								    </div>
				    			</div>
				    			<div class="col-md-3">
				    				<!-- <button style="margin-top: 32px;" class="btn btn-info upload_links">Upload Link</button> -->
				    				<a style="margin-top: 32px;" href="javascript:void(0);" class="btn btn-info upload_links">Upload</a>
				    			</div>

							 </div>
				    	</div>
				    </div>
				     <style type="text/css">
				    	.files-preview-div{
				    		width: 120px;
				    		height: 120px;
				    		border:1px solid grey;
				    		border-radius: 10px;
				    	}
						</style>
						<style type="text/css">
						#files-area {
						width: 100%;
						margin: 0 auto;
						}
						.file-block {
						border-radius: 10px;
						background-color: rgba(144, 163, 203, 0.2);
						margin: 5px;
						color: initial;
						display: inline-flex;
						}
						.file-block > span.name {
						padding-right: 10px;
						width: max-content;
						display: inline-flex;
						}
						.file-delete {
						display: flex;
						width: 24px;
						color: initial;
						background-color: #6eb4ff 0;
						font-size: large;
						justify-content: center;
						margin-right: 3px;
						cursor: pointer;
						}
						.file-delete:hover {
						background-color: rgba(144, 163, 203, 0.2);
						border-radius: 10px;
						}
						.file-delete > span {
						transform: rotate(45deg);
						}
						.new-list{

						}
						.box-list{
						    width: 30%;
							height: auto;
							background: red;
							border-radius: 20px;
							padding: 4px 10px;
						}
						.cross-button{
							width: 25px;
							height: 25px;
							background: red;
						}
						</style>
				    <div style="margin-top: 50px;" class="row">
				    	<div class="col-md-12">
				    		<ul id="fileList" class="file-list">
				    		</ul>
				    		<ul id="linksList" class="file-list"></ul>
				    		<br><br>
				    		<p id="files-area">
							    <span id="filesList">
							        <span id="files-names"></span>
							    </span>
							</p>
				    	</div>
				    </div>
				</div>
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-md-12">
				<div class="card" style="padding: 20px 20px;">
					<div class="row">
						<div class="col-md-12" style="padding: 0px 20px;">
							<label class="label-text">What your artefacts will look like.</label>
						</div>
					</div>
				<div class="container">
					<div class="row">
						<div class="col-md-4">
							<div style="padding: 10px 10px;" class="col-md-12">
							<center><span>Facts, Stats & Quotes</span></center>
						    </div>
							<div class="synthesize-box">
								<p>1] Summary</p>
								<p>2] Quotes related to the theme</p>
								<p>3] Facts & Stats related to the theme</p>
							</div>
							<div style="padding: 10px 10px;" class="col-md-12">
							<center>
							</center>
						    </div>
						</div>
						<div class="col-md-4">
							<div style="padding: 10px 10px;" class="col-md-12">
							<center><span>Common POVs</span></center>
						    </div>  
							<div class="synthesize-box">
								<p style="font-weight: bold;">Combined View (Across all files)</p>
								<p>1] Common POV across Files</p>
								<p style="font-weight: bold;">Individual View (For each file)</p>
								<p>1] Summary</p>
								<p>2] POV for this file</p>
							</div>
							<div style="padding: 10px 10px;" class="col-md-12">
							<center>
							</center>
						    </div>
						</div>
						<div class="col-md-4">
							<div style="padding: 10px 10px;" class="col-md-12">
							<center><span>Interesting Insights</span></center>
						    </div>
							<div class="synthesize-box">
								<p>1] Summary</p>
								<p>2] Insights related to the theme</p>
							</div>
							<div style="padding: 10px 10px;" class="col-md-12">
							<center>
							</center>
						    </div>
						</div>
					</div>
				   </div>
				</div>
			</div>
		</div>
		<br>
		<div class="card" style="padding: 20px 20px;">
			<div class="row">
				<div class="col-md-6">
					<label class="label-text">Ready?</label>
				</div>
				<div class="col-md-6">
					<button style="width: 130px;" class="btn btn-info go_btn" disabled>Go!</button>
				</div>
			</div>
		</div>
		<br>
	</div>
	<nav style="position: fixed;width: 100%;top: 0;" class="navbar navbar-light bg-light">
	  <div class="container-fluid">
	    <a class="navbar-brand">Grok</a>
	    <form class="d-flex input-group w-auto">

	      <span class="input-group-text border-0" id="search-addon">
	        <h1 class="count-task">2</h1> Daily Task Remaining
	      </span>
	      &nbsp;
	      <a href="javascript:void(0);" class="logout" style="margin-top: 5px;">Logout</a>
	    </form>
	  </div>
	</nav>
</section>
<style>
	.boxes{
		margin-bottom: 20px;
	}
	.boxes-title{
		font-weight: bold;
	}
</style>

<section class="next-section">
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-2 left_menu">
				<br><br>
				<div class="menu-section">
				<br>
				<ul style="display: none;" class="menu-ul">
					<li class="menu-li-head-title">Resources</li>
				</ul>
				<ul style="display:none;" class="menu-ul resources">
					<li>Article 1</li>
					<li>Podcast</li>
					<li>Video</li>
				</ul>
				<hr>
				<div id="fetch_workflow">

			<!--<ul class="menu-ul">
					<li class="menu-li-head-title">POVs</li>
				</ul>
				<ul class="menu-ul">
					<li class="active">Combined</li>
					<li>Article 1</li>
					<li>Podcast</li>
					<li>Video</li>
				</ul>-->
				
			   </div>
				<hr>
				<ul class="menu-ul">
					<li class="menu-li-head-title">Tasks</li>
				</ul>
				<ul style="position: ;bottom: 10px;margin-left: 0px;" class="menu-ul">

					<button class="btn btn-secondary run_another_task" style="margin-top: 10px;">Run Another Task</button>
					<br><br>
				</ul>
			</div>
			</div>
			<div class="col-md-10">
				<div class="container">
				<div class="row">
					<div class="col-md-12 right-box">
						<div class="content">
						     <div class="content-p">
						     	<p></p>
						     </div>
						     <div id="fetch_statsquotes">						     	
						     </div>
						     <div id="output_data_summary">
						    <!--  <div class="boxes"><label class="boxes-title">Name</label><p></p></div> -->
						    </div>
						      <div id="output_data_quotes">
						     <div class="boxes">
						     	<label class="boxes-title">Name</label>
						     	<p></p>
						     </div>
						    </div>

						    <div id="output_data_stats">
						     <div class="boxes">
						     	<label class="boxes-title">Name</label>
						     	<p></p>
						     </div>
						    </div>
							  <div id="output_data_common_pov">
							 </div>
							 <div id="output_data_common_pov_next">
							</div>
						</div>
					</div>
				</div>
				<style type="text/css">
					.active_rating{
						color: orange;
					}
				</style>
				<div class="row">
					<div class="col-md-12 right-footer-box">
						<div class="container">
							<div style="margin-top:15px;" class="row">
								<div class="col-md-1">
									<label style="font-weight: bold;">Feedback</label>
								</div>
								<div class="col-md-11">
									<div class="row">
										<div class="col-md-8">
											<i class="far fa-star rating" id="1"></i>
											<i class="far fa-star rating" id="2"></i>
											<i class="far fa-star rating" id="3"></i>
											<i class="far fa-star rating" id="4"></i>
											<i class="far fa-star rating" id="5"></i>
											<input type="hidden" name="" class="rating_no" value="0">
											&nbsp;&nbsp;&nbsp;&nbsp;
											<input style="width:60%;height: 35px;padding-left: 10px;border-radius: 5px;border:1px solid grey;" type="text" name="" class="text_feedback" placeholder="Tell us how we improve the result for you">
											<button class="btn btn-info submit_rating" disabled>Submit</button>
										</div>
										<div class="col-md-4">
											<button class="btn btn-secondary download_data" style="float:right;">Download</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

			   </div>
			</div>
		</div>
	</div>
	<nav style="position: fixed;width: 100%;top: 0;" class="navbar navbar-light bg-light">
	  <div class="container-fluid">
	    <a class="navbar-brand">Grok</a>
	    <form class="d-flex input-group w-auto">

	      <span class="input-group-text border-0" id="search-addon">
	        <h1 class="count-task">1</h1> Daily Task Remaining
	      </span>
	    </form>
	  </div>
	</nav>
</section>


<div class="overlay">
	<center>
    <div class="overlay__inner">
        <div class="overlay__content"><span class="spinner"></span><br>
        <center><label style="color:white;margin-top: 20px;" id="please_wait_message">Please wait..</label></center>

        </div>
    </div>
</center>
</div>

<input type="hidden" name="" class="response_id">

</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
 <!-- <script type="text/javascript" src="js/upload_files.js"></script> -->
 <!-- MDB -->
<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"></script> -->
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
<script src="js/function.js"></script>
</html>
<script type="text/javascript">
	$('.rating').click(function(){
	var rating = $(this).attr("id");
	var text_feedback = $('.text_feedback').val();
	var response_id = $('.response_id').val();
	$('.rating_no').val(rating);

	if (rating == 1) {
		$('#1').addClass("active_rating");
		$('#2').removeClass("active_rating");
		$('#3').removeClass("active_rating");
		$('#4').removeClass("active_rating");
		$('#5').removeClass("active_rating");
	}
	else if (rating == 2) {
		$('#1').addClass("active_rating");
		$('#2').addClass("active_rating");
		$('#3').removeClass("active_rating");
		$('#4').removeClass("active_rating");
		$('#5').removeClass("active_rating");
	}
	else if (rating == 3) {
		$('#1').addClass("active_rating");
		$('#2').addClass("active_rating");
		$('#3').addClass("active_rating");
		$('#4').removeClass("active_rating");
		$('#5').removeClass("active_rating");
	}
	else if (rating == 4) {
		$('#1').addClass("active_rating");
		$('#2').addClass("active_rating");
		$('#3').addClass("active_rating");
		$('#4').addClass("active_rating");
		$('#5').removeClass("active_rating");
	}
	else{
		$('#1').addClass("active_rating");
		$('#2').addClass("active_rating");
		$('#3').addClass("active_rating");
		$('#4').addClass("active_rating");
		$('#5').addClass("active_rating");		
	}

	$.ajax({
		url:'php/feedback.php',
		method:'POST',
		data:{response_id:response_id, rating:rating, text_feedback:text_feedback},
		success:function(res){
			console.log(res);
			var data = JSON.parse(res);
			if (data['status'] == 'logged') {
				alert("Thank you for your rating!");
				$(".submit_rating").attr('disabled', 'disabled');
				// $('.text_feedback').val("");
				// $('#1').removeClass("active_rating");
				// $('#2').removeClass("active_rating");
				// $('#3').removeClass("active_rating");
				// $('#4').removeClass("active_rating");
				// $('#5').removeClass("active_rating");
			}
			else{
				alert(data['status']);
			}
		}
	})
});

  

$('.text_feedback').keyup(function(){
	var text_feedback = $(this).val();
	if (text_feedback == '') {
		$(".submit_rating").attr('disabled', 'disabled');
	}
	else{
		$(".submit_rating").removeAttr("disabled");
	}
})



$('.open_upload_limit').click(function(){
	//$('#exampleModal').modal('show');
	///$('#exampleModal').modal("show");
	//$('#myModal').modal('show'); 
})



$('.submit_rating').click(function(){
	var rating = $('.rating_no').val();
	var text_feedback = $('.text_feedback').val()
	var response_id = $('.response_id').val();
	//console.log(rating);
	$.ajax({
		url:'php/feedback.php',
		method:'POST',
		data:{response_id:response_id, rating:rating, text_feedback:text_feedback},
		success:function(res){
			console.log(res);
			var data = JSON.parse(res);
			//alert(data['status']);
			if (data['status'] == 'logged') {
				alert("We have taken note of your feedback. Truly appreciate it!");
				$(".submit_rating").attr('disabled', 'disabled');
				$('.text_feedback').val("");
				$('#1').removeClass("active_rating");
				$('#2').removeClass("active_rating");
				$('#3').removeClass("active_rating");
				$('#4').removeClass("active_rating");
				$('#5').removeClass("active_rating");
			}
			else{
				alert(data['status']);
			}
	
		}
	})

});


$(document).ready(function(){
    $('.openBtn').on("click", function(){
        $('.modal').addClass('showModal');
    });

    $('.close').on("click", function(){
        $('.modal').removeClass('showModal');
    });
});


$('.run_another_task').click(function(){
	 $('.next-section').hide();
	 $('.home-section').show();
	$('.text_feedback').val("");
	$('#1').removeClass("active_rating");
	$('#2').removeClass("active_rating");
	$('#3').removeClass("active_rating");
	$('#4').removeClass("active_rating");
	$('#5').removeClass("active_rating");
})




var modal = document.getElementsByClassName('modal')[0];
window.addEventListener("click", closeModal);

function closeModal(e){
    if(e.target === modal){
        $('.modal').removeClass('showModal');
    }
}
</script>

