import React from 'react';
import { Route, Link, Routes, useNavigate, useParams, useLocation } from 'react-router-dom';

import './App.css';

// @ToDo: It would be interesting to demonstrate how nested routes work and the use of the <Outlet /> element

const HomePage = () => {
  // Source: https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
  let navigate = useNavigate();
  return (
    <div>
      {
        /**
         * This would be interesting, for example, in case we need an automatic redirection after a form submit 
         */
      }
      <button onClick={() => navigate('/blog/topics')}>Topics </button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = () => {
  console.log('TopicsList');
  let location = useLocation();
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      {/** This would be a relative route */}
      <Link to={`13`}>TO TOPIC 13</Link>
      {/** This builds the "to" parameter like in the previous version */}
      <Link to={`${location.pathname}/17`}>TO TOPIC 17</Link>
      <Link to={`${location.pathname}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = () => {
  const params = useParams();
  console.log(`TopicDetail ${params.topicId}`);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {
        /** 
        * `exact` is no longer necessary, as now Routes select the most specific route, 
        * regardless of the declaration order. 
        */
       }
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/asdqw/topics' element={<TopicsList />} />
        <Route path='/blog/asdqw/topics/:topicId' element={<TopicDetail />} />
        <Route path='/blog/topics' element={<TopicsList />} />
        <Route path='/blog/topics/:topicId' element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;
