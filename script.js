function fetchJoke() {
    document.getElementById("joke").innerText = "";
    document.getElementById("loading").style.display = "block";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Any?type=twopart&blacklistFlags=racist,sexist,explicit,political,religious,nsfw", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.getElementById("loading").style.display = "none";
            if (xhr.status == 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.type === "twopart") {
                    var jokeText = response.setup + " " + response.delivery;
                    document.getElementById("joke").innerText = jokeText;
                } else {
                    document.getElementById("joke").innerText = "No suitable jokes found, try again!";
                }
            } else {
                document.getElementById("joke").innerText = "Failed to load joke. Please try again!";
            }
        }
    };
    xhr.send();
}
