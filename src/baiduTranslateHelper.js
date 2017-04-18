/*!
 * Baidu translate API help library
 * 
 * version: Unpublished
 * 
 * author: Joe <zicong.zheng@qq.com>
 * 
 * register date: 2017-4-8 <china time zone>
 * 
 * ref library: jquery.js , md5.js
 * 
 * description:
 * Provide the encapsulation request method and analysis for Baidu translation API.
 * Language list Url: http://api.fanyi.baidu.com/api/trans/product/apidoc#languageList
 * 
 * github url:
 * help doc url: none
 * 
 */

var baiduTranslate = {

	appid: '',
	appkey: '',

	/**
	 * @desc Translation API addresses are not recommended for setup and modification.
	 */
	apihttpUrl: 'http://api.fanyi.baidu.com/api/trans/vip/translate',
	apihttpsUrl: 'https://fanyi-api.baidu.com/api/trans/vip/translate',

	/**
	 * 
	 * method:setAppId
	 * 
	 * @param {String} appid_text
	 * 
	 * @desc
	 * Set api appid.
	 * 
	 */
	setAppId: function(appid_text) {
		if(typeof(appid_text) != undefined)
			baiduTranslate.appid = appid_text;
	},

	/**
	 * method:setAppkey
	 * 
	 * @param {String} appkey_text
	 * 
	 * @desc
	 * Set api appkey.
	 * 
	 */
	setAppKey: function(appkey_text) {
		if(typeof(appkey_text) != undefined)
			baiduTranslate.appkey = appkey_text;
	},

	/**
	 * method:setApihttpurl
	 * 
	 * @param {String} apihttpurl
	 * 
	 * @desc
	 * Set api apihttpUrl.
	 * 
	 */
	setApiHttpUrl: function(apihttpurl) {
		if(typeof(apihttpurl) != undefined)
			baiduTranslate.apihttpurl = apihttpurl;
	},

	/**
	 * method:setApihttpsurl
	 * 
	 * @param {String} apihttpsurl
	 * 
	 * @desc
	 * Set api apihttpsUrl.
	 * 
	 */
	setApiHttpsUrl: function(apihttpsurl) {
		if(typeof(apihttpsurl) != undefined)
			baiduTranslate.apihttpsUrl = apihttpsurl;
	},

	/**
	 * method:httpGetTranslate
	 * 
	 * @param {String} query - original
	 * @param {String} fromLanguage - Translation source language
	 * @param {String} toLanguage - Translation language
	 * @param {Deferred} dtd - Deferred Obj
	 * 
	 * @desc
	 * Through the http protocol using get way to request Baidu translation API to obtain the translation content.
	 * 
	 */
	httpGetTranslate: function(query, fromLanguage, toLanguage, dtd) {
		query = encodeURIComponent(query);
		var salt = (new Date).getTime();
		var str = baiduTranslate.appid + query + salt + baiduTranslate.appkey;
		var sign = MD5(str);
		$.ajax({
			type: "get",
			cache: false,
			async: true,
			url: baiduTranslate.apihttpUrl,
			dataType: 'jsonp',
			data: {
				'q': query,
				'appid': baiduTranslate.appid,
				'salt': salt,
				'from': fromLanguage,
				'to': toLanguage,
				'sign': sign
			},
			success: function(data) {
				dtd.resolve(data);
			},
			error: function() {
				dtd.reject();
			}
		});
	},

	/**
	 * method:httpPostTranslate
	 * 
	 * @param {String} query - original
	 * @param {String} fromLanguage - Translation source language
	 * @param {String} toLanguage - Translation language
	 * @param {Deferred} dtd - Deferred Obj
	 * 
	 * @desc
	 * Through the http protocol using Post way to request Baidu translation API to obtain the translation content.
	 * 
	 */
	httpPostTranslate: function(query, fromLanguage, toLanguage, dtd) {
		var salt = (new Date).getTime();
		var str = baiduTranslate.appid + query + salt + baiduTranslate.appkey;
		var sign = MD5(str);
		$.ajax({
			type: "post",
			cache: false,
			async: true,
			url: baiduTranslate.apihttpUrl,
			dataType: 'jsonp',
			data: {
				'q': query,
				'appid': baiduTranslate.appid,
				'salt': salt,
				'from': fromLanguage,
				'to': toLanguage,
				'sign': sign
			},
			success: function(data) {
				dtd.resolve(data);
			},
			error: function() {
				dtd.reject();
			}
		});
	},

	/**
	 * method:httpsGetTranslate
	 * 
	 * @param {String} query - original
	 * @param {String} fromLanguage - Translation source language
	 * @param {String} toLanguage - Translation language
	 * @param {Deferred} dtd - Deferred Obj
	 * 
	 * @desc
	 * Through the https protocol using get way to request Baidu translation API to obtain the translation content.
	 * 
	 */
	httpsGetTranslate: function(query, fromLanguage, toLanguage, dtd) {
		query = encodeURIComponent(query);
		var salt = (new Date).getTime();
		var str = baiduTranslate.appid + query + salt + baiduTranslate.appkey;
		var sign = MD5(str);
		$.ajax({
			type: "get",
			cache: false,
			async: true,
			url: baiduTranslate.apihttpsUrl,
			dataType: 'jsonp',
			data: {
				'q': query,
				'appid': baiduTranslate.appid,
				'salt': salt,
				'from': fromLanguage,
				'to': toLanguage,
				'sign': sign
			},
			success: function(data) {
				dtd.resolve(data);
			},
			error: function() {
				dtd.reject();
			}
		});
	},

	/**
	 * method:httpsPostTranslate
	 * 
	 * @param {String} query - original
	 * @param {String} fromLanguage - Translation source language
	 * @param {String} toLanguage - Translation language
	 * @param {Deferred} dtd - Deferred Obj
	 * 
	 * @desc
	 * Through the https protocol using Post way to request Baidu translation API to obtain the translation content.
	 * 
	 */
	httpsPostTranslate: function(query, fromLanguage, toLanguage, dtd) {
		var salt = (new Date).getTime();
		var str = baiduTranslate.appid + query + salt + baiduTranslate.appkey;
		var sign = MD5(str);
		$.ajax({
			type: "post",
			cache: false,
			async: true,
			url: baiduTranslate.apihttpsUrl,
			dataType: 'jsonp',
			data: {
				'q': query,
				'appid': baiduTranslate.appid,
				'salt': salt,
				'from': fromLanguage,
				'to': toLanguage,
				'sign': sign
			},
			success: function(data) {
				dtd.resolve(data);
			},
			error: function() {
				dtd.reject();
			}
		});
	},

	/**
	 * method:toFormat
	 * 
	 * @param {Object} sourceData - By translated data
	 * 
	 * @return {Object} Format Data
	 * 
	 * @desc
	 * Converts the original api return data format to the data format provided by the library
	 * 
	 */
	toFormat: function(sourceData) {
		try {
			var fromLanguage = sourceData.from;
			var toLanguage = sourceData.to;
			var src = sourceData.trans_result[0].src;
			var dst = sourceData.trans_result[0].dst;
			var formatData = {
				'from': fromLanguage,
				'to': toLanguage,
				'src': src,
				'dst': dst
			};
			return formatData;
		} catch(e) {
			console.log(e);
			return undefined;
		}
	}

};