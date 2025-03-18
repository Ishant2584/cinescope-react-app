import {
  Box,
  IconButton,
  Link,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import { getMintoDuration } from '../utils/helper';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { endpoints } from '../utils/constants';

function InsetDetails({
  item,
  videos,
  handleOpen,
  setTrailer,
  watch = { link: '' },
}) {
  // console.log(watch);
  const { link, ...watchOptions } = watch;
  console.log(watchOptions);
  const trailer =
    videos?.find((obj) => obj?.name === 'Official Trailer')?.key ||
    videos?.[0]?.key;

  return (
    <>
      <Stack
        spacing={1}
        sx={{
          padding: '2rem 3rem',
          background:
            'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0,0,0,0))',
          height: '100dvh',
          justifyContent: 'space-between',
        }}
      >
        <Stack spacing={1}>
          <Stack direction='row' alignItems={'center'} spacing={2.5}>
            <Typography variant='h4' sx={{ fontWeight: '700' }}>
              {item?.name || item?.title}
            </Typography>
            <Stack
              direction='row'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={0.8}
            >
              <Typography sx={{ fontSize: '1rem' }}>
                (
                {item?.release_date?.split('-')?.[0] ||
                  item?.first_air_date?.split('-')?.[0]}
                )
              </Typography>
              {item?.runtime && (
                <Typography>{getMintoDuration(item?.runtime)}</Typography>
              )}
            </Stack>
            {item?.adult && (
              <Typography
                variant='h6'
                sx={{
                  fontWeight: '600',
                  backgroundColor: 'rgba(127, 29, 29, 0.8)',
                  padding: '0.1rem 0.7rem',
                  borderRadius: '5rem',
                }}
              >
                A
              </Typography>
            )}
          </Stack>
          <Typography sx={{ fontStyle: 'italic' }}>{item?.tagline}</Typography>
          <Stack
            direction='row'
            divider={<Divider orientation='vertical' flexItem />}
            spacing={0.8}
          >
            {item?.genres?.map((gen) => (
              <Typography
                key={gen?.id}
                sx={{
                  backgroundColor: 'rgba(232, 221, 221, 0.2)',
                  padding: '0.1em 0.4rem',
                  borderRadius: '0.4rem',
                }}
              >
                {gen?.name}
              </Typography>
            ))}
          </Stack>
          <Stack
            direction='row'
            spacing={1}
            sx={{ alignSelf: 'flex-start', justifySelf: 'flex-end' }}
          >
            <Typography>Languages: </Typography>
            <Stack
              direction='row'
              divider={<Divider orientation='vertical' flexItem />}
              spacing={0.8}
            >
              {item?.spoken_languages?.map((lang) => (
                <Typography key={lang?.name}>{lang?.name}</Typography>
              ))}
            </Stack>
          </Stack>
          <Stack direction='row' spacing={0.8} alignItems={'center'}>
            <Typography>Ratings:{'  '}</Typography>
            <Stack
              direction='row'
              alignItems={'center'}
              divider={<Divider orientation='vertical' flexItem />}
              spacing={0.8}
            >
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
              <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>
                {' '}
                {item?.vote_average}
                <span style={{ fontSize: '1rem', fontWeight: 200 }}>/10</span>
              </span>
            </Stack>
          </Stack>
        </Stack>
        <IconButton
          sx={{ height: '3rem', width: '3rem', alignSelf: 'center' }}
          onClick={() => {
            setTrailer(trailer);
            handleOpen();
          }}
          disabled={!trailer}
        >
          <PlayCircleOutlineIcon
            sx={{
              color: '#d4c7c7',
              height: '6rem',
              width: '6rem',
            }}
          />
        </IconButton>
        <Stack spacing={2}>
          {Object.entries(watchOptions).length > 0 && (
            <div>
              <Typography
                variant='h6'
                sx={{ color: '#ff8800', fontWeight: '600' }}
              >
                Stream
              </Typography>

              {Object.keys(watchOptions).map((key) => (
                <Link
                  href={watch?.link}
                  target='_blank'
                  underline='none'
                  key={key}
                >
                  <Stack spacing={0.2}>
                    <Typography
                      sx={{
                        textTransform: 'capitalize',
                        color: '#d4c7c7',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        padding: '0.2rem 0rem 0.1rem 0.2rem',
                      }}
                    >
                      {key}
                    </Typography>
                    <Stack
                      direction='row'
                      divider={<Divider orientation='vertical' flexItem />}
                      spacing={0.8}
                      sx={{ padding: '0.1rem 0rem 0.9rem 0.2rem' }}
                    >
                      {watch?.[key]?.map((prv) => (
                        <span
                          key={prv?.provider_id}
                          style={{
                            width: '2.5rem',
                            height: '2.5rem',
                            borderRadius: '0.4rem',
                            backgroundImage: `url(${endpoints.imageOrignalApiUrl}${prv?.logo_path})`,
                            backgroundSize: 'cover',
                          }}
                        ></span>
                      ))}
                    </Stack>
                  </Stack>
                </Link>
              ))}
            </div>
          )}
          {item?.overview && (
            <div>
              <Typography
                variant='h6'
                sx={{ color: '#ff8800', fontWeight: '600' }}
              >
                Overview
              </Typography>
              <Typography sx={{ color: '#E2E8F0' }}>
                {item?.overview}
              </Typography>
            </div>
          )}
        </Stack>
      </Stack>
    </>
  );
}

export default InsetDetails;
