// ============================================
// MongoDB Indexes
// Performance Optimization
// ============================================

// Switch to index example database
use store_index_db

// ============================================
// UNDERSTANDING QUERY PERFORMANCE
// ============================================

// Count total documents in orders collection
db.orders.find().count()

// ============================================
// QUERY WITHOUT INDEX
// ============================================

// Query orders by nested product_id WITHOUT index
// Use explain() to see execution statistics
db.orders.find({
    "items.product_id": "p103"
}).explain("executionStats")

/*
 * Without index, MongoDB performs a COLLECTION SCAN (COLLSCAN)
 * - Scans every document in the collection
 * - Slower for large collections
 * - executionStats will show:
 *   - totalDocsExamined: Number of documents scanned
 *   - executionTimeMillis: Time taken
 */

// ============================================
// CREATE INDEX
// ============================================

// Create index on nested field items.product_id
// 1 = ascending order, -1 = descending order
db.orders.createIndex({ "items.product_id": 1 })

// ============================================
// VIEW ALL INDEXES
// ============================================

// List all indexes on the collection
db.orders.getIndexes()

/*
 * Default index:
 * { "_id": 1 } - Always created automatically
 * 
 * Our custom index:
 * { "items.product_id": 1 }
 */

// ============================================
// QUERY WITH INDEX
// ============================================

// Same query now uses the INDEX (IXSCAN)
db.orders.find({
    "items.product_id": "p103"
}).explain("executionStats")

/*
 * With index, MongoDB performs an INDEX SCAN (IXSCAN)
 * - Only scans relevant index entries
 * - Much faster for large collections
 * - executionStats will show:
 *   - totalDocsExamined: Fewer documents scanned
 *   - executionTimeMillis: Reduced time
 *   - Using index: { "items.product_id": 1 }
 */

// ============================================
// INDEX TYPES
// ============================================

// Single Field Index
db.collection.createIndex({ field: 1 })

// Compound Index (multiple fields)
db.collection.createIndex({ field1: 1, field2: -1 })

// Text Index (for text search)
db.collection.createIndex({ description: "text" })

// Geospatial Index (for location queries)
db.collection.createIndex({ location: "2dsphere" })

// ============================================
// INDEX MANAGEMENT
// ============================================

// Drop a specific index
db.orders.dropIndex({ "items.product_id": 1 })

// Drop all indexes except _id
db.orders.dropIndexes()

// Create unique index (prevents duplicate values)
db.users.createIndex({ email: 1 }, { unique: true })

// Create index in background (doesn't block operations)
db.orders.createIndex({ status: 1 }, { background: true })

// ============================================
// BEST PRACTICES
// ============================================
/*
 * 1. Create indexes on fields used frequently in queries
 * 2. Consider compound indexes for multi-field queries
 * 3. Don't over-index - indexes consume memory and slow writes
 * 4. Use explain() to verify index usage
 * 5. Monitor index performance regularly
 * 6. Index fields used in sort operations
 * 7. Consider index size and maintenance overhead
 */
