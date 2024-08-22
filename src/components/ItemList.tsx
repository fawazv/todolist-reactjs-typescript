import { Button } from "./Button";
import { ReactSetState, Items } from "../types/utils";

type ItemList = {
  items: Items[];
  setItems: ReactSetState<Items[]>;
};

export const ItemList = ({ items, setItems }: ItemList) => {
  const handleDelete = (id: string) => {
    setItems((prevValue) => prevValue.filter((data) => data.id !== id));
  };

  return items.map((data) => (
    <div
      key={data.id}
      className="flex justify-between items-center border border-slate-600 pl-2 mb-2 mr-1 py-2  rounded-md"
    >
      <p>{data.title}</p>
      <Button
        onClick={() => handleDelete(data.id)}
        className="px-1 py-1 bg-red-500 rounded-lg w-14"
      >
        Delete
      </Button>
    </div>
  ));
};
