const arrayTasks = {

	 concat: function (arr1, arr2) {
     return arr1.concat(arr2);
	 },

	 insertAt: function (arr, itemToAdd, index) {
     arr.splice(index, 0, itemToAdd);
    return arr;
	 },

	 square: function (arr) {
     return arr.map(function(element){
       return element*element;
     });
	 },

	 sum: function (arr) {
      return arr.reduce(function(runningTotal, value){
        return runningTotal + value;
      });
	 },

	 removeAndClone: function (arr, valueToRemove) {
     const arrClone = arr.filter(function(value){
       return value !== valueToRemove;
     });
     return arrClone;
	 },

	 findIndexesOf: function (arr, itemToFind) {
    let indices = [];
    arr.map(function(item, currentIndex){
      if (item === itemToFind) indices.push(currentIndex);
    });
    return indices;
	 },

	 sumOfAllEvenNumbersSquared: function (arr) {
     return arr.reduce(function(runningTotal, value){
       return value % 2 === 0 ? runningTotal+Math.pow(value,2): runningTotal;

     }, 0);
	 }

	// ----------- EXTENSION ------------

	// findDuplicates: function (arr) {

	// },

}

module.exports = arrayTasks
