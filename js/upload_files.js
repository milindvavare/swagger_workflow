// $(function(){

 let arr_links = [];
 let url_parse_ids = [];

    $("input[type = 'file']").change(function(){
       var $fileUpload = $("input[type='file']");
       var output = document.getElementById('fileList');

      var totallinks = arr_links.length;
      var totalfile = parseInt($fileUpload.get(0).files.length);
      var mx_length = totallinks+totalfile;

      if (mx_length > 5){
           alert("You are only allowed to upload a maximum of 5 files or Links");
           $("input[type='file']").val("");
           children +=  '<li></li>';
           output.innerHTML = children;
       }
       else{
          var totalfile = parseInt($fileUpload.get(0).files.length);
          var input = document.getElementById('file');
          var output = document.getElementById('fileList');
          //var output2 = $('.resources');
          var children = "";
          var children2 = "";
          for (var i = 0; i < input.files.length; ++i) {
              children +=  '<li>'+ input.files.item(i).name + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>';
              children2 += '<li>'+ input.files.item(i).name + '</li>';
          }
          output.innerHTML = children;
          $('.resources').html(children2);          
       }
    });


 
    $('.upload_links').click(function(){
      $('.overlay').show();
      var fileUpload = $("input[type='file']");
      var totallinks = arr_links.length;
      var totalfile = parseInt(fileUpload.get(0).files.length);
      var mx_length = totallinks+totalfile;
       var output2 = document.getElementById('linkList');
        var url_links = $('.url_links').val();     
        var arr_temp = '';
        arr_links.push(url_links);
        console.log(arr_links); 


      if (mx_length > 2) {
        alert("You are only allowed to upload a maximum of 2 files or Links");
      }
      else{

       
        $.ajax({
            url:'php/upload_urls.php',
            method:'POST',
             data:{url_links:arr_links},
             success:function(data){

                 if (data == 'Internal Server Error') {
                        alert("Internal Server Error");
                        $('.overlay').hide();
                    }
                    else{
                        console.log(data);
                        $('.overlay').hide();  
                        $(".go_btn").removeAttr("disabled");           
                        var children_links = "";
                              for (var i = 0; i < arr_links.length; ++i) {
                                  children_links +=  '<li>'+ arr_links[i] + '<span class="remove-list" onclick="return this.parentNode.remove()">X</span>' + '</li>'
                              }                           
                            $('#linksList').html(children_links);


                            var jsondata = JSON.parse(data);
                            for (var i = 0; i < jsondata['files'].length; i++) {
                                console.log(jsondata['files'][i]['id']);
                                url_parse_ids.push(jsondata['files'][i]['id']);
                            }



                    }     

           }

        })


     }
     
    });

 // });