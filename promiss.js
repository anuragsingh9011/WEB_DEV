
const download =()=>{
    console.log("Download Start");
    const startTime = new Date().getTime();

    while(startTime + 5000 > new Date().getTime()){
        continue;
    }
    console.log("Download Complete");
}

setTimeout(()=>{
    download();
}, 5000)



console.log("Watching Video2");
const printTime =()=>{
    console.log(new Date().getSeconts());
};
const id =sotinterval(()=>{
    printTime();
},2000);

setTimeout (()=>{
clearInterval(id);
},5000);