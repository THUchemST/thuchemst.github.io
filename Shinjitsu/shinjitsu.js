window.onload=RefreshText;

function RefreshText()
{
	var date=new Date().getDate();
	var month=new Date().getMonth()+1;
	document.getElementById("Shinjitsu").innerHTML="「明明是"+month+"月"+date+"日，却是一个人呢233」";
}