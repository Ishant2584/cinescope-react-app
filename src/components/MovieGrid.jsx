import { Grid2 } from '@mui/material';
import MovieBox from './MovieBox';
import { useMemo } from 'react';
import NoRecordsFound from './NoRecordsFound';

function MovieGrid({ data, toggleDrawer }) {
  const movieList = useMemo(() => {
    return data?.filter(
      (item) =>
        (item?.media_type === 'tv' || item?.media_type === 'movie') &&
        item?.poster_path
    );
  }, [data]);

  if (movieList?.length === 0) return <NoRecordsFound />;
  return (
    <Grid2
      container
      justifyContent={'left'}
      spacing={1.4}
      sx={{
        p: '2rem',
        minHeight: '100dvh',
      }}
    >
      {movieList?.map((item) => (
        <MovieBox key={item.id} item={item} toggleDrawer={toggleDrawer} />
      ))}
    </Grid2>
  );
}

export default MovieGrid;
