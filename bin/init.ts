#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { InitStack } from '../lib/init-stack';

const app = new cdk.App();
new InitStack(app, 'InitStack');
