import React, {Component} from 'react';
import './Divide.css';
import AuthContext from '../context/auth-context';
import axios from 'axios'
import ResultModal from '../components/ResultModal/ResultModal'
import Backdrop from '../components/Backdrop/Backdrop'

class DividePage extends Component{
    static contextType = AuthContext;
    constructor(props){
        super(props)
        this.state = {
            creating: false,
            test: false,
            dd1:'',
            dd2:'',
            dd3:'',
            ds1:'',
            r:'',
            c1:'',
            c2:'',
            c3:'',
            result : '',
            response : '',
            isMenor: true,
            o1:'',
            o2:'',
            o3:'',
            o4:'',
            o5:'',
            o6:'',
            o7:'',
            o8:'',
            o9:'',
            oo3:'',
            oo1:'',
            oo2:'',
            well: '0'
        }
    }
    modalConfirmHandler = () =>{
                //axios.post('http://localhost/laravel/primaria/public/api/multiply?token='+this.context.token, this.state)
                //axios.post('http://localhost/laravel/prime/public/api/division?token='+this.context.token, this.state)
                axios.post('http://service.heartappproject.org/api/division?token='+this.context.token, this.state)

                .then(response =>{
                            if(this.state.dd1>this.state.ds1){
                                this.componentDidMount()
                            this.setState({
                                r:'',
                                c1:'',
                            test: false,
                            c2:'',
                            c3:'',
                            result:'',
                            response:'',
                            well:'0',
                                o1:'',
                                o2:'',
                                o3:'',
                                o4:'',
                                o5:'',
                                o6:'',
                                o7:'',
                                o8:'',
                                o9:'',
                                creating: false
                            })
                            
                            }else{
                                this.componentDidMount()
                                this.setState({
                                    r:'',
                                    c1:'',
                                test: false,
                                c2:'',
                                c3:'',
                                result:'',
                                response:'',
                                well:'0',
                                    oo1:'',
                                    oo2:'',
                                    oo3:'',
                                    oo4:'',
                                    oo5:'',
                                    oo6:'',
                                    creating: false
                                })
                                
                            }
                })
                .catch(error =>{
                    console.log(error)
                })
        //this.context.logout();
        
                
                /*this.setState({test: false});
                this.setState({c2:''});
                this.setState({c3:''});
                this.setState({result:''});
                this.setState({response:''});*/
                
                 

        //this.componentDidMount()
        //this.setState({creating: false});

        //console.log("asder")
        

    }
    startCreateEventHandler =() =>{
        this.setState({creating: true});
    }
    changeValueHandler =() =>{
        this.setState({well: '1'});
    }
    componentDidMount(){

        this.setState({
            dd1: Math.floor(Math.random()*(9-1)+1),
            dd2: Math.floor(Math.random()*9+1),
            dd3: Math.floor(Math.random()*9+1),
            ds1: Math.floor(Math.random()*8+2),
            c3:''
        });
        /*this.setState({dd2: Math.floor(Math.random()*9+1)});
        this.setState({dd3: Math.floor(Math.random()*9+1)});
        this.setState({ds1: Math.floor(Math.random()*8+2)});
        this.setState({c3:''});*/


    }
    cambio (num) {
        
        //this.setState({c2: document.getElementById("c2").value});
        if(this.state.dd1>=this.state.ds1){

            this.setState({
                c1: document.getElementById("c1").value,
                c2: document.getElementById("c2").value,
                c3: document.getElementById("c3").value,
                o1: document.getElementById("o1").value,
                o2: document.getElementById("o2").value,
                o3: document.getElementById("o3").value,
                o4: document.getElementById("o4").value,
                o5: document.getElementById("o5").value,
                o6: document.getElementById("o6").value,
                o7: document.getElementById("o7").value,
                o8: document.getElementById("o8").value,
                o9: document.getElementById("o9").value,
                result: (this.state.c1)+(this.state.c2)+(this.state.c3)
            });


        }else{
            this.setState({
                c1: document.getElementById("c1").value,
                c2: document.getElementById("c2").value,
                c3:0,
                oo1: document.getElementById("oo1").value,
                oo2: document.getElementById("oo2").value,
                oo3: document.getElementById("oo3").value,
                oo4: document.getElementById("oo4").value,
                oo5: document.getElementById("oo5").value,
                oo6: document.getElementById("oo6").value,
                result: (this.state.c1)+(this.state.c2)
            });


        }


        this.setState({r: document.getElementById("r").value});

        
        //console.log(this.state.result)
        document.getElementById(num).focus();
    }
    submitHandler = e => {
        e.preventDefault();
        //console.log('result'+this.state.result)
        //this.state.r5.concat(this.state.r4, this.state.r3, this.state.r2, this.state.r1)
        var respuesta1 = 0
        if(this.state.dd1>this.state.ds1)
            respuesta1 = parseInt(parseInt(this.state.c1.concat(this.state.c2, this.state.c3), 10)*this.state.ds1,10)+parseInt(this.state.r, 10)
        else
            respuesta1 = parseInt(parseInt(this.state.c1.concat(this.state.c2), 10)*this.state.ds1,10)+parseInt(this.state.r, 10)

        //console.log(respuesta1)
        
        var dividendo = this.state.dd1*100+this.state.dd2*10+this.state.dd3
        //console.log(this.state.dd1)
        //console.log(dividendo)

        //console.log(this.state.r)

        this.setState({response: respuesta1});
        if(dividendo===respuesta1){
            this.setState({test: true})
            this.setState({well: '1'})
        }
        //console.log('new state1', this.state)
        this.startCreateEventHandler();

    }
    render(){
        const{ o1, o2, o3, o4, o5, o6, o7, o8, o9,oo1, oo2, oo3, oo4, oo5, oo6, c1, c2 ,c3, r } = this.state
        return(
            <React.Fragment>
                {this.state.creating && <Backdrop />}
                {this.state.creating && (
                <ResultModal title="registro exitoso" canConfirm onConfirm={this.modalConfirmHandler}>
                    {this.state.test?(<p>bien</p>):(<p>mal</p>)}

                </ResultModal>
                )}
            <form className="multiplication-form" onSubmit={this.submitHandler}>
            <h1>Division</h1>
            <div className="base">
                <div className="vertical">
                    <label className="iteml">{this.state.dd1}</label>
                    <label className="iteml">{this.state.dd2}</label>
                    <label className="iteml">{this.state.dd3}</label>
                    <div className="vertical">
                    <label className="iteml">|</label>
                    <label className="iteml">{this.state.ds1}</label>

                </div>
                </div>
                <div >
                    <label className="linear" >___________________________</label>
                    </div>
                    {(this.state.dd1<this.state.ds1)?[
                        <div key={0} className="respuestas1">
                            <input  id="oo1" className="item" onChange={() => this.cambio("oo2")} value={oo1}/>
                            <input  id="oo2" className="item" onChange={() => this.cambio("oo3")} value={oo2}/>
                            <div key={10} className="Result">
                            <input  id="c1" onChange={() => this.cambio("oo1")} className="item" name="c1" value={c1} autoFocus={true}/>
                            <input  id="c2" onChange={() => this.cambio("oo5")} className="item" name="c2" value={c2}/>
                            
                            </div>
                        </div>,
                        <label key={23} className="line1">------------------------</label>,
                        <div key={1} className="respuestas2">
                            <input id="oo3" className="item" onChange={() => this.cambio("oo4")}  value={oo3}/>
                            <input id="oo4" className="item" onChange={() => this.cambio("c2")} name="oo4" value={oo4 || ""}/>
                        </div>,
                        <div key={2} className="respuestas2">
                            <input id="oo5" className="item" onChange={() => this.cambio("oo6")} value={oo5 || ""}/>
                            <input id="oo6" className="item" onChange={() => this.cambio("r")} value={oo6 || ""} />
                        </div>,
                        <label key={24} className="line2" >------------------------</label>,
                        <div key={3} className="respuestas3">
                            <input  id="r" className="item" onChange={() => this.cambio("oo6")} name="r" value={r} />
                        </div>
                        ]:[
                            <div key={4}className="respuestas1">
                                <input  id="o1" className="item" onChange={() => this.cambio("o2")} value={o1}/>
                                <label key={19} className="ghost" />
                                <div  key={11} className="Result">
                                <input  id="c1" onChange={() => this.cambio("o1")} className="item" name="c1" value={c1} autoFocus={true} />
                                <input  id="c2" onChange={() => this.cambio("o4")} className="item" name="c2" value={c2}/>
                                <input  id="c3" onChange={() => this.cambio("o8")} className="item" name="c4" value={c3}/>
                                </div>
                            </div>,
                            <label key={20} className="line1">------------------------</label>,
                            <div key={5} className="respuestas2a">
                                <input id="o2" onChange={() => this.cambio("o3")} className="item" value={o2}/>
                                <input id="o3" onChange={() => this.cambio("c2")}className="item" value={o3}/>
                            </div>,
                            <div  key={6} className="respuestas2a">
                            <input id="o4" onChange={() => this.cambio("o5")} className="item" value={o4}/>
                            <input id="o5" onChange={() => this.cambio("o6")} className="item" value={o5}/>
                            </div>,
                            <label key={21}className="line1" >------------------------</label>,
                            <div  key={7}className="respuestas2">
                            <input id="o6" onChange={() => this.cambio("o7")} className="item" value={o6}/>
                            <input id="o7" onChange={() => this.cambio("c3")} className="item" value={o7}/>
                            </div>,
                            <div key={8} className="respuestas2">
                            <input id="o8" onChange={() => this.cambio("o9")} className="item" value={o8}/>
                            <input id="o9" onChange={() => this.cambio("r")} className="item" value={o9}/>
                            </div>,
                            <label key={22} className="line2" >------------------------</label>,
                            <div key={9} className="respuestas3">
                            <input id="r" onChange={() => this.cambio("o9")} className="item" name="r" value={r}/>
                            </div>
                        ]}    
                

        
            </div>

            <div className="form-actions">
                <button  type="submit">Evaluar</button>
            </div>
        </form>
        </React.Fragment>
        );
    }
}

export default DividePage;