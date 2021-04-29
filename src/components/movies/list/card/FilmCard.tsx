interface FilmCardProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

const FilmCard: React.FC<FilmCardProps> = (props: FilmCardProps) => {
  return (
    <p>
      Film Card - {props.Year} - {props.Title}
    </p>
  );
};

export default FilmCard;
