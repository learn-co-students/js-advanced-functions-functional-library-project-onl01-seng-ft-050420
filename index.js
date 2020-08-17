const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (typeof collection === "object"){
        for (const [key, value] of Object.entries(collection)) {
          callback(value, key, collection)
        }
      } else {
        collection.forEach((element, i) => callback(element, i, collection))
      }
      return collection
    },

    map: function(collection, callback) {
      const newArray = []
      if (typeof collection === "object"){
        for (const [key, value] of Object.entries(collection)) {
          newArray.push(callback(value, key, collection))
        }
      } else {
        collection.forEach((element, i) => newArray.push(callback(element, i, collection)))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let total
      acc === undefined ? total = collection[0] : total = acc
      let newCollection
      acc ?  newCollection = collection : newCollection = collection.slice(1)
      for (const item of newCollection){
        total = callback(total, item, collection)
      }
      return total
    },

    functions: function(object) {
      return Object.getOwnPropertyNames(object).filter(item => typeof object[item] === 'function').sort()
    },

    find: function(collection, predicate) {
      for (const item of collection) {
       if (predicate(item)) {
         return item
       }
      }
    },

    filter: function(collection, predicate) {
      let newCollection = []
      for (const item of collection) {
       if (predicate(item)) {
         newCollection.push(item)
       }
      }
      return newCollection
    },

    size: function(collection) {
      if (typeof collection === "object") collection = Object.entries(collection)
      return collection.length
    },

    first: function(array, n=1) {
      if (n === 1) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },
    
    last: function(array, n=1) {
      if (n === 1) {
        return array.slice(-n)[0]
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      let newArray = []
      for (const item of array){
        if (item) newArray.push(item)
      }
      return newArray
    },

    sortBy: function(array, callback) {
      const newArray = array.slice()
      return newArray.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function(array, shallow) {
      let newArray = []

      if (shallow){
          for (const item of array) {
            if (Array.isArray(item)) {
              for (const subitem of item) {
                newArray.push(subitem)
              }
            } else {
              newArray.push(item)
            }
          }
      } else {
        newArray = array.toString().split(",").map(item => parseInt(item, 10))
      }
      return newArray
    },

    uniq: function(collection, isSorted, callback) {
      if (isSorted) {
        const newArray = [collection[0]]
        for (let i = 1; i < collection.length; i++) {
          if (newArray[i-1] !== collection[i])
          newArray.push(collection[i])
        }
        return newArray
      } else if (!callback) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = callback(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    }

  }
})()

fi.libraryMethod()