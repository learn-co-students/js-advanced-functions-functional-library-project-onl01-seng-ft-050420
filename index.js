const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    // Collection functions
    each: function (collection, callback) {
      if (typeof collection === 'object') {
        for (const [key, value] of Object.entries(collection)) {
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
          // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
          callback(key, value, collection)
        }
      } else {
        collection.forEach((element, index) => callback(element, index, collection))
      }
      return collection
    },

    map: function (collection, callback) {
      let newArray = []
      if (typeof collection === 'object') {
        for (const [key, value] of Object.entries(collection)) {
          newArray.push(callback(value, key, collection))
        }
      } else {
        collection.forEach((element, index) => newArray.push(callback(element, index, collection)))
      }
      return newArray
    },

    reduce: function (collection, callback, acc) {
      let total
      if (acc) {
        total = acc
        for (const member of collection) {
          total = callback(total, member, collection)
        }
      } else {
        total = collection[0]
        let newCollection = collection.slice(1)
        for (const member of newCollection) {
          total = callback(total, member, collection)
        }
      }
      return total
    },

    find: function (collection, predicate) {
      for (const member of collection) {
        if (predicate(member)) {
          return member
        }
      }
      return undefined
    },

    filter: function (collection, predicate) {
      const newCollection = []
      for (const member of collection) {
        if (predicate(member)) {
          newCollection.push(member)
        }
      }
      return newCollection
    },

    size: function (collection) {
      if (typeof collection === 'object') {
        collection = Object.entries(collection)
        return collection.length
      }
    },

    // Array functions
    first: function (array, n = 1) {
      if (n === 1) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function (array, n = 1) {
      if (n === 1) {
        return array[array.length - 1]
      } else {
        return array.slice(-n)
      }
    },

    compact: function (array) {
      let newArray = []
      for (const member of array) {
        if (member) {
          newArray.push(member)
        }
      }
      return newArray
    },

    sortBy: function (array, callback) {
      const newArray = array.slice()
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function (array, shallow) {
      let newArray = []
      if (shallow) {
        for (const member of array) {
          if (Array.isArray(member)) {
            for (const submember of member) {
              newArray.push(submember)
            }
          } else {
            newArray.push(member)
          }
        }
      } else {
        newArray = array
          .toString()
          .split(',')
          .map((member) => parseInt(member))
      }
      return newArray
    },

    uniq: function (array, isSorted, callback) {
      let newArray = []
      if (callback) {
        let transformedValues = []
        for (const member of array) {
          if (!transformedValues.includes(callback(member))) {
            transformedValues.push(callback(member))
            newArray.push(member)
          }
        }
      } else {
        for (const member of array) {
          if (!newArray.includes(member)) {
            newArray.push(member)
          }
        }
      }
      return newArray
    },

    // Object functions
    keys: function (object) {
      const newArray = []
      for (const [key, value] of Object.entries(object)) {
        newArray.push(key)
      }
      return newArray
    },

    values: function (object) {
      const newArray = []
      for (const [key, value] of Object.entries(object)) {
        newArray.push(value)
      }
      return newArray
    },

    functions: function (object) {
      const newArray = []
      for (const [key, value] of Object.entries(object)) {
        if (typeof value === 'function') {
          newArray.push(key)
        }
      }
      return newArray
    },
  }
})()

fi.libraryMethod()
