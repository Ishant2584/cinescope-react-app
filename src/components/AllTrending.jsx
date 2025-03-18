import { Box, Typography } from '@mui/material';
import MovieGrid from './MovieGrid';

function AllTrending({ isLoading, data, toggleDrawer }) {
  return (
    <>
      <Typography
        variant='h4'
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
        {'     '}
        Trending
      </Typography>

      <MovieGrid
        data={data}
        isLoading={isLoading}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}

export default AllTrending;
