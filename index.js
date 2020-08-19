const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      } else if (typeof(collection) === "object"){
        for(const [key,value] of Object.entries(collection)){
          callback(key, value, collection)
        }
      }
      return collection
    },

    map: function(collection,callback) {
      let newArray = [];

      if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
          newArray.push(callback(collection[i], i, collection))
        }
      } else if (typeof(collection) === "object"){
        for(const [key,value] of Object.entries(collection)){
          newArray.push(callback(value, key, collection))
        }
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      let collectionClone = collection.slice()
      if(!acc){
        acc = collectionClone[0]
        collectionClone = collectionClone.slice(1)
      }
      for(let i = 0; i < collectionClone.length; i++){
        acc = callback(acc, collectionClone[i], collection)
      }
      return acc 
    },

    find: function(collection,predicate){
      for(let i = 0; i < collection.length; i ++){
        if (predicate(collection[i])){
          return collection[i]
        }
      }
      return undefined 
    },

    filter: function(collection, predicate){
      let newCollection = []

      for(let i = 0; i < collection.length; i ++){
        if (predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }
      return newCollection 
    },

    size: function(collection){
      if (typeof(collection) === "object"){
        collection = Object.values(collection)
      }
      return collection.length 
    },

    first: function(array, n = false) {
      if (n) {
        return array.slice(0,n)
      } else {
        return array[0]
      }
    },

    last: function(array, n = false) {
      if (n) {
        return array.slice(array.length - n)
      } else {
        return array[array.length - 1]
      }
    },

    compact: function(array) {
      let newArray = [];

      for(let i = 0; i < array.length; i++){
        if (array[i]){
          newArray.push(array[i])
        }
      }

      return newArray
    },

    sortBy: function(array,callback) {
      let newArray = array.slice()

      return newArray.sort(function(a,b){
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, shallow) {
      let flattenedArray = []

      if (shallow){
        flattenedArray = array.flat(1)
      } else {
        flattenedArray = array.flat(Infinity)
      }

      return flattenedArray
    },

    uniqSorted: function(collection, callback){
      const sortedCollection = [collection[0]]
      for (let i = 0; collection.length; i++){
        if(sortedCollection[i-1] !== collection[i]){
          sortedCollection.push(collection[i])
        }
      }
      return sortedCollection
    },

    uniq: function(array, isSorted = false, callback = false) {
      
      if (!callback){
        return [...new Set(array)]
      }  else {
        let arr = []
        let uniqArray = []
        for (let e of array) {
          let ele = callback(e)
          if (!arr.includes(ele)) {
            arr.push(callback(ele))
            uniqArray.push(e)
          }
        }
        return uniqArray
      }
    },

    keys: function(object) {
      return Object.keys(object)
    },

    values: function(object) {
      return Object.values(object)
    },

    functions: function(object) {
      const functionList = []

      for (let key in object) {
        if(typeof object[key] === "function"){
          functionList.push(object[key])
        }
      }

      return functionList
    },


  }
})()

fi.libraryMethod()
