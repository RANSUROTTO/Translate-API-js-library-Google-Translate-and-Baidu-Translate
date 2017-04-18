/*!
 * Google translate API help library
 * 
 * version: Unpublished
 * 
 * author: Joe <zicong.zheng@qq.com>
 * 
 * register date: 2017-4-9 <china time zone>
 * 
 * ref library: jquery.js 
 * 
 * description:
 * Provide the encapsulation request method and analysis for Google translation API.
 * Language list Url: http://api.fanyi.Google.com/api/trans/product/apidoc#languageList
 * 
 * github url:
 * help doc url: none
 * 
 */

var googleTranslate = {

	/**
	 * Modifying the following parameters will probably not be able to get normal translation results.
	 */
	client: 'gtx',
	dt: 't',

	/**
	 * @desc Translation API addresses are not recommended for setup and modification.
	 */

	apiUrl: 'https://translate.google.cn/translate_a/single',

	/**
	 * method:getTranslate
	 * 
	 * @param {String} query - original
	 * @param {String} fromLanguage - Translation source language
	 * @param {String} toLanguage - Translation language
	 * @param {Deferred} dtd - Deferred Obj
	 * 
	 * @desc
	 * Through the https protocol using get way to request Google translation API to obtain the translation content.
	 * 
	 */
	getTranslate: function(query, fromLanguage, toLanguage, dtd) {
		query = encodeURIComponent(query);
		$.ajax({
			url: 'http://query.yahooapis.com/v1/public/yql',
			dataType: 'jsonp',
			data: {
				q: "select * from json where url=\" http://translate.google.cn/translate_a/single?client=" + googleTranslate.client + "&sl=" + fromLanguage + "&tl=" + toLanguage + "&dt=t&q=" + query + "\"",
				format: "json"
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
		try{
			var toLanguage = sourceData.query.lang;
			var fromLanguage = sourceData.query.results.json.json[2];
			var dst = sourceData.query.results.json.json[0].json.json[0];
			var src = sourceData.query.results.json.json[0].json.json[1];
			var formatData = {
				'from': fromLanguage,
				'to': toLanguage,
				'src': src,
				'dst': dst
			};
			return formatData;
		}catch(e){
			console.log(e);
			return undefined;
		}
	}
};