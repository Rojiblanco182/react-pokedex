import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

export default function PokemonCard({ pokemon, buttonDetails, children }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
        <Typography gutterBottom variant="h5" component="div">
          {`#${pokemon?.id} ${pokemon?.name}`}
        </Typography>
        <CardMedia
          component="img"
          height="250"
          image={pokemon?.sprites['front_default']}
          alt={pokemon?.name}
        />
        <CardContent>
          {children}
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          <Link className="link" to={buttonDetails.url}>{buttonDetails.text}</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
