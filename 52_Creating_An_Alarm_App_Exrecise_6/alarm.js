console.log('hello buddy');

let set = document.getElementById('setalarm');

set.addEventListener('click', func1);

function func1(e) {
    let alarm = document.getElementById('alarm');

    if (alarm.value == "") {
        alert('please enter time')
    }
    else {
        let time = new Date(alarm.value);
        if (time == NaN) {
            alert('Enter A Valid Time');
        }
        else {
            const current = new Date();

            let timeToAlarm = time - current;
            if (timeToAlarm < 0) {
                alert('Please Enter Valid Time');
            }
            else {
                setTimeout(() => {
                    ringing();
                }, timeToAlarm);
            }
        }
    }
}

function ringing() {
    var audio = new Audio('suga_boom_boom.mp3');
    audio.play();
    
}