import {React} from 'react';
import {Container, Box, Typography, Divider, Grid} from '@mui/material';
import data from "../../data/main.json";
import ImageCard from '../../components/ImageCard';

const HomePage = () =>{
    const {
        project_description,
        logo_image,
        placeholder_image,
        developer_image
    } = data;

    const logo = require ("../../images/" + logo_image);
    const placeholder = require ("../../images/" + placeholder_image);
    const dev = require ("../../images/" + developer_image);

    return(
        <Container sx= {{alignContent: 'center', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column',width:'85%', padding:'2em', margin:'2em auto'}}>
            <Box sx={{backgroundColor: 'black', padding: '1em', borderRadius: '2em', display: 'flex', flexDirection: 'column', height: '100%', width: '95%', alignItems: 'center'}}>
                <Box sx={{backgroundColor: 'black', padding: '1em', borderRadius: '2em', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography sx={{color: 'white'}} variant='h2'>Elementalist</Typography>
                    <img src={logo} alt="Elementalist Game Logo" width="70" height="70"  style={{ display: 'flex', marginLeft: '1em' }}/>
                </Box>
                <Typography sx={{color: 'white', fontStyle: 'italic'}} variant='h5'>3D Turn Based Game with Elemental Combat System </Typography>
            </Box>
            <Divider sx={{width: '100%', margin: '1em 0'}} />

            <Grid container spacing={2} sx={{width: '100%', margin: '1em 0'}}>
                <Grid item xs={7} md={7}>
                    <Box sx={{backgroundColor: 'black', padding: '1em', borderRadius: '2em', display: 'flex', flexDirection: 'column', height: '94%'}}>
                        <Typography sx={{color: 'white'}} variant='h5'>
                        Project Description
                        </Typography>
                        <Typography sx={{color: 'white', textAlign : 'justify'}} variant='p'>
                        {project_description}
                        </Typography>
                        <Divider sx={{width: '100%', margin: '1em 0'}} />
                        <Typography sx={{color: 'white'}} variant='h5'>
                        Project Resources
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={5} md={5}>
                    <Box sx={{backgroundColor: 'black', padding: '1em', borderRadius: '2em', display: 'flex', flexDirection: 'column'}}>
                        <ImageCard imageURL={dev} altText="Developer Image" caption="Jack Donohoe"></ImageCard>
                    </Box>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Box sx={{backgroundColor: 'black', padding: '1em', borderRadius: '2em', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <Typography sx={{color: 'white'}} variant='h5'>Demo Video</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;