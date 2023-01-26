$(document).ready(function () {       
    $("#button1").click(function () {
          $('#div1').toggle(100);
              $("#div2,#div3,#div4,#div5,#div6").hide();               
    });          
     $("#button2").click(function () {
        $("#div2").toggle(100);
        $("#div1,#div3,#div4,#div5,#div6").hide();    
    });
     $("#button3").click(function () {
        $("#div3").toggle(100);
        $("#div1,#div2,#div4,#div5,#div6").hide();    
    });
     $("#button4").click(function () {
        $("#div4").toggle(100);
        $("#div1,#div2,#div3,#div5,#div6").hide();    
    });
     $("#button5").click(function () {
        $("#div5").toggle(100);
        $("#div1,#div2,#div3,#div4,#div6").hide();    
    });
     $("#button6").click(function () {
        $("#div6").toggle(100);
        $("#div1,#div2,#div3,#div4,#div5").hide();    
    });
});

$(document).ready(function () {  
    $("#btnprev").click(function() {
        $('#step-1').toggle();
        $('#item1').hide();
});
});