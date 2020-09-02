
function function_1(vehicleType){
	//document.getElementById("para2").innerHTML = "it's my FORD car";
	myVehicleType = vehicleType;
	return myVehicleType;
}

document.getElementById("car").innerHTML = "it's my FORD car";
document.getElementById("para2").innerHTML = function_1('Endeavors');
