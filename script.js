
function funcs(){
    var a = document.getElementById("para_in1").value;
    console.info(a);
    var inputload = [];
    var i = 0;
    for (i = 1; i <= 4; i++) {
        inputload.push(document.getElementById("para_in"+i).value);
        console.log(inputload);
    };
    document.getElementById("output").innerHTML = inputload;
}