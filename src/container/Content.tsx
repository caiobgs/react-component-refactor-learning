import { CategoryPanel } from "../components/CategoryPanel";
import { MoviePanel } from "../components/movie/MoviePanel";

interface ContentProps {
  selectedGenre:{
    title: string;
  },
  selectedGenreId: number;
}

export function Content({selectedGenreId, selectedGenre} : ContentProps) {
  
  return (
    <div className="container">
      <header>
        <CategoryPanel selectedGenre={selectedGenre}/>
      </header>
      <main>
        <MoviePanel selectedGenreId={selectedGenreId}/>
      </main>
    </div>
  )
}