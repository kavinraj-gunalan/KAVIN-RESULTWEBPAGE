function result() {

var students= {

    KAVIN :{
        math:"95",
        physics:"90",
        literature:"90"
    },
    MANI :{
        math:"89",
        physics:"100",
        literature:"90"
    },
    YUKESH :{
        math:"80",
        physics:"90",
        literature:"100"
    },
    YOGESH :{
        math:"85",
        physics:"87",
        literature:"98"
    },
    HARITHA:{
        math:"98",
        physics:"88",
        literature:"99"
    },
    SDLC:{
        math:"100",
        physics:"100",
        literature:"100"
    }
}

var studentname=document.getElementById('studentname').value;
var input=studentname.toUpperCase();
var defination=students[input];
var output=document.getElementById("output");

if (defination==undefined) {
    output.innerHTML=`<hr> There is no information about this student. <hr>`;
} else {
    output.innerHTML=`<hr> Math score is ${defination.math} <hr> Physics score is ${defination.physics}. <hr> Literature score is ${defination.literature}. <hr>`;
}
}