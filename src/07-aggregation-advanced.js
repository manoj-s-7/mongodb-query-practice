// ============================================
// MongoDB Aggregation Framework - Part 2
// Advanced Operations & String/Arithmetic Operations
// ============================================

// ============================================
// STRING OPERATIONS
// ============================================

// $concat: Combine strings
// $toUpper: Convert to uppercase
db.cars.aggregate([
    {
        $project: {
            _id: 0,
            CarName: { $concat: [{ $toUpper: "$maker" }, " ", "$model"] }
        }
    }
])

// ============================================
// REGEX OPERATIONS
// ============================================

// $regexMatch: Check if string matches pattern
db.cars.aggregate([
    {
        $project: {
            _id: 0,
            model: 1,
            isDiesel: {
                $regexMatch: {
                    input: "$fuel_type",
                    regex: "Die"
                }
            }
        }
    },
    { $out: "Diesel_cars" }  // Output to new collection
])

// ============================================
// ARITHMETIC OPERATIONS
// ============================================

// $inc: Increment field value (update operation)
db.cars.updateMany(
    {},
    {
        $inc: { airbags: 1 }
    }
)

// $add: Add values
db.cars.aggregate([
    {
        $project: {
            _id: 0,
            maker: 1,
            price: 1,
            PriceHike: { $add: ["$price", 55000] }
        }
    }
])

// ============================================
// TYPE CONVERSION & CALCULATIONS
// ============================================

// $divide: Divide values
// $round: Round to decimal places
// $toString: Convert to string
db.cars.aggregate([
    {
        $project: {
            _id: 0,
            maker: 1,
            price: 1
        }
    },
    {
        $addFields: {
            PriceinLakhs: {
                $concat: [
                    {
                        $toString: {
                            $round: [{ $divide: ["$price", 100000] }, 1]
                        }
                    },
                    " Lakhs"
                ]
            }
        }
    }
])

// ============================================
// ARRAY AGGREGATION
// ============================================

// $sum: Sum array values
// Calculate total service cost for each car
db.cars.aggregate([
    { $addFields: { TotalServiceCost: { $sum: "$service_history.cost" } } },
    {
        $project: {
            _id: 0,
            model: 1,
            maker: 1,
            TotalServiceCost: 1
        }
    }
])

// Group and sum across documents
db.cars.aggregate([
    {
        $addFields: {
            TotalServiceCost: { $sum: "$service_history.cost" }
        }
    },
    {
        $group: {
            _id: "$maker",
            TotalServiceCost: { $sum: "$TotalServiceCost" }
        }
    }
])
