function tanchuang(){
	var password = prompt("Enter password.");
	if(password == "helloxiyou"){
		window.open('helloxiyou/web/index.html','_self');	
	}
	else if(password == ""||password == null){
			
	}
	else{
		alert("密码不正确");
	}
}