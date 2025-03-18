import { useState } from 'react';
import { useSearch } from '../components/useSearch';
import Header from '../components/Header';
import MovieGrid from '../components/MovieGrid';
import { useTrending } from '../components/useTrending';
import {
  Box,
  CircularProgress,
  Drawer,
  Modal,
  Typography,
} from '@mui/material';
import MovieTvDetails from '../components/MovieTvDetails';
import ReactPlayer from 'react-player';
import { useLocationData } from '../components/useLocationData';
import AllTrending from '../components/AllTrending';
import MoviesTrending from '../components/MoviesTrending';
import TvTrending from '../components/TvTrending';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerState, setDrawerState] = useState({ item: [], open: false });
  const { isLoading, data = [] } = useSearch(searchQuery);
  const { isLoading: isTrendingLoad, data: trendingData = [] } =
    useTrending('all');
  const { isLoading: isTrendingMovieLoad, data: trendingMovieData = [] } =
    useTrending('movie');
  const { isLoading: isTrendingTvLoad, data: trendingTvData = [] } =
    useTrending('tv');
  const [trailer, setTrailer] = useState('');
  const { isLoading: locationLoading, data: userLocation } = useLocationData();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const toggleDrawer =
    ({ data }) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setDrawerState((prev) => ({ ...prev, item: data.item, open: data.open }));
    };

  if (isTrendingMovieLoad || isTrendingTvLoad)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100dvw',
          height: '100dvh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  return (
    <>
      <Header setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      {searchQuery.length > 0 ? (
        <MovieGrid
          data={data?.results}
          isLoading={isLoading || locationLoading}
          toggleDrawer={toggleDrawer}
        />
      ) : (
        <>
          <MoviesTrending
            data={trendingMovieData?.results}
            toggleDrawer={toggleDrawer}
          />
          <TvTrending
            data={trendingTvData?.results}
            toggleDrawer={toggleDrawer}
          />
          <AllTrending
            isLoading={isTrendingLoad || locationLoading}
            data={trendingData?.results}
            toggleDrawer={toggleDrawer}
          />
        </>
      )}
      <Drawer
        anchor={'right'}
        open={drawerState?.open}
        onClose={toggleDrawer({ data: { item: [], open: false } })}
      >
        <Box sx={{ bgcolor: '#020617', height: '100dvh', width: '65dvw' }}>
          <MovieTvDetails
            item={drawerState?.item}
            handleOpen={handleOpen}
            setTrailer={setTrailer}
            country={userLocation?.country}
          />
        </Box>
      </Drawer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <ReactPlayer
            controls={true}
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width='70rem'
            height='40rem'
          />
        </Box>
      </Modal>
    </>
  );
}

export default Home;
