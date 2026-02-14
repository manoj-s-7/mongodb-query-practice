// ============================================
// MongoDB Relationships - $lookup
// One-to-Many Relationship Example
// ============================================

// Create a new database for store example
use store_db

// ============================================
// CREATE USERS COLLECTION
// ============================================

db.createCollection("users")

// Insert user documents
db.users.insertMany([
    {
        "_id": "user1",
        "name": "Amit Sharma",
        "email": "amit.sharma@example.com",
        "phone": "+91-987654210",
        "address": "MG Road, Mumbai, Maharashtra"
    },
    {
        "_id": "user2",
        "name": "Priya Verma",
        "email": "priya.verma@example.com",
        "phone": "+91-987654211",
        "address": "Nehru Place, New Delhi, Delhi"
    },
    {
        "_id": "user3",
        "name": "Rahul Singh",
        "email": "rahul.singh@example.com",
        "phone": "+91-987654212",
        "address": "Sector 18, Noida, Uttar Pradesh"
    },
    {
        "_id": "user4",
        "name": "Anjali Nair",
        "email": "anjali.nair@example.com",
        "phone": "+91-987654213",
        "address": "Marine Drive, Kochi, Kerala"
    },
    {
        "_id": "user5",
        "name": "Vikram Desai",
        "email": "vikram.desai@example.com",
        "phone": "+91-987654214",
        "address": "Park Street, Kolkata, West Bengal"
    }
])

// ============================================
// CREATE ORDERS COLLECTION
// ============================================

db.createCollection("orders")

// Insert order documents (referencing user_id)
db.orders.insertMany([
    {
        "_id": "order1",
        "user_id": "user1",  // Foreign key reference
        "product": "Laptop",
        "amount": 50000,
        "order_date": "2024-08-01"
    },
    {
        "_id": "order2",
        "user_id": "user2",
        "product": "Mobile Phone",
        "amount": 15000,
        "order_date": "2024-08-05"
    },
    {
        "_id": "order3",
        "user_id": "user1",  // Same user with multiple orders
        "product": "Headphones",
        "amount": 2000,
        "order_date": "2024-08-10"
    },
    {
        "_id": "order4",
        "user_id": "user3",
        "product": "Tablet",
        "amount": 25000,
        "order_date": "2024-08-12"
    },
    {
        "_id": "order5",
        "user_id": "user4",
        "product": "Smart Watch",
        "amount": 8000,
        "order_date": "2024-08-15"
    }
])

// ============================================
// $lookup - JOIN COLLECTIONS
// ============================================

// Join users with their orders (similar to SQL LEFT JOIN)
db.users.aggregate([
    {
        $lookup: {
            from: "orders",           // Collection to join
            localField: "_id",        // Field from users collection
            foreignField: "user_id",  // Field from orders collection
            as: "orders"              // Output array field name
        }
    }
])

// ============================================
// EXPLANATION
// ============================================
/*
 * $lookup performs a left outer join between collections
 * 
 * Parameters:
 * - from: The collection to join with
 * - localField: Field from the current collection
 * - foreignField: Field from the 'from' collection
 * - as: Name of the new array field to add
 * 
 * Result: Each user document will have an 'orders' array
 *         containing all their orders
 * 
 * Example output:
 * {
 *   "_id": "user1",
 *   "name": "Amit Sharma",
 *   "email": "amit.sharma@example.com",
 *   ...
 *   "orders": [
 *     { "_id": "order1", "product": "Laptop", ... },
 *     { "_id": "order3", "product": "Headphones", ... }
 *   ]
 * }
 */
