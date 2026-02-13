// ============================================
// MongoDB Aggregation Framework - Part 1
// Basic Aggregation Operations
// ============================================

// ============================================
// $group - Grouping Documents
// ============================================

// Group by maker and count total cars
db.cars.aggregate([
    {
        $group: {
            _id: "$maker",
            TotalCars: { $sum: 1 }
        }
    }
])

// Group with multiple accumulator operations
db.cars.aggregate([
    {
        $group: {
            _id: "$maker",
            TotalCars: { $sum: 1 },
            AveragePrice: { $avg: "$price" },
            MinimumPrice: { $min: "$price" },
            MaximumPrice: { $max: "$price" }
        }
    }
])

// Group by fuel type
db.cars.aggregate([
    {
        $group: {
            _id: "$fuel_type",
            TotalCars: { $sum: 1 }
        }
    }
])

// ============================================
// $match - Filtering Documents
// ============================================

// Filter by maker, then group by model
db.cars.aggregate([
    {
        $match: {
            maker: "Hyundai"
        }
    },
    {
        $group: {
            _id: "$model",
            MaxPrice: { $max: "$price" }
        }
    }
])

// ============================================
// $count - Count Documents
// ============================================

// Match and count
db.cars.aggregate([
    { $match: { maker: "Hyundai" } },
    { $count: "Total_cars" }
])

// Match with multiple conditions and group
db.cars.aggregate([
    {
        $match: {
            maker: "Hyundai",
            fuel_type: { $in: ["Petrol", "Diesel"] }
        }
    },
    {
        $group: {
            _id: "$fuel_type",
            TotalCount: { $sum: 1 }
        }
    }
])

// ============================================
// $project - Field Selection and Transformation
// ============================================

// Match, project specific fields, and sort
db.cars.aggregate([
    { $match: { maker: "Hyundai" } },
    { $project: { _id: 0, maker: 1, model: 1, fuel_type: 1 } },
    { $sort: { model: 1 } }
])

// Equivalent find() query for comparison
db.cars.find(
    { maker: "Hyundai" },
    { _id: 0, maker: 1, model: 1, fuel_type: 1 }
).sort({ model: 1 })

// ============================================
// $sortByCount - Group and Sort by Count
// ============================================

// Group by maker and sort by count (descending)
db.cars.aggregate([
    { $sortByCount: "$maker" }
])

// ============================================
// $unwind - Deconstruct Arrays
// ============================================

// Unwind owners array (creates separate document for each owner)
db.cars.aggregate([
    { $unwind: "$owners" },
    { $unwind: "$service_history" }
])
