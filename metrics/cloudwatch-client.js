'use strict';

const AWS = require('aws-sdk');
const denodeify = require('denodeify');

module.exports = class CloudWatchClient {

	constructor (opts) {
		opts = opts || {};
		this.region = opts.region || process.env.AWS_REGION;
		this.cloudWatch = new AWS.CloudWatch({region: this.region, apiVersion: '2010-08-01'});
		this.putMetric = denodeify(this.cloudWatch.putMetricData.bind(this.cloudWatch));
		this.namespace = opts.namespace || 'Lambda';
		this.functionName = opts.functionName || process.env.AWS_LAMBDA_FUNCTION_NAME;
	}

	count (metric, value) {
		if(process.env.NODE_ENV !== 'production') {
			return Promise.resolve();
		}

		value = value || 1;
		const params = {
			MetricData: [
				{
					MetricName: metric,
					Timestamp: new Date(),
					Value: value,
					Dimensions: [
						{
							Name: 'FunctionName',
							Value: this.functionName
						}
					]
				}
			],
			Namespace: this.namespace
		};

		return this.putMetric(params);
	}

};
