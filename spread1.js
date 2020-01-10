const obj = {a:1, b:2}

const objParent = {
    c:3,
    e:4
}
keys = Object.keys(obj)
values = Object.values(obj)
for(let i=0;i<keys.length;i++){
    objParent[keys[i]] = values[i]
}
console.log(objParent)