window.setTimeout(del,2000);
function del(){


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
          //console.log(i);     
        }
    };


    var i=0;
     for (i; i<ren.length; i++) { 
      var str = ren[i].innerHTML;

        if (str.match (new RegExp ("Готов"))) {
          //dem[i].parentNode.parentNode.style.backgroundColor = "#93D400";
          //ren[i].style.backgroundColor = "#ff00ff";
          ren[i].parentNode.parentNode.style.backgroundColor = "white";
          //console.log(i);     
    }
    };


    var i=0; 

    var ren = document.getElementsByClassName('text-right ng-binding');
     for (i; i<ren.length; i++) { 
        var str = ren[i].innerHTML;

        if (str.match (new RegExp ("А3"))) {
          
          ren[i].style.backgroundColor = "#B3E5FC";
                    };

        if (str.match (new RegExp ("А2"))) {
          
          ren[i].style.backgroundColor = "#C8E6C9";
                    };
        if (str.match (new RegExp ("А4"))) {
          
          ren[i].style.backgroundColor = "#F3E5F5";
                    };


    };

        window.setTimeout(del,2000);
};


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
input.innerHTML = '<p> <button class="btn btn-primary garant" id="garant">Гарантийный талон</button> <div id="qrcode"></div><script type="text/javascript" src="qrcode.js"></script></p>';
dem.insertBefore(input, dem.firstChild);
//поиск всех input
var formM = document.getElementById("works-modal-tab-pane-step2").getElementsByTagName('input');
var im = document.getElementById("works-modal-tab-pane-step1").getElementsByTagName('input');

//создание даты
var now = new Date();
var dt = now.getDate()+'.'+now.getMonth()+'.'+now.getFullYear();




