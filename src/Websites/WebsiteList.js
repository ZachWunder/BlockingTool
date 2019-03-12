import React, { Component } from 'react';
import { Button, Header } from 'semantic-ui-react';

import WebsiteListDisplay from './WebsiteListDisplay';

// Takes in list of websites as props

class WebsiteList extends Component {

    state = {
        statusList: false
    }

    run = () => {
        const urls = this.props.websites || [];
        const statuses = [];

        urls.forEach( website => {
            fetch(website, {mode : 'no-cors'})
                .then(data => {
                    this.setState({statusList: [...this.state.statusList,
                        {
                            url: website,
                            blocked: false
                        }
                    ]})
                    console.log(data)
                })
                .catch(err => {
                    this.setState({statusList: [...this.state.statusList,
                        {
                            url: website,
                            blocked: true
                        }
                    ]})
                    console.log(err)
                })
        })
        this.setState({statusList: statuses})

    }

    render () {
        const { statusList } = this.state;
        console.log(statusList)
        return (
            <div>
                <Button onClick={this.run}>Run</Button>
                {
                    statusList
                        ?
                            <WebsiteListDisplay websiteStatus={statusList}/>
                        :
                            <Header as='h1'>Please upload a CSV file containing the URL's you'd like to test.</Header>
                }
            </div>
        )
    }
}

export default WebsiteList;
