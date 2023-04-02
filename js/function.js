let arr_links = [];
let url_parse_ids = [];

let arr_links2 = [];
// $('.upload_links').click(function(){
// 	var url_links = $('.url_links').val();

// 	console.log(arr_links2);
// 	if (arr_links['length'] > 2) {
// 		//alert("Cant Upload");
// 	}
// 	else{
// 		arr_links.push(url_links);
// 	}
// });



    $('.upload_links').click(function(){
    //console.log(url_parse_ids.length);
      var fileUpload = $("input[type='file']");
      var totallinks = arr_links.length;
      var totalfile = parseInt(fileUpload.get(0).files.length);
      var mx_length = totallinks+totalfile;
       var output2 = document.getElementById('linkList');
        var url_links = $('.url_links').val();
        var arr_temp = '';
        // arr_links.push(url_links);
        // console.log(arr_links);
        let domain = (new URL(url_links));
        var selectedVal = "";
		var selected = $("input[name='domain_link']:checked");
		  //console.log(selected);
		if (selected.length > 0) {
		    selectedVal = selected.val();

		    if (selectedVal == 'podcast') {
		    		//alert(domain.hostname);
		    		if(domain.hostname =='podcasts.apple.com' || domain.hostname =='podcasts.google.com'){
		    			if (!arr_links.includes(url_links)) {
			               arr_links.push(url_links);
		                 }
		    			//alert(mx_length);
		    		    $('.overlay').show(); 
		    		    document.getElementById("please_wait_message").innerHTML = 'Your podcast is being transcribed. It will take around 3-5 mins depending on the duration.';
		    			 if (url_parse_ids.length >= 2) {
					        alert("You are only allowed to upload a maximum of 2 files or Links");
					        $('.overlay').hide();
					        document.getElementById("please_wait_message").innerHTML = 'Please Wait..';
					      }
					      else{
					        $.ajax({
					            url:'php/upload_urls.php',
					            method:'POST',
					             data:{url_links:arr_links},
					             success:function(data){
					             	//console.log(data);
					             	var decode_json = JSON.parse(data);
							        	if (decode_json['detail']) {
							        		alert(decode_json['detail']);
							        		$('.overlay').hide();
							        	}
							        	else{

					                 if (data == 'Internal Server Error') {
					                        alert("Internal Server Error");
					                        $('.overlay').hide();
					                    }
					                    else{
					                        //console.log(data);
					                        $('.url_links').val("");
					                        $('.overlay').hide();
					                        $(".go_btn").removeAttr("disabled");
					                        // if($('input[name="oprations"]:checked').length ){
											//     $(".go_btn").removeAttr("disabled");
											//   }
					                        var children_links = "";
					                              for (var i = 0; i < arr_links.length; ++i) {
					                                  // children_links +=  '<li>'+ arr_links[i] + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
														children_links += '<li class="new-list">';
														children_links += '<button type="button" class="btn  position-relative">';
														children_links += ''+arr_links[i]+'';
														children_links += '<span style="font-size:13px;color:white;" class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle cross-button delete_from_array_url" id="'+arr_links[i]+'" onclick="return this.parentNode.remove()">X';
														children_links += '</span>';
														children_links += '</button>';
														children_links += '</li>';
					                              }
					                            $('#linksList').html(children_links);
					                            url_parse_ids = [];
					                            var jsondata = JSON.parse(data);
					                            //url_parse_ids = [];
					                            for (var im = 0; im < jsondata['files'].length; im++) {
					                                //console.log(jsondata['files'][i]['id']);
					                                url_parse_ids.push(jsondata['files'][im]['id']);
					                            }					                            
					                    }

					                }

					             }
					        })
					     }
		    		}
		    		else{
		    			alert("We currently only support Apple/Google Podcast links");
		    	}

		    }
		    else{
		    	


		    	if(url_parse_ids.length >= 2){
					alert("You are only allowed to upload a maximum of 2 files or Links");
				}
				else{

		    	if (!arr_links.includes(url_links)) {
	               arr_links.push(url_links);
                 }



		    	$('.overlay').show();
		    	 // if (mx_length > 2) {
				// 	        alert("You are only allowed to upload a maximum of 2 files or Links");
				// 	      }
				// 	      else{
					        $.ajax({
					            url:'php/upload_urls.php',
					            method:'POST',
					             data:{url_links:arr_links},
					             success:function(data){
					             	//console.log(data);
					             	var decode_json = JSON.parse(data);
							        	if (decode_json['detail']) {
							        		alert(decode_json['detail']);
							        		$('.overlay').hide();
							        	}
							        	else{


					                 if (data == 'Internal Server Error') {
					                        alert("Internal Server Error");
					                        $('.overlay').hide();
					                    }
					                    else{
					                        //console.log(data);
					                        $('.url_links').val("");
					                        $('.overlay').hide();
					                        $(".go_btn").removeAttr("disabled");
					                        // if($('input[name="oprations"]:checked').length ){
											// 	    $(".go_btn").removeAttr("disabled");
											// 	}
					                        var children_links = "";
					                        //console.log(arr_links.length);
					                              for (var i = 0; i < arr_links.length; ++i) {
					                                  // children_links +=  '<li>'+ arr_links[i] + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
					                              	children_links += '<li class="new-list">';
														children_links += '<button type="button" class="btn  position-relative">';
														children_links += ''+arr_links[i]+'';
														children_links += '<span style="font-size:13px;color:white;" class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle cross-button delete_from_array_url" id="'+arr_links[i]+'" onclick="return this.parentNode.remove()">X';
														children_links += '</span>';
														children_links += '</button>';
														children_links += '</li>';
					                              }
					                            $('#linksList').html(children_links);

					                           // console.log(data);
					                             url_parse_ids = [];
					                            var jsondata = JSON.parse(data);
					                            //console.log(jsondata['files'].length);					                           
					                            for (var im = 0; im < jsondata['files'].length; im++) {					                            	
					                                //console.log(jsondata['files'][im]['id']);
					                                url_parse_ids.push(jsondata['files'][im]['id']);
					                            }

					                            
					                    }


					                }


					             }

					        })
					     //}
		    }
		}
		}


});










