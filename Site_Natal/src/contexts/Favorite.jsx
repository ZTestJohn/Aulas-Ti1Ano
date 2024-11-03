/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }) {
	const [ favorite, setFavorite ]	= useState([]);

	return (
		<FavoritesContext.Provider
			value={{favorite, setFavorite}} >
			{ children }
		</FavoritesContext.Provider>
	);
}

export function useFavoriteContext() {
	const { favorite, setFavorite }	 = useContext(FavoritesContext);

	function addFavorite(newFavorite) {
		const repeatedFavorite = favorite.some(item => item.codigo_unico === newFavorite.codigo_unico);
		let newList = [...favorite]
		if(!repeatedFavorite) {
			newList.push(newFavorite)
			return setFavorite(newList) 
		}
		newList = favorite.filter((fav) => fav.codigo_unico !== newFavorite.codigo_unico)
		return setFavorite(newList)
	}
	return {
		favorite,
		addFavorite
	}

}