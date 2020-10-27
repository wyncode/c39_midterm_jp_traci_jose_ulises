import React from 'react';
import Form from 'react-bootstrap/Form';


const SearchForm = ({ handleSubmitProp }) => {
  return (
    <Form onSubmit={handleSubmitProp} style={{ margin: '2rem'}}>
      <Form.Row>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Enter a City!"
        >
        </Form.Control>
      </Form.Row>
    </Form>
  );
};

export default SearchForm;