$(document).on('click', '.delete_from_array', function(){
  var link = $(this).attr("id");
  arr_links = arr_links.filter(x => x !== link);
 
 for (var i = 0; i < url_parse_ids.length; i++) {
	 	//console.log("replaceurl:"+url_parse_ids[i].replace(/-TS:[^/]+/, ''));
	 	var filelink = url_parse_ids[i].replace(/-TS:[^/]+/, '');
	 	url_parse_ids = url_parse_ids.filter(x => x !== link);
	 	//console.log(url_parse_ids);

	 	if (link == filelink) {
	 		//console.log("found");
	 		var indexToRemove = i;
            url_parse_ids.splice(indexToRemove, 1);
	 		//console.log(url_parse_ids);
	 	}
	 	else{
	 		//console.log("no found");
	 	}
   }
});



$(document).on('click', '.delete_from_array_url', function(){
  var link = $(this).attr("id");
  arr_links = arr_links.filter(x => x !== link);
  // alert(link);
 
 for (var i = 0; i < url_parse_ids.length; i++) {
	 	//console.log("replaceurl:"+url_parse_ids[i].replace(/-TS:[^/]+/, ''));
	 	var filelink = url_parse_ids[i].replace(/-TS:[^/]+/, '');
	 	//var filelink = url_parse_ids[i];
	 	url_parse_ids = url_parse_ids.filter(x => x !== link);
	 	//console.log("urlname:"+filelink);

	 	if (link == filelink) {
	 		//console.log("found");
	 		var indexToRemove = i;
            url_parse_ids.splice(indexToRemove, 1);
	 		//console.log(url_parse_ids);
	 	}
	 	else{
	 		//console.log("no found");
	 	}
   }
});




///////////Start Files Upload 

