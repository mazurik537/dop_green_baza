//отслеживание нажатия сочетания клавишь
//номер 91 = cmd / номер 70 = F
var isCtrl = false;
document.onkeyup=function(e){ if(e.which == 91) isCtrl=false; }
document.onkeydown=function(e) {
    if(e.which == 91) isCtrl=true;
    if(e.which == 70 && isCtrl === true) {
        
        scrollToElement('poisk'); 
        poisk.focus();
        return false;
    }
  
};

function scrollToElement(theElement) {
if (typeof theElement === "string") theElement = document.getElementById(theElement);

    var selectedPosX = 0;
    var selectedPosY = 0;

    while (theElement != null) {
        selectedPosX += theElement.offsetLeft;
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }

    window.scrollTo(selectedPosX, selectedPosY);
}

//---------------------------------------------------------------

//добавление кнопки top
  var topVS = document.createElement('div');
      topVS.id = "top";
      document.body.insertBefore(topVS, document.body.firstChild);




function avtorizacia () {
  //------------------------ кнопки авторизации ------------------
// var fl = document.getElementById("worksControllerElement");
//     fl.style.float = "left";


 var i=0; 

var dem = document.getElementById("tab-pane-works");
 
   
    var avto = document.getElementsByClassName("table table-bordered table-hover service-works_table")[0].getElementsByClassName("ng-binding");
    for (i; i<avto .length; i++) { 
      var str = avto[i].innerHTML;
      var input = document.createElement("div");
        if (str.match (new RegExp ("авторизованный|#avto|СЦ"))) {
          var dB = avto[i].parentNode.innerHTML;
           var dateT = dB.match(/(\d+).(\d+).(\d+)/, '$3/$2/$1');
           var gd = new Date (dateT[3]+','+dateT[2]+','+dateT[1]);
            var gt = Math.floor((new Date().getTime() - gd.getTime())/1000/60/60/24);
              //получение номера акта
             var akt = dB.match(/[А-Я][0-9]-\d\d\d\d+/);
          
              input.innerHTML = '<a href="#'+akt[0]+'" style="color: white;"><button class="btn btn-danger pull-left" id="avotriz" style="margin-right: 5px; margin-top:5px; margin-bottom:5px;">'+akt[0]+" [ "+gt+" дн ]"+'</button></a>';
              dem.insertBefore(input, dem.firstChild);
                                                                                  };
                                     };

var txt = document.createElement("div");
  txt.innerHTML = '<h5>Устройства находящиеся в авторизации</h5>';
              dem.insertBefore(txt, dem.firstChild);



var i=0; 

    var avto = document.getElementsByClassName("ng-binding");
    for (i; i<avto .length; i++) { 
      var str = avto[i].innerHTML;

        if (str.match (new RegExp ("авторизованный|#avto|СЦ|mail|почта|сервисный"))) {

          var dB = avto[i].parentNode.innerHTML;
           var dateT = dB.match(/(\d+).(\d+).(\d+)/, '$3/$2/$1');
           var gd = new Date (dateT[3]+','+dateT[2]+','+dateT[1]);
            var gt = Math.floor((new Date().getTime() - gd.getTime())/1000/60/60/24);

            //получение номера акта
             var akt = dB.match(/[А-Я][0-9]-\d\d\d\d+/);
             avto[i].id = akt[0];

          

        };
    };
 clearTimeout(timerId);

//-------------------------------------
  };

var timerId = setTimeout(avtorizacia, 4000);






//дополнительный функционал
// var dem = document.getElementById("tab-pane-works");
// var input = document.createElement("div");
// input.innerHTML = ' <form><p>Скрыть магазин</p><p><input type="checkbox" name="display" id="myNovoross"> Новороссийск <input type="checkbox" name="display" id="myKrim"> Крымская</p></form>';
// dem.insertBefore(input, dem.firstChild);


// печать гарантийного талона

// var dem = document.getElementById("works-modal-tab-pane-step2");
// var input = document.createElement("div");
// input.innerHTML = ' <button class="btn btn-primary" id="garant">Гарантийный талон</button>';
// dem.insertBefore(input, dem.firstChild);


//создание кнопки
var dem = document.getElementById("works-modal-tab-pane-print");
var input = document.createElement("div");
input.innerHTML = '<p> <button class="btn btn-danger pull-left" id="garant" style="margin-right: 10px;">Гарантийный талон</button></p>\
 <div id ="bar" style="display:none;"></div>\
<button class="btn btn-primary pull-right" id="akt_new">Распечатать АКТ приемки-выдачи</button>';
dem.insertBefore(input, dem.firstChild);


var printT = document.getElementById("works-modal-tab-pane-print").getElementsByTagName('a');
printT[0].style.display="none"

//JsBarcode("#barcode").init();







