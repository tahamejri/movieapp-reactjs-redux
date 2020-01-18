
import { ADD_MOVIE, REMOVE_MOVIE,EDIT_MOVIE} from '../actions/actionTypes';
// if you want to show initial data :)
const INITIAL_DATA =  [
    {
      title: "Joker",
      year:2019,
      id: 0,
      description: "blabla",
      image:
        "https://www.mauvais-genres.com/27765/joker-original-movie-poster-15x20-in-2019-joaquin-phoenix.jpg",
      rating: 2
    },
    {
      title: "start Wars",
      year:2017,
      description: "blabla",
      image: "https://images-na.ssl-images-amazon.com/images/I/51%2Bzb74v-TL.jpg",
      id: 2,
      rating: 0
    },
    
    {
      title: "Captain Marvel",
      year:2016,
      description: "lina",
      image:
        "https://www.homewallmurals.co.uk/ekmps/shops/allwallpapers/images/captain-marvel-epic-61x91-5cm-movie-poster-31596-1-p.jpg",
      id: 3,
      rating: 4
    },
    {
      title: "Avengers",
      year:2015,
      description: "blablablablablabla",
      image:
        "https://preview.redd.it/i16fmegsy8z01.jpg?auto=webp&s=b8dbbb4114c0b0194d810364e28d1c06cd82a886",
      id: 1,
      rating: 4
    }
  ];



//const INITIAL_DATA = []

const MovieReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_MOVIE:
        return [
            ...state,{
                id: action.id,
                title: action.title,
                description: action.description,
                image: action.image,
                rating: action.rating,
                
            }
        ]
        
        case REMOVE_MOVIE:
        const numIndex = parseInt(action.id)
        return state.filter(movie => movie.id !== numIndex);

         case EDIT_MOVIE:
         // return  state.map((movie)=>movie.id === action.id ? {...movie,editing:!movie.editing}:movie)

         const Index = parseInt(action.id)
         return state.filter(movie => movie.id == Index);

         default:
         return state
    }
}

export default MovieReducer