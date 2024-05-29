function displayData(n){
    result.value+=n
}
function findOut(){
    result.value=eval(result.value)
}
function allClear(){
result.value=" "
}
function backspace(){
    result.value=result.value.slice(0,-1)
}