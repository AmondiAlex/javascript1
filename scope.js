//global scope -defined outside code blocks
//local scope -defined inside code block

let mycity ="nairobi";

if (mycity){
    let mycity="kisumu";
    var mycity2 ="lamu"
    console.log( mycity);
}
console.log(mycity);

console.log(mycity);
console.log(mycity2);

{
    var name1 ="juliet";
}
console.log(name1);

{
    let name2 ="josephine";
}
console.log(name2);