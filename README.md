# AWS Lambda sample events

This is a library of sample event payloads for AWS Lambda.

They're the same ones that you will find as templates for test events in the
AWS Lambda console, but putting them in this repo might make them slightly
easier to access.

## Usage

Browse the list of JSON files below, or use them NPM package to use them
directly in your tests:

```shell
npm install -D lambda-sample-events
```

```javascript
const events = require('lambda-sample-events');

const myPayload = events['s3-put'];
console.log(myPayload);
```

## Events list

<!-- Note for editors: everything below this comment is auto-generated. -->

### AWS

* [API Gateway AWS Proxy - `apigateway-aws-proxy`](events/aws/apigateway-aws-proxy.json)
* [API Gateway Authorizer - `apigateway-authorizer`](events/aws/apigateway-authorizer.json)
* [AppSync - `appsync-resolver`](events/aws/appsync-resolver.json)
* [Batch Get Job - `batch-get-job`](events/aws/batch-get-job.json)
* [Batch Submit Job - `batch-submit-job`](events/aws/batch-submit-job.json)
* [CloudFormation Create Request - `cloudformation-create-request`](events/aws/cloudformation-create-request.json)
* [CloudFront A/B Test - `cloudfront-ab-test`](events/aws/cloudfront-ab-test.json)
* [CloudFront Access Request in Response - `cloudfront-access-request-in-response`](events/aws/cloudfront-access-request-in-response.json)
* [CloudFront HTTP Redirect - `cloudfront-http-redirect`](events/aws/cloudfront-http-redirect.json)
* [CloudFront Modify QueryString - `cloudfront-modify-querystring`](events/aws/cloudfront-modify-querystring.json)
* [CloudFront Modify Response Header - `cloudfront-modify-response-header`](events/aws/cloudfront-modify-response-header.json)
* [CloudFront Multiple Remote Calls Aggregate Response - `cloudfront-multiple-remote-calls-aggregate-response`](events/aws/cloudfront-multiple-remote-calls-aggregate-response.json)
* [CloudFront Normalize Querystring - `cloudfront-normalize-querystring-to-improve-cache-hit`](events/aws/cloudfront-normalize-querystring-to-improve-cache-hit.json)
* [CloudFront Redirect Unauthenticated Users - `cloudfront-redirect-unauthenticated-users`](events/aws/cloudfront-redirect-unauthenticated-users.json)
* [CloudFront Redirect on Viewer Country - `cloudfront-redirect-on-viewer-country`](events/aws/cloudfront-redirect-on-viewer-country.json)
* [CloudFront Response Generation - `cloudfront-response-generation`](events/aws/cloudfront-response-generation.json)
* [CloudFront Serve Object on Viewer Device - `cloudfront-serve-object-on-viewer-device`](events/aws/cloudfront-serve-object-on-viewer-device.json)
* [CloudFront Simple Remote Call - `cloudfront-simple-remote-call`](events/aws/cloudfront-simple-remote-call.json)
* [CloudWatch - `cloudwatch-scheduled-event`](events/aws/cloudwatch-scheduled-event.json)
* [Cloudwatch Logs - `cloudwatch-logs`](events/aws/cloudwatch-logs.json)
* [CodeCommit Repository - `codecommit-repository`](events/aws/codecommit-repository.json)
* [CodePipeline Job - `codepipeline-job`](events/aws/codepipeline-job.json)
* [Cognito Sync Trigger - `cognito-sync-trigger`](events/aws/cognito-sync-trigger.json)
* [Config Configuration Item Change Notification - `config-item-change-notification`](events/aws/config-item-change-notification.json)
* [Config Oversized Configuration Item Change Notification - `config-oversized-item-change-notification`](events/aws/config-oversized-item-change-notification.json)
* [Config Periodic Rule - `config-periodic-rule`](events/aws/config-periodic-rule.json)
* [Connect Contact Flow - `connect-contact-flow-event`](events/aws/connect-contact-flow-event.json)
* [DynamoDB Update - `dynamodb-update-json`](events/aws/dynamodb-update-json.json)
* [DynamoDB Update - `dynamodb-update`](events/aws/dynamodb-update.json)
* [Kinesis Data Analytics - `kinesis-analytics`](events/aws/kinesis-analytics.json)
* [Kinesis Data Analytics Compressed - `kinesis-analytics-compressed`](events/aws/kinesis-analytics-compressed.json)
* [Kinesis Data Analytics DynamoDB - `kinesis-analytics-dynamodb`](events/aws/kinesis-analytics-dynamodb.json)
* [Kinesis Data Analytics KPL - `kinesis-analytics-kpl`](events/aws/kinesis-analytics-kpl.json)
* [Kinesis Data Firehose - `kinesis-kinesis-firehose`](events/aws/kinesis-kinesis-firehose.json)
* [Kinesis Data Firehose Apachelog - `kinesis-apachelog`](events/aws/kinesis-apachelog.json)
* [Kinesis Data Firehose Cloudwatch Logs Processor - `kinesis-cloudwatch-logs-processor`](events/aws/kinesis-cloudwatch-logs-processor.json)
* [Kinesis Data Firehose Streams as Source - `kinesis-streams-as-source`](events/aws/kinesis-streams-as-source.json)
* [Kinesis Data Firehose Syslog - `kinesis-syslog`](events/aws/kinesis-syslog.json)
* [Kinesis Data Stream - `kinesis-get-records`](events/aws/kinesis-get-records.json)
* [Rekognition S3 Request - `rekognition-s3-request`](events/aws/rekognition-s3-request.json)
* [S3 Delete - `s3-delete`](events/aws/s3-delete.json)
* [S3 Put - `s3-put`](events/aws/s3-put.json)
* [SES Email Receiving - `ses-email-receiving`](events/aws/ses-email-receiving.json)
* [SNS Topic Notification - `sns-notification`](events/aws/sns-notification.json)
* [SQS - `sqs-receive-message`](events/aws/sqs-receive-message.json)
* [SageMaker Ground Truth AnnotationConsolidation - `sagemaker-ground-truth-annotation-consolidation`](events/aws/sagemaker-ground-truth-annotation-consolidation.json)
* [SageMaker Ground Truth PreHumanTask - `sagemaker-ground-truth-pre-human`](events/aws/sagemaker-ground-truth-pre-human.json)
* [StepFunctions Error - `stepfunctions-error`](events/aws/stepfunctions-error.json)

