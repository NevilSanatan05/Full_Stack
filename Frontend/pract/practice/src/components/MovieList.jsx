function MovieList(props) {
  return (
    <>
      <h2>Movie List:</h2>
      <ul>
        {props.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </>
  );
}
export default MovieList;