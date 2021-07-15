const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

var bannerStatus = 1;
var bannerTimer = 4000;

window.onload = function() {
    bannerLoop();
}

var startBannerLoop = setInterval(function() {
    bannerLoop();
}, bannerTimer);

document.getElementById("main-banner").onmouseenter = function() {
    clearInterval(startBannerLoop);
}

document.getElementById("main-banner").onmouseleave = function() {
    startBannerLoop = setInterval(function() {
       bannerLoop(); 
    }, bannerTimer);
}

document.getElementById("imgbanbtn-prev").onclick = function() {
    if (bannerStatus === 1) {
        bannerStatus = 2;
    }
    if (bannerStatus === 2) {
        bannerStatus = 3;
    }
    if (bannerStatus === 3) {
        bannerStatus = 1;
    }
    bannerLoop();
}

document.getElementById("imgbanbtn-next").onclick = function() {
    bannerLoop();
}

function bannerLoop() {
    if (bannerStatus === 1) {
        document.getElementById("ban2").style.opacity = "0";
        setTimeout(function() {
        document.getElementById("ban1").style.right = "0px";
        document.getElementById("ban1").style.zIndex = "1000";
        document.getElementById("ban2").style.right= "-1200px";
        document.getElementById("ban2").style.zIndex = "1500";
        document.getElementById("ban3").style.right = "1200px";
        document.getElementById("ban3").style.zIndex = "500";
        }, 500);
        setTimeout(function() {
        document.getElementById("ban2").style.opacity = "1";
        }, 1000);
        bannerStatus = 2;
    }

   else if (bannerStatus === 2) {
        document.getElementById("ban3").style.opacity = "0";
        setTimeout(function() {
        document.getElementById("ban2").style.right = "0px";
        document.getElementById("ban2").style.zIndex = "1000";
        document.getElementById("ban3").style.right= "-1200px";
        document.getElementById("ban3").style.zIndex = "1500";
        document.getElementById("ban1").style.right = "1200px";
        document.getElementById("ban1").style.zIndex = "500";
        }, 500);
        setTimeout(function() {
        document.getElementById("ban3").style.opacity = "1";
        }, 1000);
        bannerStatus = 3;
    }

   else if (bannerStatus === 3) {
        document.getElementById("ban1").style.opacity = "0";
        setTimeout(function() {
        document.getElementById("ban3").style.right = "0px";
        document.getElementById("ban3").style.zIndex = "1000";
        document.getElementById("ban1").style.right= "-1200px";
        document.getElementById("ban1").style.zIndex = "1500";
        document.getElementById("ban2").style.right = "1200px";
        document.getElementById("ban2").style.zIndex = "500";
        }, 500);
        setTimeout(function() {
        document.getElementById("ban1").style.opacity = "1";
        }, 1000);
        bannerStatus = 1;
    }
}