import { Box, Button } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import Search from './Search';

function Header({ setSearchQuery, searchQuery }) {
  return (
    <Box
      sx={{
        width: '100dvw',
        paddingTop: '2rem',
        height: '3rem',
        display: 'flex',
        gap: '0.5rem',
        bgcolor: 'secondary.contrastText[0]',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button
        variant='filled'
        sx={{ bgcolor: '#ff8800' }}
        onClick={() => setSearchQuery('')}
      >
        <LocalMoviesIcon />
      </Button>
      <Search setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
    </Box>
  );
}

export default Header;
