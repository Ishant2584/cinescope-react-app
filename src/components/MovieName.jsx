import { Box, Rating, Stack, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

function MovieName({ item }) {
  return (
    <Box
      sx={{
        alignSelf: 'flex-start',
        width: '100%',
        maxWidth: '12rem',
        // bgcolor: '#3c4c63',
        padding: '0.3rem',
        borderEndStartRadius: '0.2rem',
        borderLeft: '0.2rem solid #ff8800',
      }}
    >
      <Typography
        color='onPrimary.main'
        sx={{
          fontSize: '1rem',
          fontWeight: '650',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          // animation: 'scrollText 10s linear infinite',
        }}
      >
        {item.media_type === 'movie' ? item?.title : item.name}
      </Typography>
      <Stack
        direction='row'
        sx={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Typography
          color='onPrimary.main'
          sx={{
            fontSize: '0.7rem',
            fontWeight: '200',
          }}
        >
          {item.media_type === 'movie'
            ? item?.release_date.split('-')[0]
            : item?.first_air_date.split('-')[0]}
        </Typography>
        <Rating
          name='read-only-movie-ratings'
          precision={0.5}
          value={item?.vote_average / 2}
          size='small'
          readOnly
          emptyIcon={
            <StarIcon
              style={{ opacity: 0.34, color: '#fff' }}
              fontSize='inherit'
            />
          }
        />
      </Stack>
    </Box>
  );
}

export default MovieName;
