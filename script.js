$(document).ready(function(){
$('.click_me').click(function(){
  $('.click_me').hide();
  $('.searchInp,input[type="submit"]').show(500);
  $('.searchInp').animate({width:'290px'},'500');
});
  
 $('h2').click(function(){
   window.open ( "https://ru.wikipedia.org/wiki/Special:Random");
});
  
  $('#submit').click(function(){
    $(".output").html("");
    var searchTerm = $('#search').val();
    
    var url = "https://ru.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?";
    
    $.ajax({
    type:"GET",
    url:url,
    async:false,
    dataType:"json",
      contentType:"application/json; charset=utf-8",
    success:function(data){
      // console.log(data[1][0]);
      // console.log(data[2][0]);
      // console.log(data[3][0]);
      
     for(var i=0; i<data[1].length; i++){
      $(".output").append("<a target='_blank' href="+data[3][i]+">"+"<div class='resultOutput'>"+"<h3>"+ data[1][i] +"</h3>"+"<p>"+ data[2][i] +"</p>"+"</div>"+"</a>");
       $(".resultOutput").show(1000);
     }
     
      
    },
     error:function(errorMEssage){
       alert("Error");
     }
    });
  });
  
  $("#search").keypress(function(e){
    if(e.which==13){
      $('#submit').click();
    }
  });
  
});