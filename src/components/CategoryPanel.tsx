interface CategoryPanelProps {
    selectedGenre: {
        title: string;
    }
}

export function CategoryPanel({selectedGenre}: CategoryPanelProps){

    return <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
}