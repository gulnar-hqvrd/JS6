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

  const url = 'https://randomuser.me/api/?results=5000';


  async function main(){
        let result = await fetchData(url)
    console.log(result);
  }
  main()
