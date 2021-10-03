
function swapKeyValue(obj){
    var ret = {};
    for(var key in obj){
      ret[obj[key]] = key;
    }
    return ret;
  }
  console.log(
swapKeyValue({name:'ameer',age:24})
);