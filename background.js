function openMyPage() {
    chrome.tabs.query({
        'active': true,
        'lastFocusedWindow': true
    }, function(tabs) {
        var u = tabs[0].url;
        var regexp = /www\.youtube\.com\/watch\?v=([\w-_]*)/;
        if (regexp.test(u) === true) {
            var url = "https://www.youtube.com/embed/" + u.match(regexp)[1] + "?autoplay=1";
            chrome.tabs.create({
                url: url
            });
        }
    });

}

chrome.contextMenus.create({
  id: "1",
  title: "Watch age restricted video",
  contexts: ["all"],
  documentUrlPatterns: ["https://www.youtube.com/*"]
});

chrome.browserAction.onClicked.addListener(openMyPage);
browser.contextMenus.onClicked.addListener(openMyPage);
