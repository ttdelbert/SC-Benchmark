'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

/*
 * Base class for asset operation.
 */
class OperationPrivateBase extends WorkloadModuleBase{
	constructor(){
		super();
	}
	
	async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext){
		await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
		this.scPrivateState = this.createScPrivateState();
	}
	
	createScPrivateState() {
		throw new Error('sc private workload error: "createScPrivateState" must be overidden in derived classes');
	}

	createFabricRequest(operation, args) {
		if (operation === 'PrivateDeal'){
			return {
				contractId: 'sc_private',
				contractVersion: '1.0',
				contractFunction: operation,
				transientMap: {'scprivasset': args},
				readOnly: false
			};
		}

		else {
			return {
				contractId: 'sc_private',
				contractVersion: '1.0',
				contractFunction: operation,
				contractArguments: Object.keys(args).map(k => args[k].toString()),
				readOnly: true
			};
		}
	}

}
module.exports = OperationPrivateBase;
