
//функция печати
function someFunc(){
calc="dom";
chrome.runtime.sendMessage({greeting:calc,h:"Hello matrix"});
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
var formM = document.getElementById("works-modal-tab-pane-step2").getElementsByTagName('input');
var im = document.getElementById("works-modal-tab-pane-step1").getElementsByTagName('input');
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
  jsbarcode-width="2"\
  jsbarcode-height="30"\
  jsbarcode-fontoptions="bold">\
</svg></div>';
dem.insertBefore(input, dem.firstChild);
JsBarcode("#barcode").init();




 //формирование гарантийника       
 var newWin = window.open("/", "Гарантийный талон Новороссийск");

  newWin.document.clear();
  newWin.document.body.innerHTML = '';
  newWin.document.write('<html>');
  newWin.document.write('<head>');
  newWin.document.write('<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />');
  newWin.document.write('<title>Гарантийный талон</title>');
  newWin.document.write('</head>');
  newWin.document.write('<style type="text/css">');
  newWin.document.write('body {font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;}');
  newWin.document.write('.conteiner {width: 100%;}');
  newWin.document.write('.zagalovok {text-align: center;font-weight: bold;}');
  newWin.document.write('.uslovia {font-size: 12px;}');
  newWin.document.write('.tab {border-collapse: collapse;border: 1px solid #333;width:100%;border-spacing: 2px;border-color: grey; display: table;}');
  newWin.document.write('.tab td, .tab th {border: 1px solid #333;}');
  newWin.document.write('.clear {clear:left;}');
  newWin.document.write('</style>');
  newWin.document.write('<body>');
  newWin.document.write('<div class="conteiner">');
  newWin.document.write('<div class="top" style="font-size: 14px;">');
  newWin.document.write('<div style="width: 50%; float:left;">');
  newWin.document.write('<span style="font-weight: bold; font-size: 18px;">iService</span> – ремонт техники Apple<br>   ');       
  newWin.document.write('www.vk.com/ishopcity_ru   - группа Вконтакте<br>'); 
  newWin.document.write('ishopcity_ru      - Инстаграм<br>');
  newWin.document.write('</div>');
 // newWin.document.write('<div style="float:right; text-align: right; margin-top:-5px; width: 60px; height: 60px; background-image: url(data:image/png;base64,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);">');
 // newWin.document.write('<img src="data:image/png;base64,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" style="width: 60px;"> ');
 // newWin.document.write('<imp src="qr.png">');
 // newWin.document.write('</div>');
  newWin.document.write('<div style="width: 20px; float:right;"></div>');
  newWin.document.write('<div style="float:right; text-align: right;">');
  //------------------ Магазин --------------------------
  // newWin.document.write('г. Новороссийск, ул. Энгельса 71<br>');
  // newWin.document.write('+7 (918) 316-10-10<br>');
  // newWin.document.write('+7 (8617) 63-13-54<br>');
  //-----------------------------------------------------
  newWin.document.write('г. Анапа, ул. Самбурова 239<br>');
  newWin.document.write('+7 (928) 332-61-00<br>');
  newWin.document.write('+7 (86133) 2-05-26<br>');
  //-----------------------------------------------------
  newWin.document.write('</div>');
  newWin.document.write('</div>');
  newWin.document.write('<div class="clear"></div><hr>');
  newWin.document.write('<div class="zagalovok">');
  newWin.document.write('<p>ГАРАНТИЙНЫЙ ТАЛОН НА ВЫПОЛНЕННЫЕ РАБОТЫ<br> по акту №&nbsp;'+akt[0]+'</p>');
  newWin.document.write('</div>');
  newWin.document.write('<div class="uslovia">');
  newWin.document.write('<p>&nbsp;&nbsp;Гарантийный талон действителен только при наличии правильно и четко указанных: модели, серийного номера устройства, наименование выполненной работы, даты выдачи устройства из ремонта, четкой печати сервисного центра, подписи заказчика. Серийный номер и модель устройства должны соответствовать указанным в гарантийном талоне. При нарушении этих условий, а так же, если данные, указанные в гарантийном талоне изменены, стерты или переписаны, талон признается недействительным.');
  newWin.document.write('<br>&nbsp;&nbsp;Сервисный центр предоставляет гарантию исключительно на выполненные работы и замененные детали в ');
  newWin.document.write('течение ____ дней и оставляет за собой право отказать заказчику в проведении гарантийного ремонта в случае если в результате проверки устройства будет установлено, что заявленная заказчиком неисправность не связана с предыдущим ремонтом (ст. 29 «Закон о защите прав потребителей»)<br>');
  newWin.document.write('&nbsp;&nbsp;Услуги гарантийного обслуживания не распространяются на:');
  newWin.document.write('<ol>');
  newWin.document.write('<li>Повреждения вызванные несчастными случаями и техногенными катастрофами, например: нарушения энергоснабжения, молния, пожар, затопление и прочее.</li>');
  newWin.document.write('<li>Повреждение устройства в результате небрежности, неправильной установки/обновления программного обеспечения, использование не в соответствии с инструкциями изготовителя, эксплуатации и транспортировке.</li>');
  newWin.document.write('<li>Повреждения, вызванные вследствие нарушения Клиентом условий и правил изложенных в инструкции по эксплуатации, правил транспортировки, хранения, а так же действий третьих лиц или непреодолимой силы.</li>');
  newWin.document.write('<li>Использование аксессуаров, несовместимых с данным товаром или не имеющих рекомендации производителя.</li>');
  newWin.document.write('<li>Нарушение целостности гарантийных пломб и стикеров</li>');
  newWin.document.write('<li>Аккумуляторные батареи, элементы питания, внешние блоки питания, зарядные устройства и прочие комплектующие.</li>');
  newWin.document.write('<li>Намеренное повреждение товара</li>');
  newWin.document.write('</ol>');
  newWin.document.write('</div>');
  newWin.document.write('</div>');
  newWin.document.write('<div class="zagalovok" style="width: 90%; margin:0 auto;"><p>Данные об устройстве:</p> </div>');
  newWin.document.write('<div class="ustroistvo" style="width: 90%; margin:0 auto;">');
  newWin.document.write('<div style="width:50%; float:left; text-align: left;">IMEI/Серийный номер:&nbsp;'+im[2].value+'</div>');
  newWin.document.write('<div style="width:50%; float:right; text-align: right;">Модель:&nbsp;'+im[3].value+'</div>');
  newWin.document.write('</div>');
  newWin.document.write('<div style="width: 90%; margin:0 auto;">');
  newWin.document.write('<table class="tab" style="margin-top:50px; ">');
  newWin.document.write('<tbody>');
  newWin.document.write('<tr style="text-align:center;">');
  newWin.document.write('<td style="width=20px; text-align:center;" width="10px;">№</td>');
  newWin.document.write('<td>Выполненые работы</td>');
  newWin.document.write('<td style="text-align: center">Цена (руб)</td>');
  newWin.document.write('</tr>');
  //запись выполненых работ
  var b = 0;
  for (var i = 0; i < formM.length-2; i++) {
        b++;
        newWin.document.writeln('<tr>');
        newWin.document.writeln('<td>'+(b)+'</td>');
                newWin.document.writeln('<td>'+formM[i].value+'</td>');
                newWin.document.writeln('<td style="text-align: center">'+formM[i+1].value+'</td>');          
        newWin.document.writeln('</tr>');
        i++;
        
        };

  //________________________________
  newWin.document.write('<tr>');
  newWin.document.write('<td></td>');
  newWin.document.write('<td style="text-align: right">СКИДКА</td>');
  newWin.document.write('<td style="text-align: center">'+skidka+'</td>')
  newWin.document.write('</tr>');
  newWin.document.write('<tr>');
  newWin.document.write('<td></td>');
  newWin.document.write('<td style="text-align: right">ИТОГО</td>');
  newWin.document.write('<td style="text-align: center">'+formM[dd-1].value+'</td>');
  newWin.document.write('</tr>');
  newWin.document.write('</tbody> ');       
  newWin.document.write('</table><br>');
  newWin.document.write('<table class="tab">');
  newWin.document.write('<tbody>');
  newWin.document.write('<tr style="text-align:center;">');
  newWin.document.write('<td >Рекомендации мастера</td>');
  newWin.document.write('</tr>');
  newWin.document.write('<tr>');
  newWin.document.write('<td>&nbsp;</td>');
  newWin.document.write('</tr>');
  newWin.document.write('<tr>');
  newWin.document.write('<td>&nbsp;</td>');
  newWin.document.write('</tr>');
  newWin.document.write('<tr>');
  newWin.document.write('<td>&nbsp;</td>');
  newWin.document.write('</tr>');
  newWin.document.write('</tbody></table>');
  newWin.document.write('</div>');
  newWin.document.write('<p style="font-size: 12px;">С вышеизложенным ознакомлен, к внешнему виду, комплектации и работоспособности оборудования претензий не имею.</p>');
  newWin.document.write('<div style="width: 90%; margin:0 auto;">');
  newWin.document.write('<div style="width: 50%; float:left;">');
  newWin.document.write('<p>Закачик________________</p>');
  newWin.document.write('</div>');
  newWin.document.write('<div style="width: 50%; float:right; text-align: right;">');
  newWin.document.write('<p>Исполнитель_______________</p><br>');
  newWin.document.write('<p>Дата выдачи &nbsp;'+dt+'</p>');
  newWin.document.write('</div>');
  newWin.document.write('<div style="clear:left;"></div>');
  newWin.document.write('<div id="barQR"></div>');
  newWin.document.write('</div></body></html>');
//__________  



  // создать div в документе нового окна
   var div = newWin.document.createElement('div');
      var qr = newWin.document.getElementById("barQR");
        div.innerHTML = document.getElementById("bar").innerHTML;
        // вставить первым элементом в body нового окна
        qr.insertBefore(div, qr.firstChild);

//печать   
newWin.print(); 
newWin.close();

                 
                    

};

//
document.getElementsByClassName("btn btn-danger pull-left")[0].onclick = someFunc;
