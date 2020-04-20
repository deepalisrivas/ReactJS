import React , {Component} from 'react';
import { TwitterTimelineEmbed} from 'react-twitter-embed'
import './Twitter-feed.css';


class TwitterFeed extends Component {
    
    render(){
        return(
            <div className="wrapper-feed">
               
       
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="PMOIndia"
        options={{height: '240px'}}
      />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="WHO"
        options={{height: '240px'}}
      />
        
            </div>
        )
    }
}

export default TwitterFeed;