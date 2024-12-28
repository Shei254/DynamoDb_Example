import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb"
import client from "../../db";

const documentClient = DynamoDBDocumentClient.from(client);

export const createDocument = async (admission: Admission) => {
    await documentClient.send(new PutCommand({
        TableName: "Admissions",
        Item: admission
    }));
}