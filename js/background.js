
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
    if (request.url) {
        chrome.tabs.create({url: request.url, active: false}, function() {
            // callback
        })
        sendResponse({message: "success"});
    } else {
        sendResponse({message: "fail"});
    }
});