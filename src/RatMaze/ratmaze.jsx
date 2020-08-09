import React  from 'react';
import './ratmaze.css';
import Node from './Node/Node';



export default class ratmaze extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nodes: []
        };
        // this.in = () => this.setState({count: this.state.count+1})
        // this.de = () => this.setState({count: this.state.count-1})
    

    }
    componentDidMount(){
        const nodes =[];
        for(let row =0;row<14;row++){
            const currentRow =[];
            for(let col=0;col<30;col++){
                //currentRow.push([]);
                const currentNode ={
                    col,
                    row,
                    isStart: row===7 && col === 5,
                    isFinish: row===7 && col === 24,
                }
                currentRow.push(currentNode);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes})
    }
   

    render(){
        const {nodes} = this.state;
        console.log(nodes);
        return(
            <div className="grid">
                {/* <button onClick={this.in}>Increment</button>
                <button onClick={this.de}>Increments</button> */}
                {/* Counter: {this.state.nodes} */}
                {nodes.map((row, rowIdx)=>{
                    return(
                        <div key={rowIdx}>
                          {row.map((node, nodeIdx)=>{
                              const{isStart,isFinish}=node;
                              return(
                                  <Node key={nodeIdx} isStart={isStart} isFinish={isFinish}></Node>
                              )
                          })}
                        </div>
                    ) 
                    // <div className="row">
                    //     {row.map((node, nodeIdx)=><Node></Node>)}
                    // </div>
                })}
                    
            </div>
        );
    }
}
