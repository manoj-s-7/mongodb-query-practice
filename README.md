# MongoDB Learning Repository

This repository contains my MongoDB practice code, organized by topics for easy reference and learning.

## 📚 Contents

### 1. **Database Basics** (`01-database-basics.js`)
- Creating and switching databases
- Basic insert operations
- Dropping collections and databases

### 2. **CRUD Operations** (`02-crud-operations.js`)
- **Create**: `insertOne()`, `insertMany()`
- **Read**: `find()`, `findOne()`, projections, querying nested fields
- **Update**: `updateOne()`, `updateMany()`, `$set`, `$push`, `$pull`, `$unset`, upsert
- **Delete**: `deleteOne()`, `deleteMany()`

### 3. **Data Types** (`03-data-types.js`)
- Date, Timestamp, UUID types
- Working with different MongoDB data types

### 4. **Query Operators** (`04-query-operators.js`)
- **Comparison**: `$gt`, `$in`, `$nin`
- **Logical**: `$and`, `$or`, `$nor`
- **Element**: `$exists`, `$type`
- **Array**: `$size`, `$all`
- **Expression**: `$expr`

### 5. **Cursor Methods** (`05-cursor-methods.js`)
- `limit()`: Limit number of results
- `count()`: Count documents
- `sort()`: Sort results (ascending/descending)
- `skip()`: Skip documents (pagination)

### 6. **Aggregation Basics** (`06-aggregation-basics.js`)
- `$group`: Group documents and use accumulators
- `$match`: Filter documents
- `$count`: Count documents
- `$project`: Select and transform fields
- `$sortByCount`: Group and sort by count
- `$unwind`: Deconstruct arrays

### 7. **Advanced Aggregation** (`07-aggregation-advanced.js`)
- String operations: `$concat`, `$toUpper`
- Regex operations: `$regexMatch`
- Arithmetic operations: `$add`, `$divide`, `$round`
- Type conversion: `$toString`
- Array aggregation: `$sum`

### 8. **Aggregation Exercises** (`08-aggregation-exercises.js`)
- Real-world practice problems
- Complex aggregation pipelines
- Data analysis queries

## 🚀 Getting Started

1. Install MongoDB on your system
2. Clone this repository
3. Open MongoDB Shell and run the scripts

```bash
# Start MongoDB Shell
mongosh

# Run a specific file
load("01-database-basics.js")
```

## 💡 Example Dataset

The practice code uses a **Car Dealership** dataset with the following structure:

```javascript
{
    "maker": "Tata",
    "model": "Nexon",
    "fuel_type": "Petrol",
    "transmission": "Automatic",
    "engine": {
        "type": "Turbocharged",
        "cc": 1199,
        "torque": "170 Nm"
    },
    "features": ["Touchscreen", "Reverse Camera"],
    "sunroof": false,
    "airbags": 2
}
```

## 📝 Notes

- All queries are well-commented for easy understanding
- Files are organized in logical learning order
- Each file focuses on a specific MongoDB concept

## 🔗 Resources

- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)

---

**Happy Learning! 🎉**
