import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import React from "react";

const ScrollView = ({ count, renderRow }) => (
  <div style={{ width: "100vw", height: "85vh" }}>
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={count}
          itemSize={300}
          width={width}
        >
          {props => renderRow(props)}
        </List>
      )}
    </AutoSizer>
  </div>
);

export default ScrollView;
