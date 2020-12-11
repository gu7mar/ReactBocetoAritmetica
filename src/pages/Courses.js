import React, {Component} from 'react';
import ListCourses from '../components/List-courses'
import axios from 'axios'
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class CoursesPage extends Component{
    
    state ={
        courses: []
    }
    componentDidMount(){
        axios.get('http://localhost/laravel/courses/public/api/courses', this.state)
            .then(response =>{
                const courses =response.data.courses;
                this.setState({
                    courses
                })
                //console.log(response.data.courses)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render(){
        const {courses} = this.state;
        return(
            <ListCourses thecourses={courses} />
        );
    }
}

export default CoursesPage;