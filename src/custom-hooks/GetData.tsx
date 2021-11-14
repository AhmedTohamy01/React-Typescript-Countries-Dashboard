import { useState, useEffect } from 'react'

export default GetData

function GetData() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((fetchedData) => fetchedData.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.log(error))
  }, [])

  return { data }
}
