import Skeleton from "./Skeleton";
import { useState, useEffect } from "react";

interface SkeletonGroupProps {
  count: number;
}

const SkeletonGroup = ({ count }: SkeletonGroupProps) => {
  const [columns, setColumns] = useState(1);

  // 현재 화면 크기에 따른 그리드 컬럼 수를 계산
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        setColumns(3); // lg:grid-cols-3
      } else if (window.innerWidth >= 768) {
        setColumns(2); // md:grid-cols-2
      } else {
        setColumns(1); // sm:grid-cols-2
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);

    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // 그리드에 맞춰 스켈레톤 개수를 조정
  const skeletons = Array.from({ length: columns * count }, (_, index) => <Skeleton key={index} />);

  return (
    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mb-8`}>
      {skeletons}
    </div>
  );
};

export default SkeletonGroup;
