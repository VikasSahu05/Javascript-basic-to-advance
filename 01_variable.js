const accountID = 145554;
let accountEmail = "vikas@prodt.co";
var accountPassword = "12345";
accountCity = "Bhilai";

// accountID =2;  //not allowed 

accountEmail = "vikas@sahu.com"
accountCity = "durg";
console.log(accountEmail);
console.log(accountCity);

a="qq";

function check(){
    let a=1;
    function check2(){
        let a = 2
        console.log(a);
    }
    check2();
    console.log(a);
}
check();

console.table([
    a,accountID,typeof(accountEmail),accountCity,accountPassword
]);