import { useInView } from "react-intersection-observer";

export interface IVirtualScrollProps {
  height: string;
  children: JSX.Element;
}

const VirtualScroll = ({ height, children }: IVirtualScrollProps) => {
  const [ref, inView] = useInView();
  const style = {
    height: `${height}px`,
    overflow: "hidden",
  };

  return (
    <div style={style} ref={ref}>
      {inView ? children : null}
    </div>
  );
};

export default VirtualScroll;
