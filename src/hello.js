const middy = require('@middy/core');
const httpErrorHandler = require('@middy/http-error-handler');

const handler = async event => {
  const body = {
    message: "Hello, is it me you're looking for?",
    input: event,
  };

  return {
    statusCode: 200,
    body: JSON.stringify(body, null, 2),
  };
};

module.exports.handler = middy(handler)
  .use(httpErrorHandler());
