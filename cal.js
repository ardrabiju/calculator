function displayData(e){
    result.value+=e
}

function out(){
    result.value=eval(result.value)
}
function emp(){
    result.value=""
}
function bck(){
    result.value=result.value.slice(0,-1)
}