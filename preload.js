const path = require("path");

window.onload = () => {
    const libraries = [
        path.join(__dirname, "node_modules/jquery/dist/jquery.min.js"),
        path.join(__dirname, "node_modules/popper.js/dist/umd/popper.min.js"),
        path.join(__dirname, "node_modules/bootstrap/dist/js/bootstrap.min.js"),
        "./calculations.js"
    ];

    libraries.forEach((p) => {
        const script = document.createElement("script");
        script.src = p;
        document.body.appendChild(script);
    });    
}