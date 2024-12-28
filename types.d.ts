interface Admission {
    id: string;          // Primary key
    name: string;        // Admission name
    capacity: number;    // Maximum number of admissions
    entryStartsAt: Date; // Entry start time
    entryEndsAt: Date;   // Entry end time
    saleStartsAt: Date;  // Sale start time
    saleEndsAt: Date;    // Sale end time
    price: number;       // Admission price
    fees: number;        // Additional fees
    eventId: string;     // FK: Links admission to an event
    tenantId: string;    // FK: Links admission to a tenant
    sectionId?: string;  // FK: Links admission to a section (optional)
    orderId?: string;    // FK: Links admission to an order (optional)
    ticketId?: string;   // FK: Links admission to tickets (optional)
}