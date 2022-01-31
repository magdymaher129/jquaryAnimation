$(document).ready(function(){
    $('div:even').css("background-color","yellow")
    $('div:even').css("color","brown")
    $('div:odd').css("background-color","brown")
    $('div:odd').css("color","yellow")
    $('div').css("padding","10px")
    $("div").css("padding-left","50%")
    $('#grey').click(function () { 
       $('div').css("background-color","grey")
        
    });
    $('#green').click(function () { 
        $('div').css("background-color","green")
         
     });
     $('#slideup').click(function () { 
        $('div:odd').slideUp()
       
         
     });
     $('#slidedown').click(function () { 
        $('div:odd').slideDown()
      
         
     });
    $('#reset').click(function () { 
        $('div:even').css("background-color","yellow")
        $('div:even').css("color","brown")
        $('div:odd').css("background-color","brown")
        $('div:odd').css("color","yellow")
        $('div').css("padding","10px")
        $("div").css("padding-left","50%")
         
     });

});