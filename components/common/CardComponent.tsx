import { FC } from "react"
import { Post } from "../../types/Post.interface"
import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent: FC<{ post: Post }> = ({post}: {post: Post}) => {
    const { slug, metaData } = post;
    const {title, dateString, mainImageUrl, excerpt } = metaData;
    return (
        <Card sx={{ minWidth: 275, margin: 'auto', marginTop: 2 }}>
            <CardMedia 
                component='img'
                height='200'
                image={mainImageUrl}
            >
            </CardMedia>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {excerpt}
                </Typography>
                <Typography variant="body2">
                {dateString}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/blog/${slug}`} passHref>
                    <Button size="small">Learn More</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CardComponent