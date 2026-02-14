// ============================================
// MongoDB Schema Validation
// ============================================

// ============================================
// CREATE COLLECTION WITH SCHEMA VALIDATION
// ============================================

// Define strict validation rules for user1 collection
db.createCollection("user1", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "phone", "email", "address"],  // Required fields
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be string and it is required"
                },
                phone: {
                    bsonType: "string",
                    description: "must be string and it is required"
                },
                email: {
                    bsonType: "string",
                    description: "must be string and it is required"
                },
                address: {
                    bsonType: "string",
                    description: "must be string and it is required"
                }
            }
        }
    },
    validationLevel: "strict",    // Applies to all inserts and updates
    validationAction: "error"     // Rejects documents that don't match
})

// ============================================
// TEST SCHEMA VALIDATION
// ============================================

// This will fail - email is number instead of string
db.user1.insertOne({ email: 1 })  // ERROR: Document failed validation

// ============================================
// VALID INSERT EXAMPLE
// ============================================

// This will succeed - all fields present with correct types
db.user1.insertOne({
    name: "John Doe",
    phone: "+91-9876543210",
    email: "john.doe@example.com",
    address: "123 Main Street, Mumbai"
})

// ============================================
// VALIDATION LEVELS
// ============================================
/*
 * validationLevel options:
 * - "strict": Applies validation to all inserts and updates (default)
 * - "moderate": Applies validation to inserts and updates of valid documents
 *               Does not apply to existing invalid documents
 * 
 * validationAction options:
 * - "error": Reject documents that violate validation rules (default)
 * - "warn": Log validation violations but allow the operation
 */

// ============================================
// MODIFY EXISTING COLLECTION VALIDATION
// ============================================

// You can add validation to existing collections using:
db.runCommand({
    collMod: "existing_collection",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["field1", "field2"],
            properties: {
                field1: { bsonType: "string" },
                field2: { bsonType: "number" }
            }
        }
    },
    validationLevel: "moderate",
    validationAction: "warn"
})
