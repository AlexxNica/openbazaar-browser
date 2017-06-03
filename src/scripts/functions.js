OBB.functions = {};
OBB.functions.titleCase = function(str) {
	var convertToArray = str.toLowerCase().split(" ");
	var result = convertToArray.map(function(val){
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
	});
	return result.join(" ");
};

OBB.functions.apiStore = function( data, prop_name ) {
	// store data in OBB.controller.api_returns['prop_name']
	OBB.controller.api_returns[prop_name] = data;
};