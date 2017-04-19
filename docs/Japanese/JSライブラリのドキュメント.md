# 翻訳API JSライブラリのドキュメント
> 本書を読んですぐにJSライブラリを使用して始めることができます。
### お知らせ
* これを使用すると、ライブラリはjquery.jsを参照する必要がJS。
* JSライブラリがmd5.js.を参照する必要がBaiduの翻訳APIを使用します
* このライブラリを使用すると、jqueryの繰延オブジェクトを知っている必要があります。
* サポートへの迅速なアクセスを提供するために、APIパッケージ。
### インストール
* これは、ライブラリはNPM、バウアー、NuGetのサポートを提供していませんJS
* 自分は上記のパッケージにサポートを提供することを許可します
* ダイレクトダウンロード利用にドラッグ
### 使用
#### APIを使ってGoogle翻訳
さらにGoogle翻訳APIパッケージJSライブラリを使用するために
方法JSライブラリリスト

| メソッド名  | 方法について説明します  |
| ------------ | ------------ |
| getTranslate  |  翻訳  |
| toFormat  | 翻訳結果指向のフォーマット変換形式JSライブラリが提供します |

ケース
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
デフォルトでは、結果の例を返します。
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
この典型的なライブラリ形式結果
```
{"from":"en","to":"zh-CN","src":"Apple","dst":"苹果"}
```
#### BaiduはAPIを使用して翻訳しました
さらにBaiduの翻訳APIパッケージJSライブラリを使用するために
方法JSライブラリリスト

| メソッド名  | 方法について説明します  |
| ------------ | ------------ |
| setAppId  |  セットアップ Api AppId  |
| setAppKey  | セットアップ Api AppKey |
| httpGetTranslate | アピのhttpアドレスによる翻訳 |
| httpsGetTranslate |アピhttpsのアドレスで翻訳 |
| toFormat  | 翻訳結果指向のフォーマット変換形式JSライブラリが提供します |

ケース
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
デフォルトでは、結果の例を返します。
```
{"from":"en","to":"zh","trans_result":[{"src":"Apple","dst":"苹果"}]}
```
この典型的なライブラリ形式結果
```
{"from":"en","to":"zh","src":"Apple","dst":"苹果"}
```
