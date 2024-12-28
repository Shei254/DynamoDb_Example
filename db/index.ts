import { DynamoDB } from "@aws-sdk/client-dynamodb";

const client = new DynamoDB({
    region: "us-east",
    endpoint: "http://localhost:8000"
});

export default client;