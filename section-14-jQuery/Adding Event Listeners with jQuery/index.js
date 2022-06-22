

// $("h1").click(function(){
//     $("h1").css("color", "purple")
// });


//Vanilla Js
// for(var i = 0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

//jquery
// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

// $("input").keydown(function(event){
//     console.log(event.key);
// });

// $(document).keydown(function(event){
//     // console.log(event.key);
//     $("h1").text(event.key)
// });

$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
})

$("h1").on("mouseout", function(){
    $("h1").css("color", "yellow");
})


