var a = "Almora"
if (a == "Bhimtal") {
    alert("You are under safe zone");
} else if (a == "Nainital") {
    alert("You are in covid19 affected district");
} else if (a == "Almora") {
    alert("Awesome your college is btkit");
} else {
    alert("Well Stay Safe");
}

switch (a) {
    case "Bhimtal":
        alert("You are under safe zone");
        break;
    case "Nainital":
        alert("You are in covid19 affected district");
        break;
    case "Almora":
        alert("Awesome your college is btkit");
        break;
    default:
        break;


}