import { Paper, Stack } from '@mui/material';
import { endpoints } from '../utils/constants';
import MovieName from './MovieName';

function MovieBox({ item, toggleDrawer }) {
  const imageUrl = item?.poster_path
    ? `${endpoints.imageOrignalApiUrl}${item?.poster_path}`
    : `/src/asset/placeholder_movie.svg`;
  return (
    <Paper
      elevation={4}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'inherit',
        minWidth: '12rem',
        height: '22rem',
        padding: '0.4rem',
        borderRadius: '0.4rem',
        transition: 'all .2s ease-in-out',
        transform: 'scale(1)',
        overflow: 'hidden',
        '&:hover': {
          cursor: 'pointer',
          transform: 'scale(1.07)',
        },
      }}
      onClick={toggleDrawer({ data: { item: item, open: true } })}
    >
      <Stack
        spacing={0}
        alignItems={'center'}
        sx={{ maxWidth: '12rem', gap: '0.2rem' }}
      >
        <span
          src={imageUrl}
          alt={item?.title}
          style={{
            width: '11.6rem',
            height: '18.2rem',
            borderRadius: '0.4rem 0.4rem 0rem 0rem',
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
          }}
        ></span>
        <MovieName item={item} />
      </Stack>
    </Paper>
  );
}

export default MovieBox;
