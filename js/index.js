if (typeof window.orientation !== 'undefined') {
    window.location.replace("404.html");
}
$(document).ready(function(){
    var expanded = false;
    var loaded = false;
    var loaded = true;
    var bouncing = false;
    var current;
    
    $('#intro').fadeIn(1500, function(){
        $('#who_link').fadeIn(800, function(){
            $('#what_link').fadeIn(800, function(){
                $('#where_link').fadeIn(800, function(){
                    $('#how_link').fadeIn(800, function(){
                        loaded = true;
                    });                     
                });
            });        
        });    
    });
    
    $('.go_home').click(function(){
        $(this).data('clicked', true);
    });
    
    $('.divlink').click(function(e){
        if (!expanded && loaded && !bouncing){
            $('.divlink').not($(this)).fadeOut(600);
            $(this).css('cursor', 'auto');
            $('#intro').fadeOut(300);
            $(this).css('zIndex',100);
            $(this).find("img").animate({
                marginTop:"2%"
            }, 700);
            $(this).find("h2").animate({
                fontSize: "10vh",
                top:"-2%"
            }, 700);
            $(this).animate({
                height: "100%",
                width: "100%"
            }, 700);
            expanded = true;
            $(this).find('.meat').fadeIn(700);
            $(this).find('.go_home').fadeIn(700);
            current = $(this);
            
            if($(this).attr("id") == "what_link"){
                initialize_what();
            }
            else if($(this).attr("id") == "where_link"){
                initialize_where();
            }
        }
        else if ($(this).find('.go_home').data('clicked')){
            $(this).css('cursor', 'pointer');
            $('.divlink').not($(this)).fadeIn(600);
            $(this).find('.go_home').fadeOut(700);
            $('#intro').fadeIn(1000);
            $(this).find('.meat').fadeOut(300);
            $(this).find("img").animate({
                marginTop:"5%"            
            }, 700);
            $(this).find("h2").animate({
                fontSize: "3.5vh",
                top:"5%"
            }, 700);
            $(this).animate({
                height: "40vh",
                width: "40vh"
            }, 700, function(e){
                $(this).css('zIndex',1);                
            });      
            expanded = false;   
            $(this).find('.go_home').data('clicked', false);   
            $('.project_description').css('display', 'none');
            $('.job_description').css('display', 'none');
            $(".what_headers").css('color', 'lightgray');
            $(".where_headers").css('color', 'lightgray');
        }
    });
    
    $(".divlink").on("mouseenter", function(e){
        if ($(this).width() < $(window).width()){
            bouncing = true;
            $(this).effect( "bounce", { times: 2 }, 700, function(){
                bouncing = false;
            });            
        }
    });
});

function send(){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var check = re.test($('#email').val());
    
    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    if (name != ''){
        if (check){
            if (message != ''){
                $.post("message.php", {
                    name:name,
                    email:email,
                    message:message
                }).done(function(data){
                    alert(data);
                $('#name').val('');
                    $('#email').val('');
                    $('#message').val('');
                }); 
                               
            }  
            else{
                alert('Please write something in the message field');
                $('#message').focus();
            }
        } 
        else{
            alert('Please enter a valid email address');
            $('#email').focus();
        }
    }
    else{
        alert('Please fill out the name field');
        $('#name').focus();
    }

}
