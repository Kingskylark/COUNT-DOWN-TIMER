let counter = 0
let getMin = 0
let getSec = 0
let getHour = 0

// document.body.style.backgroundColor = 'gray'

let container = document.createElement('div');
document.body.appendChild(container);
container.style.height = "100vh"
container.style.display = 'flex'
container.style.flexDirection = 'column'

let content = document.createElement('div');
container.appendChild(content);
content.style.margin = 'auto'
content.style.alignContent = 'center'
content.style.justifyContent = 'center'
// content.style.backgroundColor = 'blue'
content.style.borderRadius = '5px'

let div2 = document.createElement('div');
content.appendChild(div2);
div2.style.margin = '2rem'
div2.style.textAlign = 'center'

let hours = document.createElement('input');
div2.appendChild(hours);
hours.setAttribute('placeholder', 'Input Hour');
hours.setAttribute('id', 'hour');
hours.style.margin = '5px'
hours.style.borderRadius = '5px'
hours.style.padding = '10px'

let minutes = document.createElement('input');
div2.appendChild(minutes);
minutes.setAttribute('placeholder', 'Input Minutes');
minutes.setAttribute('id', 'minutes');
minutes.style.margin = '5px'
minutes.style.borderRadius = '5px'
minutes.style.padding = '10px'

let seconds = document.createElement('input');
div2.appendChild(seconds);
seconds.setAttribute('placeholder', 'Input Seconds');
seconds.setAttribute('id', 'seconds');
seconds.style.margin = '5px'
seconds.style.borderRadius = '5px'
seconds.style.padding = '10px'

let div = document.createElement('div');
content.appendChild(div);
div.style.margin = '2rem'
div.style.textAlign = 'center'

let startBtn = document.createElement('button');
startBtn.textContent = "Start";
div.appendChild(startBtn);
startBtn.setAttribute('id', 'startbutton')
startBtn.style.border = "1px solid black"
startBtn.style.margin = '5px'
startBtn.style.borderRadius = '5px'
startBtn.style.padding = '10px'
startBtn.addEventListener('click', start)

let stopBtn = document.createElement('button');
stopBtn.textContent = "Stop";
div.appendChild(stopBtn);
stopBtn.style.border = "1px solid red"
stopBtn.style.margin = '5px'
stopBtn.style.borderRadius = '5px'
stopBtn.style.padding = '10px'
stopBtn.addEventListener('click', stop)


let resumeBtn = document.createElement('button');
resumeBtn.textContent = "Resume";
div.appendChild(resumeBtn);
resumeBtn.setAttribute('id', 'resumebutton')
resumeBtn.style.border = "1px solid blue"
resumeBtn.style.margin = '5px'
resumeBtn.style.borderRadius = '5px'
resumeBtn.style.padding = '10px'
resumeBtn.addEventListener('click', resume)


let para = document.createElement('h1');
content.appendChild(para);
para.setAttribute('id', 'para');
para.style.textAlign = 'center';

function start() {

    if (counter == 0 && document.getElementById('hour') && document.getElementById('minutes') && document.getElementById('seconds')) {

        getHour = parseInt(document.getElementById('hour').value);
        getMin = parseInt(document.getElementById('minutes').value);
        getSec = parseInt(document.getElementById('seconds').value);

        if (isNaN(getHour)) getHour = 0;
        if (isNaN(getMin)) getMin = 0;
        if (isNaN(getSec)) getSec = 0;

        document.getElementById('hour').value = getHour;
        document.getElementById('minutes').value = getMin;
        document.getElementById('seconds').value = getSec;
        counter = 1;
        document.getElementById('startbutton').setAttribute('disabled', 'disabled');
        document.getElementById('resumebutton').setAttribute('disabled', 'disabled');
    }

    if (getHour == 0 && getMin == 0 && getSec == 0) {
        counter = 0;
        document.getElementById('startbutton').removeAttribute('disabled');
        return false;
    }
    else {
        getSec--;
        if (getSec <= 0) {
            if (getMin > 0) {
                getSec = 60;
                getMin--;
                
            }
            
            if (getMin <= 0) {
                if (getHour > 0) {
                    getMin = 60;
                    getHour--
                    // getMin = 60;
                    
                }
            }
        }
        }
        

    console.log(getHour, getMin,);
    document.getElementById('para').innerHTML = getHour + "Hr : " + getMin + "Min : " + getSec + " Sec";
    time = setTimeout('start()', 1000);
}



function stop() {
    clearTimeout(time)
    document.getElementById('resumebutton').removeAttribute('disabled');
}

function resume() {
    start();
}





