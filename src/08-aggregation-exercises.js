// ============================================
// MongoDB Aggregation - Practice Exercises
// ============================================

// ============================================
// Exercise 1: Group Statistics by Maker
// ============================================
// Count cars, calculate average, max, and min price per maker
db.cars.aggregate([
    {
        $group: {
            _id: "$maker",
            TotalCount: { $sum: 1 },
            AveragePrice: { $avg: "$price" },
            MaxPrice: { $max: "$price" },
            MinPrice: { $min: "$price" }
        }
    }
])

// ============================================
// Exercise 2: Total Service Cost Analysis
// ============================================
// Calculate total service cost per car and sort by highest cost
db.cars.aggregate([
    {
        $addFields: {
            TotalServiceCost: { $sum: "$service_history.cost" }
        }
    },
    {
        $project: {
            _id: 0,
            maker: 1,
            model: 1,
            TotalServiceCost: 1
        }
    },
    {
        $sort: { TotalServiceCost: -1 }
    }
])

// ============================================
// Exercise 3: Most Common Features
// ============================================
// Unwind features array and count occurrences of each feature
db.cars.aggregate([
    { $unwind: "$features" },
    { $sortByCount: "$features" }
])

// ============================================
// Exercise 4: Cars with More Owners than Airbags
// ============================================
// Find cars where number of owners exceeds airbag count
db.cars.aggregate([
    {
        $match: {
            $expr: { $gt: [{ $size: "$owners" }, "$airbags"] }
        }
    },
    {
        $project: {
            _id: 0,
            maker: 1,
            model: 1,
            airbags: 1,
            ownerCount: { $size: "$owners" }
        }
    }
])

// ============================================
// Exercise 5: Car Count by Owner Location
// ============================================
// Unwind owners and group by location to count cars
db.cars.aggregate([
    { $unwind: "$owners" },
    {
        $group: {
            _id: "$owners.location",
            CarCount: { $sum: 1 }
        }
    }
])

// ============================================
// Exercise 6: Highest Average Service Cost by Maker
// ============================================
// Find the maker with highest average service cost
db.cars.aggregate([
    { $unwind: "$service_history" },
    {
        $group: {
            _id: "$maker",
            avgServiceCost: { $avg: "$service_history.cost" }
        }
    },
    { $sort: { avgServiceCost: -1 } },
    { $limit: 1 },
    {
        $project: {
            _id: 0,
            maker: "$_id",
            avgServiceCost: 1
        }
    }
])
