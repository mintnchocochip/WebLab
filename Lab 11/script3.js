function time(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    document.getElementById("current-time").innerHTML = "Time: " +h + ":" + m + ":" + s;
    setTimeout(time, 1000);
}
function validate(){
    var content = document.getElementsByClassName("input-field");
    for(let i in content){
        if(isNaN(i.value) || i.value == -1 || i.value == ""){
            
        }
    }

}