window.onhashchange=switchToStateFromURLHash;

text_content = {"Main": 'TC' + "<br>" + 'Some info about Transport Company', "About": "At Transport Company, we redefine the essence of mobility. With a relentless commitment to excellence, innovation, and sustainability, we stand at the forefront of the transportation industry."}
var state={};

function switchToStateFromURLHash() {
    var URLHash=window.location.hash;

    var stateStr=URLHash.substring(1);

    if (stateStr!="" ) {
        var parts=stateStr.split("_")
        state={pagename: parts[0]};
    }
    else
        state={pagename:"Main"};

    var pageHTML="";
    switch(state.pagename) {
        case "Main":
            pageHTML+="<p>"+text_content[state.pagename]+"</p>";
            break;
        case "About":
            pageHTML+="<h2>"+"About"+"<h2>";
            pageHTML+="<p>"+text_content[state.pagename]+"</p>";
            var photo="source/ship.jpeg";
            pageHTML+="<img src='"+photo+"'>";
            break;
    }

    document.getElementById('APage').innerHTML=pageHTML;
}

function switchToState(newState) {
    var stateStr=newState.pagename;
    location.hash=stateStr;
}

function switchToMainPage(photoId) {
    switchToState( { pagename:'Main', photoid:photoId} );
}

function switchToAboutPage(photoId) {
    switchToState( { pagename:'About', photoid:photoId} );
}

