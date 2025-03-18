import { Box } from '@mui/material';

function NoRecordsFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100dvw',
        height: '100dvh',
        color: '#fff',
        fontSize: '2rem',
      }}
    >
      Oops! We couldn&apos;t find any movies or TV shows by that name.
    </Box>
  );
}

export default NoRecordsFound;
