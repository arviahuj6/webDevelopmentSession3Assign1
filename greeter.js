var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('Hello World! I am Arvind!');
$(document).ready(function () {
    document.getElementById('status').innerHTML = greeter.greet();
});
