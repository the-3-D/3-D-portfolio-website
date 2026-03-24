// config.js
(function() {
    const head = document.head;

    // 1. Common Meta Tags
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);

    const metaViewport = document.createElement('meta');
    metaViewport.name = "viewport";
    metaViewport.content = "width=device-width, initial-scale=1.0";
    head.appendChild(metaViewport);

    // 2. Main Stylesheet
    const mainStyle = document.createElement('link');
    mainStyle.rel = "stylesheet";
    mainStyle.href = "Style.css";
    head.appendChild(mainStyle);

    // 3. FontAwesome (Icons)
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
    head.appendChild(fontAwesome);
})();
