var recipes = {egg: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
  
}
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj)
  newObj
  delete newObj[key]
  return newOb
}
