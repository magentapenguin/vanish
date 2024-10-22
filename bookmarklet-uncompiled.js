// bookmarklet
// not compiled
// not minified

(() => { // start bookmarklet
    const newwindow = window.open('about:blank', 'bookmarklet');
    newwindow.document.write(`<!DOCTYPE html><html><head><title>about:blank</title></head><body><iframe src="${location.href}" style="width:100%;height:100%;border:none;"></iframe></body></html>`);
    newwindow.document.close();
    newwindow.focus();
})(); // end bookmarklet