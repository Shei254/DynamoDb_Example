import { DescribeTableCommand } from "@aws-sdk/client-dynamodb";
import client from "./db";
import createAdmissionsTable from "./repositories/admissions/create_admissions_table";
import createOrderItemTable from "./repositories/orderItem/create_order_item_table";
import createSectionsTable from "./repositories/section/create_sections_table";
import createTicketsTable from "./repositories/tickets/create_tickets_table";

const init = async () => {
    //Check if the table has already been created
    const tableNames: string[] = ["Admissions", "Tickets", "OrderItem", "Sections"];

    const tableNameResponse = await client.listTables();
    const allTables = new Set(tableNameResponse.TableNames);

    const missingTables = tableNames.filter(tableName => !allTables.has(tableName));
    missingTables.forEach(async (table) => {
        switch (table) {
            case "Admissions":
                await createAdmissionsTable();
                break;
            case "Tickets":
                await createTicketsTable();
                break;
            case "OrderItem":
                await createOrderItemTable();
                break;
            case "Sections":
                await createSectionsTable();
                break;
            default:
                console.error("Why are we here thou?? ", table);
        }
    });

    //Console Log The Addmissions Table
    const tableResponse = client.describeTable({
        TableName: "Admissions",
    });

    console.log(tableResponse);
};

(async () => {
    await init();
})();