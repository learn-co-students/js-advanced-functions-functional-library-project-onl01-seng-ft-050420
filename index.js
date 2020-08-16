const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, callBack) {
      for (const x in obj){
        callBack(obj[x])
      }
      return obj
    },

    map: function(obj, callBack) {
      const array = []
      for (const x in obj){
        array.push(callBack(obj[x], x))
      }
      return array
    },

    reduce: function(obj, callback, acc = true) {
      let total = acc
      for (let x in obj){
          total = callback(total, obj[x])
      }
      if (acc === true){
          if (typeof total === 'number'){
              return total - 1
          }
          return total
      }
      return total
    },

    find: function(obj, callBack){
      let returnValue
      for (const x in obj){
        if (callBack(obj[x])){
          returnValue = obj[x]
          return obj[x]
        }
      }
      return returnValue
    },

    filter: function(obj, callBack){
      const array = []
      for (const x in obj){
        if (callBack(obj[x])){
          array.push(obj[x])
        }
      }
      return array
    },

    size: function(obj){
      let count = 0
      for (const x in obj){
        count += 1
      }
      return count
    },

    first: function(obj, element=1){
      let firsts = obj.slice(0,element)
      if (firsts.length === 1){
        firsts = firsts[0]
      }
      return firsts
    },

    compact: function(obj){
      const newArray = []
      for (const x of obj){
        if (!!x === true){
          newArray.push(x)
        }
      }
      return newArray
    },

    sortBy: function(obj, callBack){
      const array = obj
      for (const x in obj){
        callBack(obj[x])
      }
      return array
    },

    last: function(obj, element = 1){
      let firsts = obj.slice(element * -1)

      if (firsts.length === 1){
        firsts = firsts[0]
      }
      console.log(firsts)
      return firsts
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
