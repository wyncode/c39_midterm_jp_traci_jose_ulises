import React from 'react'
import Form from 'react-bootstrap/Form';
import Bottle from "./Bottle"

const SearchForm = ({ handleSubmitProp, loading }) => {
  return (
    <div className="searchComponent">
      <Bottle loading={loading} />
      <Form onSubmit={handleSubmitProp} style={{ margin: '2rem' }}>
      <input type="text" name="searchForm" placeholder="Enter City Name" id="searchForm"/>
      </Form>
    </div>

  );
};

export default SearchForm;