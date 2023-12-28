let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",add);

function add(){
    if(inp.value!=""){
        let div=document.createElement("div");
        let del=document.createElement("button");
        let item=document.createElement("li");
        div.classList.add("todo");
        del.classList.add("delete");
        del.innerText="x";
        item.innerText=inp.value;
        ul.appendChild(div);
        div.appendChild(item);
        div.appendChild(del);
        inp.value="";
    }
}
//TO REMOVE ELEMENTS:

ul.addEventListener("click",function(event){
    // console.log(event.target);
    // console.log(event.target.nodeName);
    if(event.target.nodeName=="BUTTON"){
        let par=event.target.parentElement;
        par.remove();
    }
})

ul.addEventListener('click',function(event){
    if(event.target.nodeName=="LI"){
        let li=event.target;
        li.classList.add("new");
    }
})   // To Create Strike off effect on to elements

// let delbtns=document.querySelectorAll(".delete");
// for(delb of delbtns){
//     delb.addEventListener("click",function(){
//         let par=this.parentElement;
//         par.remove();
//     });
// }
