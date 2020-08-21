const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    //[1, 2, 3, 4], {one: 1, two: 2, three: 3, four: 4}
    each: function(collection, alert) {
      if (typeof collection === "array") {
        for(let i = 0; i < collection.length; i++){
          alert(collection[i])
        }
        return collection
      } 
      else if (typeof collection === "object") {
        for(let item in collection) { 
          alert(item, collection[item], collection) }
        return collection
      }
      
    },

    map: function(elements, cb) {
      let newElements = [];
      if (typeof elements === "array") {
        for(let i = 0; i < elements.length; i++){
          newElements.push(cb(elements[i]))
        } 
        return newElements
      } else if (typeof elements === "object"){
        for(let item in elements) {
          newElements.push(cb(elements[item]))
        } return newElements
      }
    },
//var sum = fi.reduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 0);
//=> 6
//callback = (acc, val, collection) => (acc + (val * 3))
    reduce: function(array, callback, total) {
      if (!total) {
        total = array[0]
        array = array.slice(1)
      }

      for (let i = 0; i < array.length; i++){
          total = callback(total, array[i], array)
        } 
        return total;
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i]
          break
        }
      }

    },

    filter: function(collection, predicate){
      let newCollection = [];
      for(let i = 0; i < collection.length; i++){
        if (predicate(collection[i]) === true){
          newCollection.push(collection[i])
        }
      } return newCollection
    },

    size: function(collection) {
      if (typeof collection === "array"){
      let count = 0;
      for (let i=0; i < collection.length; i++) {
        count ++;
      }
      return count
    } else if (typeof collection === "object"){
      let count = 0;
        for (let i in collection) {
          count ++;
        } return count;
      }
    },

    first: function(array, n){
      if (n){
        let newArray = [];
        for (let i = 0; i < n; i++){
          newArray.push(array[i])
        } return newArray
      } else {
        return array[0]
      }
    },

    last: function(array, n){
      if (n){
        let newArray = [...array.slice(-n)];
        return newArray
      } else {
        return array[array.length-1]
      }
    },
    //[1, 0, "a", "", "maru", null, "choux", NaN, false, "doge", undefined]

    compact: function(array){
      let newArray =[...array]
      for (let i = newArray.length; i--;){
          if (!newArray[i]){ 
            newArray.splice(i, 1)
          }
      } return newArray
    },

    sortBy: function(collection, callback) {
      let sorted = [...collection];
      return sorted.sort(function(a,b){
        return callback(a) - callback(b)
      })
    },
//[1, [2], [3, [[4]]]]) returns => [1, 2, 3, 4];
//myArray.reduce((c, v) => c.concat(v), []).map(o => o.id);
    flatten: function(array, shallow){
      if (shallow === true){
        return array.flat(1)
      } else {
        return array.flat(100)
      }
    }, 

    uniq: function(array, isSorted, callback){
      if (isSorted){
        let uniqueArr = [array[0]];
        for (let i = 1; i < array.length; i++){
          if (array[i-1] !== array[i]){
            uniqueArr.push((array[i]))
          }
        } return uniqueArr
      }  else {
        const unique = (value, index, self) => {
          return self.indexOf(value) === index;
        }
        let uniqArr = [...array]
        return uniqArr.filter(unique)
      }
    }, 

    keys: function(object) {
      let keysArr = Object.keys(object)
      return keysArr
    },

    values: function(object) {
      let valuesArr = Object.values(object)
      return valuesArr
    },

    functions: function(obj) {
      let funks = [];
      for(let funcs in obj) {
        if(typeof obj[funcs] == "function") {
            funks.push(funcs)
        }
      } return funks
    },


  }
})()

fi.libraryMethod()
done();