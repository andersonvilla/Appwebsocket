var socket = io.connect('http://localhost:3000', {'forceNEw': true});

function buy(){      
    let random = randomGenerate();
    let tiempo = Math.floor(random/60)  
    var payload = {
        titulo : (document.getElementById('titulo')).innerHTML ,
        precio : (document.getElementById('precio')).innerHTML,
        nombre : (document.getElementById('nombre').value),
        tiempo : tiempo
    };
    socket.emit('new-message', payload);
    
    let form = document.getElementById('formulario');
    form.innerHTML = `
        <div id="timer">
            <h1 id="display__time-left"></h1>
            <a href ="pedidos.html" target="_blank"> <input type="submit" onclick="pedidos()" value="Ver Pedidos"></a>
         </div>
    `;
    timerDisplay = document.getElementById('display__time-left');
   
    timer(random);
    return false;
    
}

function randomGenerate(){
    let num = Math.floor(Math.random()*(180)+180)
    return num
  }
  

  function pedidos(e){
    
    }


let countdown;

function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop it!
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        if(secondsLeft<=60){
            timerDisplay.style.color = '#568203';
        }
        if(secondsLeft>60 && secondsLeft<=120){
            timerDisplay.style.color = '#e1ad01';
        }
        if(secondsLeft>120 && secondsLeft<=180){
            timerDisplay.style.color = '#e05a00';
        }
        if(secondsLeft>180){
            timerDisplay.style.color = '#b21807';
        }
        // display it
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const hours = Math.floor(seconds / 3600);
    let remainderSeconds = seconds % 3600;
    const minutes = Math.floor(remainderSeconds / 60);
    remainderSeconds = remainderSeconds % 60;
    let display;
    if(hours>0){
        display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`
    }
    else{display = `${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;}
    document.title = 'El CAI Incendiado | '+display;
    timerDisplay.textContent = display;
}



