'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

/*
 * Base class for asset operation.
 */
class OperationBase extends WorkloadModuleBase{
	constructor(){
		super();
	}
	
	async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext){
		await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
		this.scState = this.createScState();
	}
	
	createScState() {
		throw new Error('sc workload error: "createScState" must be overidden in derived classes');
	}

	createFabricRequest(operation, args) {
		const request = (operation === 'ReadAsset' || operation === 'GetHistory');
		return {
			contractId: 'sc',
			contractVersion: '1.0',
			contractFunction: operation,
			contractArguments: Object.keys(args).map(k => args[k].toString()),
			readOnly: request
		};
	}
}
module.exports = OperationBase;
