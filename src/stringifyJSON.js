// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	// if obj is a string...
    if (typeof obj === 'string'){
		return '"' + obj + '"';
    // if obj is null...
	} else if (obj === null){	
		return 'null'	
	// if obj is an Array...
	} else if (Array.isArray(obj)){
	    var stringArray = [];
	    for (i=0;i<obj.length;i++){
	      stringArray.push(stringifyJSON(obj[i]));
	    }
	    return '[' + stringArray + ']';
	// if obj is a JS object...
	} else if (typeof obj === 'object'){
  	  if (Object.keys(obj).length === 0){
  	    return '{}';
  	  } else {
  	    var stringObj = "{";
  	    for (var key in obj){
  	      if (typeof key === 'function' || typeof obj[key] === 'function' ||
  	      	typeof key === undefined || typeof obj[key] === undefined){
  	      	return '{}'
  	      } else {
     	    stringObj += stringifyJSON(key);
  	        stringObj += ':';
  	        stringObj += stringifyJSON(obj[key]);
  	        stringObj += ",";
  	      }
  	    }
  	  }
	return stringObj.substring(0, stringObj.length - 1) + "}";
	// if obj is anything else
	} else {
		return '' + obj  + '';
	}
};