import {React} from 'react';
import { Typography, Card } from '@mui/material';

const ImageCard = ({imageURL, caption, altText}) => {
    return (
        <Card sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', height: '95%'}}>
            <img src = {imageURL} alt = {altText} style={{width: '100%', height: '100%', display: 'flex', borderRadius: '1em'}}/>
            {caption && <Typography sx={{color: 'white'}} variant="p">{caption}</Typography>}
        </Card>
    )
}

export default ImageCard;