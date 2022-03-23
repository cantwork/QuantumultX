const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const postMethod = "POST";
const notifiTitle = "去广告脚本错误";

let body = JSON.parse($response.body);

if(url.indexOf("getrelatedbusiness") != -1 || url.indexOf("getbaiketurboqmrs") != -1 || url.indexOf("gettashuolist") != -1 ){
  console.log('百科h5-ad');
  if (body) {
    body.relatedBusiness=null;
    body.baikeTurboQmrs=null;
    body.data=null;
    console.log('成功');
  }else{
    console.log(notifiTitle, "百科-getrelatedbusiness", "广告为undefined");
  }
} 

if(url.indexOf("getPbData") != -1 && method == getMethod){
  console.log('贴吧h5-帖子详情');
  if (body && body.data) {
    body.data.asp_ad_list=null;
    body.data.banner_list=null;
    body.data.recommend_threads=null;
    console.log('成功');
  }else{
    console.log(notifiTitle, "贴吧-getPbData", "广告为undefined");
  }
} 
if (url.indexOf("recommendpb/recomSiteTids") != -1 && method == getMethod) {
  console.log('贴吧h5-底部推荐');
  if (body && body.data) {
    body.data.hot_list=null;
    body.data.site_list=null;
    console.log('成功');
  }else{
    console.log(notifiTitle, "贴吧-recomSiteTids", "广告为undefined");
  }
}

if (url.indexOf("getstepgoodsad") != -1 || url.indexOf("getmarticle") != -1 || url.indexOf("relatefeed") != -1) {
  console.log('经验h5-广告&底部推荐');
  if (body && body.data) {
    body.data=null;
    console.log('成功');
  }else{
    console.log(notifiTitle, "经验-recomSiteTids", "广告为undefined");
  }
}

body = JSON.stringify(body);

$done({
    body
});