// var qrcode = new QRCode(document.getElementById("qrcode"), {
//   text: "89186464800",
//   width: 128,
//   height: 128,
//   colorDark : "#000000",
//   colorLight : "#ffffff",
//   correctLevel : QRCode.CorrectLevel.H
// });










 function someFunc(){

    var dd = formM.length-1;


//получение номера акта
var ren = document.getElementsByClassName('modal-title ng-binding');
var ak = ren[0].innerHTML;
var akt = ak.match(/[А-Я][0-9]-\d\d\d\d+/);


        
  var newWin = window.open("about:blank", "Apple id");
  newWin.document.write('<html>');
  newWin.document.write('<head>');
  newWin.document.write('<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />');
  newWin.document.write('<title>Гарантийный талон</title>');
  newWin.document.write('<script type="text/javascript" src="qrcode.js"></script>');
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
 // newWin.document.write('<img id="img_preview"');
  //newWin.document.write('<div id="qrcode"></div>');
 // newWin.document.write('<div style="float:right; text-align: right; margin-top:-5px; width: 60px; height: 60px; background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAgAElEQVR4Xu2dz3kUyRLEBwsAS/Q82JUFAic4sBd5gPBAOrCHdYL1YJEHwhKQBbyv5nvzPhDLdP+yKqozZ2IuHMjOiYyMCvWfyuln3759+7bzxwyYATNQgIFnNqwCXTJEM2AG9gzYsCwEM2AGyjBgwyrTKgM1A2bAhmUNmAEzUIYBG1aZVhmoGTADNixrwAyYgTIM2LDKtMpAzYAZsGFZA2bADJRhwIZVplUGagbMgA3LGjADZqAMAzasMq0yUDNgBmxY1oAZMANlGLBhlWmVgZoBM2DDsgbMgBkow4ANq0yrDNQMmAEbljVgBsxAGQZsWGVaZaBmwAzYsKwBM2AGyjBgwyrTKgM1A2bAhmUNmAEzUIYBG1aZVhmoGTADNixrwAyYgTIM2LDKtMpAzYAZmGJYf//99+7u7m738PCw+/r1q1mHDPz++++7d+/e7dq/GT+j+zu73tH4M/ZIiWlmv+SG1cTw+vVrJV9nk/uff/5JZ1rK/s6oV4n/bIT5v0Jn9EtuWM197+/vz613knp/++233adPnyS5o0mV/Z1RrxJ/lNOqx83ol9ywnj17VpX/dLhfvHix+/LlSypcyv7OqFeJP1WjJoCZ0i/1q+otiLFK+fbt29iEndnU/VXXq8bfSW+5w+X9smHV0oRaEJQN9YJX16vGT/msHi/vlw2rlkTUgqBsqBe8ul41fspn9Xh5v2xYtSSiFgRlQ73g1fWq8VM+q8fL+2XDqiURtSAIG21P3cuXL8khOFZdrw0Lt+ToAfJ+2bDGNkydTS0Igr9tsbi8vCSH4Fh1vTYs3BIb1ljKTjubegET9ppZqfeFqeu1YZGOL8fK++UzrOUmZIpQC2JNrW0j8M3NjdysGhZ1vTasNR1fHyPvV0bDurq62l1fX+/+85//7NpmtFP7tLOStuAjEwARQVSelYvUS/QSMSzr89cMy/uVzbCaGNoCO4dPZCyECqL6rBytl+qGGpb1eZxheb+yGdaMAUoqalV85KY1FUTEFFX1RvLSeul3UMOyPm1YPzCgFigVtDI+si2A8kMXpLLeSG5aL/0Oyo8aD8WvjJ+hT4o/3fDzOQmiNUu9YGh+KiB1vFoPlB81HjWfNH82fmxYtIOD49WCoPkHl9edTm0QlB81nm7CBifIxo8Na3CDaTq1IGh+il8drzYIyo8aj5pPmj8bPzYs2sHB8WpB0PyDy+tOpzYIyo8aTzdhgxNk48eGNbjBNJ1aEDQ/xa+Mf/78ufwdAJQfG9bxjqv5sWEpV9yK3OoFU3lbw5Sf3IW/iKtekCskMzVErU9ajA2LMjY4Xi2IyhtHZ+x5UvM/WC7T02Xjx4Y1XQI/fuEMQTTTur293b9m7fHxceOKl7++nVm10aUZrzWbwf9yxXkjsvFzEob1559/7v7666/d58+fN+n8xcXF7s2bN7u3b9/i788mCFzAhAOWZiF73os3g3/rc5xIyhtWE8Mff/wxjpGOTB8+fMCmNWPBdJS0+aHkkjZyCanm3/ocK6HyhtV+0WGrM6unrWhnWu2yi3zUC4ZgyRhLHhpEbtKr+bc+x6qqvGFRwY2l7+ds9CkSxU/zq+tV5yf8RN6LR/K3Win/NL+aTzV+mp/Wa8OijC3E04ZRQdP8g8ubnk7NT7b8aoKpftT80HptWJQxG9Zgxo6nUy+YbPnV5NqwFhi2ILZdkOoFoM6fTT/qBa/mU42f5qf1+gyLMuYzrMGMbWvo2QxRTS41FDU/tF4bFmXMhjWYMRvWTEJtWL4k/IGB6oKYuXjWfJf6L3y2/Gs46Ymprk+fYfV0/1+OrS6IwXR0p8tmKOr+dhN24lcANqzBClELmuYfXN70dDassZRT/aj5p9XZsChjJ/4XrJW3NLtHKcs866dekDQ/5ZbG27B8D+uk7mGR2T26WDLO+lFDUS94yimNV+On+Sl+n2FRxk78DIvM7lHqMs762bCOd1HND9WQDYsyduKGRQVK6DuFWT96BqHkk3B/iFXjp/lpDTYsypgNq4sxKmi64Kvn7yJ3xcHZ+FkB+YcQGxZlzIbVxVi2BZPNELvIXXFwNv5XQLZhUZJIfHlBwJcyEG5abDZ+bFi+h/WjI8IFoBY0XWA0Xo2f5qf46QKm+Sl+iqd6fsonjc/GD8XvS0LKmC8JuxgjC+br16+7ly9fou8j+VvibIaIig0EZ+OHlmDDooyduGEptzU06sherE+fPu0uLy9Rh7ItSGqIqNhAcDZ+aAk2LMrYiRuWcuNoo+7Vq1e7jx8/rmK9mVUzLfLJtiBtWKR7y7E2rGWOUES2BYPA/y9Y/R7DZlrX19e79tKOtjfr6ef+/n7/XkJqVi1PNv5tWBEF/voYG9ZYPtMtmFbe0nvx6HsVm5E0Q2nGku1jwzrekWz8UP3YsChjxS4JyXvx6HsV1fe7Iq3JtiB9hhXpos+wxrJ2JFu2BUPei0ffqxi5Ka5uRDb+bVhjO+4zrLF8prskpAuGLPjItoPBdP+UjuBvByv5ieQ/N35ovTYsylixS0IvyOMNMz/b8kOXnw2LMmbD+oEBuuAH0+0zLEhotjNQCH9nw6KM2bBsWEAzNnRA1opQG9YKkkhItr9gdMGo8RMuI7Fq/Or8kZrJMWr8ND/Bvr8n+E38DV4w294jOCf+nz9/vmsPAsjnnPhpvNDlruaH9OokDIs8tqfk0Hi6LWDfAPGvWRB+ZuCnnJL4jD/BTPgntUZiZ/SXGiKto/wZFtkYScmh8XTj5QzDIvzMwE85JfFksPqQV/0Hg/BPao3EzuivDWtFZ5ZGT1ak6Aqhoy3ff5l6wbTvWuJnJv4uon9xcDuzaqNCbec9/WTgn2Km8TP7a8Oi3SkWP2PBKCmh+CNYrq6u9sPS7fLq34alIzlnnWH1YMtwLO2vDStD14QYsgmClkrx0/zNrNqvR6g+FL96QarqjObNxk/5e1jRRmQ5LpsgKC8UP80fuS9FvoPit2EdZ1fNjw2LqFsQW33BUPyUQvkCED+lpfVmi6f9lfer+j6sbA2meLIJQo2f5pcvABvW0ZZk06fPsOgKGhyfTRC0PIqf5rdhUcbGxtP+yvvlM6yxDabZsglCjZ/mly8An2H5DOt7BqovSLrAaHx1fih+yo8NizI2Np72V94vn2GNbTDJFvkBPLUgCP4WSwVN8kdmA0n+CP5s/NN6SXxGfaa7h6V+jE0apo6N/MRwtgWjNKzIbCDtGcVvfR5nWK3PdIZF3ltHxZktfsZ799Q10wVP8MwwB4rf+rRh/cTA0nvriOgzxs587566frrg1+DpmQ1ck7/nHms71vr8Nctnd4ZFBXdu8RFBZBt+prOB2fCfm+ZIvRF9kvzpLgkJ+HOMpYIgP28y4+dH6GxgNvznqDlSM9Unyb1/SJLtKSEt4NziqSDID8jN+IE3el8qG/5z0xutl+qT5rdhUcY2jqeCoPeYnH/jBhf/eqofWq4NizK2cTwVhA3reMMoPxu3P/3XU33SgmxYlLGN46kg6IJ0/o0bXPzrqX5ouTYsytjG8VQQNiyfYc2ULNUnxWbDooxtHE8FYcOyYc2ULNUnxWbDooxtGB+ZrVMa1oxZMyX+1kqaf8P2p//qiD5pUXLDam8yaTu7/elnIDJbp9wWMGMWUom/dcT67NflIUNEn/Tb5YbVXiDw+vVrisvx/8IA3cPUUig3Xs6YhVTib/xYn+OWWkSf9NvlhnUQxe3t7e7h4WH3+PhIMZ59fO9s3ejRltmzkKPxPxVUMy3rM77MevVJvnmKYRFAjt2egbaA7+7u9n9g2n2qkR/1TdmRWJ0rHwM2rHw92RSR+hLJhrVpe8t/uQ2rfAvHFqC+CW3DGtuvc8tmwzq3ji/Uq37Mb8Oy4HoYsGH1sHeCx9qwTrCpJ1SSDeuEmjmiFBvWCBadQ8WADUvFbNG8NqyijTsT2DasM2n02jJtWGuZctwWDNiwtmA98XfasBI3x9D0P5Fsjmsx4G0Ntfp1bmh9hnVuHV+o1xtHLYjMDNiwMndnI2zK2Trvw9qoqSfytVMMa2k2rV2GvHv3bv9TH5GPeji2ev4Ip8eOaT8rc3NzE/rZoIhhqfkfzc/TfGr9U/yV+ZQbFrnEiPw8hfrnR6rnp2Im8ZH7XdSw1PyTeiOxav1TTNX5lBsWEXXkB8DUP/BWPT8VNIk/hR/wI/VGYtX6p5jUeqZ4aLzcsMhj8hcvXuy+fPmCaiD5W2L6F756fkQmDD6Fn0iGJeNwop+I/ikggieyXigeGp/KsCIEqRtQPT8VBI03P8cZU/OTrV8UD423YS0wphacOj8VBI1X41fnp/XS+Gz4s+HBfH6j10jwG9QEOT9syODw6vwPpuOndGp+KP5seDB+G9a2p/TlBfTsGdIc/ftofhC9i8Hl+bRh2bAWVX4kgCyAyHvrSP7IPdCe2peOnfFQYgnD0/+vzGerJd09LLoXS/2Ytnp+Kmgar35sr+af1kviZ2z7IHhabGU+UxrWq1evdh8/flzdB/VGuOr5VxMZDFRvjFTzHyx71WHEzA8J6SXzKiDfBVXmM6VhNVDNtK6vr3cXFxe7tjdl6aMeNaief4m/3v9fmj3sfW+dmv/e+p8e386s3r9/v2v/0o/asBqeanx+z2G6S8I1De6dPVTPdqnzr+Eoc4yaH/WCXMLfw/0Mw6L4lurtXY8ET0nDOhRI73e149SXMOr8pLkZY9X8qC95CP4I/9kMi9QbWY+Uo9KGFZk9JPcVMuanDc4Wr+ZffVOZ4I9wn82wSL2R9UI5Km1Ykdkr8lg3Y37a4Gzxmfhv3FCDIPgj3FM8ke8gx5B6I+uFYGmxpQ1rhuCogEiDI/hpg7PFq/nJlp/yT/VG89N4NZ8YT7aNo7QA2mB1A9T5KT/Z4tX8ZMtP+ad6pvlpvJpPjMeGdZwyKqBsDaaCUMer+cmWn/JJ9Ubz03g1nxiPDcuGRUXTE69eANnyU65sWMcZ8z2sBUURAWWcHaMLRh2fzVBIf/c3feGwN+EzMmtJ8tPYjHq2YS10kewticyOkfxUcBnj6YKnhlJ5W8OMbQFEExE9034RPPs/GL4kPE4ZmW28vLzE4xgkP21uxni1YVXeOJrtj1dEzzasgZds0VP6pdnG+/v7/WuvIrNjDdNS/ozGE8WkNqyGa8Zozu3t7e7h4WH3+PgYpeL/x/XOWnYDeJKgR882rASGNVoQ1fP1zI7NMCzKb6ZZuYZdjWcpP+Xv+3gblg2rRz/SYyOXMNkMK9usnBoPyR8Rjw3LhhXRzZRjIjeJsxlWtlk5NR6SPyIiG5YNK6KbKcdEZseyGRbBE6mXNkKNh+Sn2Fu8DcuGFdHNtGOoQOmCoflp4eeGh9ZL+ZT3y9saaEsc33OTlS4Y+QKAG0Gr46H8U7XL+bFh0ZY43oal0wA1FGoQND+tlOKh+b1xlDLm+B8YoAKlC4bmp+05Nzy0XsqnvF8+w6ItcfyBATr7lm02LRuexis1FGIQkXqp2gkemnvPjw0rQpuPaQzQbQ2R2bTIXq+13cmGJ2JYhJ9IvWu5PMTZsBYYowTRv2C0YecUTxZL4yUym6actcyGJ2JYhJ9IvVTPdD3S/D7Doow5fn9m1WYn2ybENZ+e2bSWf/SsZTY833MY+YO6xE9vvWt67DOslSxRR48I4urqav9i1/bTJf/2Ytd2qt0WcBNG5LOUP5Jz5jHK2bSZdYz6rpmzlqMwj8pD1yP9Xp9hLTDWzKQtyDWfyNgDyb8Gw+wY9Wza7HpGfh+9ZI5cEo7EOyKXDWuBRUoQPcMioovc1CT5RwhqdI6ISY/GkDUffShhw1rupM+wBhpi5LExNdzlls6NoH8A5qLb9tsis4fV+VTr2YY10LAifyHVDVYv2eoLTM0P7W91Pmm9lH8blg2LauaH+OoLrKv4FQfTBVydT1rvCgp/1Js3jh6njDaACo7mpw1Wx9N61Xiy5af9rc4nrZf2y2dYPsOimvEZFmCMLmAb1nFybVgbGhadxQPrZEpo5CHDFGBJvoT29xT4pAZNWyU3LPVjb0oQ/QtG85N6I4+9aYOV8ZFtHEo82XLT/p4Cn3S90J7JDUu9sZASpDYsUm/1PVgzZtOooDPF0/6eAp90PdJ+yQ2rAWqLeOR73L4vkhKkNqw19dJZPNpUdfzM2TR1LYr8tL+nxCddj5T/KYa1BKpnFo8SNMOwlup9+v8zXvx5d3e3f/Fnu09S7eNZy+MdG83PzPVItZjCsA6gyf2fwzHVDavyq9Wp2CLxnrVcNqu1s66U/xnrkWJKZViRm47VDav9AsTnz59X9e3i4mJ/lkQ+EdGR/OpYeh9IjYfmV/Ov5GfGeqR8pjKsyGPd6oalvkSl+amA1PG0v2o8NL+afyU/M9Yj5lO90x0DEr92iQpIKYjGjRoPzU/7pY5X86/Gr+ZfzQ/FL8djwzouWXkDkhm0egHT/Gr+KR4aTxc8za/mh+KX47Fh2bDoIpkZr14A6lrogqd41PxQ/HI8NiwbFl0kM+PVC0BdC13wFI+aH4pfjqeyYdFZLXrPKJKfCk4tCJqf4lfGz+BfiT9y05rikRsEuGUxo1+pnhK2ZpHHwHRWa0Z+Kjj1tobKhhXpL+VfGR/ZFkDxKLc1ZFwv6QxLPYunzk8Fp944Wtmw1IuR9orGz5gNJO8lpPhbfLb1ks6wDiQdmz2ks1pPG7U029ibnwpDOZpT0bBm80/7tRQ/ezZw6b2ES3iX/j/TeklpWEsE+v/XM5DRsEbPvj1lQ/kH4PAHtdJsZs97EtcrbU6kDWsOz5t9SzbDUs8Gqi+xySXSZk3/xRdXv8RuZdmwsqlqMJ5shqVeNOqHGOSh0OBWdqer/hDDhtUtgfwJshlWpsfwrXsUTzY+iQIj70kk+WfE+gxrBssbfke2BUYNglJH66V4aH6KXx1P61XjofltWJSxYvHZFph6wdB6KR6aP5tcaL3Z8NuwsnVkMJ5sC0y9YGi9FA/NP7id3elovd1fODiBDWswodnSZVtg6gVD66V4aP5seqD1ZsNvw8rWkcF4si0w9YKh9VI8NP/gdnalmzHr1wVwxcE2rBUkVQ7J9hieGgTl3tsafs2YtzVQNTl+OgPZNjqqDcsbR38tMfUeuBni9hnWDJY3/o6lWbCZ8NSG1WqZMZqjes+mohfVZzO/52SKYbUFU2n2SiGanpzqWbCe99DRuiKGpTYgdX7KkTp+9HpU63OqYWW7JFGLQZlffUo/434XNSz1JZ46v1IPkdzK9ajWZ6tXfoY1YxFEGlfxGPVN0xk/OEcNS30TXZ0/m86U61GtzymGVfkxcDaxqWfBMv6kL9UPNUR1/mwaovUS/Gp92rBIN5LE0gVJYSsF3bBQ/BRPtvyUf3U85ZPiofzT/PJLQjVBtODq8XJBgJcORLik+Kl+suWPcKQ8hvJJsVD+aX4bFmVs43i5IGxYRzus5l8tLxvWAsNqgtQNzpZfvWDU/aL4KZ5s+bPph/JJ8VP+aX6fYVHGNo6XC8JnWD7D6tC4XJ/qF6mqHb2D25KHygWRzLDU2w7U+bOJTL0e5fq0YWWT1HE8ckEkMyz1xk51/mzqsmH5HtZUTZ6bYTVy1aMz6vxTBbLxepTrM+MZlvq9dVsLqGd2Ty6IZGdYkV5VNyAlfp9hDXZ09XvrIgtAdUxkTMKGdbwb1S/x1PhtWIMNa8YApcqAaN7I7J4N6zjL1W+iq/HbsAYblnpBUlNRxkdm99T8lBc0vKRV80n1Q/mn+Gl+ip/iofnT7cNSF0wJUsdTAan5oXgoP9nwq/FQfij/FD/NT/FTPDS/DYsyNjieCkguCHiGQunIhl+Nh/Kj1gPNT/Gr+bRh0Y4MjqcCkgvChjW4wyydWg80P0PPf42D5rdhUcYGx1MB2bCONyAbn1Quavw0P8Uv12e2fVjqgmkD1PFUQEp+Ig8BCD8z3ouXiU/CzSFWjZ/mpzUo9dmw+AyLdmRwPBWQUhCRbRaEjhk/oaveFkDqjcSq8Uf2/pE6lPq0YZFOiGIzGdbl5eWumZbqM2OPnXrjpYqbQ141fuVLKFoNNiy1QjbOn8Gw7u/vdzc3NzKzmv1ePOVoywy5qPEr31Npw1qhkKUGr0jRFXJxcbF78+bN7u3btzjPDMMa/R66p0WqZz+X+tvDf6tFnR+LYuMDUs+6Vr/pTk6h1Tr48OEDNi21YakvAdSzn6S/Ef7V+dWaU+aP3O/yGdZCR8hNSmVzW+72l/7h4QF9jdqwIqIjBajvS5H+RvhX5ydcZouNPISxYS10kS54tShowyh+dX7KD8VD82fjR10v5UcZH9nmouan/LYGKmhlgyNPSSh+Kgian/JD8dD8FD/Fo85P680Wn40fG9ZghWRbMFRwlA5aL81P8VM86vy03mzx2fixYQ1WSLYFQwVH6aD10vwUP8Wjzk/rzRafjR8b1mCFZFswVHCUDlovzU/xUzzq/LTebPHZ+LFhDVZItgVDBUfpoPXS/BQ/xaPOT+vNFk/4mTIrWn0fFiF0hhiyLRj1tgZaL+2BetuBOj+tN1s80c+MWVGfYQ1WCF3A1HBpfvXGUYqH0q3e2KnOT+vNFk/0o96T17ixYQ1WCF3AasNq5VWeHWv41aMz6vyDJTY93ZJ+Zs6K2rAGtz+jYS2VOHt2bGm2sV2GvHv3btf+jXyyGdASHlrjOc9O2rCoWhbiKxrWoSRyv+JwDK1XfYmR7RKP4KFSPMfZSRsWVckJG9aM2TFiipGbuNluohM8VIrnODtpw6IqOWHDmjE7Ru7ZvXjxYvflyxfUIZK/JaZniAhMu0mc7KUeFI+aH8yntzVQyo7H0wZnE5AaT/X8VC20Xpq/ut5ovT7Dooyd8BnW/rExPCPItmDU+KlcKB6aPxv/FD+Nt2FRxmxYPzCQbcFQg6D4qVwoHpqf4qd4aH6Kn8bbsChjNiwbFtAMNQiQeh9KDYXiofkpfhpvw6KM2bD+z0Bkdky9YNT5qVwoHpqfGgrFQ/NT/DTehkUZO3HDUm87UC8Yso0gsi2AyoXgobkj+AmeSH5aA423YVHGTtyw1Bs71YZFNmpGNl5SuRA8NHcEP8ETyU9roPE2LMrYiRtWK085O6Y2rIZ/aRSmd7SFSmYJD83Xi38JT29+Wg+Jt2ERtlbE0mv+c1vAM+pd0aYfQpZmG2m+3llI+n1qA1riZ2a9NiyqjmJnWNkuAbIZFrkEplKZ8XMr6v4SfmbUa8OiKixmWNlusmYzLPKQgUolMgtJv0PdX8LPjHptWFQhxQwrm0FUx0PkEpmFJPlbrJpPkn9KvZ4lpBI5Hp/tHhYRXKuM4qfsVcdD663OZ7p+2bCoBG1YPYylWwBwdpLWbsOijB2P9yXhWD7xGYp6AavzU/qq46H12rAoYzassYz5HlYXnzasLvp+OljNpzo/ZcNnWJQxG1YXY+kWgC8Jf9nPGT/oSMVU3rDIY11KDo2PzF6pFzDhJ4KfckTrVe/tIY/taa0tXo1f2d8ZP5lNOS1vWGTjHCWHxkdmr+gCpvdECD8R/JQjWu+rV692Hz9+pF+zOp5sjFyd9LtANX5lfyNmTvVJOS1vWK3gpdEESgqN75m9ogs4IoglfnrwU65ovS1/W/TX19e7hrPt9Rn9WZqd7P0+Nf7R/W1nVu/fv9+1f+knok/yHSdhWKTgbLF0AasF0fhRzo7RehX9orNvPe9tXIOf4lmT81jMUn978qv1acPq6c6AY+kCVguCXCJF7s/QegdQ/MsUFH/kEongp3hI7kMs6W8kv1qfNqxIVwYeQxewWhBkUUZmx2i9A6n+KRXFH7kJTfBTPCT3IZb0N5JfrU8bVqQrA4+hC1guCPCYPzI7RusdSPVPqSj+yGN+gp/iIbkPsWr+5fqsPpoTaVqmY6iA5IIAhtV4pHhovepeZcNP8VB+1PzL8duwaMvHxlMByQVhwzraYNovqpZs/U2H34ZFWzI2ni6AbIKmeGi9Y9n+OVs2/BQP5UfNvxy/DYu2fGw8FZBcED7D8hlWh8Tl+rRhdXSn89DITVylIGbgoQbdSfHRw+l7FSP8EPwUD8ntm+4r2aICnbEXZSV0eVjkMbnSsGbgoXpQNoFuI4jwQ/BTPCT3IdbbGhZYowJVz15Fmqw65vLyEo8/KA0rImaKh+pBxX3LS/84RvpF8FM8JPch1htHBxtWS6eevYo0euQx9/f3u5ubG2xWDQM1iDW4Z86OZTCsdibT+G8GvebT0681+SmeNTmPxShnJxX6/L6WdBtHe5tx6sdHBJFpdixiWFdXV/vh5/ZTKqrh57u7u93Dw8Ou3aca/aH4l4aZKT463N4zOxnRJ6nHhkXYShBLBZHtEoAaVlvsrQbVR80PxU9+LoZyQn8+aMYtAlqDDYsytnE8NayI6EiJFA81LPV9HTU/FD/5QT7SpxZLf6Ax8pCB6oHWYMOijG0cTwVBDYKWp8ZD81P81fmh9RI+I9s4SH6KvcXbsCKsbXgMFUT1BUnrpa2pzg+tl/JJ+aH5KX4bFmVs43gqCCo4Wp4aD81P8Vfnh9ZL+aT80PwUvw2LMrZxPBUEFRwtT42H5qf4q/ND66V8Un5oforfhkUZ2zieCoIKjpanxkPzU/zV+aH1Uj4pPzQ/xW/DooxtGB+ZNaOCI+Wp8UTyE/z7m7hw2Jvkj+BX4mnYqaEQPJF6CZ9TbrqrHxvTgivHR2bNlPyr8UTy0/5m4yfTtobGJeFnRr/kZ1jqjXlUoJXj6Z6eVquSfzWeSH7a32z8ZNo4SvUzo19ywzoUfXt7ux99eHx8pJo6+/jeWbPRs2NqPL35qWCy8bP1aM5T/pb4mdmvKYZFBeR4M2AGzMC/MWDDsi7MgBkow4ANq0yrDNQMmAEbljVgBsxAGQZsWGVaZaBmwAzYsKwBM2AGyjBgwyrTKgM1A2bAhmUNmAEzUIYBG1aZVhmoGTADNixrwAyYgTIM2LDKtMpAzYAZsGFZA2bADJRhwIZVplUGagbMgA3LGimhQnIAAABoSURBVDADZqAMAzasMq0yUDNgBmxY1oAZMANlGLBhlWmVgZoBM2DDsgbMgBkow4ANq0yrDNQMmAEbljVgBsxAGQZsWGVaZaBmwAzYsKwBM2AGyjBgwyrTKgM1A2bAhmUNmAEzUIaB/wJUepIw0pEwUAAAAABJRU5ErkJggg==');
  //newWin.document.write('<img src="data:image/png;base64,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" style="width: 60px;"> ');
  //newWin.document.write('<imp src="qr.png">');
  //newWin.document.write('</div>');
  newWin.document.write('<div style="width: 20px; float:right;"></div>');
  newWin.document.write('<div style="float:right; text-align: right;">');
  newWin.document.write('г. Анапа, ул. Самбурова, 239<br>');
  newWin.document.write(' +7 (928) 332-61-00<br>');
  newWin.document.write('+7 (86133) 2-05-26<br>');
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
  newWin.document.write('<td>Цена</td>');
  newWin.document.write('</tr>');
  //запись выполненых работ
  var b = 0;
  for (var i = 0; i < formM.length-2; i++) {
        b++;
        newWin.document.writeln('<tr>');
        newWin.document.writeln('<td>'+(b)+'</td>');
                newWin.document.writeln('<td>'+formM[i].value+'</td>');
                newWin.document.writeln('<td>'+formM[i+1].value+'</td>');          
        newWin.document.writeln('</tr>');
        i++;
        
        };

  //________________________________
  newWin.document.write('<tr>');
  newWin.document.write('<td></td>');
  newWin.document.write('<td style="text-align: right">ИТОГО</td>');
  newWin.document.write('<td>'+formM[dd-1].value+'</td>');
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
  newWin.document.write('</div></body></html>');




 

 
newWin.print();

newWin.close();
                                // };
                    


//document.getElementById("garant").onclick = someFunc;

};


document.getElementsByClassName("btn btn-primary garant")[0].onclick = someFunc;
