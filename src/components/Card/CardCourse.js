import React from 'react';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

function CardCourse({ title, author, price, urlImage, classes }){
    return(
        <Card className={classes.item} >
            <Link to="/contenido" style={{textDecoration:'none', color: 'black'}}>
            <CardMedia className={classes.media} image={urlImage} />
            
            <CardContent >
                <Typography component="p" variant="subtitle1">{author}</Typography>
                <Typography component="p" variant="h6" gutterBottom >{title}</Typography>
                
                <Typography component="p" variant="h6" color="primary">{price} BS</Typography>
            </CardContent>
            </Link>
            
        </Card>
    );
}

export default withStyles({
    item:{
        height: "250",
        minHeight: "250",
        minWidth: "285px",
        margin: ".5rem",
        textAlign: "left",
        //boxSizing: "border-box",
        //border: "2px rgba(1, 1, 1, 1)",
        border: "2px solid #9c9c9c",
        //background: "linear-gradient(to top, #fc7944, #f79872)",
        //boxShadow: "rgba(0, 0, 0, 1)",
        "&:hover": {
            border: "2px solid #521751",
            //opacity: .4,
        }
    },


    media:{
        backgroundColor:"#000000",
        height: "100px",
        minHeight: "140px",
        minWidth: "285px",  
        //width: "200px"
        "&:hover": {
            //opacity: .4,
        }
    },

})(CardCourse);