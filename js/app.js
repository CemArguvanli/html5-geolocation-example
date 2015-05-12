window.onload = function(){

	if (navigator.geolocation) {
		//console.log('Geolocation supported');
		navigator.geolocation.getCurrentPosition(function(pos){
			var latitude = pos.coords.latitude;
			var longitude = pos.coords.longitude;
			document.getElementById('lat').innerHTML = latitude + '&deg';
			document.getElementById('long').innerHTML = longitude + '&deg';
			document.getElementById('accur').innerHTML = pos.coords.accuracy + ' meters';
		});

	}else{
		//console.log('Geolocation not supported');
		document.getElementById('location').innerHTML = "Geolocation not supported";
	}
}