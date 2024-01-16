setTimeout(
  (p1, p2) => {
    console.log(`p1: ${p1} , p2 :${p2}`);
  },
  2000,
  "Gulnar",
  "Hagverdiyeva"
);

let index = 0
const intervalID = setInterval(() => {
  console.log("hello dunya");
  index++;
  if(index == 3){
    clearInterval(intervalID);
    console.log("Interval durdu");
  }
}, 1000);




// setTimeout(()=>{
//     clearInterval(intervalID);
//     console.log("Interval durdu");
// },5000)