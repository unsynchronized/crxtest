let dolog = console.log;
let tryload = function(site) {
    try {
        var xhr = new XMLHttpRequest();
        xhr.onload = function(a) {
            dolog("xhr onload called");
            dolog(this);
            dolog("responseText: " + xhr.responseText);
            dolog(a);
        };
        xhr.onerror = function(a) {
            dolog("xhr onerror");
            dolog(a);
        };

        xhr.onabort = function(a, b) {
            dolog("xhr onabort");
            dolog(a);
            dolog(b);
        };
        dolog('loading site: ' + site);
        xhr.open("GET", site);
        xhr.send();
    } catch (error) {
        dolog("caught from popup code: ");
        dolog(error);
    }
};

window.addEventListener('load', function() {
    console.log("allhttp");
    tryload("https://www.example.com");
    tryload("https://www.veracode.com");
});
