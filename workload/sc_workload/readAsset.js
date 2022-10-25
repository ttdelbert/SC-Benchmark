'use strict';

const OperationBase = require('./utils/operation-base');
const ScState = require('./utils/sc-state');

class ReadAsset extends OperationBase {
	constructor() {
		super();
	}

	createScState() {
		return new ScState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const readAssetArgs = this.scState.getReadAssetArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('ReadAsset', readAssetArgs));

	}
}

function createWorkloadModule() {
	return new ReadAsset();
}

module.exports.createWorkloadModule = createWorkloadModule;
