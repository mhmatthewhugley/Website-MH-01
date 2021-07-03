function save() {
    txt = "Saved!";
    var checkbox = document.getElementById("color-mode");
    localStorage.setItem("color-mode", checkbox.checked);
}

function load() {
    var checked = JSON.parse(localStorage.getItem("color-mode"));
    document.getElementById("color-mode").checked = localStorage.getItem("color-mode") == "true";
}

function wis() {
    confirm("Are you sure? This will reload the page.");
    location.reload();
    localStorage.clear();
}

load();
