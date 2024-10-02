import { useFetchData } from "./hooks/useFetchData";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import MockItem from "./components/MockItem";
import Header from "./components/Header";
import SkeletonGroup from "./components/SkeletonGroup";

function App() {
  const { fetchedData, totalPrice, handlePageUpdate, isEnd, isLoading } =
    useFetchData();
  const { observerRef } = useIntersectionObserver(handlePageUpdate, isEnd);

  return (
    <main className="flex flex-col items-center justify-center pt-24">
      <Header totalPrice={totalPrice} />

      {/* 초기로딩 */}
      {isLoading && fetchedData.length === 0 ? (
        <SkeletonGroup count={3} />
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {fetchedData.map((data, idx) => (
            <MockItem key={idx} data={data} />
          ))}
        </div>
      )}

      {/* 데이터가 끝나지 않았을 경우 */}
      {!isEnd && (
        <div ref={observerRef}>
          <SkeletonGroup count={1} />
        </div>
      )}
    </main>
  );
}

export default App;
