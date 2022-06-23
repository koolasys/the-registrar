import React from "react";

class Form extends React.PureComponent
{
    constructor(props)
    {
        super(props);
        this.state = {alias: "", dob: Date(), message: "", timeLog: Date(), showModal: false};
    }


    submitPost =(e)=>
    {
        e.preventDefault(); //prevents page from being refreshed
        
        if(this.state.alias==="" || this.state.dob==="" || this.state.message==="")
        {
            alert("All fields are mandatory");
            return;
        }
        this.props.addPostHandler(this.state);
        this.setState({alias:"", dob: new Date().toLocaleDateString, message:"", timeLog: new Date().toLocaleTimeString()});
        this.props.onClick();
    }
    
    render()
    {
        return(
            <div className={this.props.showModal ? "modal" : "modal hidden"}>
                <div className="close-modal">
                    <button onClick={this.props.onClick}>X</button>
                </div>
                <form onSubmit={this.submitPost}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" 
                            id="name" 
                            className="input" 
                            placeholder="Enter name here" 
                            value={this.state.alias} 
                            onChange={(e)=>this.setState({alias: e.target.value})}
                            required
                            />
                    <label htmlFor="dob">D. O. B:</label>
                    <input type="date" 
                            id="dob"
                            className="input" 
                            value={this.state.dob} 
                            onChange={(e)=>this.setState({dob: e.target.value})}
                            required
                            />
                    <label htmlFor="message">Leave a message for a reader:</label>
                    <textarea 
                        id="message" 
                        className="input" 
                        placeholder="Type a random message here" 
                        value={this.state.message} 
                        onChange={(e)=>this.setState({message: e.target.value})}
                        required
                        />
                    <button >Post</button>
                </form>
            </div>
        );
    }
}


export default Form;