var elements = document.querySelectorAll("article:not(#checkout)");
var hearts = document.getElementsByClassName("fa-heart");

for(heart of hearts){
    heart.addEventListener('click', function(elem){
        if(elem.target.classList.contains('far'))
            elem.target.classList.replace('far','fas')
        else
            elem.target.classList.replace('fas','far')
    })
}
function Sum(){
    var div_prx = document.getElementById("checkout").children[0].children[0]
    var sum=0;
    var res=0;
    for(var i = 0; i < elements.length ; i++){
        sum+=parseInt(elements[i].children[3].innerHTML);}
    res= sum*100;
    div_prx.innerHTML= res;
}
for(var i = 0; i < elements.length ; i++){
    let qnt = elements[i].children[3];
    Sum();

    elements[i].children[2].addEventListener('click', function(){
        if(parseInt(qnt.innerHTML) > 0){
            qnt.innerHTML = parseInt(qnt.innerHTML) - 1
        Sum()
        }
    })
    elements[i].children[4].addEventListener('click', function(){
        if(parseInt(qnt.innerHTML) < 10){
            qnt.innerHTML = parseInt(qnt.innerHTML) + 1
        Sum()
        }
    })
    elements[i].children[6].addEventListener('click',function(c){
        var txt;
        var r = confirm("You are going to delete an item !");
        if (r == true) {
            c.target.parentElement.remove()
            qnt.innerHTML =0;
            Sum();
        }   
    }) 
    
}