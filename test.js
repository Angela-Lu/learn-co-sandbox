const person = {
  name: "Awsome Name",
  occupation: {
    title: "Senior Manager of Awesome",
    yearsHeld: 2 
  },
  pets: [{
    kind: "dog",
    name: "Fiona"
  }, {
    kind: "cat",
    name: "Ralph"
  }]
}


function find(array, criteriaFn) {
  let current = array
  let next = []
  while (current) {
    if (criteriaFn(current)) {
      return current
    }
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        next.push(current[i])
      }
    }
    current = next.shift()
  }
  return null
}

const collections = [1, [2, [4, [5, [6]], 3]]]
console.log(find(collections, n => (typeof n === 'number' && n > 5)))