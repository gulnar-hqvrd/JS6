setTimeout(
  (p1, p2) => {
    console.log(`p1: ${p1} , p2 :${p2}`);
  },
  2000,
  "Gulnar",
  "Hagverdiyeva"
);

const intervalID = setInterval(() => {
  console.log("hello dunya");
}, 1000);




setTimeout(()=>{
    clearInterval(intervalID);
    console.log("Interval durdu");
},5000)