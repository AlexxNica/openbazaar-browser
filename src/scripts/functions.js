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
	console.log('apiStore is being called');
	console.log('prop_name is ' + prop_name);
	console.log('thing being stored is ', data)
	OBB.controller.api_returns[prop_name] = data;
	console.log('finshed storing the data');
	console.log('OBB.controller.api_returns[\'' + prop_name + '\'] is:');
	console.log(OBB.controller.api_returns[prop_name]);
};