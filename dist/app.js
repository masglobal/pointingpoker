/// <reference types="vss-web-extension-sdk" />
/// <reference types="jquery"/>
require('dotenv').config();
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.init = function () {
        alert("Hello, " + VSS.getWebContext().user.name);
    };
    return App;
}());
$(document).ready(function () {
    var app = new App();
    app.init();
});
