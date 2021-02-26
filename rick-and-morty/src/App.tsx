import React, { useContext, useEffect, useCallback } from 'react';
import { IAction, Store } from './Store';

interface ContextProps {
  state: {
    episodes: Array<{
      id: number;
      name: string;
      image: {
        medium: string;
      };
      season: string;
      number: number;
    }>;
  };
  dispatch: React.Dispatch<IAction>;
}

interface IEpisode {
  id: number;
  name: string;
  image: {
    medium: string;
  };
  season: string;
  number: number;
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

  const toggleFavAction = useCallback(
    (episode: IEpisode) => {
      return dispatch({
        type: 'ADD_FAV',
        payload: episode,
      });
    },
    [dispatch],
  );

  console.log(state);

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favorite episode</p>
      </header>
      <section className="episode-layout">
        {state.episodes.map(episode => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image.medium}
                alt={`Rick and Mort ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                <div>
                  Seasion: {episode.season} Number: {episode.number}
                </div>
                <button type="button" onClick={() => toggleFavAction(episode)}>
                  FAV
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default App;
