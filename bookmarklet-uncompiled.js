// bookmarklet
// not compiled
// not minified

(() => { // start bookmarklet
    const newwindow = window.open('about:blank');
    newwindow.document.write(`<!DOCTYPE html><html style="width:100%;height:100%;border:none;margin:0;overflow:hidden"><head><style>body,html,iframe{box-sizing:border-box;width:100%;height:100%;border:none;margin:0;overflow:hidden}</style></head><body><div id="site"></div><script>const site=document.getElementById("site"),shadow=site.attachShadow({mode:"closed"});fetch("${location.href}",{mode:"no-cors"}).then((e=>e.text())).then((e=>{shadow.innerHTML=e}));</script></body></html>`);
    setTimeout(close.bind(window), 500);
    newwindow.focus();
})(); // end bookmarklet