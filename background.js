chrome.contextMenus.create({
  "title" : "Save to kujira",
  "type"  : "normal",
  "contexts" : ["link", "image", "video", "audio"],
  "onclick" : function(info){
    var url = info.srcUrl;
    if (url === undefined) {
        url = info.linkUrl;
    }

    var filename = url.match(".+/(.+?)([\?#;].*)?$")[1];

    chrome.downloads.download({
        url: url, 
        filename: "kujira/" + filename
    });

  }
});
