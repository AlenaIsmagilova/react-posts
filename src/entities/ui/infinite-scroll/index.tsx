import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./infinite-scroll.module.css";

export interface IInfiniteScrollProps {
  listItems: JSX.Element[];
  lastRowHandler: () => void;
}

const InfiniteScroll = ({
  listItems,
  lastRowHandler,
}: IInfiniteScrollProps) => {
  const [lastRowRef, lastRowInView] = useInView();

  useEffect(() => {
    lastRowInView && lastRowHandler();
  }, [lastRowInView]);

  const Elements = listItems.map((listItem, i) => {
    const props = { key: i };
    i === listItems.length - 1 && (props["ref"] = lastRowRef);
    return <div {...props}>{listItem}</div>;
  });

  return <ul className={styles.list}>{Elements}</ul>;
};

export default InfiniteScroll;
