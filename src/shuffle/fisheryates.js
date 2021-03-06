(function (exports) {

  'use strict';

  /**
   * The shuffling algorithm of
   * Fisher-Yates.<br><br>
   * Time complexity: O(N).
   *
   * @example
   * var shuffle = require('path-to-algorithms/src/' +
   * 'shuffle/fisheryates').shuffle;
   * console.log(shuffle([1, 2, 3, 4, 5])); // shuffled array
   *
   * @public
   * @module shuffle/fisheryates
   * @param {Array} array Array which should be shuffled.
   * @return {Array} Shuffled array.
   */
  function shuffle(array) {
    var size = array.length;
    var rand;
    var temp;
    for (var i = 1; i < size; i += 1) {
      rand = Math.round(Math.random() * i);
      temp = array[rand];
      array[rand] = array[i];
      array[i] = temp;
    }
    return array;
  }

  exports.shuffle = shuffle;

})(typeof window === 'undefined' ? module.exports : window);
