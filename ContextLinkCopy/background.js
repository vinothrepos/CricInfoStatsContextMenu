var contextMenuItem = {
    "id": "CricInfo",
    "title": "Cric Info Player Stats",
    "contexts": ["link"],
    targetUrlPatterns: ["https://www.espncricinfo.com/cricketers/*"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.create({
    title: "🤵  Overall Stats",
    parentId: "CricInfo",
    id: "HomePage",
    contexts: ["link"]
});

chrome.contextMenus.create({
    title: "🏀  Test Match Stats",
    parentId: "CricInfo",
    id: "Test",
    contexts: ["link"]
});

chrome.contextMenus.create({
    title: "⚾  ODI Match Stats",
    parentId: "CricInfo",
    id: "ODI",
    contexts: ["link"]
});

chrome.contextMenus.create({
    title: "🏏  T20 Match Stats",
    parentId: "CricInfo",
    id: "T20",
    contexts: ["link"]
});


chrome.contextMenus.onClicked.addListener(function (info) {
    var target, player;
    switch (info.menuItemId) {
        case "HomePage":
            target = info.linkUrl;
            //chrome.tabs.create({ url: target, active: false });
            break;

        case "Test":
            player = info.linkUrl.split('-').slice(-1);
            target = `https://stats.espncricinfo.com/ci/engine/player/${player}.html?class=1;orderby=start;orderbyad=reverse;template=results;type=allround;view=match`;
            break;

        case "ODI":
            player = info.linkUrl.split('-').slice(-1);
            target = `https://stats.espncricinfo.com/ci/engine/player/${player}.html?class=2;orderby=start;orderbyad=reverse;template=results;type=allround;view=match`;
            break;

        case "T20":
            player = info.linkUrl.split('-').slice(-1);
            target = `https://stats.espncricinfo.com/ci/engine/player/${player}.html?class=3;orderby=start;orderbyad=reverse;template=results;type=allround;view=match`;
            break;
    }

    chrome.tabs.create({ url: target, active: false });

});
