// ============================================
// MongoDB CRUD Operations
// Car Dealership Example
// ============================================

// Create database and collection
use car_dealership
db.createCollection("cars")

// ============================================
// CREATE OPERATIONS
// ============================================

// Insert a single car document
db.cars.insertOne({
    "maker": "Tata",
    "model": "Nexon",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
        "type": "Turbocharged",
        "cc": 1199,
        "torque": "170 Nm"
    },
    "features": [
        "Touchscreen",
        "Reverse Camera",
        "Bluetooth Connectivity"
    ],
    "sunroof": false,
    "airbags": 2
})

// Insert multiple car documents
db.cars.insertMany([
    {
        "maker": "Hyundai",
        "model": "Creta",
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "engine": {
            "type": "Naturally Aspirated",
            "cc": 1493,
            "torque": "250 Nm"
        },
        "features": [
            "Sunroof",
            "Leather Seats",
            "Wireless Charging",
            "Ventilated Seats",
            "Bluetooth"
        ],
        "sunroof": true,
        "airbags": 6
    },
    {
        "maker": "Maruti Suzuki",
        "model": "Baleno",
        "fuel_type": "Petrol",
        "transmission": "Automatic",
        "engine": {
            "type": "Naturally Aspirated",
            "cc": 1197,
            "torque": "113 Nm"
        },
        "features": [
            "Projector Headlamps",
            "Apple CarPlay",
            "ABS"
        ],
        "sunroof": false,
        "airbags": 2
    },
    {
        "maker": "Mahindra",
        "model": "XUV500",
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "engine": {
            "type": "Turbocharged",
            "cc": 2179,
            "torque": "360 Nm"
        },
        "features": [
            "All-Wheel Drive",
            "Navigation System",
            "Cruise Control"
        ],
        "sunroof": true,
        "airbags": 6
    },
    {
        "maker": "Honda",
        "model": "City",
        "fuel_type": "Petrol",
        "transmission": "Automatic",
        "engine": {
            "type": "Naturally Aspirated",
            "cc": 1498,
            "torque": "145 Nm"
        },
        "features": [
            "Keyless Entry",
            "Auto AC",
            "Multi-angle Rearview Camera"
        ],
        "sunroof": false,
        "airbags": 4
    }
])

// ============================================
// READ OPERATIONS
// ============================================

// Find all documents
db.cars.find()

// Find by specific field
db.cars.find({ transmission: "Manual" })

// Find one document
db.cars.findOne({ transmission: "Automatic" })

// Projection: Show only specific fields (with _id)
db.cars.find({}, { maker: 1, model: 1 })

// Projection: Exclude _id field
db.cars.find({}, { maker: 1, model: 1, _id: 0 })

// Projection with nested fields
db.cars.find({}, { model: 1, engine: 1, _id: 0 })

// Query by nested object (exact match - won't work as expected)
db.cars.find({ engine: { type: "Turbocharged" } })

// Query array field (checks if value exists in array)
db.cars.find({ features: "Touchscreen" })

// Query nested field using dot notation (correct way)
db.cars.find({ "engine.type": "Turbocharged" })

// ============================================
// UPDATE OPERATIONS
// ============================================

// Update existing field value
db.cars.updateOne(
    { model: "Nexon" },  // Filter
    { $set: { fuel_type: "Diesel" } }  // Update
)

// Add new field to document
db.cars.updateOne(
    { model: "Nexon" },
    { $set: { color: "Red" } }
)

// Push element to array (adds duplicate if exists)
db.cars.updateOne(
    { model: "Nexon" },
    { $push: { features: "Touchscreen" } }
)

// Pull (remove) element from array
db.cars.updateOne(
    { model: "Nexon" },
    { $pull: { features: "Touchscreen" } }
)

// Update multiple documents matching criteria
db.cars.updateMany(
    { fuel_type: "Petrol" },
    { $set: { alloys: true } }
)

db.cars.updateMany(
    { fuel_type: "Diesel" },
    { $set: { alloys: false } }
)

// Update nested field using dot notation
db.cars.updateOne(
    { model: "Creta" },
    { $set: { "engine.torque": "280 Nm" } }
)

// Push multiple elements to array
db.cars.updateOne(
    { model: "Nexon" },
    {
        $push: {
            features: {
                $each: ["Wireless charging", "Voice Control"]
            }
        }
    }
)

// Remove field from document
db.cars.updateOne(
    { model: "Nexon" },
    { $unset: { color: "" } }
)

// Update all documents (empty filter)
db.cars.updateMany(
    {},
    { $set: { color: "Blue" } }
)

// Upsert: Insert if not exists, update if exists
db.cars.updateOne(
    { model: "Venue" },
    { $set: { maker: "Tata" } },
    { upsert: true }
)

db.cars.updateOne(
    { model: "Venue" },
    { $set: { fuel_type: "Petrol" } }
)

// ============================================
// DELETE OPERATIONS
// ============================================

// Delete first matching document
db.cars.deleteOne({
    fuel_type: "Petrol"
})

// Delete all matching documents
db.cars.deleteMany({
    fuel_type: "Petrol"
})
