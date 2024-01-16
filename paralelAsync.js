async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (response.ok) {
      let jsonData = await response.json();
      return jsonData;
    } else {
      throw new Error(response);
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Hazirdir");
  }
}

const url = "https://jsonplaceholder.typicode.com/users"

async function main() {
  try {
    let [result1, result2] = await Promise.all([
      fetchData(url),
      fetchData(url),
    ]);
    console.log(`Result 1 : ${JSON.stringify(result1 , null , 2)}`);
    console.log(`Result 2 : ${JSON.stringify(result2 , null , 2)}`);
  } catch (err) {
    console.log(`Error fetching data :${err}`);
  }
}

main();
