// ============================================
// MongoDB Conditional Operators
// ============================================

// ============================================
// $cond - Simple If-Else Condition
// ============================================

// Categorize cars as "Petrol Car" or "Non Petrol Car"
db.cars.aggregate([
    {
        $project: {
            _id: "$model",
            FuelCategory: {
                $cond: {
                    if: { $eq: ["$fuel_type", "Petrol"] },
                    then: "Petrol Car",
                    else: "Non Petrol Car"
                }
            }
        }
    }
])

// ============================================
// $switch - Multiple Conditions
// ============================================

// Categorize cars by price range using switch statement
db.cars.aggregate([
    {
        $project: {
            _id: 0,
            Model: { $concat: [{ $toUpper: "$maker" }, " ", "$model"] },
            PriceCat: {
                $switch: {
                    branches: [
                        {
                            case: { $lt: ["$price", 500000] },
                            then: "Budget"
                        },
                        {
                            case: {
                                $and: [
                                    { $gte: ["$price", 500000] },
                                    { $lte: ["$price", 1000000] }
                                ]
                            },
                            then: "Midrange"
                        },
                        {
                            case: { $gt: ["$price", 1000000] },
                            then: "Premium"
                        }
                    ],
                    default: "Unknown"
                }
            }
        }
    },
    {
        $sort: { PriceCat: 1 }
    }
])

// ============================================
// SYSTEM VARIABLES
// ============================================

// $$NOW - Current datetime
db.cars.aggregate([
    {
        $project: {
            _id: 0,
            model: 1,
            date: "$$NOW"  // System variable for current timestamp
        }
    }
])
