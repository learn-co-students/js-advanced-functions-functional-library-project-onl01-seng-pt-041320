const fi = (function() 
{
  return {
    libraryMethod: function() 
    {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: (collection, callback) =>
    {
      const arrayOrObject = collection instanceof Array ? collection.slice() : Object.values(collection);

      for (let i = 0; i < arrayOrObject.length; i++)
      {
        callback(arrayOrObject[i]);
      }
      return collection
    },

    map: (collection, callback) =>
    {
      const arrayOrObject = collection instanceof Array ? collection.slice() : Object.values(collection);
      let newArray = [];

      for (let i = 0; i < arrayOrObject.length; i++)
      {
        newArray.push(callback(arrayOrObject[i]));
      }

      return newArray;
    },

    reduce: (collection, callback, acc) =>
    {
      if (!acc)
      {
        acc = collection[0];
        collection = collection.slice(1);
      }

      for (let i = 0; i < collection.length; i++)
      {
        acc = callback(acc, collection[i], collection);
      }

      return acc;
    },

    find: (collection, predicate) =>
    {
      if (!collection instanceof Array)
      {
        collection = Object.values(collection);
      }

      for (let i = 0; i < collection.length; i++)
      {
        if (predicate(collection[i]))
        {
          return collection[i];
        }
      }

      return undefined;
    },

    filter: (collection, predicate) =>
    {
      let array = [];

      for (let i = 0; i < collection.length; i++)
      {
        if (predicate(collection[i]))
        {
          array.push(collection[i]);
        }
      }

      return array;
    },

    size: (collection) =>
    {
      return collection instanceof Array ? collection.length : Object.keys(collection).length;
    },

    first: function(array, n)
    {
      if (!n)
      {
        return array[0];
      }
      else
      {
        return array.slice(0, n);
      }
    },

    last: (array, n) =>
    {
      if (!n)
      {
        return array[array.length - 1];
      }
      else
      {
        return array.slice(-n);
      }
    },

    compact: (array) =>
    {
      let newArray = [];

      for (let element of array)
      {
        if (!!element)
        {
          newArray.push(element);
        }
      }

      return newArray;
    },
    
    sortBy: (array, callback) =>
    {
      const sortedArray = [...array];

      return sortedArray.sort(function(a, b)
      {
        return callback(a) - callback(b);
      });
    },

    flatten: (array, shallow) =>
    {
      if (!shallow)
      {
        return array.flat(Infinity);
      }
      else
      {
        return array.flat();
      }
    },

    uniq: (array, isSorted, callback) =>
    {
      if (!isSorted && !callback)
      {
        let uniqArray = [];

        for (let i = 0; i < array.length; i++)
        {
          if (!uniqArray.includes(array[i]))
          {
            uniqArray.push(array[i]);
          }
        }

        return uniqArray;
      }
      else
      {
        const modifiedValues = new Set();
        const uniqValues = new Set();

        for (let i = 0; i < array.length; i++)
        {
          const moddedValue = callback(array[i]);

          if (!modifiedValues.has(moddedValue))
          {
            modifiedValues.add(moddedValue);
            uniqValues.add(array[i]);
          }
        }

        return Array.from(uniqValues);
      }
    },

    keys: (object) =>
    {
      let newArray = [];

      for (let key in object)
      {
        newArray.push(key);
      }

      return newArray;
    },

    values: (object) =>
    {
      let newArray = [];

      for (let key in object)
      {
        newArray.push(object[key]);
      }

      return newArray;
    },

    functions: (object) =>
    {     
      let newArray = [];

      for (let f in object)
      {
        if (typeof object[f] === "function")
        {
          newArray.push(f);
        }
      }

      return newArray;
    }
  }
})()

fi.libraryMethod()