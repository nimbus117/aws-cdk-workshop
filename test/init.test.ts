import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import cdk = require('@aws-cdk/core');
import Init = require('../lib/init-stack');

test('SQS Queue Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Init.InitStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    haveResource('AWS::SQS::Queue', {
      VisibilityTimeout: 300,
    }),
  );
});

test('SNS Topic Created', () => {
  const app = new cdk.App();
  // WHEN
  const stack = new Init.InitStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(haveResource('AWS::SNS::Topic'));
});
