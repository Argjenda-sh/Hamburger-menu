function openMenu(){
    var menu = document.getElementById("myLinks");

    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block"
    }
}


function search(){
    var input, filter, ul,a,i,txtValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myList");
    li = document,getElementByTagName("li");

    for(i = 0; i < li.length; i++ ){
        a = li[i];
        txtValue = a.textContent;
        console.log()

        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";

    }else{
        li[i].style.display = "none";
    }
}