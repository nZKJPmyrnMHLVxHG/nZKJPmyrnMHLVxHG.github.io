window.onload = function() {
    const copyDiscord = document.getElementById("copy-discord");
    copyDiscord.addEventListener("click", function() {
        navigator.clipboard.writeText("nZKJPmyrnMHLVxHG#4545");
        copyDiscord.setAttribute("class", "fas fa-check");
        setTimeout(function() {
            copyDiscord.setAttribute("class", "far fa-copy");
        }, 750)
    });
};
