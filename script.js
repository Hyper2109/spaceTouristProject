function menu(){
    var checkBox = document.getElementById("checkBox");
    var menu = document.getElementById("mobileContainer");
    var close = document.getElementById("close-menu");
    var open = document.getElementById("open-menu");

    if(checkBox.checked == true){
        menu.style.right = "0%";
        close.style.display = "block";
        open.style.display = "none";
    }else{
        menu.style.right = "-50%";
        close.style.display = "none";
        open.style.display = "block";
    }
}



var planet = document.getElementById("planet");
var active = "100%"
var disable = "40%"
function moon(){
    planet.style.backgroundImage = "url(assets/destination/image-moon.png)";
    document.getElementById("moon").style.opacity = active;
    document.getElementById("mars").style.opacity = disable;
    document.getElementById("europa").style.opacity = disable;
    document.getElementById("titan").style.opacity = disable;

    document.getElementById("moon").classList.add("p-active");
    document.getElementById("mars").classList.remove("p-active");
    document.getElementById("europa").classList.remove("p-active");
    document.getElementById("titan").classList.remove("p-active");

    document.getElementById("p-title").innerHTML = "Moon";
    document.getElementById("p-description").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    document.getElementById("p-distance").innerHTML = "384,400 Km";
    document.getElementById("p-days").innerHTML = "3 Days";
}
function mars(){
    planet.style.backgroundImage = "url(assets/destination/image-mars.png)";
    document.getElementById("moon").style.opacity = disable;
    document.getElementById("mars").style.opacity = active;
    document.getElementById("europa").style.opacity = disable;
    document.getElementById("titan").style.opacity = disable;

    document.getElementById("moon").classList.remove("p-active");
    document.getElementById("mars").classList.add("p-active");
    document.getElementById("europa").classList.remove("p-active");
    document.getElementById("titan").classList.remove("p-active");

    document.getElementById("p-title").innerHTML = "Mars";
    document.getElementById("p-description").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    document.getElementById("p-distance").innerHTML = "225 Mil. Km";
    document.getElementById("p-days").innerHTML = "9 Months";
}
function europa(){
    planet.style.backgroundImage = "url(assets/destination/image-europa.png)";
    document.getElementById("moon").style.opacity = disable;
    document.getElementById("mars").style.opacity = disable;
    document.getElementById("europa").style.opacity = active;
    document.getElementById("titan").style.opacity = disable;

    document.getElementById("moon").classList.remove("p-active");
    document.getElementById("mars").classList.remove("p-active");
    document.getElementById("europa").classList.add("p-active");
    document.getElementById("titan").classList.remove("p-active");

    document.getElementById("p-title").innerHTML = "Europa";
    document.getElementById("p-description").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    document.getElementById("p-distance").innerHTML = "628 Mil. Km";
    document.getElementById("p-days").innerHTML = "3 Years";
}
function titan(){
    planet.style.backgroundImage = "url(assets/destination/image-titan.png)";
    document.getElementById("moon").style.opacity = disable;
    document.getElementById("mars").style.opacity = disable;
    document.getElementById("europa").style.opacity = disable;
    document.getElementById("titan").style.opacity = active;

    document.getElementById("moon").classList.remove("p-active");
    document.getElementById("mars").classList.remove("p-active");
    document.getElementById("europa").classList.remove("p-active");
    document.getElementById("titan").classList.add("p-active");

    document.getElementById("p-title").innerHTML = "Titan";
    document.getElementById("p-description").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementById("p-distance").innerHTML = "1.6 Bil. Km";
    document.getElementById("p-days").innerHTML = "7 Years";
}