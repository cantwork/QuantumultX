const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const postMethod = "POST";
const notifiTitle = "去广告脚本错误";

let body = JSON.parse($response.body);

if(url.indexOf("/statuses/show.json") != -1 && method == getMethod){
  console.log('雪球/statuses/show.json');
  if (body && body.title_ad_pic) {
    body.title_ad_pic=null;
    console.log('成功');
  }else{
    $notification.post(notifiTitle, "雪球show.json", "广告为undefined");
  }
} 

body = JSON.stringify(body);

$done({
    body
});
