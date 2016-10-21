module.exports = function() {
  var num = 0;
  num += 5;
  var element = document.createElement('h2');
  element.innerHTML = 'number = ' + num;
  return element;
};
