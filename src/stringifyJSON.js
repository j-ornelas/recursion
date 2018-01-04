// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if (typeof obj === 'string'){
		return '"' + obj + '"';
	} else if (Array.isArray(obj)){
	  var newArray = obj.slice(0);
	  var stringArray = [];
      for (i=0;i<newArray.length;i++){
        stringArray.push(stringifyJSON(newArray[i]));
      }
      return '[' + stringArray + ']';
	} else {
		return '' + obj  + '';
	}
};