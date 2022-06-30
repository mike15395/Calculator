function display(val){
 document.getElementById("inputField").value +=val;
    
}

function reset()
{
    document.getElementById("inputField").value="";
    document.getElementById("outputField").value="";
}

function percentage()
{
   var x= document.getElementById("inputField").value;
    var y= eval(x)*100;
    document.getElementById("outputField").value=y;

}
function square()
{
   document.getElementById("outputField").value= (document.getElementById("inputField").value) * (document.getElementById("inputField").value)
}

function del()
{
   var str= document.getElementById("inputField").value;
   //str=str.substring(0,str.length -1);
   str=str.slice(0,-1);
   document.getElementById("inputField").value=str;

}
function equals()
{
    var x= document.getElementById("inputField").value;
    var y= eval(x);
    document.getElementById("outputField").value=y;
}