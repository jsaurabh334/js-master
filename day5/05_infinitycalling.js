function a(){
    console.log("this is first block");
    b();
}
function b(){
    console.log("this is second block");
    a();
}
a();