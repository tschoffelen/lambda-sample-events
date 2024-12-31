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

* [API Gateway AWS Proxy](events/aws/apigateway-aws-proxy.json)
* [API Gateway Authorizer](events/aws/apigateway-authorizer.json)
* [API Gateway Http API](events/aws/apigateway-http-api-proxy.json)
* [API Gateway Request Authorizer](events/aws/apigateway-request-authorizer.json)
* [AppSync](events/aws/appsync-resolver.json)
* [Application Load Balancer](events/aws/alb-request.json)
* [Batch Get Job](events/aws/batch-get-job.json)
* [Batch Submit Job](events/aws/batch-submit-job.json)
* [CloudFormation Create Request](events/aws/cloudformation-create-request.json)
* [CloudFront A/B Test](events/aws/cloudfront-ab-test.json)
* [CloudFront Access Request in Response](events/aws/cloudfront-access-request-in-response.json)
* [CloudFront HTTP Redirect](events/aws/cloudfront-http-redirect.json)
* [CloudFront Modify QueryString](events/aws/cloudfront-modify-querystring.json)
* [CloudFront Modify Response Header](events/aws/cloudfront-modify-response-header.json)
* [CloudFront Multiple Remote Calls Aggregate Response](events/aws/cloudfront-multiple-remote-calls-aggregate-response.json)
* [CloudFront Normalize Querystring](events/aws/cloudfront-normalize-querystring-to-improve-cache-hit.json)
* [CloudFront Redirect Unauthenticated Users](events/aws/cloudfront-redirect-unauthenticated-users.json)
* [CloudFront Redirect on Viewer Country](events/aws/cloudfront-redirect-on-viewer-country.json)
* [CloudFront Response Generation](events/aws/cloudfront-response-generation.json)
* [CloudFront Serve Object on Viewer Device](events/aws/cloudfront-serve-object-on-viewer-device.json)
* [CloudFront Simple Remote Call](events/aws/cloudfront-simple-remote-call.json)
* [CloudWatch](events/aws/cloudwatch-scheduled-event.json)
* [Cloudwatch Logs](events/aws/cloudwatch-logs.json)
* [CodeCommit Repository](events/aws/codecommit-repository.json)
* [CodePipeline Job](events/aws/codepipeline-job.json)
* [Cognito Sync Trigger](events/aws/cognito-sync-trigger.json)
* [Config Configuration Item Change Notification](events/aws/config-item-change-notification.json)
* [Config Oversized Configuration Item Change Notification](events/aws/config-oversized-item-change-notification.json)
* [Config Periodic Rule](events/aws/config-periodic-rule.json)
* [Connect Contact Flow](events/aws/connect-contact-flow-event.json)
* [Data Firehose Streams as Source](events/aws/kinesis-streams-as-source.json)
* [DynamoDB Update](events/aws/dynamodb-update.json)
* [Kinesis Data Analytics Compressed](events/aws/kinesis-analytics-compressed.json)
* [Kinesis Data Analytics DynamoDB](events/aws/kinesis-analytics-dynamodb.json)
* [Kinesis Data Analytics KPL](events/aws/kinesis-analytics-kpl.json)
* [Kinesis Data Analytics](events/aws/kinesis-analytics.json)
* [Kinesis Data Firehose Apachelog](events/aws/kinesis-apachelog.json)
* [Kinesis Data Firehose Cloudwatch Logs Processor](events/aws/kinesis-cloudwatch-logs-processor.json)
* [Kinesis Data Firehose Syslog](events/aws/kinesis-syslog.json)
* [Kinesis Data Firehose](events/aws/kinesis-kinesis-firehose.json)
* [Kinesis Data Stream](events/aws/kinesis-get-records.json)
* [Rekognition S3 Request](events/aws/rekognition-s3-request.json)
* [S3 Batch Operations Invocation](events/aws/s3-batch-invocation.json)
* [S3 Delete](events/aws/s3-delete.json)
* [S3 Put](events/aws/s3-put.json)
* [SES Email Receiving](events/aws/ses-email-receiving.json)
* [SNS Topic Notification](events/aws/sns-notification.json)
* [SQS](events/aws/sqs-receive-message.json)
* [SageMaker Ground Truth AnnotationConsolidation](events/aws/sagemaker-ground-truth-annotation-consolidation.json)
* [SageMaker Ground Truth PreHumanTask](events/aws/sagemaker-ground-truth-pre-human.json)
* [StepFunctions Error](events/aws/stepfunctions-error.json)
* [Work Mail](events/aws/workmail-email.json)

### Lex

* [Lex Book Car](events/lex/lex-book-car.json)
* [Lex Book Hotel](events/lex/lex-book-hotel.json)
* [Lex Make Appointment](events/lex/lex-make-appointment.json)
* [Lex Order Flowers](events/lex/lex-order-flowers.json)
* [Lex V2 Banking Bot](events/lex/lex-v2-banking-bot.json)
* [Lex V2 Book Car](events/lex/lex-v2-book-car.json)
* [Lex V2 Book Hotel](events/lex/lex-v2-book-hotel.json)

### Alexa

* [Alexa End Session](events/alexa/alexa-skills-kit-end-session.json)
* [Alexa Intent Answer](events/alexa/alexa-skills-kit-intent-answer.json)
* [Alexa Intent GetNewFact](events/alexa/alexa-skills-kit-intent-getnewfact.json)
* [Alexa Intent MyColorIs](events/alexa/alexa-skills-kit-intent-mycoloris.json)
* [Alexa Intent Recipe](events/alexa/alexa-skills-kit-intent-recipe.json)
* [Alexa Smart Home Control Turn Off Request](events/alexa/alexa-smart-home-smart-home-control-turn-off-request.json)
* [Alexa Smart Home Control Turn On Request](events/alexa/alexa-smart-home-smart-home-control-turn-on-request.json)
* [Alexa Smart Home Discovery Request](events/alexa/alexa-smart-home-smart-home-discovery-request.json)
* [Alexa Start Session](events/alexa/alexa-skills-kit-start-session.json)

Sample event payloads are copyright Amazon Web Services.
