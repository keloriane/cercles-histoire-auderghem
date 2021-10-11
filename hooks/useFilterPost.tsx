import { useEffect, useState } from 'react';
import { useManualQuery, useQuery } from 'graphql-hooks';
import { NEIGHBOURS_FILTERED } from '../GraphqlQueries';
import { NEIGHBOURS_HEADERS_FILTERS } from 'query/neighbours_header_filter.query';
import { NEIGHBOURS_HEADERS_DEFAULT } from 'query/neighbours_header_filter.query';
import { produce } from 'immer';
export const useFilterNeighbour = () => {
  const { data } = useQuery(NEIGHBOURS_HEADERS_FILTERS);
  const { data: defaultData } = useQuery(NEIGHBOURS_HEADERS_DEFAULT);
  const [fetchFilteredNeighbours] = useManualQuery(NEIGHBOURS_FILTERED);
  const [neighbours, setNeighbours] = useState(null);
  const [defaultNeighbour, setDefaultNeighbour] = useState(null);

  useEffect(() => {
    if (data) {
      const _neighbours = addCheckProps(data.neighbours.nodes);
      setNeighbours(_neighbours);
      setDefaultNeighbour(defaultData.neighbours.nodes[0]);
    }
  }, [data]);
  function handleChange(id) {
    const neighbourUpdated = produce(neighbours, (draftNeighbours) => {
      draftNeighbours.map((node) => {
        node.checked = node.checked && false;
        node.checked = node.id === id && true;
        return node;
      });
    });
    setNeighbours(neighbourUpdated);
    fetchFilteredNeighbours({ variables: { id } }).then((data) => {
      setDefaultNeighbour(data.data.neighbour);
    });
  }
  function addCheckProps(data) {
    return data.map((node, index) => {
      node.checked = index === 0;
      return node;
    });
  }
  return { neighbours, handleChange, defaultNeighbour };
};
