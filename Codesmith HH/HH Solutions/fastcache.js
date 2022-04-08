const fastCache = func => {
  const cache = {}
  return (...args) =>{
    if(cache[args]){
      return cache[args]
    }else{
      cache[args] = func(...args)
    }
    return cache[args] 
  }
};