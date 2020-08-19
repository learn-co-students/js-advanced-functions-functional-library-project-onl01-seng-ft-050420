const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(coll, fn) {
      for (const i in coll) {
        fn(coll[i], i, coll);
      }
      return coll;
    },

    map: function(coll, fn) {
      const arr = [];
      for (const i in coll) {
        arr.push(fn(coll[i], i, coll));
      }
      return arr;
    },

    reduce: function(coll, fn, acc) {
      let total
      !!acc ? total = acc : total = coll[0];
      for (const i of coll) {
        if (!acc && i === coll[0]) continue; 
        total = fn(total, i, coll);
      }
      return total;
    },

    find: function(coll, fn){
      let ans
      for (const el of coll) {
        if(fn(el)) {
          ans = el;
          break;
        }
      }
      return ans;
    },

    filter: function(coll, fn){
      const arr = [];
      for (const el of coll){
        if (fn(el)) arr.push(el);
      }
      return arr
    },

    size: function(coll, fn){
      let count = 0;
      for (const key in coll){
        count++
      }
      return count;
    },

    first: function(coll, n){
      if (!n) return coll[0];
      const arr = [];
      for (let i = 0; i < n; i++){
        arr.push(coll[i]);
      }
      return arr;
    },

    last: function(coll, n){
      if (!n) return coll[coll.length - 1];
      const arr = [];
      const diff = coll.length - n - 1;
      for (let i = coll.length - 1; i > diff; i--){
        arr.unshift(coll[i]);
      }
      return arr;
    },

    compact: function(coll){
      const arr = [];
      for (const el of coll){
        if (!!el) arr.push(el);
      }
      return arr;
    },

    sortBy: function(coll, fn){
      const arr = coll.slice();
      return arr.sort((a, b) => fn(a) - fn(b))
    },

    flatten: function(coll, n){
      let arr = [];
      let func = (array) => {
        for(const el of array) {
          if (Array.isArray(el)) {
            if(!n) func(el);
            if(!!n) arr = [...arr, ...el];
          } else {
            arr.push(el);
          }
        }
        return arr;
      }
      arr = func(coll)
      return arr;
    },

    uniq: function(coll, sort, fn){
      const arr = [];
      const vals = [];
      for(const el of coll) {
        if (!fn){
          if (!arr.includes(el)) {
            arr.push(el)
          }
        } else {
          if (!vals.includes(fn(el))) {
            vals.push(fn(el))
            arr.push(el);
          }
        }
      }
      return arr;
    },

    keys: function(obj){
      const arr = [];
      for (const key in obj) {
        arr.push(key)
      }
      return arr;
    },

    values: function(obj){
      const arr = [];
      for (const key in obj) {
        arr.push(obj[key])
      }
      return arr;
    },

    functions: function(obj) {
      const arr = [];
      for (const key in obj) {
        if (typeof(obj[key]) === "function") arr.push(key);
      }
      arr.sort((a, b) => a - b);
      return arr;
    },


  }
})()

fi.libraryMethod()
