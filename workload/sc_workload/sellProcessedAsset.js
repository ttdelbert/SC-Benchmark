'use strict';

const OperationBase = require('./utils/operation-base');
const ScState = require('./utils/sc-state');

class SellProcessedAsset extends OperationBase {
	constructor() {
		super();
	}

	createScState() {
		return new ScState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const sellProcessedAssetArgs = this.scState.getSellProcessedAssetArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('SellProcessedAsset', sellProcessedAssetArgs));

	}
}

function createWorkloadModule() {
	return new SellProcessedAsset();
}

module.exports.createWorkloadModule = createWorkloadModule;
