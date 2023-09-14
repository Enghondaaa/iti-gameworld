import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../store/favoritesSlice';
import FavoritesCard from '../FavoritesCard';

export const Favorites = () => {
  const favoritesGames = useSelector((state) => state.favorites.games);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (game) => {
      dispatch(removeFromFavorites(game));
  };
  return <>
    <section>
      <div className="container mt-5 py-5">
        <div className="row">
          {favoritesGames.map((favoriteGame,index)=>{
            
           return <FavoritesCard key= {index} info={favoriteGame} handleRemoveFromFavorites={() => {
            handleRemoveFromFavorites(favoriteGame)
           }}/>
          })
          }
        </div>
      </div>
    </section>
  
  </>
}

