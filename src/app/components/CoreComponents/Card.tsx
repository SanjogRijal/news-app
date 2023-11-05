import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'
import React from 'react';

interface CardComponentProps {
    imageUrl: string;
    heading: string;
    shortContent: string;
    fullArticle: string;
}
function CardComponent({ imageUrl, heading, shortContent, fullArticle }: CardComponentProps): React.ReactElement {
    return (<Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
        <CardMedia
            component="div"
            sx={{
                // 16:9
                pt: '56.25%',
            }}
            image={imageUrl}
        />
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
                {heading}
            </Typography>
            <Typography>
                {shortContent}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">View</Button>
            <Button size="small">Edit</Button>
        </CardActions>
    </Card>

    )
}

export default CardComponent