import { Box, CircularProgress } from '@mui/material';
import { useDetailsById } from './useDetailsById';
import { endpoints } from '../utils/constants';
import InsetDetails from './InsetDetails';

function MovieTvDetails({ item, handleOpen, setTrailer, country }) {
  const { isLoading, data } = useDetailsById(item?.media_type, item?.id, '');
  const { isLoading: isVideoLoading, data: videos } = useDetailsById(
    item?.media_type,
    item?.id,
    '/videos'
  );
  const { isLoading: isWatchPrvLoading, data: watchPrvs } = useDetailsById(
    item?.media_type,
    item?.id,
    '/watch/providers'
  );

  const imageUrl = data?.backdrop_path
    ? `${endpoints.imageOrignalApiUrl}${data?.backdrop_path}`
    : data?.poster_path
    ? `${endpoints.imageOrignalApiUrl}${data?.poster_path}`
    : `/src/asset/placeholder_movie.svg`;
  if (isLoading || isVideoLoading || isWatchPrvLoading)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100dvh',
          bgcolor: '#020617',
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <>
      <Box
        sx={{
          borderLeft: '0.2rem solid #ff8800',
          aspectRatio: '16/9',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          boxShadow: 'inset 10rem -2rem 120px 9.5rem rgba(0,0,0,0.88)',
          color: '#fff',
        }}
      >
        <InsetDetails
          item={data}
          videos={videos?.results}
          handleOpen={handleOpen}
          setTrailer={setTrailer}
          country={country}
          watch={
            watchPrvs?.results?.[country] ||
            watchPrvs?.results?.['US'] ||
            watchPrvs?.results?.['IN'] ||
            (watchPrvs?.results && Object?.values(watchPrvs?.results)?.[0])
          }
        />
      </Box>
    </>
  );
}

export default MovieTvDetails;
