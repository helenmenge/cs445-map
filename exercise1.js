async function removeDuplicates(array){
    return [...new Set(array)];
}
Array.prototype.removeDuplicatesAsync = async function (){
    let result = await removeDuplicates(this)
    console.log(result)
}
console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);