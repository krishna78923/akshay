$(document).ready(function(){
	var i ;
	var anchorbtn;
	var anchorbtn10;
	var v=10;
	var c=0;
	var t=".";var t1=11;var t2="="; var t3=12 ; var t4=13;var t5="+";var t6=14;var t7="-";var t8=15 ; var t9="*"; 
	var t10=16; var  t11="C";


	function appendToMain(text,id){
		$(id).append(text);
	}
	for(i=1;i<10;i++){
      
       
       
       	anchorbtn=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+i.toString()+"'"+" >"+i.toString()+"</a>");
     	appendToMain(anchorbtn,"#mainc");
       
   }// first for loop ends here 



anchorbtn10=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+c.toString()+"'"+" >"+c.toString()+"</a>");
appendToMain(anchorbtn10,"#mainc");
btndot=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+t1.toString()+"'"+" >"+t.toString()+"</a>");
appendToMain(btndot,"#mainc");
btnequal=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+t3.toString()+"'"+" >"+t2.toString()+"</a>");
appendToMain(btnequal,"#mainc");


btnplus=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+t4.toString()+"'"+" >"+t5.toString()+"</a><br>");
$(btnplus).insertAfter("#button3");

btnminus=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+t6.toString()+"'"+" >"+t7.toString()+"</a><br>");
$(btnminus).insertAfter("#button6");
 btnmultiply=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+t8.toString()+"'"+" >"+t9.toString()+"</a><br>");
 $(btnmultiply).insertAfter("#button9");
 btnclear=$("<a href='#' class='ui-btn ui-btn-inline' "+"id="+"'"+"button"+t10.toString()+"'"+" >"+t11.toString()+"</a><br>");
$(btnclear).insertAfter("#button12");

  
  

//second styling  loop 
for(i=1;i<17;i++){
$("#button"+i.toString()).css("border-radius","50%");
$("#button"+i.toString()).css("background-color","#3c3c3d");
$("#button"+i.toString()).css("color","yellow");
}
for(i=1;i<17;i++){
// $("#button"+i.toString()).css("border-radius","50%");
// $("#button"+i.toString()).css("background-color","#3c3c3d");
// $("#button"+i.toString()).css("color","yellow");
$("#button"+i.toString()).mouseover(function(){
  $("#button"+i.toString()).css("background-color","#bcbcbc");

});
}
var strin="";

function clickEvent(id){

$("#button" +id.toString()).click(function(){
	strin =strin+$("#button" +id.toString()).text();
	$("#txt1").val(strin);

});
}

for(var i =0;i<12;i++){
	clickEvent(i);
}

$("#button16").click(function(){
strin="";
	$("#txt1").val(strin);
});
$("#button13").click(function(){
strin =strin+$("#button" +t4.toString()).text();
	$("#txt1").val(strin);
});
$("#button14").click(function(){
strin =strin+$("#button" +t6.toString()).text();
	$("#txt1").val(strin);
});
$("#button15").click(function(){
strin =strin+$("#button" +t8.toString()).text();
	$("#txt1").val(strin);
});


$("#button12").click(function(){
	if(strin.includes("+")){
		if(countplus()>1){
				getall();
				}
else 
	{
	var numbers=strin.split("+");
	var num1=parseInt(numbers[0]);
	var num2=parseInt(numbers[1]);
	var result=num1+num2;
	$("#txt1").val(result.toString());
	strin=result.toString();		
	}
}



if(strin.includes("*")){
var numbers=strin.split("*");
var num1=parseInt(numbers[0]);
var num2=parseInt(numbers[1]);
var result=num1*num2;
$("#txt1").val(result.toString());
strin=result.toString();
}



if(strin.includes("-")){
var numbers=strin.split("-");
var num1=parseInt(numbers[0]);
var num2=parseInt(numbers[1]);
var result=num1-num2;
$("#txt1").val(result.toString());
strin=result.toString();
}
});

function getall(){
	var sum=0;
	
	var strarray=strin.split("+");
	for(var i=0;i<strarray.length;i++){
		sum=sum+parseInt(strarray[i]);
	}
	$("#txt1").val(sum.toString());
	strin=sum.toString();

}
function countplus(){
	var count=0;
	for(var i=0;i<strin.length;i++){
			if(strin.charAt(i)=="+"){
				count++;
			}
	}
	return count;
}

});