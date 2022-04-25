<<<<<<< HEAD
const btnDark = document.querySelector(".modeDark").addEventListener("click",function(){
    const darkness = document.body.classList.toggle("dark");
    if(document.body.classList.contains('dark')){
        localStorage.setItem('darkMode', 'enabled');
    }
    else{
        localStorage.setItem('darkMode', 'disabled');
        localStorage.removeItem('darkMode');
        localStorage.clear()
    }
});

if(localStorage.getItem('darkMode') == 'enabled'){
    document.body.classList.toggle('dark');
}
=======
const btnDark = document.querySelector(".modeDark").addEventListener("click",function(){
    const darkness = document.body.classList.toggle("dark");
    if(document.body.classList.contains('dark')){
        localStorage.setItem('darkMode', 'enabled');
    }
    else{
        localStorage.setItem('darkMode', 'disabled');
        localStorage.removeItem('darkMode');
        localStorage.clear()
    }
});

if(localStorage.getItem('darkMode') == 'enabled'){
    document.body.classList.toggle('dark');
}
>>>>>>> 0485df7f17fa9ac96f35000c5b6e0ad6ea4b3775
