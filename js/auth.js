
function awt()

{
    var x = document.getElementById("L").value;
    var z = document.getElementById("P").value;

    if (x == "root@root.com") {
        if (z == "admin") {
        document.getElementById("demo").innerHTML = "Вы зашли на сайт, " + x;
        document.getElementById("L").value = "";
        document.getElementById("P").value = "";
        }
    }
}

function reg()

{
    var x = document.getElementById("L").value;
    var z = document.getElementById("P").value;

        document.getElementById("demo").innerHTML = "Теперь вы зарегистрированы, "+ x;
        document.getElementById("L").value = "";
        document.getElementById("P").value = "";

}