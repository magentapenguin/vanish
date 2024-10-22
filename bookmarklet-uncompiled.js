// bookmarklet
// not compiled
// not minified

(() => { // start bookmarklet
    const newwindow = window.open('about:blank', 'bookmarklet');
    newwindow.document.write(`<!DOCTYPE html><html style="width:100%;height:100%;border:none;margin:0;overflow:none;"><head><title>about:blank</title></head><body style="width:100%;height:100%;border:none;margin:0;overflow:none;"><iframe src="${location.href}" style="width:100%;height:100%;border:none;margin:0;overflow:none;"></iframe></body></html>`);
    setTimeout(close.bind(window), 500);
    newwindow.focus();
})(); // end bookmarklet