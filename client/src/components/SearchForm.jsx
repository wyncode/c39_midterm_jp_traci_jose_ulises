import React from 'react';
import Form from 'react-bootstrap/Form';
import Bottle from "./Bottle"

const SearchForm = ({ handleSubmitProp, loading }) => {
  return (
    <div class="searchContainer" style={{background:'#2E2E2E', marginBottom:'0px', marginTop:'350px', height:'200px'}}>
    <Form onSubmit={handleSubmitProp} style={{ margin: '2rem' }}>
      <div style={{display:'flex', justifyContent:'space-around'}}>
      <Form.Row>
        <h3 style={{color:"#3357b7", fontSize:"70px", fontWeight:"700"}}>Brewery Finder</h3>
      </Form.Row>
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
          style={{background:'transparent', marginTop:"50px", width:'300px', color:'black',border:'none'}}
        >
        </Form.Control>
      </Form.Row>
      </div>
    </Form>
  </div>
  );
};

export default SearchForm;