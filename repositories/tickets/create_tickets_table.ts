import { CreateTableInput } from "@aws-sdk/client-dynamodb";
import client from "../../db";

const createTicketsTable = async () => {
    // Define the table schema
    const tableAttributes: CreateTableInput = {
        TableName: "Tickets",
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

export default createTicketsTable;