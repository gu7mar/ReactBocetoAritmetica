import React, {Fragment} from 'react';
import CardCourse from './Card/CardCourse';
import { Grid } from '@material-ui/core';

const ListCourse = ({thecourses})=>{
    
    return(
        <Fragment>
        <h1>Lista de cursos</h1>
        <h3 className="neww">Selecciona el curso del cual quieras obtener el certificado para funcionario publico</h3>
            <Grid  /*justify="right"*/ className="personal" container item xs={12}>
            {thecourses.map((course,index) =>{
                return <CardCourse author={course.author} title={course.title} price={course.price} urlImage={course.url} key={index}/>
            })}
            </Grid>


        </Fragment>
    );
}

export default ListCourse