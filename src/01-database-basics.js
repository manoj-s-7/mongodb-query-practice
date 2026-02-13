// ============================================
// MongoDB Database Basics
// ============================================

// Display all databases
show dbs

// Switch to 'school' database (creates if doesn't exist)
use school

// Insert a single document into students collection
db.students.insertOne({
    name: "Manoj S",
    age: 19
})

// Find all documents in students collection
db.students.find()

// Find specific document by name
db.students.find({ name: "Manoj S" })

// Insert document with array field
db.students.insertOne({
    name: "Bob",
    age: 22,
    hobbies: ["read", "play", "code"]
})

// Insert into employees collection
db.employees.insertOne({
    name: "Manoj S",
    age: 21
})

// Insert into branches collection
db.branchs.insertOne({
    branch: "bangalore"
})

// Drop a specific collection
db.branchs.drop()

// Drop the entire database
db.dropDatabase()

// Verify database is dropped
show dbs
