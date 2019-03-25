import React from 'react';
import { Table } from 'semantic-ui-react';

export default props => {
    const WebsiteList = props.websiteStatus;
    console.log(WebsiteList)
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Website</Table.HeaderCell>
                    <Table.HeaderCell>Blocked</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    WebsiteList.map(site => (
                        <Table.Row key={site.url}>
                            <Table.Cell>{site.url}</Table.Cell>
                            {
                                site.blocked
                                    ? <Table.Cell positive>Blocked</Table.Cell>
                                    : <Table.Cell negative>Allowed</Table.Cell>
                            }
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}
