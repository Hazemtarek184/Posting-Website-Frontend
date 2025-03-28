import { Avatar, Typography, Card, CardContent, CardMedia } from '@mui/material';
import ProfileBackground from './Image/anonymous-avatars-grey-circles.png';
import BackgroundImage from './Image/pexels-esan-2085998.jpg';
// import im from './Image/mz3yj3apfq571.png';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface ICardData {
  id: string;
  title: string;
  content: string;
  username: string;
  date: string | Date;
}

export default function PostCard(props: ICardData) {
  const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card
      sx={{
        width: 600,
        height: 600,
        margin: 'auto',
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden', // Ensures content doesn't overflow
        position: 'relative', // Helps with consistent sizing
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          paddingBottom: 1
        }}
      >
        <Avatar
          src={ProfileBackground}
          sx={{
            width: 50,
            height: 50
          }}
        />
        <div>
          <Typography variant="subtitle1" fontWeight="bold">
            {props.username}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {formatDate(props.date)}
          </Typography>
        </div>
      </CardContent>

      <CardContent sx={{ paddingTop: 0 }}>
        <Typography variant="body1" color="text.primary">
          {props.content}
        </Typography>
      </CardContent>

      <CardMedia
        component="img"
        image={BackgroundImage}
        alt="Post background"
        sx={{
          width: '100%',
          height: 400, // Fixed height for the image area
          objectFit: 'contain', // Ensures the entire image is visible while maintaining aspect ratio
          objectPosition: 'center', // Centers the image
        }}
      />

      <CardContent>

      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}