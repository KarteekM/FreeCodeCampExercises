$( document ).ready(function() 
	{
		
		 if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
		x.innerHTML="Geolocation is not supported by this browser.";}
    

    
});

    var latitude = 0;
	var longitude = 0;
	 function showPosition(position)
    {
     latitude = position.coords.latitude;
     longitude = position.coords.longitude;  
    }
var url = "https://fcc-weather-api.glitch.me/api/current" + latitude +"&"+ longitude;
$("getWeatherReport").click(function(){
	$.get(url,function(data){
  
   
	});
});