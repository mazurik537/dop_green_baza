function akt_new () {
//получение номера акта
var ren = document.getElementsByClassName('modal-title ng-binding');
var ak = ren[0].innerHTML;
var akt = ak.match(/[А-Я][0-9]-\d\d\d\d+/);
var akt_sh = ak.match(/[0-9]-\d\d\d\d+/);
//________




//формирование даты
var now = new Date();
var dt = now.getDate()+'.'+(now.getMonth()+1)+'.'+now.getFullYear()+' '+now.getHours()+':'+now.getMinutes();



//поиск всех input
//выполненые работы
var formM = document.getElementById("works-modal-tab-pane-step2").getElementsByTagName('input'); 
//клиент
var client = document.getElementById("works-modal-tab-pane-step-client").getElementsByTagName('input');
//страница устройства
var im = document.getElementById("works-modal-tab-pane-step1").getElementsByTagName('input');
var opis = document.getElementById("works-modal-tab-pane-step1").getElementsByTagName('textarea');


var dd = formM.length-1;
var itogo = Number(formM[dd-1].value);


// определение суммы скидки
var step = document.getElementById("works-modal-tab-pane-step2").innerHTML;
var procent = step.match(/[0-9][0-9]+ руб./);
 if (!procent) {
                var skidka = "0";          
                          } else {
                            var skidka = procent[0].substring(0, procent[0].length - 5);
                          };
//____________

//-------штрих код-------
var dem = document.getElementById("bar");
var input = document.createElement("div");
dem.innerHTML = "";
input.innerHTML = '<div id="bar" style="display:block;">\
<svg id="barcode"\
  jsbarcode-format="auto"\
  jsbarcode-value='+akt_sh+'\
  jsbarcode-textmargin="0"\
  jsbarcode-width="1"\
  jsbarcode-height="30"\
  jsbarcode-fontoptions="bold">\
  jsbarcode-fontsSize="8"\
</svg></div>';
dem.insertBefore(input, dem.firstChild);
JsBarcode("#barcode").init();


var newAkt = window.open("about:blank", "Акт Новороссийск");

newAkt.document.write('<html>\
  <head>\
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />\
    <title>Акт приемки-выдачи '+akt[0]+'</title>\
  </head>\
  <body>\
<style>\
* , * :before, * :after {\
    -webkit-box-sizing: border-box;\
    -moz-box-sizing: border-box;\
    box-sizing: border-box;\
}\
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {\
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\
    font-weight: 500;\
    line-height: 1.1;\
    color: inherit;\
    margin: 8px 0 10px;\
    font-size: 17px;\
}\
html, body {\
	margin: 0 !important;\
	padding: 0 !important;\
	height: 100%;\
}\
body, .container {\
	/* отменяем сброс цветовых настроек браузером Crome и Safari */\
	-webkit-print-color-adjust: exact;\
}\
body {\
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\
	padding: 30px;\
    font-size: 13px;\
}\
@media print {\
	body {\
		padding: 0 !important;\
	}\
	@page {\
		size: 210mm 297mm;\
		margin: 0cm !important;\
	}\
}\
.container {\
	display: -webkit-box;\
    display: -webkit-flex;\
    display: -ms-flexbox;\
	display: flex;\
    -webkit-flex-flow: column nowrap;\
    -ms-flex-flow: column nowrap;\
    flex-flow: column nowrap;\
	height: 100%;\
	font-size: 14px;\
\
/*\
	-webkit-align-content: space-between;\
    align-content: space-between;\
\
    -webkit-align-items: stretch;\
	align-items: stretch;\
\
	-webkit-justify-content: space-between;\
	justify-content: space-between;\
*/\
\
}\
.clear {\
  clear: both;\
}\
.table td {\
	border-top: 1px solid #dddddd;\
	line-height: 1.428571429;\
	vertical-align: top;\
	font-size: 10px;\
}\
\
.pagebreak {\
  page-break-after: always;\
}\
\
#print-logotype {\
  float: right;\
  width: 200px;\
  height: 75px;\
  margin-bottom: 40px;\
}\
\
i {\
  color: #999 !important;\
  font-weight: normal;\
  font-style: normal;\
  font-size: 90%;\
}\
\
.information {\
  color: #555 !important;\
  font-size: 8px;\
}\
\
.information b {\
  color: #222 !important;\
}\
\
ul, ol {\
  padding-left: 1.5em;\
}\
\
.adds_info {\
  color: #222 !important;\
}\
\
.row {\
	margin-left: -15px;\
	margin-right: -15px;\
	clear: both;\
}\
.col-xs-7 {\
	float: left;\
	width: 58%;\
}\
.col-xs-5 {\
	float: left;\
	width: 42%;	\
}\
.col-xs-6 {\
	float: left;\
	width: 50%;\
}\
.col-xs-4 {\
	float: left;\
	width: 33.33333333333333%;\
}\
.col {\
	position: relative;\
	min-height: 1px;\
	padding-left: 15px;\
	padding-right: 15px;\
}\
.text-right {\
	text-align: right;\
}\
.clear {\
	clear: both;\
}\
</style>\
    <div class="container">\
      <div class="row clear">\
        <div class="col col-xs-7">\
          <h4>Акт приемки-выдачи № '+akt[0]+'</h4>\
          <table class="table table-condensed">\
            <tbody>\
              <tr>\
                <td><i>дата приема</i> <span class="date">'+im[0].value+'</span></td>\
              </tr>\
                              <tr>\
                  <td><i>заказчик:</i>'+client[0].value+'&nbsp;'+client[1].value+'</td>\
                </tr>\
                                            <tr>\
                  <td><i>Устройство</i> '+im[3].value+'</td>\
                </tr>\
                                <tr>\
                  <td><i>Серийный номер</i> '+im[2].value+'</td>\
                </tr>\
                <tr>\
                  <td><i>Код безопасности</i> '+im[9].value+'</td>\
                </tr>\
                                                          <tr>\
                <td style="font-size:9px;"><i>Описание неисправности</i> '+opis[0].value+'</td>\
              </tr>\
                                                        <tr>\
                <td><i>Механические повреждения</i> '+opis[1].value+'</td>\
              </tr>\
                            <tr>\
                <td><i>Ориентировочный срок выполнения (дни)</i> '+im[8].value+'</td>\
              </tr>\
              <tr>\
                <td><i>Ориентировочная стоимость</i> '+im[7].value+' руб.</td>\
              </tr>\
                          </tbody>\
          </table>\
        </div>\
        <div id="barQR"></div>');

if (formM[0].value!=0) {
  newAkt.document.write('   \<div class="col col-xs-5">\
\
                            <tr>\
    <h4>Выполненные работы</h4>\
                              <table class="table table-condensed">\
                             <tbody>');
  var b = 0;
  for (var i = 0; i < formM.length-2; i++) {
        b++;
        newAkt.document.writeln('<tr>');
        //newAkt.document.writeln('<td>'+(b)+'</td>');
                newAkt.document.writeln('<td>'+formM[i].value+'</td>');
                newAkt.document.writeln('<td style="text-align: center">'+formM[i+1].value+'</td>');          
        newAkt.document.writeln('</tr>');
        i++;
        
        };

   newAkt.document.write('  </tr>\
                              </tbody>\
                               <tfoot>\
                            \
                                          <tr>\
                <td class="text-right">\
                   <span class="pull-left">( Скидка: '+skidka+'&nbsp;руб. )</span>                   К оплате:\
                </td>\
                <td>'+formM[dd-1].value+'&nbsp;руб.</td>\
              </tr>\
                          </tfoot>\
          </table>\
\
\
                  </div>\
      ');
 }
 newAkt.document.write(' </div><div class="information clear">\
	      <div>\
	      	\
	    <h7>Пожалуйста ознакомьтесь с условиями ремонта и сдачи устройства в сервис.</h7>\
	    <p>Сохраняйте данный документ до окончания работ. Передайте данный документ при получении техники.</p>\
\
        <p class="adds_info">\
			<ol>\
				<li>Сервисный центр не несет ответственности за возможную потерю данных в памяти устройства, а так же за оставление SIM и FLASH карты. Заблаговременно примите меры по резервированию информации.</li>\
				<li>Заказчик принимает на себя риск возможной или полной утраты работоспособности устройства в процессе ремонта в случае грубых нарушений пользователем условий эксплуатации, наличие следов попадания токопроводящей жидкости(коррозии), либо механических повреждений.</li>\
				<li>На восстановленное после попадания жидкости устройство гарантия не распространяется и не продлевается.</li>\
				<li>Сроки хранения аппарата 90 дней с даты готовности. После данного срока аппарат утилизируется и претензии по нему не принимаются.</li>\
				<li>В случае утери квитанции, устройство выдается по предъявлению паспорта на имя заказчика.</li>\
				<li>Ремонт не превышающий «Предварительную стоимость ремонта» производится без дополнительного согласования с Заказчиком.</li>\
				<li>Любые скрытые неисправности, выявленные в процессе диагностики либо ремонта ПОЯВИЛИСЬ ПЕРЕД СДАЧЕЙ УСТРОЙСТВА В СЕРВИС.</li>\
				<li>После сдачи устройства в сервис ГАРАНТИЯ ПРОИЗВОДИТЕЛЯ теряется.</li>\
				<li>Если заказчик сам указывает на конкретные виды работ, ремонт производится только в отношении заявленных неисправностей.</li>\
				<li>Сервисный центр не несёт ответственности за привязанное устройство к Apple ID после замены/обновления iOS</li>\
			</ol>\
        </p>\
\
\
        <div class="row">\
          <div class="col col-xs-6">\
            <p style="border-bottom: 1px solid #777; margin: 10px 40px 10px;">Заказчик</p>\
          </div>\
          <div class="col col-xs-6">\
            <p style="border-bottom: 1px solid #777; margin: 10px 40px 10px;">Исполнитель</p>\
          </div>\
        </div>\
\
        <p class="text-center"></p>\
        <div class="row">\
          <div class="col col-xs-7">\
            Специализированный сервисный центр техники Apple «iService»\
          </div>\
          <div class="col col-xs-4 text-right">\
  г. Анапа, ул. Самбурова 239<br>\
  +7 (928) 332-61-00<br>\
  +7 (86133) 332-05-26<br>\
\
\
    </div></div></div></div>\
<br>\
<hr style="width:100%;">\
\
    <!----->\
     <div class="container">\
      <div class="row clear">\
        <div class="col col-xs-7">\
          <h4>Акт приемки-выдачи № '+akt[0]+'</h4>\
          <table class="table table-condensed">\
            <tbody>\
              <tr>\
                <td><i>дата приема</i> <span class="date">'+im[0].value+'</span></td>\
              </tr>\
                              <tr>\
                  <td><i>заказчик:</i>'+client[0].value+'&nbsp;'+client[1].value+'</td>\
                </tr>\
                                            <tr>\
                  <td><i>Устройство</i> '+im[3].value+'</td>\
                </tr>\
                                <tr>\
                  <td><i>Серийный номер</i> '+im[2].value+'</td>\
                </tr>\
                <tr>\
                  <td><i>Код безопасности</i> '+im[9].value+'</td>\
                </tr>\
                                                          <tr>\
                <td style="font-size:9px;"><i>Описание неисправности</i> '+opis[0].value+'</td>\
              </tr>\
                                                        <tr>\
                <td><i>Механические повреждения</i> '+opis[1].value+'</td>\
              </tr>\
                            <tr>\
                <td><i>Ориентировочный срок выполнения (дни)</i> '+im[8].value+'</td>\
              </tr>\
              <tr>\
                <td><i>Ориентировочная стоимость</i> '+im[7].value+' руб.</td>\
              </tr>\
                          </tbody>\
          </table>\
        </div>\
');
if (formM[0].value!=0) {
  newAkt.document.write('   \<div class="col col-xs-5">\
\
                            <tr>\
    <h4>Выполненные работы</h4>\
                              <table class="table table-condensed">\
                             <tbody>');
  var b = 0;
  for (var i = 0; i < formM.length-2; i++) {
        b++;
        newAkt.document.writeln('<tr>');
        //newAkt.document.writeln('<td>'+(b)+'</td>');
                newAkt.document.writeln('<td>'+formM[i].value+'</td>');
                newAkt.document.writeln('<td style="text-align: center">'+formM[i+1].value+'</td>');          
        newAkt.document.writeln('</tr>');
        i++;
        
        };

   newAkt.document.write('  </tr>\
                              </tbody>\
                               <tfoot>\
                                          <tr>\
                <td class="text-right">\
                   <span class="pull-left">( Скидка: '+skidka+'&nbsp;руб. )</span>                   К оплате:\
                </td>\
                <td>'+formM[dd-1].value+'&nbsp;руб.</td>\
              </tr>\
                          </tfoot>\
          </table>\
\
\
                  </div>\
      ');
 }
 newAkt.document.write(' </div><div class="information clear">\
        <div>\
          \
      <h7>Пожалуйста ознакомьтесь с условиями ремонта и сдачи устройства в сервис.</h7>\
      <p>Сохраняйте данный документ до окончания работ. Передайте данный документ при получении техники.</p>\
\
        <p class="adds_info">\
      <ol>\
        <li>Сервисный центр не несет ответственности за возможную потерю данных в памяти устройства, а так же за оставление SIM и FLASH карты. Заблаговременно примите меры по резервированию информации.</li>\
        <li>Заказчик принимает на себя риск возможной или полной утраты работоспособности устройства в процессе ремонта в случае грубых нарушений пользователем условий эксплуатации, наличие следов попадания токопроводящей жидкости(коррозии), либо механических повреждений.</li>\
        <li>На восстановленное после попадания жидкости устройство гарантия не распространяется и не продлевается.</li>\
        <li>Сроки хранения аппарата 90 дней с даты готовности. После данного срока аппарат утилизируется и претензии по нему не принимаются.</li>\
        <li>В случае утери квитанции, устройство выдается по предъявлению паспорта на имя заказчика.</li>\
        <li>Ремонт не превышающий «Предварительную стоимость ремонта» производится без дополнительного согласования с Заказчиком.</li>\
        <li>Любые скрытые неисправности, выявленные в процессе диагностики либо ремонта ПОЯВИЛИСЬ ПЕРЕД СДАЧЕЙ УСТРОЙСТВА В СЕРВИС.</li>\
        <li>После сдачи устройства в сервис ГАРАНТИЯ ПРОИЗВОДИТЕЛЯ теряется.</li>\
        <li>Если заказчик сам указывает на конкретные виды работ, ремонт производится только в отношении заявленных неисправностей.</li>\
        <li>Сервисный центр не несёт ответственности за привязанное устройство к Apple ID после замены/обновления iOS</li>\
      </ol>\
        </p>\
\
\
        <div class="row">\
          <div class="col col-xs-6">\
            <p style="border-bottom: 1px solid #777; margin: 10px 40px 10px;">Заказчик</p>\
          </div>\
          <div class="col col-xs-6">\
            <p style="border-bottom: 1px solid #777; margin: 10px 40px 10px;">Исполнитель</p>\
          </div>\
        </div>\
\
        <p class="text-center"></p>\
        <div class="row">\
          <div class="col col-xs-7">\
            Специализированный сервисный центр техники Apple «iService»\
          </div>\
          <div class="col col-xs-4 text-right">\
   г. Анапа, ул. Самбурова 239<br>\
  +7 (928) 332-61-00<br>\
  +7 (86133) 332-05-26<br>\
\
\
    </div>\
    <div id="barQR2"></div>\
  </body>\
</html>\
');


// создать div в документе нового окна
   var div = newAkt.document.createElement('div');
    var div2 = newAkt.document.createElement('div');
      var qr1 = newAkt.document.getElementById("barQR");
      var qr2 = newAkt.document.getElementById("barQR2");
        div.innerHTML = document.getElementById("bar").innerHTML;
        div2.innerHTML = document.getElementById("bar").innerHTML;
        // вставить первым элементом в body нового окна
        qr1.insertBefore(div, qr1.firstChild);
        qr2.insertBefore(div2, qr2.firstChild);

//печать   
newAkt.print(); 
newAkt.close();

}








document.getElementById("akt_new").onclick = akt_new;

