
import { useEffect, useMemo, useState } from "react";
import Chart from "./components/Chart";
import { graphData } from './components/graphData';


function App() {
  const [selectedValue, setSelectedValue] = useState('')
  const [data, setData] = useState([])

  useMemo(() => 
  selectedValue ? 
  setData(graphData.filter((item) => item.date.toLowerCase() === selectedValue.toLowerCase())) : 
  setData(graphData)
  , [selectedValue])
  return (
    <div className="App">
    <main className="w-3/4 mx-auto flex items-center justify-center border-2 shadow rounded-lg p-4  mt-12 flex-col">

    <header className="flex items-center justify-between w-full px-12">
    <h2 className="text-2xl font-semibold text-gray-700">Graph Widget</h2>
    <select className="capitalize p-2 outline-none text-gray-500 border-2 rounded-xl" onChange={e => setSelectedValue(e.target.value)}>
      <option value=''>filter by date</option>
      <option value='last 7 days'>last 7 days</option>
      <option value='last 15 days'>last 15 days</option>
      <option value='last 1 Month'>last 1 Month</option>
      <option value='last 2 Month'>last 2 Months</option>
    </select>
    </header>
    {data && data.length > 0 ? <Chart data={data}/> : 'no data available'}
    </main>

    </div>
  );
}

export default App;