### Lex

* [Lex Book Car - `lex-book-car`](events/lex/lex-book-car.json)
* [Lex Book Hotel - `lex-book-hotel`](events/lex/lex-book-hotel.json)
* [Lex Make Appointment - `lex-make-appointment`](events/lex/lex-make-appointment.json)
* [Lex Order Flowers - `lex-order-flowers`](events/lex/lex-order-flowers.json)

### Alexa

* [Alexa End Session - `alexa-skills-kit-end-session`](events/alexa/alexa-skills-kit-end-session.json)
* [Alexa Intent Answer - `alexa-skills-kit-intent-answer`](events/alexa/alexa-skills-kit-intent-answer.json)
* [Alexa Intent GetNewFact - `alexa-skills-kit-intent-getnewfact`](events/alexa/alexa-skills-kit-intent-getnewfact.json)
* [Alexa Intent MyColorIs - `alexa-skills-kit-intent-mycoloris`](events/alexa/alexa-skills-kit-intent-mycoloris.json)
* [Alexa Intent Recipe - `alexa-skills-kit-intent-recipe`](events/alexa/alexa-skills-kit-intent-recipe.json)
* [Alexa Smart Home - Control - `alexa-smart-home-control`](events/alexa/alexa-smart-home-control.json)
* [Alexa Smart Home Control Turn Off Request - `alexa-smart-home-smart-home-control-turn-off-request`](events/alexa/alexa-smart-home-smart-home-control-turn-off-request.json)
* [Alexa Smart Home Control Turn On Request - `alexa-smart-home-smart-home-control-turn-on-request`](events/alexa/alexa-smart-home-smart-home-control-turn-on-request.json)
* [Alexa Smart Home Discovery Request - `alexa-smart-home-smart-home-discovery-request`](events/alexa/alexa-smart-home-smart-home-discovery-request.json)
* [Alexa Start Session - `alexa-skills-kit-start-session`](events/alexa/alexa-skills-kit-start-session.json)
