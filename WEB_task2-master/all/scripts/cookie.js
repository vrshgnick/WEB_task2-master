function savePageState() {
  var scrollPosition = window.scrollY;
  document.cookie = "scrollPosition=" + encodeURIComponent(scrollPosition) + "; path=/";
}

function restorePageState() {
  var name = "scrollPosition" + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookiesArray = decodedCookie.split(';');
  for (var i = 0; i < cookiesArray.length; i++) {
    var cookie = cookiesArray[i].trim();
    if (cookie.indexOf(name) == 0) {
      var scrollPosition = parseInt(cookie.substring(name.length, cookie.length));
      window.scrollTo(0, scrollPosition);
      break;
    }
  }
}

function getLastVisitTime() {
    const name = "lastVisitTime=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookiesArray = decodedCookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return null;
}

function displayLastVisitTime() {
    const lastVisitTime = getLastVisitTime();
    const lastVisitElement = document.getElementById("lastVisit");

    if (lastVisitElement && lastVisitTime) {
        lastVisitElement.innerText = "Последний раз вы заходили: " + lastVisitTime;
    }
}

function clearPageState() {
  document.cookie = "scrollPosition=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

window.onbeforeunload = function() {
  savePageState();
};

// function setLastVisitTime() {
//     const currentTime = new Date();
//     const expirationDate = new Date(currentTime.getTime() + (365 * 24 * 60 * 60 * 1000));
//     document.cookie = "lastVisitTime=" + encodeURIComponent(currentTime.toLocaleString("ru")) + "; expires=" + expirationDate.toUTCString() + "; path=/";
// }
//



window.addEventListener("load", displayLastVisitTime);
window.addEventListener("unload", setLastVisitTime);

window.onload = function() {
  restorePageState();
  displayLastVisitTime();
  saveLastVisitTime();
};
