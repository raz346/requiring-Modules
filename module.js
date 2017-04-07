module.exports = {
    invokeFun : function(){
        return privateFun();
    }
}
function privateFun(){
    return 12 ;
}