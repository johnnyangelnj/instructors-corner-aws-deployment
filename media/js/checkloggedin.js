$.ajax({
    url:"/checkloggedin/",
    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    success:function(data){
        if (data.isloggedin != true){
            location.href="http://www.instructorscorner.org";
        }
    },
    error:function(){
        alert("Error");
    },
});

