import React, { Component } from 'react';
import { Container, Item } from 'semantic-ui-react';

const testWebsites = [
    {
        url: "google.com",
        blocked: false
    },
    {
        url: "facebook.com",
        blocked: true
    }
]

class WebsiteListDisplay extends Component {
    //const { WebsiteList } = this.props;
    //const WebsiteList = testWebsites;
    render () {
        return (
            <Container>
                <Item.Group>
                    {
                        testWebsites.map(website => (
                            <Item>
                                <Item.Content verticalAlign='middle'>
                                    <Item.Header as='a'>{website.url}</Item.Header>
                                </Item.Content>
                            </Item>
                        ))
                    }
                </Item.Group>
            </Container>
        )
    }
}

export default WebsiteListDisplay;
