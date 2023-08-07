import React from 'react'
import { Link } from 'react-router-dom';

const Home = ({data}) => {
  console.log(data);
  return (
    <div>
      <Link to="/add">
        <button>Add Job</button>
      </Link>
       {/* Display the data received from AddEdit component */}
       {data && (
        <div>
          <h2>Data from AddEdit Page:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default Home