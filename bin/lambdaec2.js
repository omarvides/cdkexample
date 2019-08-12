#!/usr/bin/env node

// @ts-ignore: Cannot find declaration file
require('source-map-support/register');
const cdk = require('@aws-cdk/core');
const { Lambdaec2Stack } = require('../lib/lambdaec2-stack');

const app = new cdk.App();
new Lambdaec2Stack(app, 'Lambdaec2Stack');
