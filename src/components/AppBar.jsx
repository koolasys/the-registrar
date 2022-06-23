import React from "react";
import hg from "../images/hourglass.png";
import pers from "../images/person.png";
import pp from "../images/paper-plane.png";



class Clock extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {date: new Date(), counts: this.props.counts};
  }

  componentDidMount()
  {
    this.timerID = setInterval(()=>this.tick(), 1000);
    this.counts = this.props.counts;
  }

  componentWillUnmount()
  {
    clearInterval(this.timerID);
  }

  tick()
  {
    this.setState({date: new Date()});
  }

  render()
  {
    return(
      <span className="counts">{this.state.date.toLocaleTimeString()}</span>
    );
  }
}



function Bar(props)
{
  
    const posts_no = props.counts.length;
    const names = [...new Set(props.counts.map(item => item.alias))];

    //console.log(len);
    return(
        <div id="bar">
            <span id="timer-span" className="counters"><img src={hg} alt=""/><Clock/></span>
            <span id="count-people-span" className="counters"><img src={pers} alt=""/><PeopleCounters people={names}/></span>
            <span id="count-posts-span" className="counters"><img src={pp} alt=""/><PostCounters posts={posts_no}/></span>

            
        </div>
    );
}

const PostCounters =(props)=> {

  const post_counts = props.posts;
 
 return(
  <span className="counts">{post_counts} Posts</span>
 )
};

const PeopleCounters =(props)=> {

  const people_counts = props.people.length;

 return(
  <span className="counts">{people_counts} People</span>
 )
};

export default Bar;