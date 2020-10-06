const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = collection.isArray ? collection.slice(0, collection.length) : Object.values(collection);
      newCollection.forEach(el => callback(el));
      return collection;
    },

    map: function(collection, callback) {
      const newArr = [];
      const newCollection = collection.isArray ? collection.slice(0, collection.length) : Object.values(collection);
      newCollection.forEach(el => newArr.push(callback(el)));
      return newArr;
    },

    reduce: function(collection, callback, initialValue) {
      let newCollection;
      let acc;
      if(initialValue === undefined) {
        acc = collection[0];
        newCollection = collection.slice(1, collection.length);
      } else {
        acc = initialValue;
        newCollection = collection.slice(0, collection.length);
      }
      newCollection.forEach(el => {
        acc = callback(acc, el, newCollection);
      });
      return acc;
    },

    find: function(collection, predicate) {
      for(let i = 0; i < collection.length; i ++) {
        if(predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate) {
      const newCollection = [];
      collection.forEach(el => {
        if(predicate(el) === true) {
          newCollection.push(el);
        }
      });
      return newCollection;
    },

    size: function(collection) {
      const newCollection = collection.isArray ? collection.slice(0, collection.length) : Object.keys(collection);
      let counter = 0;
      newCollection.forEach(el => counter ++);
      return counter;
    },

    first: function(array, n) {
      let num = n ? n : 1;
      const newArr = array.slice(0, num);
      if(newArr.length > 1) {
        return newArr;
      } else {
        return newArr[0];
      }
    },

    last: function(array, n) {
      let num = n ? -n : -1;
      const newArr = array.slice(num);
      if(newArr.length > 1) {
        return newArr;
      } else {
        return newArr[0];
      }
    },

    compact: function(array) {
      const newArr = [];
      array.forEach(el => {
        if(el) {
          newArr.push(el);
        }
      })
      return newArr;
    },

    sortBy: function(array, callback) {
      const newArr = array.slice(0, array.length);
      return newArr.sort(function(a, b) {
        return callback(a) - callback(b);
      });
    },

    flatten: function(array, shallow) {
      if(shallow) {
        return array.reduce((acc, val) => acc.concat(val), []);
      } else {
        const stack = [...array];
        const res = [];
        while(stack.length) {
          const next = stack.pop();
          if(Array.isArray(next)) {
            stack.push(...next);
          } else {
            res.push(next);
          }
        };
        return res.reverse();
      }
    },

    uniq: function(array, isSorted, callback) {
      
    }


  }
})()

fi.libraryMethod()