'use strict';

const OperationPrivateBase = require('./utils/operation-private-base');
const ScPrivateState = require('./utils/sc-private-state');

class PrivateDeal extends OperationPrivateBase {
	constructor() {
		super();
	}

	createScPrivateState() {
		return new ScPrivateState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const privateDealArgs = this.scPrivateState.getCreateAssetArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('PrivateDeal', privateDealArgs));

	}
}

function createWorkloadModule() {
	return new PrivateDeal();
}

module.exports.createWorkloadModule = createWorkloadModule;
