# 翻译API JS库使用说明文档
> 阅读此文档可以迅速上手使用该JS库。
### 须知
* 使用该js库需要引用 jquery.js。
* 使用百度翻译API js库需要引用 md5.js。
* 使用该库需要了解jquery dferred对象。
* 提供对api的封装快速使用支持。
### 安装
* 本js库不提供NPM、Bower、NuGet支持
* 允许自行提供上述程序包支持
* 直接下载拖入使用
### 使用
#### Google翻译API使用
针对Google翻译API进一步封装的js库使用方式
该js库的方法列表

| 方法名称  | 方法描述  |
| ------------ | ------------ |
| getTranslate  |  进行翻译  |
| toFormat  | 把翻译结果格式转换为本js库提供的格式 |

案例
```javascript
//Create deferred object
var dtd = $.Deferred();
//Success method
dtd.done(function(data) {
	// data : Translate result
});
//Fail method
dtd.fail(function() {
	Console.log("Service Exception")
});
//User translate method
googleTranslate.getTranslate(query, fromL, toL, dtd)
```
默认返回结果示例
```
{
    query {
        count1,
        created2017-04-18T013105Z,
        langzh-CN,
        results {
            json {
                json [
                    { json { json [ 苹果, Apple, null, null, 1 ] } },
                    null,
                    en,
                    null,
                    null,
                    null,
                    0.60465115,
                    null,
                    {
                        json [
                            { jsonen },
                            null,
                            { json0.60465115 },
                            { jsonen }
                        ]
                    }
                ]
            }
        }
    }
}
```
本库格式化结果示例
```
{"from":"en","to":"zh-CN","src":"Apple","dst":"苹果"}
```











