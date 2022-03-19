const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const postMethod = "POST";
const notifiTitle = "去广告脚本错误";

let body = JSON.parse($response.body);

if(url.indexOf("tieba.baidu.com/mg/p/getPbData") != -1 && method == getMethod){
  console.log('贴吧h5-帖子详情页');
  if (body.res && body.res.data) {
    body.res.data.asp_ad_list=null;
    body.res.data.banner_list=null;
    body.res.data.recommend_threads=null;
    console.log('成功');
  }else{
    $notification.post(notifiTitle, "贴吧-getPbData", "广告为undefined");
  }
}

body = JSON.stringify(body);

$done({
    body
});
