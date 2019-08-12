const cdk = require('@aws-cdk/core');
const apigateway = require('@aws-cdk/aws-apigateway'); 
const lambda = require('@aws-cdk/aws-lambda');

class Lambdaec2Stack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const lambdaFunction = new lambda.Function(this, 'exampleFunction', {
      code: new lambda.AssetCode('src'),
      handler: 'index.handler',
      runtime: lambda.Runtime.NODEJS_10_X,
    });
    const api = new apigateway.RestApi(this, 'example', {
      restApiName: 'example API'
    });
    const example = api.root.addResource('example');
    const lambdaFunctionIntegration = new apigateway.LambdaIntegration(lambdaFunction);
    example.addMethod('GET', lambdaFunctionIntegration);
  }
}

module.exports = { Lambdaec2Stack }
