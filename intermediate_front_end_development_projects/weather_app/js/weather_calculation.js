$( document ).ready(function() 
	{
		
		 if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
		x.innerHTML="Geolocation is not supported by this browser.";}
    


$("getWeatherReport").click(function(){
		var url = "https://fcc-weather-api.glitch.me/api/current" + latitude +"&"+ longitude;
	$.getJSON(url,function(data){
		alert("Hello");
      var items=[];
	   $.each( data, function( key, val ) {
    items.push( key,val );
  });
   
	});
});
    
});

    var latitude = 0;
	var longitude = 0;
	 function showPosition(position)
    {
     latitude = position.coords.latitude;
     longitude = position.coords.longitude;  
    }
