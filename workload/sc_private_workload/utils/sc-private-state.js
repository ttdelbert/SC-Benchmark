'use strict';


class ScPrivateState{

	constructor(assetNum, assetPostfix = 0){
		this.assetNum = assetNum;
		this.assetPostfix = assetPostfix;
	}
	
	/* Get a random integer for other function.
	 * @returns (Integer) 
	 */
	_getRandomNum(){
		var random = Math.ceil(Math.random() * this.assetNum);
		if(random == 0){
			return 1;
		}
		return random;
	}
	
	/* Get the arguments for creating a brand-new asset.
	 * @returns {object} The asset arguments.
	*/
	getCreateAssetArguments(){
		//var map = new Map();
		this.assetPostfix++;
		var assetName = 'asset' + (this.assetPostfix).toString();
		var assetProperty = 'Using test string to fill up blank - ' + (this.assetPostfix).toString();
		var assetOwner = 'song' + (this.assetPostfix).toString();
		var assetPrice =  100 * (this._getRandomNum());
		
		//map.set('assetname', assetName);
		//map.set('assetproperty', assetProperty);
		//map.set('owner', owner);
		//map.set('price', price);
		
		/*
		var privasset = '{"assetname":' + '"' + assetName + '"' + ',' 
			            + '"assetproperty":' + '"' + assetProperty + '"' + ','
			            + '"owner":' + '"' + owner + '"' + ','
			            + '"price":' + price + '}';
		*/
		//var privassetobj = {'assetname':assetName,'assetproperty':assetProperty,'owner':owner,'price':price};
		
		var privassetobj = {
				assetname: assetName,
				assetproperty: assetProperty,
				owner: assetOwner,
				price: assetPrice
		}
		var privassetJson = JSON.stringify(privassetobj); 
		//const buf = Buffer.from(privassetJson, 'base64');
		//scprivmap = new Map('scprivasset', buf);
		//return scprivmap;
		return privassetJson;
	}

	
	/* Get the arguments for reading an asset.
	 * @return {object} The asset arguments.
	 */
	getReadAssetArguments(){
		return {
			assetName: 'asset' + (this._getRandomNum()).toString()
		};
	}
	
}

module.exports = ScPrivateState;
