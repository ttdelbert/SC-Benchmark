'use strict';

const OperationBase = require('./utils/operation-base');
const ScState = require('./utils/sc-state');

class CreateAsset extends OperationBase {
	constructor() {
		super();
	}

	createScState() {
		return new ScState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const createAssetArgs = this.scState.getCreateAssetArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('CreateAsset', createAssetArgs));

	}
}

function createWorkloadModule() {
	return new CreateAsset();
}

module.exports.createWorkloadModule = createWorkloadModule;
