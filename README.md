# Service

Description

## Usage

- How to use the service (upload something to a bucket, call the api, etc)
- How to call the API (methods, request bodies, authentication methods)

## Deployments

```
$ serverless create_domain -s {STAGE} [--param "environment={ENV}"]
$ serverless deploy -s {STAGE} [--param "environment={ENV}"]
```

## Testing

Remove those that do not apply
```
npm run test
npm run test:unit
npm run test:integration
npm run test:e2e
```

### Configuration

Any parameters to set, buckets to create manually, credentials to create, etc...

## Development notes

- things of note
- design decisions


## Serverless boilerplate

We use the following serverless plugins in our projects. New plugins can be used, however upon
introduction a clear explanation of why we need this plugin and how it solves our problems.

### Serverless plugins

#### Required

The below plugins are (pretty much) required for every project.

serverless-iam-roles-per-function
: This plugin is basically mandatory for all projects, it allows us to define the required
permissions for each function individually instead of defining for the project so all functions have
the same permissions.

link: [npm](https://www.npmjs.com/package/serverless-iam-roles-per-function)

serverless-webpack
: This plugin allows us to bundle and minimize our scripts and especially the dependencies of our
scripts. Instead of requiring our dependencies completely, webpack will only bundle those parts of
the dependency we actually use.

link: [npm](https://www.npmjs.com/package/serverless-webpack)

serverless-output-env
: This plugin allows us export our environment variables from the `serverless.yml` configuration
file so they can be imported and used in our tests. It also allows us to define test only
environment variables.

link: [npm](https://www.npmjs.com/package/serverless-output-env)

#### Optional

The below plugins are optional and should be included on a per project basis when the provided
functionality is required.

serverless-domain-manager
: This plugin allows us to create dns records for our APIs from our serverless projects. 

link: [npm](https://www.npmjs.com/package/serverless-domain-manager)

#### Deprecated / obsolete

These plugins are **NOT** used (anymore).

serverless-pseudo-parameters
: This plugin introduced variables for region and accountId within the serverless file. This
functionality is now provided out of the box by serverless itself.

serverless-reqvalidator-plugin : With this plugin request validation can be added to API Gateway
APIs. However since API Gateway cannot return specifics validation within the lambda function is
preferred.

alternative: use @middy/validator


### Node packages

middy
: middy is a middlware engine for AWS Lambda. It offers a lot of middlewares that can be used to
provider boilerplate functionality for setting up and 'shutting down' a lambda function. Middlewares
include things such as:

- json body parser
- http error handler
- validator
- log context injection
- flushing metrics
- etc..

link: [npm](https://www.npmjs.com/package/@middy/core) - [docs](https://middy.js.org/docs)