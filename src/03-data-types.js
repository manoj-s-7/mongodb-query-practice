// ============================================
// MongoDB Data Types
// ============================================

// Date type
db.test.insertOne({
    date: new Date()
})

// Timestamp type
db.test.insertOne({
    ts: new Timestamp()
})

// UUID type
db.test.insertOne({
    uid: new UUID()
})

// Add date field to all car documents
db.cars.updateMany(
    {},
    {
        $set: { date: new Date() }
    }
)
