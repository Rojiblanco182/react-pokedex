import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon, buttonDetails, children }) {
  const formattedName = pokemon?.name?.charAt(0)?.toUpperCase() + pokemon?.name?.slice(1);
  return (
    <Card sx={{ maxWidth: 250, backgroundColor: '#F0F8FF', margin: '3px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {`#${pokemon?.id} ${formattedName}`}
        </Typography>
        <CardMedia
          component="img"
          height="250"
          image={pokemon?.sprites['front_default']}
        alt={pokemon?.name}
        sx={{objectFit: 'unset'}}
        />
        <CardContent>
          {children}
        </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant="outlined" size="small">
          <Link className="link" to={buttonDetails.url}>{buttonDetails.text}</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
