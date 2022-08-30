const middy = require('@middy/core');
const httpErrorHandler = require('@middy/http-error-handler');

const { logger, injectLambdaContext } = require('mkb-lambda-powertools/logger');

const { metrics, MetricUnits, logMetrics } = require('mkb-lambda-powertools/metrics');


const handler = async event => {
  const body = {
    message: "Hello, is it me you're looking for?",
    input: event,
  };

  logger.info(body);
  metrics.addMetric('LookingFor', MetricUnits.Count, 1);

  return {
    statusCode: 200,
    body: JSON.stringify(body, null, 2),
  };
};

module.exports.handler = middy(handler)
  .use(injectLambdaContext(logger))
  .use(logMetrics(metrics))
  .use(httpErrorHandler());