const dt = new DataTransfer();
$("#file").on('change', function(e){
if(url_parse_ids.length >= 2){
	alert("You are only allowed to upload a maximum of 2 files or Links");
}
else{

if(this.files.length > 2){
alert("You are only allowed to upload a maximum of 2 files or Links");

}else{

	$('.overlay').show();
	//console.log(this.files.length);
	var filedata = '';
	let filename = '';
    for(var i = 0; i < this.files.length; i++){     
      filename = this.files.item(i).name;
			filedata += '<li class="new-list">';
			filedata += '<button type="button" class="btn  position-relative">';
			filedata += ''+this.files.item(i).name+'';
			filedata += '<span style="font-size:13px;color:white;" class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle cross-button file-delete delete_file" id="'+this.files.item(i).name+'">X';
			filedata += '</span>';
			filedata += '</button>';
			filedata += '</li>';
    };
   //$('#fileList').append(filedata);


    for (let file of this.files) {
        dt.items.add(file);
    }

    this.files = dt.files;


 let myform = document.getElementById("form");
  let formData = new FormData(myform);
      $.ajax({
        type:'POST',
        url: 'php/upload_files.php',
        data:formData,
        cache:false,
        contentType: false,
        processData: false,
        success:function(data){
        	var name = filename;    
        	//console.log(data);
        	var decode_json = JSON.parse(data);
        	if (decode_json['detail']) {
        		alert(decode_json['detail']);
        			 for(let i = 0; i < dt.items.length; i++){            
		            if(name === dt.items[i].getAsFile().name){               
		                dt.items.remove(i);
		                continue;
			            }
			        }			   
			        document.getElementById('file').files = dt.files;
        		$('.overlay').hide();
        	}

        	else{
        	$('.overlay').hide();
        	 $('#fileList').append(filedata);
        	
        	for (var i = 0; i < decode_json['files'].length; i++) {
        		url_parse_ids.push(decode_json['files'][i]['id']);
        		//console.log(url_parse_ids);
        	}

        	//console.log(filedeletefull_name);

        	$(".go_btn").removeAttr("disabled");   	
        	
		   } 
        }
    });
  }
}

});





$(document).on('click', 'span.file-delete', function(){
	let name = $(this).attr("id");
         //console.log(name);
        $(this).parent().remove();
        for(let i = 0; i < dt.items.length; i++){   

            if(name == dt.items[i].getAsFile().name){               
                dt.items.remove(i);
                continue;
            }
        }
        // Mise à jour des fichiers de l'input file après suppression
        document.getElementById('file').files = dt.files;

         for (var i = 0; i < url_parse_ids.length; i++) {
	 	//console.log(url_parse_ids[i].replace(/-TS:[^/]+/, ''));
	 	var filelink = url_parse_ids[i].replace(/-TS:[^/]+/, '');
	 	url_parse_ids = url_parse_ids.filter(x => x !== name);
	 	// console.log(url_parse_ids);

	 	if (name == filelink) {
	 		//console.log("found");
	 		var indexToRemove = i;
            url_parse_ids.splice(indexToRemove, 1);
	 		//console.log(url_parse_ids);
	 	}
	 	else{
	 		//console.log("no found");
	 	}
   }

})






/////End file upload




$('.go_btn').click(function(){
	var keywords = $('.keywords').val();
	var selectedVal = "";
	var oprations = $('input[name="oprations"]:checked').val();
    var fileUpload = $("input[type='file']");
   //console.log(oprations);
	if($('input[name="oprations"]:checked').length ){
	     // $(".go_btn").removeAttr("disabled");
    if (oprations == 'StatsQuotes') {
         go_data();
    }
    else if (oprations == 'PoV') {
    	if (url_parse_ids.length >= 2) {
    		go_data();
    	}
    	else{
    		alert("You need at-least 2 files to use this Task");
    	}

    }   
    else if (oprations == 'KeyInsights') {
    	go_data();
    }
    
 }
else{
	alert("Select What are you looking at getting today?");
}


});

