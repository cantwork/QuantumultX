const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const postMethod = "POST";
const notifiTitle = "去广告脚本错误";

let body = JSON.parse($response.body);

console.log('贴吧h5-帖子详情');
console.log(body);

if(url.indexOf("tieba.baidu.com/mg/p/getPbData") != -1 && method == getMethod){
  console.log('贴吧h5-帖子详情');
  if (body.res && body.res.data) {
    body.res.data.asp_ad_list=null;
    body.res.data.banner_list=null;
    body.res.data.recommend_threads=null;
    console.log('成功');
  }else{
    $notification.post(notifiTitle, "贴吧-getPbData", "广告为undefined");
  }
} else if (url.indexOf("tieba.baidu.com/mo/q/recommendpb/recomSiteTids") != -1 && method == postMethod) {
  console.log('贴吧h5-帖子底部推荐');
  if (body.res && body.res.data) {
    body.res.data.hot_list=[];
    body.res.data.site_list=[];
    console.log('成功');
  }else{
    $notification.post(notifiTitle, "贴吧-recomSiteTids", "广告为undefined");
  }
  
}

body = JSON.stringify(body);

$done({
    body
});
