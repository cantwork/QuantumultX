const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const postMethod = "POST";
const notifiTitle = "去广告脚本错误";

let body = JSON.parse($response.body);

if(url.indexOf("getrelatedbusiness") != -1 || url.indexOf("getbaiketurboqmrs") != -1 || url.indexOf("gettashuolist") != -1 ){
  if (body) {
    body.relatedBusiness=null;
    body.baikeTurboQmrs=null;
    body.data=null;
  }else{
    console.log(notifiTitle, "百科-getrelatedbusiness", "广告为undefined");
  }
} 

if(url.indexOf("getqbcontent") != -1 && method == getMethod){
  if (body && body.adsAll) {
    body.adsAll=null;
    
  }else{
    console.log(notifiTitle, "知道-getqbcontent", "广告为undefined");
  }
} 
if(url.indexOf("getqbfeed") != -1 && method == getMethod){
  
  if (body && body.data) {
    body.data=null;
    
  }else{
    console.log(notifiTitle, "知道-getqbfeed", "广告为undefined");
  }
} 

if(url.indexOf("getPbData") != -1 && method == getMethod){

  if (body && body.data) {
    body.data.asp_ad_list=null;
    body.data.banner_list=null;
    body.data.recommend_threads=null;
    
  }else{
    console.log(notifiTitle, "贴吧-getPbData", "广告为undefined");
  }
} 
if (url.indexOf("recommendpb/recomSiteTids") != -1 && method == getMethod) {
  
  if (body && body.data) {
    body.data.hot_list=null;
    body.data.site_list=null;
    
  }else{
    console.log(notifiTitle, "贴吧-recomSiteTids", "广告为undefined");
  }
}

if (url.indexOf("getstepgoodsad") != -1 || url.indexOf("getmarticle") != -1 || url.indexOf("relatefeed") != -1) {
  
  if (body && body.data) {
    body.data=null;
    
  }else{
    console.log(notifiTitle, "经验-recomSiteTids", "广告为undefined");
  }
}

body = JSON.stringify(body);

$done({
    body
});
