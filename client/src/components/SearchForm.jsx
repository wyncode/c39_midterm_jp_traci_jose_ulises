import React from 'react';
import Form from 'react-bootstrap/Form';
import Bottle from "./Bottle"

const SearchForm = ({ handleSubmitProp, loading }) => {
  return (
    <div class="searchContainer" style={{background:'#3357b7', marginBottom:'0px', marginTop:'350px', height:'200px'}}>
    <Form onSubmit={handleSubmitProp} style={{ margin: '2rem', display:'flex', }}>
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
          style={{background:'transparent', marginTop:"50px", width:'300px'}}
        >
        </Form.Control>
      </Form.Row>
    </Form>
  </div>
  );
};

export default SearchForm;