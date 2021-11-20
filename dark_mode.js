function darkmode(e){
	
	var mode_button = document.getElementById("dark_mode");
	
	if(mode_button.value == "Dark mode"){
		document.body.style.backgroundColor = "black";
		document.body.style.color = "#FFFFFF";
		document.getElementById("header").style.backgroundColor = "#F89B04";
		
		var all_divs = document.getElementsByTagName("div");
		 for(i = 0; i < all_divs.length; ++i)
		{
		 all_divs[i].style.backgroundColor = "black";
		}
		
		var all_links = document.getElementsByTagName("a");
		 for(i = 0; i < all_links.length; ++i)
		{
		 all_links[i].style.color = "#7FF804";
		}
		mode_button.value = "Normal mode";
	}else{
		document.body.style.backgroundColor = "#F4EFED";
		document.body.style.color = "black";
		document.getElementById("header").style.backgroundColor = "#E7F289";
		
		var all_divs = document.getElementsByTagName("div");
		 for(i = 0; i < all_divs.length; ++i)
		{
		 all_divs[i].style.backgroundColor = "#F9F0E5";
		}
		
		var all_links = document.getElementsByTagName("a");
		 for(i = 0; i < all_links.length; ++i)
		{
		 all_links[i].style.color = "blue";
		}
		mode_button.value = "Dark mode";
	}
	
	
	e.preventDefault();
}
