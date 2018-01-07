// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return JSON.stringify(document.getElementsByClassName(className));
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var matches =  [];
  var check = function(node){
    for (var i=0;i<node.childNodes.length;i++){
    	if (node.childNodes[i].childNodes.length>0){
    		check(node.childNodes[i]);
    	}
    	if (node.childNodes[i].getAttribute && node.childNodes[i].getAttribute('class') 
    		&& node.childNodes[i].getAttribute('class').split(" ").indexOf(className) >= 0){
    		matches.unshift(node.childNodes[i])
    	}
    }
  }
  check(document)
  return matches
};