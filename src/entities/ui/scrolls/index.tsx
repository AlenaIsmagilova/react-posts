import InfiniteScroll from "../infinite-scroll";
import VirtualScroll from "../virtual-scroll";

export interface IVirtualAndInfiniteScrollsProps {
  listItems: JSX.Element[];
  height: string;
  lastRowHandler: () => void;
}

function VirtualAndInfiniteScrolls({
  listItems,
  height,
  lastRowHandler,
}: IVirtualAndInfiniteScrollsProps): JSX.Element {
  const VirtualScrollChildren = listItems.map((listItem) => (
    <VirtualScroll height={height} children={listItem} />
  ));

  return (
    <InfiniteScroll
      listItems={VirtualScrollChildren}
      lastRowHandler={lastRowHandler}
    />
  );
}

export default VirtualAndInfiniteScrolls;
