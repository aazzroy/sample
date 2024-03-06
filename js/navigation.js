
$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
      items: 2,
      itemsDesktop: [1000, 2],
      itemsDesktopSmall: [990, 2],
      itemsTablet: [768, 1],
      pagination: true,
      navigation: false,
      navigationText: ["", ""],
      slideSpeed: 1000,
      autoPlay: true
    });
  });

  $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum+'+');
        //alert('finished');
      }

    });


    });

function prev(){
		document.getElementById('slider-container').scrollLeft -= 270;
}

function next()
{
		document.getElementById('slider-container').scrollLeft += 270;
}


$(".slide img").on("click" , function(){
	$(this).toggleClass('zoomed');
	$(".overlay").toggleClass('active');
})
// $(".overlay").on("click" , function(){
// 	$(".overlay").hide();
// })

function openNav() {
  document.getElementById("mySidenav").style.left = "0";
  document.getElementById("open-btn").style.display = "none";
}

function closeNav() {
  document.getElementById("mySidenav").style.left = "-100%";
  document.getElementById("open-btn").style.display = "block";
}

function opensearch() {
  document.getElementById("search_div").style.top = "0";
}

function closesearch() {
  document.getElementById("search_div").style.top = "-100%";
}



  



     
      function myFunction() {
      var dots = document.getElementById("dots");
      var moreText = document.getElementById("more");
      var btnText = document.getElementById("myBtn");
      if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
      } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
      }
      }
    
    
    //   $(document).on("click","#comment-btn",function(e){
    //   e.preventDefault();
    //   var Event_id = $(this).attr("data-id");
    //   var Comment = $(this).parent('div').find('.Comment').val();
    //   var comment_div = $(this).parent('div').parent('div').find('#comments_div');
    //   var comment_no = $(this).parent('div').parent('div').parent('div').find('.comment_no');
    //   $.ajax({
    //   type:"POST",
    //   url:"insert-comment-form.php",
    //   data:{Event_id:Event_id, Comment:Comment},
    //   success: function(data) {
    //   if (data == 1) {
    //   loadTable();
    //   }else if(data == 3){
    //   window.location.href="user-login.php";
    //   }
    //   }
    //   });
    //   });
      function loadTable(){
      $.ajax({
      url: "#",
      type: "POST",
      success: function(data){
      $('.timeline_data').html(data);
      }
      });
      }
      loadTable();
      $(document).on("click",".delete_cmt",function(e){
      var id = $(this).attr('data-cmt_id');
      var conf = confirm('Do you want to delete this comment?');
      if (conf == true){
      $.ajax({
      url:"ajax/delete_comment.php",
      type:'post',
      data:{id:id},
      success:function(data){
      if(data == 1){
      loadTable();
      }
      }
      });
      }

      });
      $('#searchbox').on('input',function(){
      var search_val = $(this).val()
      $.ajax({
      url:"management-team-index-search.php",
      type:"POST",
      data:{search_val:search_val},
      success:function(data){
      $('.right-div-data').html(data)
      }
      })
      })

      $('#problem_btn').click(function(){
        window.location.href="complain-form.php";
      })

      $(document).on('click','.timeline_data img',function(){
        var Event_id = $(this).attr('data-id');
        $(`#${Event_id}`).submit();
      })
      $(document).on('click','.timeline_data .timeline_img',function(){
        var Event_id = $(this).attr('data-id');
        $(`#${Event_id}`).submit();
      })
