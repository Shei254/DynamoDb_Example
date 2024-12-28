import { CreateTableInput } from "@aws-sdk/client-dynamodb";
import client from "../../db";

const createAdmissionsTable = async () => {
    // Define the admissions table schema
    const tableAttributes: CreateTableInput = {
        TableName: "Admissions",
        KeySchema: [
            { AttributeName: "id", KeyType: "HASH" }, // Primary key
        ],
        AttributeDefinitions: [
            { AttributeName: "id", AttributeType: "S" },
            { AttributeName: "eventId", AttributeType: "S" }, // GSI for Event
            { AttributeName: "tenantId", AttributeType: "S" }, // GSI for Tenant
            { AttributeName: "sectionId", AttributeType: "S" }, // GSI for Section
            { AttributeName: "orderId", AttributeType: "S" }, // GSI for Orders
            { AttributeName: "ticketId", AttributeType: "S" }, // GSI for Tickets
        ],
        GlobalSecondaryIndexes: [
            {
                IndexName: "EventIdIndex", // GSI to query by Event
                KeySchema: [{ AttributeName: "eventId", KeyType: "HASH" }],
                Projection: { ProjectionType: "ALL" },
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5,
                },
            },
            {
                IndexName: "TenantIdIndex", // GSI to query by Tenant
                KeySchema: [{ AttributeName: "tenantId", KeyType: "HASH" }],
                Projection: { ProjectionType: "ALL" },
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5,
                },
            },
            {
                IndexName: "SectionIdIndex", // GSI to query by Section
                KeySchema: [{ AttributeName: "sectionId", KeyType: "HASH" }],
                Projection: { ProjectionType: "ALL" },
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5,
                },
            },
            {
                IndexName: "OrderIdIndex", // GSI to query by Orders
                KeySchema: [{ AttributeName: "orderId", KeyType: "HASH" }],
                Projection: { ProjectionType: "ALL" },
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5,
                },
            },
            {
                IndexName: "TicketIdIndex", // GSI to query by Tickets
                KeySchema: [{ AttributeName: "ticketId", KeyType: "HASH" }],
                Projection: { ProjectionType: "ALL" },
                ProvisionedThroughput: {
                    ReadCapacityUnits: 5,
                    WriteCapacityUnits: 5,
                },
            },
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 5,
            WriteCapacityUnits: 5,
        },
    };


    return client.createTable(tableAttributes);
};

export default createAdmissionsTable;