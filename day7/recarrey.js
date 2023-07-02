const arr1 = ["sj", "rnb", "hrsh", "vinit", "jatindra"]
var i = 0
function parray(arr1) {
    
    console.log(arr1[i])  
    i++
    if (i < arr1.length) {
        parray(arr1)
    }
}
parray(arr1)