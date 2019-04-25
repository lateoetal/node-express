
// Trade off between query performance vs consistency

// Using References (Normalization) --> CONSISTENCY
let author = {
    name: 'Vuk'
}

let course = {
    author: 'id'
}

// Using Embedded Documents (Denormalization) --> PERFORMANCE
let course = {
    author: {
        name: 'Vuk'
    }
}

// Hybrid
let author = {
    name: 'Vuk'
    // 50 other properties
}

let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
}