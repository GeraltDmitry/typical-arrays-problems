exports.min = function min(array = []) {    
    if (array == '' || array == undefined) {
        return 0;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min;
}

exports.max = function max (array = []) {
  if (array.length == 0) return 0;
  let max = array[0];
  array.forEach(elem => {
    if (elem>max) max = elem;
  });
  return max;
}

exports.avg = function avg (array = []) {
  if (array.length == 0) return 0;
  let average = 0;
  array.forEach(elem => {
    average += elem;
  });
  return average / array.length;
}
