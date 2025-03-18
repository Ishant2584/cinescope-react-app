import { IconButton, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';

function Search({ setSearchQuery, searchQuery }) {
  function handleChange(event) {
    setSearchQuery(event.target.value);
  }
  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 550,
        height: '2.5rem',
        border: 'none',
        outline: 'none',
      }}
    >
      <IconButton type='button' aria-label='search' disabled={true}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{
          width: '100%',
        }}
        placeholder='Search for Movie, TV Serial, Cast and more...'
        inputProps={{ 'aria-label': 'search movie' }}
        onChange={handleChange}
        value={searchQuery}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleChange();
          }
        }}
      />
      {searchQuery?.length > 0 && (
        <IconButton
          type='button'
          aria-label='search'
          onClick={() => setSearchQuery('')}
        >
          <CancelIcon />
        </IconButton>
      )}
    </Paper>
  );
}

export default Search;
