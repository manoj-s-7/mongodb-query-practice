// ============================================
// MongoDB Cursor Methods
// ============================================

// ============================================
// LIMIT
// ============================================

// Limit results to 2 documents
db.cars.find().limit(2)

// ============================================
// COUNT
// ============================================

// Count all documents
db.cars.find().count()

// Count documents matching criteria
db.cars.find({ fuel_type: "Petrol" }).count()

// ============================================
// SORT
// ============================================

// Sort ascending (1) by model
db.cars.find({}, { _id: 0, model: 1 }).sort({ model: 1 })

// Sort descending (-1) by model
db.cars.find({}, { _id: 0, model: 1 }).sort({ model: -1 })

// Sort with multiple fields
db.cars.find({}, { _id: 0, model: 1, maker: 1, transmission: 1 }).sort({ model: 1 })

// ============================================
// LIMIT (with projection)
// ============================================

// Limit to first 5 documents
db.cars.find({}, { _id: 0, model: 1 }).limit(5)

// ============================================
// SKIP
// ============================================

// Skip first 4 documents (useful for pagination)
db.cars.find({}, { _id: 0, model: 1 }).skip(4)

// ============================================
// CHAINING METHODS
// ============================================

// You can chain multiple cursor methods together
// Example: db.cars.find().sort({ model: 1 }).skip(5).limit(10)
