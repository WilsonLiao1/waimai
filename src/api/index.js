/**
 * 接口请求函数
 */

 import ajax from "./ajax";

 //1、根据经纬度获取位置详情
 export default reqAddress = (geohash) => ajax(`/position/${geohash}`)
 //2、获取食品分类列表
 export default reqFoodTypes = () => ajax(`/index_category`)
 //3、根据经纬度获取商铺列表
 export default reqShops = (longtitude,latitude) => ajax(`/shops`,{longtitude,latitude})
 //4、根据经纬度和关键字搜索商铺列表
 //export default reqAddress = () => ajax()
 //5、获取一次性验证码
 //export default reqAddress = () => ajax()
 //6、用户名密码登陆
 //export default reqAddress = () => ajax()
 //7、发送短信验证码
 //export default reqAddress = () => ajax()
 //8、手机号验证码登陆
 //export default reqAddress = () => ajax()
 //9、根据会话获取用户信息
 //export default reqAddress = () => ajax()
 //10、用户登出
 //export default reqAddress = () => ajax()