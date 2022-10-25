'use strict';


class ScState{

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
		this.assetPostfix++;
		//add new var to receive the value of assetPostfix
	    //const postfix = this.assetPostfix;
		return {
			assetName: 'asset' + this.assetPostfix.toString(),
			assetProperty: 'Using test string to fill up blank - ' + this.assetPostfix.toString(),
			Owner: 'song' + this.assetPostfix.toString()
		};
	}

	/* Get the arguments for reading an asset.
	 * @return {object} The asset arguments.
	 */
	getReadAssetArguments(){ 
		return {
			assetName: 'asset' + (this._getRandomNum()).toString()
		};
	}

	/* Get the arguments for selling an original asset.
	 * @return {object} The asset arguments.
	 */
	getSellOriginalAssetArguments(){
		//const sellOrinRandomNum = this._getRandomNum();
		return {
			assetName: 'asset' + (this._getRandomNum()).toString(),
			newOwner: 'song' + (this._getRandomNum()).toString(),
			assetOriginalPrice: (100 * (this._getRandomNum())).toString()
		};
	}
	
	/* Get the arguments for processing an asset.
	 * @return {object} The asset arguments.
	 */
	getProcessAssetArguments(){
		//const processRandomNum = this._getRandomNum();
		return {
			assetName: 'asset' + (this._getRandomNum()).toString(),
			assetProcessInfo: 'using test string to fill up the blank - ' + this._getRandomNum().toString()
		};
	}	

	/* Get the arguments for selling a processed asset.
	 * @return {object} The asset arguments.
	 */
	getSellProcessedAssetArguments(){
		//const sellProcRandomNum = this._getRandomNum();
		return{
			assetName: 'asset' + this._getRandomNum().toString(),
			newOwner: 'song' + this._getRandomNum().toString(),
			assetProcessPrice: (1000 * this._getRandomNum()).toString()
		};
	}

	/* Get the arguments for geting the operational histoty of an asset.
	 * @return {object} The asset arguments.
	 */
	getHistoryArguments(){
		return{
			assetName: 'asset' + (this._getRandomNum()).toString(),
		};
	}

}

module.exports = ScState;
