import { useEffect, useState } from "react";
import { getMockData } from "./services/getMockData";
import { MockData } from "./types/mockData";
import MockItem from "./components/MockItem";

function App() {
  // const [page, setPage] = useState(1);
  const [fetchedData, setFetchedData] = useState<MockData[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getMockData(1).then((data) => {
      console.log(data.datas);
      setFetchedData(data.datas);
      setTotalPrice(data.datas.reduce((acc, cur) => acc + cur.price, 0));
    });
  }, []);

  return (
    <main className="flex flex-col items-center justify-center pt-24">
      <header className="w-full fixed top-0 flex justify-between items-center px-8 py-4 bg-white/50 backdrop-blur-xl">
        <h1 className="font-bold text-2xl">challenge!</h1>
        {totalPrice ? (
          <h1 className="font-bold text-2xl">total price! : {totalPrice}</h1>
        ): '스켈레톤?'}
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-20">
        {fetchedData.map((data) => (
          <MockItem key={data.productId} data={data} />
        ))}
      </div>
    </main>
  );
}

export default App;
