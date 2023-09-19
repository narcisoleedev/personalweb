document.addEventListener('DOMContentLoaded', ()=>{
    var tabs = document.getElementsByClassName('tabs-items')
    for(let i=0; i<tabs.length; i++){
        let element = tabs[i];
        element.addEventListener('click', ()=>{
            window.location.href = `./${element.innerText}`
        })(element);
    };
})

/*document.addEventListener('DOMContentLoaded', ()=>{
    var tabs = document.getElementsByClassName('header-tabs')
    for(i=0; i<tabs.length; i++){
        var element = tabs[i];
        element.addEventListener('click', ()=>{
            window.location.href = `./${element.innerText}`
        })(element)
    }
    })*/