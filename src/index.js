// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    return prop;
};
const createNotEnumerableProperty = (prop) => {
    Object.defineProperty(Object.prototype, prop, {
        set: (value) => {prop = value},
        get: () => (prop),
        enumerable : false
    });
    return prop;
};
const createProtoMagicObject = () => {
    let magic = function() {};
    magic.__proto__ = magic.prototype; 
    return magic;
};
const incrementor = () => {
    if(!incrementor.counter) {
        incrementor.counter = 0;
    }
    incrementor.valueOf = function() {
        return incrementor.counter;
    }
    var inc = function() {
        return incrementor();
    }
    inc.valueOf = function() {
        return incrementor.counter;
    }
    incrementor.counter++;
    return inc;
};
const asyncIncrementor = () => {
    if(!asyncIncrementor.counter) {
        asyncIncrementor.counter = 0;
    }
    asyncIncrementor.counter++;
    return asyncIncrementor.counter;
};
const createIncrementer = function* () {
    let index = 1;
    while (true) {
        yield index++;
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (index) => {
    let promise = new Promise(function(resolve)
    {
        setTimeout(() =>{
        return resolve(index);},1000);
    });
    return promise;
};
const getDeepPropertiesCount = (obj) => {
    let keys = 0;
    function countKeys(obj) {
        for(let i in obj) {
            if(typeof(obj[i]) === 'object'){
                countKeys(obj[i]);
            }
            keys++;
        }
        return keys;
    }
    return countKeys(obj);
};
const createSerializedObject = () => {
    let str = new String();
    return str;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((a,b) => (a.proto - b.proto));
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;