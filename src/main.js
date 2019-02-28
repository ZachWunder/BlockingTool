import React, { Component } from 'react';
import { Grid, Button, Header } from 'semantic-ui-react';

import WebsiteListDisplay from './Websites/WebsiteListDisplay';

class Page extends Component {
    render () {
        return (
            <div>
                <Grid centered columns={2}>
                    <Grid.Column >
                        <Button>Run</Button>
                    </Grid.Column>
                    <Grid.Column >
                        <Button>Upload list</Button>
                    </Grid.Column>
                </Grid>
                <Grid centered>
                    <Grid.Column>
                        <Header as='h1'>Websites:</Header>
                        <WebsiteListDisplay />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default Page;
