import { useState } from 'react';

export default function Codecool() {
  const [data, setData] = useState([]);

  const load = () => {
    fetch('/api/codecool')
      .then(res => res.json())
      .then(d => setData(d));
  };

  return (
    <div className="card">
      <button onClick={load}>
        Get data from server
      </button>
      {
        data.map(d => <p key={d}>{d}</p>)
      }
    </div>
  );
}
