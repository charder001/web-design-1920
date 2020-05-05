var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var hours = today.getHours() + 1
var time = hours + ":" + today.getMinutes();

var adventureStations = ["Leeuwarden", "Maastricht", "Rotterdam%20Centraal"]
var randomStation = adventureStations[Math.floor(Math.random() * adventureStations.length)];
var NSLink = `<a autofocus class="mainLink move" target="_blank" href="https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=Amsterdam%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}T${time}">Ik wil over een uur de trein van Eindhoven naar Amsterdam</a>`
var NSLinkTerug = `<a class="mainLink move" target="_blank" href="https://www.ns.nl/reisplanner/#/?vertrek=Amsterdam%20Centraal&vertrektype=treinstation&aankomst=Eindhoven%20Centraal&aankomsttype=treinstation&type=vertrek&tijd=${date}T${time}">Ik wil over een uur de trein van Amsterdam naar Eindhoven</a>`
var adventureLink = `<a class="mainLink move" target="_blank" href="https://www.ns.nl/reisplanner/#/?vertrek=Eindhoven%20Centraal&vertrektype=treinstation&aankomst=${randomStation}&aankomsttype=treinstation&type=vertrek&tijd=${date}T${time}">Ik wil over een uur op avontuur</a>`

console.log(date + " " + time)

var main = document.querySelector("main")
main.insertAdjacentHTML("afterbegin", adventureLink)
main.insertAdjacentHTML("afterbegin", NSLinkTerug)
main.insertAdjacentHTML("afterbegin", NSLink)

$(document).keydown(
    function(e)
    {    
        if (e.keyCode == 40 || e.keyCode == 74) {      
            $(".move:focus").next().focus();

        }
        if (e.keyCode == 38 || e.keyCode == 75) {      
            $(".move:focus").prev().focus();

        }
    }
);


function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}