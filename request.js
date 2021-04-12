var RequestClass = function() {
 console.log('started');
}; 

// ...add a method, which we do in this example:
RequestClass.prototype.getList = function() {
    return "My List";
};

// now expose with module.exports:
exports.Request = RequestClass;
