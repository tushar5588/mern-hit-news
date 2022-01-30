import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Cards.css"

export default function ImgMediaCard({News}) {
    return(
        <>
    {News.map((news)=>{
  return (
      <div className="columns">
    <Card sx={{ maxWidth: 500, minHeight:480 }}>
      <CardMedia
        component="img"
        alt="Hit-News Image..."
        height="200"
        image={news.urlToImage}
      />
      <CardContent  className="cardcontent">
        <Typography gutterBottom variant="h5" component="div">
          {news.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
})}
</>
    )

}