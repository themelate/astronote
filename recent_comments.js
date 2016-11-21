// Scripts from Kang Ismet modified by Themelate
//eval
function dateString(date)
{
    var tanggal = date.split("-");
    var year = tanggal[0];
    switch(tanggal[1]) {case "01" : mounth = "January"; break;case "02" : mounth = "February"; break;case "03" : mounth = "March"; break;case "04" : mounth = "April"; break;case "05" : mounth = "May"; break;case "06" : mounth = "June"; break;case "07" : mounth = "July"; break;case "08" : mounth = "August"; break;case "09" : mounth = "September"; break;case "10" : mounth = "October"; break;case "11" : mounth = "November"; break;case "12" : mounth = "December"; break;}
    var day = tanggal[2];
    return day+" "+mounth+" "+year;
}

function hp_d11(s){var o="",ar=new Array(),os="",ic=0;for(i=0;i<s.length;i++){c=s.charCodeAt(i);if(c<128)c=c^2;os+=String.fromCharCode(c);if(os.length>80){ar[ic++]=os;os=""}}o=ar.join("")+os;return o}

//eval
var numComments = numComments || 5, avatarSize = 72, characters = characters || 80, defaultAvatar = "http://www.gravatar.com/avatar/?d=mm", moreLinktext = moreLinktext || " ...", showMorelink = typeof showMorelink === "undefined" ? false : showMorelink, maxfeeds = maxfeeds || 20, adminBlog = adminBlog || 'Themelate';

function recent_comments(comment_feed) {
    var commentsHtml;
    commentsHtml = "<ul class=\"recent_comments\">";
    ntotal=0;
    for (var i = 0; i < maxfeeds; i++) {
        var commentlink, authorName, dateFeed, commentDate, authorAvatar, avatarClass;
        if (i == comment_feed.feed.entry.length) {
            break;
        }
        if(ntotal>=numComments){
            break;
        }
        var entry = comment_feed.feed.entry[i];
        for (var l = 0; l < entry.link.length; l++) {
            if (entry.link[l].rel == "alternate") {
                commentlink = entry.link[l].href;
            }
        }
        for (var a = 0; a < entry.author.length; a++) {
            authorName = entry.author[a].name.$t;
            authorAvatar = entry.author[a].gd$image.src;
        }
        
        dateFeed = entry.published.$t;
        commentDate = dateString(dateFeed.substring(0, 10));

        if (authorName!= adminBlog && ntotal<numComments){
            ntotal++;
            commentsHtml += "<div>";
            commentsHtml += "<li>";
        if (authorAvatar.indexOf("/s1600/") != -1) {
            authorAvatar = authorAvatar.replace("/s1600/", "/s" + avatarSize + "-c/");
        } else if (authorAvatar.indexOf("/s220/") != -1) {
            authorAvatar = authorAvatar.replace("/s220/", "/s" + avatarSize + "-c/");
        } else if (authorAvatar.indexOf("/s512-c/") != -1 &&
            authorAvatar.indexOf("http:") != 0) {
            authorAvatar = "http:" + authorAvatar.replace("/s512-c/", "/s" + avatarSize + "-c/");
        } else if (authorAvatar.indexOf("blogblog.com/img/blank.gif") != -1) {
            if (defaultAvatar.indexOf("gravatar.com") != -1) {
                authorAvatar = defaultAvatar + "&s=" + avatarSize;
            } else {
                authorAvatar = defaultAvatar;
            }
        } else {
            authorAvatar = authorAvatar;
        }
        
        commentsHtml += "<div class=\"recent_avatar\"><img src=\"" + authorAvatar + "\" alt=\"" + authorName + "\"/></div><div class=\"recent_content\">";

        commentsHtml += "<b><a href=\"" + commentlink + "\">" + authorName + "</a></b>";
        var commHTML = entry.content.$t;
        var commBody = commHTML.replace(/(<([^>]+)>)/gi, "");
        if (commBody != "" && commBody.length > characters) {
            commBody = commBody.substring(0, characters);
            commBody += "&hellip;";
            if (showMorelink == true) {
                commBody += "" + moreLinktext + "";
            }
        } else {
            commBody = commBody;
        }
        commentsHtml += "<span>" + commBody + "</span><br><div class=\"recent_date\">" + commentDate + "</div></div>";
        commentsHtml += "</li></div>";
        }

    }

    commentsHtml += "</ul>";
    document.write(commentsHtml);
}