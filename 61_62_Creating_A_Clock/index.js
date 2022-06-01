console.log('hello');

function updateClock(){
    
    let date = new Date();
    let currentHour = date.getHours() ;
    let currentMinute = date.getMinutes() ;
    let currentSecond = date.getSeconds() ;

    let currentDay = date.getUTCDay();
    let currentDate = date.getDate();
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    let timeOfDay = (currentHour < 12) ? "AM" : "PM" ;

    currentHour = (currentHour < 12 ) ? (currentHour < 10) ? '0' + currentHour : currentHour : currentHour-12 ;

    currentHour = currentHour == 0 ? 12 : currentHour ;

    currentMinute = (currentMinute < 10) ? '0' + currentMinute : currentMinute;

    currentSecond = (currentSecond < 10) ? '0' + currentSecond : currentSecond ;

    let day = ['sun' , 'Mon' , 'Tue' , 'Wed' , 'Fri' , 'sat']

    let currentTime = 'Date :: ' + day[currentDay] + " " + currentDate + "/" + currentMonth+1 + "/" + currentYear +"  " +"Time :: " + currentHour + " : " + currentMinute + " : " + currentSecond + " " + timeOfDay ;
    let clock = document.getElementById('clock');
    clock.innerHTML = `<h1>${currentTime}</h1>` ;

}