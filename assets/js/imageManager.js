  expend = function(){
    $.get('/loadImage', function(data1){      
      for(var i=0; i<data1.length; i++){        
      //  $('#listImage').append('<li><p>'+data1[i].text +'<img src=\''+data1[i].image+'\'/></li>');
        $('#listImage').append('<div class="swiper-slide" style="width: 640px; height: 250px"><img src=\''+data1[i].image+'\'/></div>'); 
       

        console.log(data1[i].image);
    }
  })
  }


