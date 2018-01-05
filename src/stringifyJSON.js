// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    if (typeof obj === 'string'){
		return '"' + obj + '"';
	} else if (obj === null){	
		return 'null'	
	} else if (Array.isArray(obj)){
	    var stringArray = [];
	    for (i=0;i<obj.length;i++){
	      stringArray.push(stringifyJSON(obj[i]));
	    }
	    return '[' + stringArray + ']';
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
	} else {
		return '' + obj  + '';
	}
};