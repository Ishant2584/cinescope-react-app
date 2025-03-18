import { Box, Stack, Typography } from '@mui/material';
import MovieBox from './MovieBox';

function MoviesTrending({ data, toggleDrawer }) {
  return (
    <>
      <Typography
        style={{
          color: '#fff',
          display: 'block',
          alignItems: 'center',
          borderLeft: '0.4rem solid #ff8800',
          margin: '2rem 2rem 0rem 2rem',
          padding: '0.5rem 1rem 0rem 1rem',
          fontSize: '1.25rem',
          fontWeight: '600',
          height: '2.4rem',
        }}
      >
        Top Movies
      </Typography>

      <Stack
        direction='row'
        spacing={2.4}
        sx={{
          m: '2rem',
          overflowX: 'auto',
          height: '23rem',
          width: 'auto',
        }}
      >
        {data?.map((item) => (
          <MovieBox key={item.id} item={item} toggleDrawer={toggleDrawer} />
        ))}
      </Stack>
    </>
  );
}

export default MoviesTrending;
