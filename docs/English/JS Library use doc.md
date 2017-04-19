# Translate API JS library usage documentation
> Read this document to get started with the JS library quickly.
### Notice
* Use the js library to refer to jquery.js.
* Use Baidu translation API js library need to refer to md5.js.
* Use this library to understand the jquery deferred object.
* Provides fast support for api encapsulation.
### Install
* This js library does not provide NPM, Bower, NuGet support
* Allows itself to provide the above package support
* Direct download dragged into use
### Use
#### Use Google Translate API
For the Google translation API to further encapsulate the js library use
The list of methods for the js library

| Method name  | Method description  |
| ------------ | ------------ |
| getTranslate  |  Conduct Translate  |
| toFormat  | Converts the translation result format to the format provided by this js library |

Demo
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
//Use translate method
googleTranslate.getTranslate(query, fromL, toL, dtd)
```
Example of the default return result
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
Example of formatting the library
```
{"from":"en","to":"zh-CN","src":"Apple","dst":"苹果"}
```
#### Baidu translation API use
For the Baidu translation API to further encapsulate the js library to use the way
The list of methods for the js library

|  Method name  | Method description  |
| ------------ | ------------ |
| setAppId  |  set Api AppId  |
| setAppKey  | set Api AppKey |
| httpGetTranslate | Translate via Api http address |
| httpsGetTranslate | Translate via Api https address |
| toFormat  | Converts the translation result format to the format provided by this js library |

Demo
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
//Use translate method
baiduTranslate.httpsGetTranslate(query, fromL, toL, dtd)
```
Example of the default return result
```
{"from":"en","to":"zh","trans_result":[{"src":"Apple","dst":"苹果"}]}
```
Example of formatting the library
```
{"from":"en","to":"zh","src":"Apple","dst":"苹果"}
```
