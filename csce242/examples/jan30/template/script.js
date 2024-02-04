const doStuff = () => {
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Tom";
    messageP.classList.toggle("special");
};

const hidePlaceHolder = () => {
    document.getElementById("placeholder").classList.add("hidden");
};

document.getElementById("btn-click").onclick = doStuff;
doucument.getElementById("placeholder").onclick = hidePlaceHolder;