'use strict';

const OperationBase = require('./utils/operation-base');
const ScState = require('./utils/sc-state');

class SellOriginalAsset extends OperationBase {
	constructor() {
		super();
	}

	createScState() {
		return new ScState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const sellOriginalAssetArgs = this.scState.getSellOriginalAssetArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('SellOriginalAsset', sellOriginalAssetArgs));

	}
}

function createWorkloadModule() {
	return new SellOriginalAsset();
}

module.exports.createWorkloadModule = createWorkloadModule;
