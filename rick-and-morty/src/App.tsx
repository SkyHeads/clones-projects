import React, { useContext, useEffect, useCallback } from 'react';
import { Store, IState } from './Store';

interface ContextProps {
  state: IState;
  dispatch: React.Dispatch<any>;
}

const App: React.FC = () => {
  const { state, dispatch } = useContext<ContextProps>(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = useCallback(async () => {
    const URL =
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes,
    });
  }, [dispatch]);

  console.log(state);

  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
    </>
  );
};

export default App;
