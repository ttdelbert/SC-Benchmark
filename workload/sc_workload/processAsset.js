'use strict';

const OperationBase = require('./utils/operation-base');
const ScState = require('./utils/sc-state');

class ProcessAsset extends OperationBase {
	constructor() {
		super();
	}

	createScState() {
		return new ScState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const processAssetArgs = this.scState.getProcessAssetArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('ProcessAsset', processAssetArgs));

	}
}

function createWorkloadModule() {
	return new ProcessAsset();
}

module.exports.createWorkloadModule = createWorkloadModule;
