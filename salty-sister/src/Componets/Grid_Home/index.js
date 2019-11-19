import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RecipeCard from '../Recipe_Card_Home';

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
                <img src= {require ('/Users/phildugliss/GitHub/salty_sister/salty-sister/src/Assets/Images/Oysters2.jpg')} style={{width: 980, height: 653}}  />
                    
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
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