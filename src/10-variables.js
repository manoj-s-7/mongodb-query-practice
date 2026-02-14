// ============================================
// MongoDB Variables and JavaScript
// ============================================

// ============================================
// USING JAVASCRIPT VARIABLES IN QUERIES
// ============================================

// Define a variable and use it in query
my_price = 1500000
db.cars.find({ price: my_price })

// ============================================
// OBJECT METHODS
// ============================================

// Get all keys of the current object/context
Object.keys(this)

// ============================================
// USING OBJECTS AS QUERY FILTERS
// ============================================

// Create an object with filter criteria
hyundai = { maker: "Hyundai" }

// Use object in query
db.cars.find(hyundai)

// ============================================
// NOTES
// ============================================
// - Variables can be defined in MongoDB shell and reused
// - Objects can store query filters for cleaner code
// - Useful for repetitive queries with same criteria
// - Variables persist in the current shell session
