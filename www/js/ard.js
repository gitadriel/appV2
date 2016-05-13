
function ajaxInit() {
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        ajax = new XMLHttpRequest();
        if (ajax.overrideMimeType) {
            ajax.overrideMimeType('text/xml');
        }
    }
    else if (window.ActiveXObject) { // IE
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");	
        }
        catch (e) {
            try {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {}
        }
    }
    return ajax;
}

function AcenderApagar(statusled)
{
url = "http://192.168.0.10:8090/" + statusled;
ajax = ajaxInit();
if(ajax) {
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send();
    
}
}



function verificaChecks() {

    var aChk = document.getElementsByName("ok"); 

    for (var i=0;i<aChk.length;i++){ 

        if (aChk[i].checked == true){ 

            // CheckBox Marcado... Faça alguma coisa... Ex:
url = "http://192.168.0.10:8090/LigarLed";
           ajax = ajaxInit();
if(ajax) {
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send();
    
}

        }  else {
            url = "http://192.168.0.10:8090/DesligarLed";
           ajax = ajaxInit();
if(ajax) {
    ajax.open("POST", url, true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send();
    
}

            

        }

    }

}


function trocar(obj,obj2,obj3,obj4,obj5){
                if(obj.style.display == "none"){
                    obj.style.display = "block";
                }else{
                    obj.style.display = "none";
                }
                if(obj2.style.display == "block"){
                    obj2.style.display = "none";
                
                }
                if(obj3.style.display == "block"){
                    obj3.style.display = "none";
                
                }
                if(obj4.style.display == "block"){
                    obj4.style.display = "none";
                
                }
                if(obj5.style.display == "block"){
                    obj5.style.display = "none";
                
                }
                
            }
            function trocarTEMP(obj,obj2,obj3,obj4,obj5){
                if(obj.style.display == "block"){
                    obj.style.display = "none";
                
                }
                if(obj2.style.display == "block"){
                    obj2.style.display = "none";
                
                }
                if(obj3.style.display == "block"){
                    obj3.style.display = "none";
                
                }
                if(obj4.style.display == "block"){
                    obj4.style.display = "none";
                
                }
                if(obj5.style.display == "block"){
                    obj5.style.display = "none";
                
                }
                
            }

            function EnviarDados(operation)
            {
            url = "http://192.168.0.10:8090/" + operation;
            ajax = ajaxInit();
            if(ajax) {
                ajax.open("POST", url, true);
                ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                ajax.send();
                
            }
            }


// Open any external link with InAppBrowser Plugin
$(document).on('click', 'a[href^=http], a[href^=https]', function(e){

    e.preventDefault();
    var $this = $(this); 
    var target = $this.data('inAppBrowser') || '_blank';

    window.open($this.attr('href'), target);

});
