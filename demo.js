//https://kunstrasen-sgt.artfabric.net/

$("#field_6_76").click();

function createClass(name,rules){
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}

createClass('.markSupporter',"background-color: rgb(255 195 0) !important;");
createClass('.popoverTop', 'top: 620px !important; left: 59px !important; width: 876px; max-width: 876px; min-width: 876px; text-align: center; margin:0px !important;');
createClass('.popoverLeft', 'left: 59px !important;');

function markSupporter(supporter) {
    for(x = 0; x <= 95; x++) {
        for(y = 0; y <= 63; y++) {
            var field = "#field_" + y + "_" + x;
            if($(field)[0].attributes["data-s"] != undefined && $(field)[0].attributes["data-s"].value == supporter) 
            {
                $(field).addClass("markSupporter");
            }
            else 
            {
                $(field).removeClass("markSupporter");
            }
        }
    }
}

function randomSupporter() {
    var supporter = "";
    while(supporter == "") 
    {
        var x = rndInt = Math.floor(Math.random() * 95) + 1;
        var y = rndInt = Math.floor(Math.random() * 63) + 1;
        var field = "#field_" + y + "_" + x;
        
        if($(field)[0].classList.contains("sold") && $(field)[0].attributes["data-s"].value != "Anonym") 
        {
            supporter = $(field)[0].attributes["data-s"].value;
            $(field).click();
            markSupporter(supporter);
        } 
    }
}

function start() {
    randomSupporter();
}

function clearSite() {
    document.getElementById("footer").style.display = "none";
    document.getElementsByClassName("navbar")[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "none";
    document.getElementsByClassName("container")[2].style.display = "none";
    document.getElementById("wrap").style.margin = "0px;";
    document.getElementById("wrap").style.padding = "0px;";
    document.body.style.backgroundColor = "#247e4c";

    //document.getElementsByClassName("container")[1].children[0].style.display = "none";
    document.getElementsByClassName("container")[1].children[0].innerHTML = "<h1 style='text-align:center; color: #fff; margin: 26px 0px;'>Das Projekt SGT Rasenplatz 21/22</h1> <div style='text-align: center; color: #fff; font-size: 24px; margin-bottom: 10px;'>https://kunstrasen-sgt.artfabric.net</div>";
    document.getElementsByClassName("container")[1].children[1].style.display = "none";
    document.getElementsByClassName("container")[1].children[2].style.display = "none";
    document.getElementsByClassName("container")[1].children[3].style.display = "none";
    document.getElementsByClassName("container")[1].children[4].style.display = "none";
    document.getElementsByClassName("container")[1].children[6].style.display = "none";
    document.getElementsByClassName("container")[1].children[7].style.display = "none";
    document.getElementsByClassName("container")[1].children[8].style.display = "none";

    document.getElementsByClassName("container")[1].children[5].children[0].style.display = "none";
    document.getElementsByClassName("container")[1].children[5].children[2].style.display = "none";
    document.getElementsByClassName("container")[1].children[5].children[3].style.display = "none";

    document.getElementsByClassName("container")[1].children[5].children[1].children[0].style.display = "none";

    document.getElementsByClassName("dummy-circle")[0].style.display = "none";
    document.getElementsByClassName("dummy-circle")[1].style.display = "none";
    document.getElementsByClassName("dummy-circle")[2].style.display = "none";
    
    document.getElementsByClassName("pull-right")[0].style.display = "none";
    document.getElementsByClassName("arrow")[0].style.display = "none";

    document.getElementsByClassName("popover")[0].classList.add('popoverTop');
    document.getElementsByClassName("popover")[0].classList.add('popoverLeft');
}

clearSite();
setInterval(start,5000);
