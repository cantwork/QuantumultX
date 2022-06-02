const url = $request.url;
const method = $request.method;
const getMethod = "GET";
const postMethod = "POST";
const notifiTitle = "去广告脚本错误";

let body = JSON.parse($response.body);

if(url.indexOf("/statuses/show.json") != -1 && method == getMethod){
  if (body && body.title_ad_pic) {
    body.title_ad_pic=null;
  }
} 
if(url.indexOf("/analysis/status/underlying_product.json") != -1 && method == getMethod){
  if (body && body.data) {
    body.data=[];
  }
}

body = JSON.stringify(body);

$done({
    body
});
