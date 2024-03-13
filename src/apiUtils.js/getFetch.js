import {useQuery} from 'react-query';

const fetchPosts = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/';

  fetch(url)
    .then((data) => data.json())
    .then((data) => {
      console.log(data[0], '<== data ');
    })
    .catch((err) => console.log(err));
};

const getFetchData = () => {
  function QueryClient(props) {
    const {isPending, error, data} = useQuery({
      queryKey: ['repoData'],
      queryFn: fetchPosts,
    });
    return {isPending, error, data};
  }
  return QueryClient();
};

export {getFetchData};
