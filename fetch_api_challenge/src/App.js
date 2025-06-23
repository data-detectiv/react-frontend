import { useEffect, useState } from "react";
import Form from "./Form";


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/"
  const [reqType, setReqType] = useState('users')
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, [reqType])



  
  return (
    <div className="App">
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />
    </div>
  );
}

export default App;
