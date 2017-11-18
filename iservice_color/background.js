// var d;
// //прием сообщиеня и запись его в хранилище
// chrome.runtime.onMessage.addListener(

//    function(request, sender, sendResponse) {
//    	if (request.greeting=="dom") {
//    		d = localStorage["color"];
//   	tt();		
// }
//   });



// (function () {
// 	var samburova = localStorage["color"];

//  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//  if (request && request.giveMeValue) {
//  			sendResponse({ value: samburova });
// 									 }
//  																			 });
//  return value: samburova;
// })();



// function tt (){
//  var samburova = d;
//  console.log(samburova);
//  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//  if (request && request.giveMeValue) {
//  sendResponse({
//  value: samburova
//  });
//  }
//  });
// console.log(samburova);
// };




chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "knockknock");
  port.onMessage.addListener(function(msg) {
    if (msg.joke == "Knock knock")
      port.postMessage({question: "ok",h:localStorage["color"]});
  });
});

