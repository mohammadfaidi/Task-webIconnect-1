var lines = [];
var countLine = 0;


function add(){
    countLine = countLine +1;
    var strLine = "line" + countLine;
    var obj = {one:strLine};
    lines.push(obj);
    display(lines);
}


function display(array){
    var str =" ";
    for(var i=0; i<array.length; i++){
        str = str + '<p>' + array[i].one +'</p>'
    }
    document.getElementById('sentence').innerHTML = str;
    var height = document.getElementById('sentence').offsetHeight;
    console.log(height)
    document.getElementById('content').setAttribute("style","height: calc(100vh - "+height+"px - 120)" );
}

function remove(){
    lines =[];
    countLine =0;
    display(lines);
}