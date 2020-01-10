module.exports = function average(...args){
    var result = 0;
    var cnt = 0
    args.forEach(function (value){
        result += value;
        cnt += 1;
    })
    return result/cnt;
}