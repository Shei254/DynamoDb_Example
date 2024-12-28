import { DynamoDB, CreateTableCommandInput, CreateTableCommand, CreateTableInput } from "@aws-sdk/client-dynamodb";
import client from "../../db";

const createSectionsTable = async () => {
    // Define the table schema
    const tableAttributes: CreateTableInput = {
        TableName: "Sections",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" }, // Primary key
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "S" },
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
        },
    };


    return client.createTable(tableAttributes);
};

export default createSectionsTable;