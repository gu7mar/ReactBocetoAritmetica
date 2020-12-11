import React, {Component} from 'react';
import axios from 'axios'
import './Multiplication.css';
import AuthContext from '../context/auth-context';
import ResultModal from '../components/ResultModal/ResultModal'
import Backdrop from '../components/Backdrop/Backdrop'

class MultiplicationPage extends Component{
    static contextType = AuthContext;
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            creating: false,
            well: false,
            p1:'',
            p2:'',
            p3:'',
            p4:'',
            pp1:'',
            pp2:'',
            pp3:'',
            pp4:'',
            r1:'',
            r2:'',
            r3:'',
            r4:'',
            r5:'',

            f1:'',
            f2:'',
            f3:'',
            ff1:'',
            ff2:'',

            result : '',
            response : '',
        }
    }
    componentDidMount(){
        //let numberr = Math.floor(Math.random()*10)
        this.setState({f1: Math.floor(Math.random()*10)});
        this.setState({f2: Math.floor(Math.random()*10)});
        this.setState({f3: Math.floor(Math.random()*10)});
        this.setState({ff1: Math.floor(Math.random()*10)});
        this.setState({ff2: Math.floor(Math.random()*10)});

        //var res = f1.concat(f2, f3);
        //var res1 = ff1.concat(ff2);
        //var numb1 = parseInt(f1.concat(f2, f3), 10)
        //var numb2 = parseInt(ff1.concat(ff2), 10)
        //var res =numb1*numb2


        /*axios.get('http://localhost/laravel/courses/public/api/courses', this.state)
            .then(response =>{
                const courses =response.data.courses;
                this.setState({
                    courses
                })
                //console.log(response.data.courses)
            })
            .catch(error =>{
                console.log(error)
            })*/
    }

    modalConfirmHandler = () =>{
        //this.context.logout();
        this.setState({p1: ''});
        this.setState({p2: ''});
        this.setState({p3: ''});
        this.setState({p4: ''});

        this.setState({pp1: ''});
        this.setState({pp2: ''});
        this.setState({pp3: ''});
        this.setState({pp4: ''});

        this.setState({r1: ''});
        this.setState({r2: ''});
        this.setState({r3: ''});
        this.setState({r4: ''});
        this.setState({r5: ''});
        this.setState({well: false});

        this.setState({result: false});
        this.setState({response: false});



        
        this.componentDidMount()
        this.setState({creating: false});

        //console.log("asder")
        

    }
    startCreateEventHandler =() =>{
        this.setState({creating: true});
    }
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value })
    }
    /*cambio = (num) => {
        document.getElementById("p2").focus();
    }*/
    cambio (num) {
        this.setState({p1: document.getElementById("p1").value});
        this.setState({p2: document.getElementById("p2").value});
        this.setState({p3: document.getElementById("p3").value});
        this.setState({p4: document.getElementById("p4").value});

        this.setState({pp1: document.getElementById("pp1").value});
        this.setState({pp2: document.getElementById("pp2").value});
        this.setState({pp3: document.getElementById("pp3").value});
        this.setState({pp4: document.getElementById("pp4").value});

        this.setState({r1: document.getElementById("r1").value});
        this.setState({r2: document.getElementById("r2").value});
        this.setState({r3: document.getElementById("r3").value});
        this.setState({r4: document.getElementById("r4").value});
        this.setState({r5: document.getElementById("r5").value});
        this.setState({result: (this.state.f1*100+this.state.f2*10+this.state.f3)*(this.state.ff1*10+this.state.ff2)});


        //let number = Math.floor(Math.random()*10)
        //console.log(number)

        //console.log(num)
        //console.log(this.context.token)
        document.getElementById(num).focus();
    }
    submitHandler = e => {
        e.preventDefault();
        //this.state.r5.concat(this.state.r4, this.state.r3, this.state.r2, this.state.r1)
        var respuesta = parseInt(this.state.r5.concat(this.state.r4, this.state.r3, this.state.r2, this.state.r1), 10)
        //console.log(respuesta)
        this.setState({response: respuesta});
        if(this.state.result===respuesta)
            this.setState({well: true})
        
        
        this.startCreateEventHandler();
        //axios.post('http://localhost/laravel/primaria/public/api/multiply?token='+this.context.token, this.state)
        axios.post('http://service.heartappproject.org/api/multiply?token='+this.context.token, this.state)
        
            .then(response =>{
                //const Response = response.data;
                //console.log('SIIIIIIIIIIIII')
                //this.startCreateEventHandler();
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render(){
        const{ p1, p2 ,p3, p4, pp1, pp2, pp3, pp4, r1, r2, r3, r4, r5} = this.state
        return(
        <React.Fragment>
                {this.state.creating && <Backdrop />}
                {this.state.creating && (
                <ResultModal title="registro exitoso" canConfirm onConfirm={this.modalConfirmHandler}>
                    {this.state.well?(<p>bien</p>):(<p>mal</p>)}

                </ResultModal>
                )}

        <form className="multiplication-form" onSubmit={this.submitHandler}>
            <h1>Multiplication</h1>
            <div className="base">
                <div className="verticala">
                    <label className="iteml">{this.state.f1}</label>
                    <label className="iteml">{this.state.f2}</label>
                    <label className="iteml">{this.state.f3}</label>
                </div>
                <div className="verticala">
                    <label className="iteml">X</label>
                    <label className="iteml">{this.state.ff1}</label>
                    <label className="iteml">{this.state.ff2}</label>
                </div>
                <div className="linear1a">
                    <label>______________________________________</label>
                </div>
                <div className="respuestas1a">
                    <input id="p4" onChange={() => this.cambio("p3")} className="item"  name="p4" value={p4} />
                    <input id="p3" onChange={() => this.cambio("pp1")} className="item"  name="p3" value={p3} />
                    <input id="p2" onChange={() => this.cambio("p4")} className="item" name="p2" value={p2} />
                    <input id="p1" onChange={() => this.cambio("p2")} className="item" name="p1" value={p1} autoFocus/>
                </div>
                <div className="respuestas2a">
                    <input id="pp4" className="item" onChange={() => this.cambio("pp3")} name="pp4" value={pp4}/>
                    <input id="pp3" className="item" onChange={() => this.cambio("r1")} name="pp3" value={pp3}/>
                    <input id="pp2" className="item" onChange={() => this.cambio("pp4")} name="pp2" value={pp2}/>
                    <input id="pp1" className="item" onChange={() => this.cambio("pp2")} name="pp1" value={pp1}/>
                </div>

                <div className="linear2">
                    <label>____________________________________________________________</label>
                </div>

                <div className="respuestas3a">
                    <input id="r5" className="item" onChange={() => this.cambio("r1")} name="r5" value={r5}/>
                    <input id="r4" className="item" onChange={() => this.cambio("r5")} name="r4" value={r4}/>
                    <input id="r3" className="item" onChange={() => this.cambio("r4")} name="r3" value={r3}/>
                    <input id="r2" className="item" onChange={() => this.cambio("r3")} name="r2" value={r2}/>
                    <input id="r1" className="item" onChange={() => this.cambio("r2")} name="r1" value={r1}/>

                </div>

                <label ></label>

            </div>
            <div className="form-actions">
                <button  type="submit">Evaluar</button>
            </div>
        </form>
        </React.Fragment>
        
        
        )
    }
}

export default MultiplicationPage;