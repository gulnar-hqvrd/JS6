// Error Handling in Asynchronous Code
const userName = "adminMi";
try {
    //  bu alan içerisinde hata alıyorsak  
    const promise = new Promise((resolve, reject) => {

        if (userName == "admin")
            resolve("Kullanıcı adı doğru");
        else {
            // hata log işlemleri
            reject("User Not Found");
        }
    });

    promise
        .then((data) => {
            console.log(data);
        }) // .catch((err) => { `promise error : ${err}` });

} catch (err) {
    // bu alan içerisinde o hatayı yönetmeliyiz
    console.log(`catch error: ${err} `);
}

process.on("unhandledRejection", (reason, promise) => {
    // log işlemleri yapılacak.
    console.log(promise)
    console.log(`unhandledRejection at: ${promise}, reason: ${reason} `);
    process.exit(1);
});