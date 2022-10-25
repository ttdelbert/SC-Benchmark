'use strict';

const OperationPrivateBase = require('./utils/operation-private-base');
const ScPrivateState = require('./utils/sc-private-state');

class ReadAssetPrivate extends OperationPrivateBase {
	constructor() {
		super();
	}

	createScPrivateState() {
		return new ScPrivateState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const readAssetPrivateArgs = this.scPrivateState.getReadAssetArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('ReadAssetPrivate', readAssetPrivateArgs));

	}
}

function createWorkloadModule() {
	return new ReadAssetPrivate();
}

module.exports.createWorkloadModule = createWorkloadModule;
