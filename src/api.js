import React from 'react';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
  
import Accordion from 'react-bootstrap/Accordion';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <Accordion>
            { this.state.persons.map(person => (<Accordion.Item eventKey={person.id}><Accordion.Header>{person.name}</Accordion.Header>
                <Accordion.Body>User name: {person.username}<br />
                User email: {person.email}<br />
                User address: {person.address.street}, {person.address.suite} {person.address.city} {person.address.zipcode}<br />
                Geographical coordinates: {person.address.geo.lat}° latitude and {person.address.geo.lng}° longitude<br />
                User phone number: {person.phone}<br />
                Affiliated website: {person.website}<br />
                Affiliated company: {person.company.name} "{person.company.catchPhrase} = {person.company.bs}"
                </Accordion.Body></Accordion.Item>))}
      </Accordion>
    )
  }
}