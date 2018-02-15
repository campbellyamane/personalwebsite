function initialize_what(){
    var table_headers = $(".what_headers");
    var desc = $(".project_description");
    table_headers[0].style.color = "black";
    desc[0].style.display = "block";
    
    $('.what_headers').click(function(){
        $(this).css('color', 'black');
        $('.what_headers').not($(this)).css('color', 'lightgray');
        
        for (var i = 0; i < table_headers.length; i++){
            if (table_headers[i] == $(this)[0]){
                $('.project_description').not($('.'+i)).fadeOut();
                $('.'+i).fadeIn();
            }
        }
    });
        
}

function initialize_where(){
    var table_headers = $(".where_headers");
    var desc = $(".job_description");
    table_headers[0].style.color = "black";
    desc[0].style.display = "block";
    
    $('.where_headers').click(function(){
        $(this).css('color', 'black');
        $('.where_headers').not($(this)).css('color', 'lightgray');
        
        for (var i = 0; i < table_headers.length; i++){
            if (table_headers[i] == $(this)[0]){
                $('.job_description').not($('.'+i)).fadeOut();
                $('.'+i).fadeIn();
            }
        }
    });
        
}