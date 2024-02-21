interface valuesFilter {
  id: string;
  name: string;
  results: number;
}

interface Filter {
  id: string;
  name: string;
  type: string;
  values: valuesFilter[];
}

export default Filter;
