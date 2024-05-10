import React, { useEffect } from 'react';
import G6, { Graph } from '@antv/g6';

const data = {
  // 点集
  nodes: [
    {
      id: 'node1', // String，该节点存在则必须，节点的唯一标识
      x: 100, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
    {
      id: 'node2', // String，该节点存在则必须，节点的唯一标识
      x: 300, // Number，可选，节点位置的 x 值
      y: 200, // Number，可选，节点位置的 y 值
    },
  ],
  // 边集
  edges: [
    {
      source: 'node1', // String，必须，起始点 id
      target: 'node2', // String，必须，目标点 id
    },
  ],
};

export default function DicomDiagram() {
  
  const ref = React.useRef(null)
  let graph = null;

  useEffect(() => {
    if(!graph) {
      graph = new G6.Graph({
        container: ref.current,
        width: 800, 
        height: 500, 
      });

    }
    graph.data(data)
    graph.render()
  }, []);

  return (
    <div ref={ref}>
    </div>
  )
};
