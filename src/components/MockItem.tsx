import { MockData } from "../types/mockData";

const MockItem = ({ data }: { data: MockData }) => {
  const boughtDate = new Date(data.boughtDate);

  return (
    <div
      key={data.productId}
      className="w-[300px] flex flex-col gap-2 bg-gray-100 rounded-xl	p-6"
    >
      <h2 className="h-[56px] text-xl font-bold">{data.productName}</h2>
      <p className="">{data.price}</p>
      <p>{boughtDate.toUTCString()}</p>
    </div>
  );
};

export default MockItem;
