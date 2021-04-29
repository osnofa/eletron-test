import FilmCard from './card/FilmCard';

interface FilmListProps {
  films: [];
}

const FilmList: React.FC<FilmListProps> = ({ films }) => {
  return (
    <>
      {/*
      <pre>
        <code>{JSON.stringify(films, null, 2)}</code>
      </pre>
    */}
      {films?.map((film, index) => (
        <FilmCard key={index} {...film} />
      ))}
    </>
  );
};

export default FilmList;
