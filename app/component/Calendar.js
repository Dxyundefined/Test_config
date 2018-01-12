import React,{Component} from "react";
import cn from "classnames";
export default class Calendar extends Component{
    constructor(){
        super();
    }
    getCalendar(year,month){
        //获得本月一日是周几
        var startWeek = new Date(year,month,1).getDay();
        //获取本月共多少天
        var  totalDay = new Date(year,month+1,0).getDate();
        //获取上月多少天
        var lastTotalDay = new Date(year,month,0).getDate();
        var arrDays = [];
        while(startWeek--){
            arrDays.unshift(lastTotalDay--);
        }
        var today = 1;
        while(totalDay--){
            arrDays.push(today++);
        }
        var nextDay = 1;
        while(arrDays.length!=35 && arrDays.length!=42){
            arrDays.push(nextDay++);
        }
        var trs = [];
        for(let i=0;i<arrDays.length/7;i++){
            trs.push(<tr key={i}>
                    {
                        arrDays.slice(i*7,i*7+7).map((item,index)=>{
                            return <td key={index} className={cn({"today":item==new Date().getDate()&&month==new Date().getMonth()&&year==new Date().getFullYear()})}>{item}</td>
                         })
                    }
                </tr>
            )
        }
        return trs;
    }
    render(){
        return <div>
            <table>
                <caption>{this.props.year}年{this.props.month+1}月
                </caption>
                <tbody>
                    <tr>
                        <td colSpan="7" className="change">
                            <a href="#" className="last" onClick={()=>{this.props.changMonth("U")}}>上一月</a>
                            <a href="#" className="next" onClick={()=>{this.props.changMonth("D")}}>下一月</a>
                        </td>
                    </tr>
                    <tr>
                        <th>日</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                    </tr>
                {
                     this.getCalendar(this.props.year,this.props.month)
                }
                </tbody>
            </table>
            
        </div>
    }
}