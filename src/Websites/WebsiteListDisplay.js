import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

// Import Allowed (Green checkmark) and Blocked (Red X)
// Add Image in website map.


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





/*
<Item.Group>
    {
        testWebsites.map(website => (
            <Item>
                <Item.Content verticalAlign='middle'>
                    <Item.Header as='a'>{website.url}</Item.Header>
                    <Item.Description>{website.blocked ? "Blocked" : "Not Blocked"}</Item.Description>
                </Item.Content>
            </Item>
        ))
    }
</Item.Group>
*/
