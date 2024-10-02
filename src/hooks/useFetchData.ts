import { useState, useEffect } from "react";
import { getMockData } from "../services/getMockData";
import { MockData } from "../types/mockData";

export const useFetchData = () => {
  const [page, setPage] = useState(0);
  const [isEnd, setIsEnd] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fetchedData, setFetchedData] = useState<MockData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePageUpdate = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const handleGetMockData = async () => {
      setIsLoading(true); 
      try {
        const data = await getMockData(page);
        const newTotalPrice = data.datas.reduce((acc, cur) => acc + cur.price, 0);
        setTotalPrice((prev) => prev + newTotalPrice);
        setFetchedData((prev) => [...prev, ...data.datas]);
        setIsEnd(data.isEnd);
      } catch (err) {
        console.log('Failed to fetch data', err); 
      } finally {
        setIsLoading(false); 
      }
    };

    handleGetMockData();
  }, [page]);

  return { fetchedData, totalPrice, handlePageUpdate, isEnd, isLoading };
};
