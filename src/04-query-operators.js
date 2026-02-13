// ============================================
// MongoDB Query Operators
// ============================================

// ============================================
// COMPARISON OPERATORS
// ============================================

// $gt: Greater than
db.cars.find({
    "engine.cc": { $gt: 1000 }
})

// $in: Match any value in array
db.cars.find({
    "engine.cc": { $in: [2755, 1497, 1498] }
})

// $nin: Not in array
db.cars.find({
    "engine.cc": { $nin: [1497, 1498] }
})

// ============================================
// LOGICAL OPERATORS
// ============================================

// $and: All conditions must be true
db.cars.find({
    $and: [
        { "engine.type": "Turbocharged" },
        { sunroof: true },
        { fuel_type: "Petrol" }
    ]
})

// $nor: None of the conditions should be true
db.cars.find({
    $nor: [
        { fuel_type: "Diesel" },
        { sunroof: true }
    ]
})

// $or: At least one condition must be true
db.cars.find({
    $or: [
        { fuel_type: "Diesel" },
        { sunroof: true }
    ]
})

// ============================================
// ELEMENT OPERATORS
// ============================================

// $exists: Check if field exists
db.cars.find({
    sunroof: { $exists: true }
})

// Update to add color field
db.cars.updateOne(
    { model: "Fortuner" },
    { $set: { color: "red" } }
)

// Find documents where color field exists
db.cars.find({
    color: { $exists: true }
})

// Remove color field
db.cars.updateOne(
    { model: "Fortuner" },
    { $unset: { color: "" } }
)

// $type: Check field data type
db.cars.find({
    model: { $type: "string" }
})

// ============================================
// ARRAY OPERATORS
// ============================================

// $size: Match array length
db.cars.find({
    features: { $size: 4 }
})

// $all: Array contains all specified elements
db.cars.find({
    features: { $all: ["ABS", "Touchscreen"] }
})

// ============================================
// EXPRESSION OPERATORS
// ============================================

// Test: Update document for expression testing
db.cars.updateOne(
    { model: "Kiger" },
    { $push: { features: "360 Camera" } }
)

// $expr: Use aggregation expressions in queries
// Find cars where engine cc > 1500 AND features count equals airbags count
db.cars.find({
    "engine.cc": { $gt: 1500 },
    $expr: { $eq: [{ $size: "$features" }, "$airbags"] }
})
