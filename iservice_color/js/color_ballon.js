var samburova_service;
window.setTimeout(del,2000);
function del(){
// calc="dom";
// chrome.runtime.sendMessage({greeting:calc});

// (function (){
//  chrome.runtime.sendMessage({
//  giveMeValue: true
//  }, function (response) {
// localStorage["color"] = response.value;
// console.log(response.value);
//  });
// })();

var port = chrome.runtime.connect({name: "knockknock"});
port.postMessage({joke: "Knock knock"});
port.onMessage.addListener(function(msg) {
  if (msg.question == "ok")
    //port.postMessage({answer: localStorage["color"]});
  samburova_service = msg.h;
  
});










// var now = new Date();
// var dt = now.getDate()+'.'+(now.getMonth()+1)+'.'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes();
// var im = document.getElementById("works-modal-tab-pane-step1").getElementsByTagName('input');
// im[1].value = dt;
// // скрыть магазин
//  function ElemClass(from,text) {
  // var i=0; 

  //  var ren = document.getElementsByClassName('text-right ng-binding');
  //   for (i; i<ren.length; i++) { 
  //      var str = ren[i].innerHTML;

  //      if (str.match (new RegExp (from))) {
          
  //        ren[i].parentNode.style.display = text;
  //                  };
  // };

//  };


// //условия скрытия магазина

//    if (myNovoross.checked) {
//    ElemClass("А4","none");
//      } else {
//      ElemClass("А4","table-row");
//        };

//    if (myKrim.checked) {
//    ElemClass("А3","none");
//      } else {
//      ElemClass("А3","table-row");
//        };

//    if (myNovoross.checked) {
//    ElemClass("А1","none");
//      } else {
//      ElemClass("А1","table-row");
//        };




    var i=0; 

    var ren = document.getElementsByClassName("label label-success ng-hide");
    var dem = document.getElementsByClassName("label label-success");
    for (i; i<dem.length; i++) { 
      var str = dem[i].innerHTML;

        if (str.match (new RegExp ("Готов"))) {
          dem[i].parentNode.parentNode.style.backgroundColor = "#FFF9C4";
          //dem[i].parentNode.parentNode.style.color = "#ffffff";
              
        }
    };


    var i=0;
     for (i; i<ren.length; i++) { 
      var str = ren[i].innerHTML;

        if (str.match (new RegExp ("Готов"))) {
          //dem[i].parentNode.parentNode.style.backgroundColor = "#93D400";
          //ren[i].style.backgroundColor = "#ff00ff";
          ren[i].parentNode.parentNode.style.backgroundColor = "white";
           
    }
    };
//___________________avtorizacia______________________

 var i=0; 

    var avto = document.getElementsByClassName("ng-binding");
    for (i; i<avto .length; i++) { 
      var str = avto[i].innerHTML;

        if (str.match (new RegExp ("авторизованный|#avto|СЦ|mail|почта|сервисный"))) {

          var dB = avto[i].parentNode.innerHTML;
           var dateT = dB.match(/(\d+).(\d+).(\d+)/, '$3/$2/$1');
           var gd = new Date (dateT[3]+','+dateT[2]+','+dateT[1]);
            var gt = Math.floor((new Date().getTime() - gd.getTime())/1000/60/60/24);

          //выделение боковой линии
          avto[i].style.border = "10px solid #ff0000";
           avto[i].style.borderLeft = "none";
            avto[i].style.borderBottom = "none";
              avto[i].style.borderTop = "none";

              //создание tooltip
              avto[i].setAttribute("data-balloon","в Авторизации "+gt+" дн");//всплывающея подсказка
              avto[i].setAttribute("data-balloon-pos","right"); 



        };
    };
//_____________________________________________________________

//выделение цветом
    var i=0; 

    var ren = document.getElementsByClassName('text-right ng-binding');
     for (i; i<ren.length; i++) { 
        var str = ren[i].innerHTML;
          var dB = ren[i].parentNode.innerHTML;
           var dateT = dB.match(/(\d+).(\d+).(\d+)/, '$3/$2/$1');
           var gd = new Date (dateT[3]+','+dateT[2]+','+dateT[1]);
            var gt = Math.floor((new Date().getTime() - gd.getTime())/1000/60/60/24);


        if (str.match (new RegExp ("А3"))) {
          
          ren[i].style.backgroundColor = "#B3E5FC";
          ren[i].setAttribute("data-balloon","Магазин Крымская: "+gt+" дн");//всплывающея подсказка
          ren[i].setAttribute("data-balloon-pos","left"); 
                    };

        if (str.match (new RegExp ("А2"))) {
          
          ren[i].style.backgroundColor = "#C8E6C9";
          ren[i].setAttribute("data-balloon","Магазин Самбурова: "+gt+" дн");//всплывающея подсказка
          ren[i].setAttribute("data-balloon-pos","left");
                    };

        if (str.match (new RegExp ("А4"))) {
          
          ren[i].style.backgroundColor = "#F3E5F5";
          ren[i].setAttribute("data-balloon","Магазин Новороссийск: "+gt+" дн");//всплывающея подсказка
          ren[i].setAttribute("data-balloon-pos","left");
                    };

        if (str.match (new RegExp ("А1"))) {
          
          ren[i].style.backgroundColor = samburova_service;
          //ren[i].style.color = "#ffffff";
          ren[i].setAttribute("data-balloon","Сервис Самбурова: "+gt+" дн");//всплывающея подсказка
          ren[i].setAttribute("data-balloon-pos","left");
                    };


    };


       window.setTimeout(del,2000);
};
