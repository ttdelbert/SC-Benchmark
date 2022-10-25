'use strict';

const OperationBase = require('./utils/operation-base');
const ScState = require('./utils/sc-state');

class GetHistory extends OperationBase {
	constructor() {
		super();
	}

	createScState() {
		return new ScState(this.roundArguments.assetNum, 0);
	}

	async submitTransaction() {
		const getHistoryArgs = this.scState.getHistoryArguments();
		await this.sutAdapter.sendRequests(this.createFabricRequest('GetHistory', getHistoryArgs));

	}
}

function createWorkloadModule() {
	return new GetHistory();
}

module.exports.createWorkloadModule = createWorkloadModule;
