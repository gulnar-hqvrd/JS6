const userName = "admin"
try{
    const promise = new Promise((resolve , reject)=> {
        if(userName == "admin")
        resolve("Istifadeci adi duzgundur");
    else{
        reject("user Not Found")
    }
    });

    promise.then((data)=>{
        console.log(data);
    })
    
} 
catch(err){
        console.log(`Error catch : ${err}`);
    }


    process.on("unhandleRejection", (reason, promise)=>{
console.log(promise)
console.log(`unhandleRejection at : ${promise} , reason : ${reason}`);
process.exit(1)
    });



