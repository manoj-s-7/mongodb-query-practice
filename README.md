<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" width="300" alt="PostgreSQL Logo">
</p>

<div align="center">
# 🍃 MongoDB Query Practice

**A comprehensive collection of MongoDB queries and operations from basics to advanced concepts**

[📚 Download Handbook](#-handboo) • [🚀 Quick Start](#-quick-start) • [📖 Topics Covered](#-topics-covered)

</div>

---

## 📚 Handbook

📖 **MongoDB Quick Reference Handbook** - A comprehensive 33-page guide covering all topics in this repository!

**[Download PDF Handbook](https://drive.google.com/file/d/1UWmofADjhv3n4iwrlzJW8N7flfOTL825/view?usp=sharing)** ⬅️ *Complete reference with examples and best practices*

---

## 🎯 About

This repository contains hands-on practice code for learning MongoDB, covering everything from basic database operations to advanced aggregation pipelines. Each file focuses on a specific topic with clear examples and explanations.

## 📖 Topics Covered

### 🔰 Fundamentals
- **Database Basics** - Creating databases, collections, and basic operations
- **CRUD Operations** - Complete Create, Read, Update, Delete operations
- **Data Types** - Working with Date, Timestamp, UUID, and other BSON types

### 🔍 Querying
- **Query Operators** - Comparison, logical, element, and array operators
- **Cursor Methods** - Sorting, limiting, counting, and pagination
- **Conditional Operators** - Using `$cond` and `$switch` for complex logic

### 📊 Aggregation
- **Aggregation Basics** - `$match`, `$group`, `$project`, `$sort`, `$count`
- **Advanced Aggregation** - String operations, arithmetic, type conversions
- **Aggregation Exercises** - Real-world practice scenarios

### 🔗 Advanced Topics
- **Relationships & $lookup** - Joining collections (one-to-many)
- **Schema Validation** - Enforcing data integrity with JSON Schema
- **Indexes** - Performance optimization and query analysis
- **Variables** - Using JavaScript variables in MongoDB shell

## 🚀 Quick Start

### Prerequisites
- MongoDB installed locally or MongoDB Atlas account
- MongoDB Shell (mongosh) or MongoDB Compass

### Using the Examples

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mongodb-query-practice.git
   cd mongodb-query-practice
   ```

2. **Open MongoDB Shell**
   ```bash
   mongosh
   ```

3. **Run any example file**
   - Copy queries from files in `src/` directory
   - Paste into MongoDB Shell
   - Observe the results!

## 📂 Repository Structure

```
mongodb-query-practice/
│
├── src/
│   ├── 01-database-basics.js          # Database & collection operations
│   ├── 02-crud-operations.js          # CRUD operations with car dealership example
│   ├── 03-data-types.js               # MongoDB data types
│   ├── 04-query-operators.js          # Comparison, logical, element operators
│   ├── 05-cursor-methods.js           # limit, sort, skip, count
│   ├── 06-aggregation-basics.js       # Basic aggregation pipeline
│   ├── 07-aggregation-advanced.js     # Advanced aggregation operations
│   ├── 08-aggregation-exercises.js    # Practice exercises
│   ├── 09-conditional-operators.js    # $cond and $switch
│   ├── 10-variables.js                # JavaScript variables in MongoDB
│   ├── 11-relationships-lookup.js     # $lookup for joining collections
│   ├── 12-schema-validation.js        # Schema validation rules
│   └── 13-indexes.js                  # Index creation and performance
│
└── README.md
```

## 💡 Key Concepts Demonstrated

### CRUD Operations
```javascript
// Insert
db.collection.insertOne({ name: "John", age: 30 })

// Read
db.collection.find({ age: { $gt: 25 } })

// Update
db.collection.updateOne({ name: "John" }, { $set: { age: 31 } })

// Delete
db.collection.deleteOne({ name: "John" })
```

### Aggregation Pipeline
```javascript
db.collection.aggregate([
    { $match: { status: "active" } },
    { $group: { _id: "$category", total: { $sum: 1 } } },
    { $sort: { total: -1 } }
])
```

### Indexes for Performance
```javascript
// Create index
db.collection.createIndex({ field: 1 })

// Analyze query performance
db.collection.find({ field: value }).explain("executionStats")
```

## 🎓 Learning Path

1. **Start Here** → `01-database-basics.js`
2. **Master CRUD** → `02-crud-operations.js`
3. **Query Like a Pro** → `04-query-operators.js` → `05-cursor-methods.js`
4. **Aggregate Data** → `06` → `07` → `08`
5. **Advanced Topics** → `09` → `11` → `12` → `13`

## 📝 Practice Examples

This repository uses practical examples including:
- 🚗 **Car Dealership** - CRUD operations, complex queries
- 👥 **Users & Orders** - Relationships and $lookup
- 📊 **Various Datasets** - Aggregation exercises

## 🛠️ Technologies

- **MongoDB** - NoSQL Database
- **MongoDB Shell** - Command-line interface
- **JavaScript** - Query language

## 📌 Quick Reference

| Operation | Command |
|-----------|---------|
| Show databases | `show dbs` |
| Use database | `use db_name` |
| Show collections | `show collections` |
| Insert document | `db.coll.insertOne({...})` |
| Find all | `db.coll.find()` |
| Find with filter | `db.coll.find({ field: value })` |
| Update | `db.coll.updateOne({...}, { $set: {...} })` |
| Delete | `db.coll.deleteOne({...})` |
| Aggregate | `db.coll.aggregate([...])` |


## 🌟 Resources

- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Master MONGODB in ONE VIDEO: Beginner to Advanced Course For Beginners](https://youtu.be/tww-gbNPOcA?si=PchRjUosT-i9u5CM)
---

<div align="center">

**⭐ Star this repository if you find it helpful!**

</div>
