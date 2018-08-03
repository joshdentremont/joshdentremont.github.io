function updateTime() {
    var now = new Date();

    document.getElementById("time").innerHTML = now.toString();

    // call this function again in 100ms
    setTimeout(updateTime, 100);
}

updateTime();
