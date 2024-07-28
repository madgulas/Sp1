function clock(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    sessoin = "AM"

    if(hour < 12){
        session = "AM";
    }
    else{
        session = "PM";
    }

    hour = 10 > hour ? "0" + hour : hour;
    minutes = 10 > minutes ? "0" + minutes : minutes;
    seconds = 10 > seconds ? "0" + seconds : seconds;

    document.getElementById("clock").innerHTML = hour + " : " + minutes + " : " + seconds + " : " + session;
    setTimeout(clock, 1000);
}
clock(); 