function nl2br (str, is_xhtml) {
     var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
     return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function go_data(){
	var keywords = $('.keywords').val();
	var selectedVal = "";
	var oprations = $('input[name="oprations"]:checked').val();
    var fileUpload = $("input[type='file']");
   

    for (var array_file = 0; array_file < url_parse_ids.length; array_file++) {
    	//console.log(url_parse_ids[array_file].replace(/-TS:[^/]+/, ''));  

    }


    $('#fetch_statsquotes').html("");
    $('#output_data_common_pov').html("");
     $('#output_data_common_pov_next').html("");
	  $('#fetch_workflow').html("");
	  $('.resources').html("");
	$('#fetch_workflow').html("");
	   	$('#output_data_summary').html("");
	   	$('#output_data_quotes').html("");
	   	$('#output_data_stats').html("");

	 document.getElementById("please_wait_message").innerHTML = 'It takes 3-5 mins to process your request. Check back soon';
	$('.overlay').show();
	$.ajax({
	   type:'POST',
	   url: 'php/keyword.php',
	   //url:'js/test.json',
       //url:'js/test4.json',
	   data:{keywords:keywords, oprations:oprations, url_parse_ids:url_parse_ids},
	   success:function(data){
	   	$('.overlay').hide();
	  //console.log(data);
	   	if(data == '408') {
	   		alert("This is taking longer than usual, sorry! Please try again in sometime.");
	   		$('.overlay').hide();
	   	}
	   	else{
       	if(data == 'Internal Server Error'){
       		alert("Internal Server Error");
       	$('.overlay').hide();
       	document.getElementById("please_wait_message").innerHTML = 'Please Wait..';
       	}
       	else{
	    var jsondata = JSON.parse(data);
	   	//var jsondata = data;
	   	var outputs = '';
	   	var fetch_workflow = '<ul class="menu-ul">';
      var fetch_resources = '<ul class="menu-ul">';
	   	var output_data_summary = '';
	   	var output_data_quotes = '';
	   	var output_data_stats = '';
	   	for (var i = 0; i < jsondata['workflow_response'].length; i++) {

	   		if (jsondata['workflow_response'][i]['workflow_name'] == 'StatsQuotes') {

        // fetch_workflow += "<li class='menu-li-head-title'>"+jsondata['workflow_response'][i]['workflow_name']+"</li>";
	   			fetch_workflow += "<li class='menu-li-head-title'>Facts, Stats & Quotes</li>";
        var fetch_resources = '';
        var fetch_statsquotes = '<div class="boxes" style="padding:20px 20px;">';
	   		var document_level_outputs = jsondata['workflow_response'][i]['document_level_outputs'];
	   		for (var j = 0; j < document_level_outputs.length; j++) {
	   			//console.log(document_level_outputs[j]['file_name']); //file_name
	   			//console.log(document_level_outputs[j]['outputs']); //outputs
	   			fetch_workflow += '<li style="font-size:12px;margin-bottom:10px;">'+document_level_outputs[j]['file_name']+'</li>';
                fetch_resources += "<li style='font-size:13px;'>"+document_level_outputs[j]['file_name']+"</li>";

                //console.log(document_level_outputs[j]['file_name']);
                fetch_statsquotes += '<div style="padding:20px 20px;" class="card">';
                fetch_statsquotes += '<label style="font-weight:bold">File Name - '+document_level_outputs[j]['file_name']+'</label><hr>';
	   			var outputs_response = document_level_outputs[j]['outputs'];
	   			for (var k = 0; k < outputs_response.length; k++) {
	   				//console.log(outputs_response[k]['response_id']); //response

	   				$('.response_id').val(outputs_response[k]['response_id']);
	   				//console.log(outputs_response[k]['output']); //outputs
	   				//outputs += '<p>'+outputs_response[k]['output']+'</p>';
	   				//console.log(outputs_response[k]['output'][1]);
	   				data_summary = nl2br(outputs_response[k]['output'][0]);
	   				quotes_related_to_the_theme=nl2br(outputs_response[k]['output'][1]);
	   				stats_related_to_the_theme = nl2br(outputs_response[k]['output'][2]);
	   				fetch_statsquotes += '<div  style="padding:20px 20px;"><label class="boxes-title">Summary</label><p>'+data_summary+'</p></div>';	   				
	   				//output_data_summary += '<div class="boxes" style="padding:20px 20px;"><label class="boxes-title">Summary</label><p>'+data_summary+'</p></div>';
	   				fetch_statsquotes += '<div class="boxes" style="padding:20px 20px;"><label class="boxes-title">Quotes related to the theme</label><p>'+quotes_related_to_the_theme+'</p></div>';
	   				fetch_statsquotes +='<div class="boxes" style="padding:20px 20px;"><label class="boxes-title">Facts & Stats related to the theme</label><p>'+stats_related_to_the_theme+'</p></div>';
	   			}
	   			fetch_statsquotes += '</div><br>';	
	   		}
	   		$('#fetch_statsquotes').html(fetch_statsquotes+'</div>');
            //$('.resources').html(fetch_resources);
	   	 }




	   	 else if (jsondata['workflow_response'][i]['workflow_name'] == 'PoV') {
         var fetch_workflow = '<ul class="menu-ul">';
         var combined_outputs = '<div class="boxes card" style="padding:20px 20px;"><label class="boxes-title" style="color:#D35400;">Combined Outputs</label>';
           fetch_workflow += "<li class='menu-li-head-title'>Common POVs</li>";
        fetch_workflow += "<li style='font-size:12px;margin-bottom:10px;margin-top:5px;' class=''>Combined View (Across all files)</li>";
        for (var m = 0; m < jsondata['workflow_response'][i]['combined_outputs'].length; m++) {
          
           if (jsondata['workflow_response'][i]['combined_outputs'][m]['tag'] == 'common_pov') {
             combined_outputs += '<hr>';
   
             combined_outputs += '<p style="font-weight:bold;font-size:15px;">Common POV across Files</p>';
             combined_outputs += '<p>'+nl2br(jsondata['workflow_response'][i]['combined_outputs'][m]['output'])+'</p>';
           }
           
        }

        $('#output_data_common_pov').html(combined_outputs+"</div>");




        var document_level_outputs_file = '';
        document_level_outputs_file += "<hr>";
        document_level_outputs_file += '<div class="boxes card" style="padding:20px 20px;"><label style="color:#D35400;" class="boxes-title">Individual View (For each file)</label></div>';
        for (var n = 0; n < jsondata['workflow_response'][i]['document_level_outputs'].length; n++) {
             
             document_level_outputs_file += '<div class="boxes card" style="padding:20px 20px;"><label class="boxes-title">File Name : '+jsondata['workflow_response'][i]['document_level_outputs'][n]['file_name']+'</label>';
          
             fetch_workflow += "<li style='font-size:12px;margin-bottom:10px;' class=''>"+jsondata['workflow_response'][i]['document_level_outputs'][n]['file_name']+"</li>";
             fetch_resources += "<li style='margin-left:-30px;'>"+jsondata['workflow_response'][i]['document_level_outputs'][n]['file_name']+"</li>";
           var outputs_document_level = jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'];
           for (var o = 0; o < outputs_document_level.length; o++) {
             
           	if (jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['tag'] == 'summary') {
           		document_level_outputs_file += '<p style="font-weight:bold;font-size:15px;margin-top:10px;">Summary</p>';
           	}
           	else{
           		document_level_outputs_file += '<p style="font-weight:bold;font-size:15px;margin-top:10px;">POV for this file</p>';
           	}

           

              var tag_output = jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['tag'];

              $('.response_id').val(jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['response_id']);

              if (tag_output == 'summary') {
              	//console.log(jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['output']);
                for (var p = 0; p < jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['output'].length; p++) {
                   document_level_outputs_file += '<p>'+jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['output'][p]+'</p>';
                }
               
                //document_level_outputs_file += '<p>'+jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['output']+'</p>';
              }
              else{
                document_level_outputs_file += '<p>'+jsondata['workflow_response'][i]['document_level_outputs'][n]['outputs'][o]['output']+'</p>';
              }
            document_level_outputs_file += '<hr>';
            
           }
            document_level_outputs_file += '</div>';
        }
	      $('#output_data_common_pov_next').html(document_level_outputs_file);
	      $('#fetch_workflow').html(fetch_workflow);
	      $('.resources').html(fetch_resources);
	   	 }



	   	 else{

			 var key_insights_data = '';
			 var data_summary = '';
	   	 	// fetch_workflow += "<li class='menu-li-head-title'>"+jsondata['workflow_response'][i]['workflow_name']+"</li>";
	   			fetch_workflow += "<li class='menu-li-head-title'>Interesting Insights</li>";
        var fetch_resources = '';
        var fetch_statsquotes = '<div class="boxes" style="padding:20px 20px;">';
	   		var document_level_outputs = jsondata['workflow_response'][i]['document_level_outputs'];
	   		for (var j = 0; j < document_level_outputs.length; j++) {
	   			//console.log(document_level_outputs[j]['file_name']); //file_name
	   			//console.log(document_level_outputs[j]['outputs']); //outputs
	   			fetch_workflow += '<li style="font-size:12px;margin-bottom:10px;">'+document_level_outputs[j]['file_name']+'</li>';
                fetch_resources += "<li style='font-size:13px;'>"+document_level_outputs[j]['file_name']+"</li>";

                //console.log(document_level_outputs[j]['file_name']);
                fetch_statsquotes += '<div style="padding:20px 20px;" class="card">';
                fetch_statsquotes += '<label style="font-weight:bold">File Name - '+document_level_outputs[j]['file_name']+'</label><hr>';
	   			var outputs_response = document_level_outputs[j]['outputs'];
	   			//console.log(outputs_response.length);

	   			for (var k = 0; k < outputs_response.length; k++) {
	   				//console.log(outputs_response[k]['response_id']); //response

	   				$('.response_id').val(outputs_response[k]['response_id']);
	   				//console.log(outputs_response[k]['output'].length); //outputs

	   				

	   				//console.log(outputs_response[k]['tag']);  	

	   				if (outputs_response[k]['tag'] == 'summary') {

	   					 for (var r = 0; r < outputs_response[k]['output'].length; r++) {
	   				 	   //console.log(outputs_response[k]['output'][r]);
	   					 	data_summary = nl2br(outputs_response[k]['output'][r]);
	   					 	fetch_statsquotes += '<div  style="padding:20px 20px;"><label class="boxes-title">Summary</label><p>'+data_summary+'</p></div>';


	   				     }
                          
	   				}
	   				else{
	   					 for (var s = 0; s < outputs_response[k]['output'].length; s++) {
	   				 	   //console.log(outputs_response[k]['output'][s]);
	   					 	key_insights_data =nl2br(outputs_response[k]['output'][s]);
	   					 	fetch_statsquotes += '<div class="boxes" style="padding:20px 20px;"><label class="boxes-title">Insights related to the theme</label><p>'+key_insights_data+'</p></div>';
	   				     }
	   				}			

	   				//stats_related_to_the_theme = nl2br(outputs_response[k]['output'][2]);	   					   				
	   				//output_data_summary += '<div class="boxes" style="padding:20px 20px;"><label class="boxes-title">Summary</label><p>'+data_summary+'</p></div>';	   				
	   				//fetch_statsquotes +='<div class="boxes" style="padding:20px 20px;"><label class="boxes-title">Facts & Stats related to the theme</label><p>'+stats_related_to_the_theme+'</p></div>';
	   				 }

	   			fetch_statsquotes += '</div><br>';	
	   		}
	   		$('#fetch_statsquotes').html(fetch_statsquotes+'</div>');
            //$('.resources').html(fetch_resources);
	   	 }

	   	}
	   	//$('.content-p').html(outputs);
	   	$('#fetch_workflow').html(fetch_workflow+'</ul>');
	   	$('#output_data_summary').html(output_data_summary);
	   	$('#output_data_quotes').html(output_data_quotes);
	   	$('#output_data_stats').html(output_data_stats);
	   	$('.overlay').hide();
	   	$('.home-section').hide();
        $('.next-section').show();

            }

	    }
	  }

	});



}








$('.download_data').click(function(){
    var HTML_Width = $(".content").width();
    var HTML_Height = $(".content").height();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + (top_left_margin * 2);
    var PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    html2canvas($(".content")[0]).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg", 1.0);
        var pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);
        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height*i)+(top_left_margin*4),canvas_image_width,canvas_image_height);
        }
        pdf.save("Grok-Research-Output-"+date+"-"+time+".pdf");
        //$(".html-content").hide();
    });

})


$('.logout').click(function(){
	$.ajax({
		url:'php/logout.php',
		method:'POST',
		success:function(data){
			location.reload();
		}
	})
})




