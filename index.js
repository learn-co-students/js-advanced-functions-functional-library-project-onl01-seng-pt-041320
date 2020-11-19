const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      collection.forEach(callback(element, index, collection));
      return collection
    },

    map: function(collection, callback) {
      if (Array.isArray(collection)) {
      return collection.map(function(e) {return callback(e)})}
      else {
        let newItems = Object.values(collection)
        return newItems.map(function(e) {return callback(e)})}
    
    },

    reduce: function(collection, callback, acc=0) {
      let accum = acc;

      collection.forEach(element => {
        accum = callback(accum, element, collection);
      });
      return accum;
      
    },

    find: function(collection, predicate) {
      return collection.find(predicate);
    },

    filter: function(collection, predicate) {
      return collection.filter(predicate)
    },



    functions: function() {

    },


  }
})()

fi.libraryMethod()
