
let totalitems=["pizza","idli","juice"];
let total=0;
for(let i=0;i<totalitems.length;i++){
    switch(totalitems[i]){
        case "pizza":
            total+=400;
            break;
        case "juice":
            total+=100;
            break;
        case "idli":
            total+=150;
            break;
        case "coffee":
            total+=35;
            break;
    }
}
if (total>=500){
    console.log(total-total*0.1);

}else{
    console.log(total);
}