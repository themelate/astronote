//Script by Aneesh of www.bloggerplugins.org
//Released on August 19th August 2009
//Modifed by Themelate.com
function dateString(date)
{
    var tanggal = date.split("-");
    var year = tanggal[0];
    switch(tanggal[1])
    {
        case "01" : mounth = "January"; break;
        case "02" : mounth = "February"; break;
        case "03" : mounth = "March"; break;
        case "04" : mounth = "April"; break;
        case "05" : mounth = "May"; break;
        case "06" : mounth = "June"; break;
        case "07" : mounth = "July"; break;
        case "08" : mounth = "August"; break;
        case "09" : mounth = "September"; break;
        case "10" : mounth = "October"; break;
        case "11" : mounth = "November"; break;
        case "12" : mounth = "December"; break;
    }
    var day = tanggal[2];
    return day+" "+mounth+" "+year;
}

var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();
var dateurl = new Array();
function featured_post(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        relatedTitles[relatedTitlesNum] = entry.title.$t;
        
        dateurl[relatedTitlesNum]=entry.published.$t;
        dateurl[relatedTitlesNum]=dateurl[relatedTitlesNum].substring(0, 10);
        
        try 
        {thumburl[relatedTitlesNum]=entry.media$thumbnail.url;}
        
        
        catch (error){
        s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
        thumburl[relatedTitlesNum]=d;} else thumburl[relatedTitlesNum]='https://4.bp.blogspot.com/-LFOkyMPwgpo/VwatLrzt8AI/AAAAAAAAAaw/076jKeJLwKMUEqw-QOnmuq5_-o8F88W0w/s1600/blur.png';
        }
        
        if(relatedTitles[relatedTitlesNum].length>35) relatedTitles[relatedTitlesNum]=relatedTitles[relatedTitlesNum].substring(0, 35)+" ";
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
            relatedUrls[relatedTitlesNum] = entry.link[k].href;
            relatedTitlesNum++;
            }
        }
    }
}
function contains_thumbs(a, e) {
for(var j = 0; j < a.length; j++) if (a[j]==e) return true;
return false;
}
function printFeatured(titleFeat) {
    for(var i = 0; i < relatedUrls.length; i++)
    {
    if((!(relatedTitles[i])))
    {
    relatedUrls.splice(i,1);
    relatedTitles.splice(i,1);
    thumburl.splice(i,1);
    dateurl.splice(i,1);
    i--;
    
    }
    }


var r = Math.floor((relatedTitles.length - 1) * Math.random());
var i = 0;
var moreHtml;

if(relatedTitles.length>0) {
    var moreHtml = '<div id="featured-post"><h4>'+titleFeat+'</h4>';
}

while (i < relatedTitles.length && i < 30 && i<numresult) {
    moreHtml += '<div class="featured-post"><div class="overlay-featured"></div><div class="featured-post-detail">';
    if(i!=0) moreHtml += '';
    else moreHtml += '';
    moreHtml += '<div class="featured-post-date"><div style="height:20px;overflow:hidden"><a href="' + relatedUrls[r] + '">'+relatedTitles[r]+'</a></div>'+dateString(dateurl[r])+'</div></div>';
    moreHtml += '<img src="'+thumburl[r]+'"/></div>';
    if (r < relatedTitles.length - 1) {
    r++;
    } else {
    r = 0;
    }
i++;
}
if(relatedTitles.length>0) {
    moreHtml += "</div>";
document.write(moreHtml);
}
relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
dateurl.splice(0,dateurl.length);
relatedTitles.splice(0,relatedTitles.length);

}
