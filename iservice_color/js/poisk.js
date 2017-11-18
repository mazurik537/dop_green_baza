var dem = document.getElementById("tab-pane-works");
 var input = document.createElement("div");
  input.innerHTML = '<input type="text" class="form-control" id="poisk" placeholder="Живой поиск" autofocus style="margin-bottom:10px;">';
              dem.insertBefore(input, dem.firstChild);


        $(document).ready(function(){
            $("#poisk").keyup(function(){
                _this = this;
                $.each($(".service-works_table tr"), function() {
                    if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                       $(this).hide();
                    else
                       $(this).show();                
                });
            });
        });
        