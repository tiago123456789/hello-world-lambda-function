const AWS = require("aws-sdk")

var credentials = new AWS.SharedIniFileCredentials({ profile: 'profile_here' });
AWS.config.credentials = credentials;

const lambdaClient = new AWS.Lambda({
    region: "us-east-1"
})

// lambdaClient
//     .invoke({
//         FunctionName: "hello-world-dev-hello",
//         InvocationType: "Event"
//     })
//     .promise()
//     .then(console.log)
//     .catch(console.log)


// lambdaClient
//     .invoke({
//         FunctionName: "hello-world-dev-hello",
//         InvocationType: "RequestResponse",
//         LogType: 'None'
//     })
//     .promise()
//     .then(console.log)
//     .catch(console.log)

// lambdaClient
//     .invoke({
//         FunctionName: "hello-world-dev-hello",
//         InvocationType: "RequestResponse",
//         LogType: 'Tail'
//     })
//     .promise()
//     .then(response => {
//         console.log({
//             ...response,
//             LogResult: Buffer.from(response.LogResult, "base64").toString("utf-8")
//         })
//     })
//     .catch(console.log)


// lambdaClient
//     .invoke({
//         FunctionName: "hello-world-dev-hello",
//         InvocationType: "RequestResponse",
//         LogType: 'Tail',
//         Payload: JSON.stringify({
//             name: "Tiago rosa da costa"
//         })
//     })
//     .promise()
//     .then(response => {
//         console.log({
//             ...response,
//             LogResult: Buffer.from(response.LogResult, "base64").toString("utf-8")
//         })
//     })
//     .catch(console.log)


// lambdaClient
// .invoke({
//     FunctionName: "hello-world-dev-hello",
//     InvocationType: "DryRun",
//     LogType: 'Tail'
// })
// .promise()
// .then(console.log)
// .catch(console.log)

