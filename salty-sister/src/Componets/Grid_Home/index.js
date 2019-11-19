import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeCard from '../Recipe_Card_Home';
import './style.css';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <h1>Salty Sister</h1>
                <img src= {require ('/Users/phildugliss/GitHub/salty_sister/salty-sister/src/Assets/Images/Oysters2.jpg')} style={{width: 1270, height: 753}} alt= 'background' class='responsive'/>
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    
                    <Paper className={classes.paper}>
                    <h2>Current Recipes</h2>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <h2>About Us</h2>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <RecipeCard></RecipeCard>
                </Grid>
                <Grid item xs={6} sm={3}>
                <RecipeCard></RecipeCard>
                </Grid>
                <Grid item xs={6} sm={3}>
                <RecipeCard></RecipeCard>
                </Grid>
                <Grid item xs={6} sm={3}>
                <RecipeCard></RecipeCard>
                </Grid>
            </Grid>
        </div>
    );
}