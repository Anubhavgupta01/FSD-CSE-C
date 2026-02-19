import { useState } from "react";

function App() {
  const [info, setInfo] = useState(null);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setInfo(data);
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div>
      <h1>System Info</h1>

      <button onClick={() => fetchData("http://localhost:5000/osinfo")}>
        Get OS Info
      </button>

      <button onClick={() => fetchData("http://localhost:5000/cpuinfo")}>
        Get CPU Info
      </button>

      <button onClick={() => fetchData("http://localhost:5000/memoryinfo")}>
        Get Memory Info
      </button>

      <button onClick={() => fetchData("http://localhost:5000/diskinfo")}>
        Get Disk Info
      </button>

      {info && <pre>{JSON.stringify(info, null, 2)}</pre>}
    </div>
  );
}

export default App;
