const dishas = [
    "Vegetarian pizza",
    "Butter chicken",
    "Palak paneer",
    "Chichen curry",
    "Chana masala",
    "Dosa",
    "Samosa",
    "Veg biryani",
];

const nonveg = dishes.filter((item)=>{
    if(item.tolowerCase().includes('chicken')||item.tolowerCase().includes('fish')||(item.tolowerCase().includes(mutton)) )
    return true;
    
    else{
        return false;
    }

})
console.log (nonveg);
const veg =[];


