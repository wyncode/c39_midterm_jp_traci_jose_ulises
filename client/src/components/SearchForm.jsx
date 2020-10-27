import React from 'react';
import Form from 'react-bootstrap/Form';
import Bottle from "./Bottle"

const SearchForm = ({ handleSubmitProp, loading }) => {
  return (
    <div class="searchContainer" >
    <Form onSubmit={handleSubmitProp} style={{ margin: '2rem' }}>
      <div style={{display:'flex', justifyContent:'space-around'}}>
      <Form.Row> 
        <Bottle loading={loading} />
      </Form.Row> 
      <Form.Row >
        <div/>
        <Form.Control
          id="searchbar"
          size="lg"
          type="text"
          placeholder="Enter a City!"
          style={{background:'whitesmoke', marginTop:"50px", width:'300px', color:'black',border:'none'}}
        >
        </Form.Control>
      </Form.Row>
      </div>
    </Form>
  </div>
  );
};

export default SearchForm;