import React, { Component } from 'react';
import { Container, Button } from 'semantic-ui-react';
import CSVReader from 'react-csv-reader'

import WebsiteList from './Websites/WebsiteList'

class App extends Component {

    state = {
        websites: []
    }

    logWebsites = websites => {
        this.setState({ websites: websites })
    }

    render() {
        const { websites } = this.state
        return (
            <Container>
                <CSVReader
                    label="Upload list of websites"
                    onFileLoaded={this.logWebsites}
                    inputId="Upload Lists"
                />
            <WebsiteList websites={websites[0]}/>
            </Container>
        );
    }
};

export default App;
/*
<Button>Run</Button>
<Button>Upload</Button>
*/
