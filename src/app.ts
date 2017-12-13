/// <reference types="vss-web-extension-sdk" />
/// <reference types="jquery"/>
require('dotenv').config()

class App {
    
    constructor() {
        
    }
    init() {
        alert("Hello, " + VSS.getWebContext().user.name);
    }
}

$(document).ready(function(){
    let app = new App();
    app.init();
});