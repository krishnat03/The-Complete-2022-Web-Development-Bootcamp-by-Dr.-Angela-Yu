// prompt("Enter the First name");
// prompt("Enter the second name");
// var loveScore = Math.random() * 100;
// loveScore = Math.floor(loveScore)+1;

// if(loveScore > 70){
//     alert("Your Love score is:" + loveScore + "%, Your love is true")
// }
// else{
//     alert("Your Love score is:" + loveScore + "%");    
// }


/*
=== is equal to   it matches datatype also
== is equal to   it does not matches datatype also
!== is not equal to
> is greater than
< is lesser than
>= is greater or equal to
<= is lesser or eual to
&& AND
|| OR
*/


prompt("Enter the First name");
prompt("Enter the second name");
var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore)+1;

if(loveScore > 70){
    alert("Your Love score is:" + loveScore + "%, Your love is true");
}

if(loveScore > 30 && loveScore <=70){
    alert("Your Love score is:" + loveScore + "%, Your love is somewhat true");
}

else{
    alert("Your Love score is:" + loveScore + "%");    
}
