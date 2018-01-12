import React,{Component} from "react";
import Calendar from "./Calendar";
export default class App extends Component{
    constructor(){
        // 初始化this
        super();
        //定义年月
        this.state={
            year : new Date().getFullYear(),
            month : new Date().getMonth(),
            day : new Date().getDate()
        }
    }
    changMonth(c){
        if(c=="U"){
            console.log(this.state.month),
            this.setState({
                year: this.state.month==0?this.state.year-1:this.state.year,
                month: this.state.month==0?this.state.month=11:this.state.month-1
               
            })
        }else if(c=="D"){
            this.setState({
                year: this.state.month==11?this.state.year+1:this.state.year,
                month: this.state.month==11?this.state.month=0:this.state.month+1
            })
        }
    }
    render(){
        return <div>
            <Calendar year={this.state.year} 
            month={this.state.month}
            day={this.state.day}
            changMonth={this.changMonth.bind(this)}></Calendar>
        </div>
    }
}
