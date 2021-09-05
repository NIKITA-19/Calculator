var buttons=document.getElementsByTagName("button");
var display=document.getElementById("display");
var op1=null;
var op2=null;
var opr=null;
var result;
for( var i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener('click', function(){
        console.log("click");
        var val=this.getAttribute("class");
        if(val=="div" || val=="mul" || val=="add"|| val=="sub")
        { 
          opr=this.getAttribute("value");
          console.log(opr);
          op1=parseFloat(display.textContent);
          console.log(op1);
          display.textContent="";
        }
        else if(val=="eq")
        {
            op2=parseFloat(display.textContent);
            console.log(op2);
            display.textContent="";
            console.log(typeof(op1));
            console.log(typeof(op2));
            if(op2=="0" && opr=="/")
            display.innerText+="Error";
            else{
            result=eval(op1+" "+opr+" "+op2);
            console.log(result);
            display.innerText+=result;}
        }
        else if(val=="start")
        {
            display.textContent="";
            op1=0;
            op2=null;
            opr=null;
        }
        else if(val=="%")
        {
            op1=parseFloat(display.textContent);
            display.textContent="";
            result=eval(op1+"/"+"100");
            display.innerText+=result;
        }
        else{
            display.innerText+=val;
        }
    });
}