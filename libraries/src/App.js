import React from 'react';
import './App.css';  // Don't forget to import your CSS file
import ResponsiveAppBar from './component/ResponsiveAppBar';  // Import the SearchBar component
import MyCard from './component/MyCard';
import GenderRadioGroup from './component/GenderRadioGroup';
import TransferList from './component/Progress';
import Table from './component/Table';
import { Modal } from 'antd';

const App = () => {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <MyCard />
      <GenderRadioGroup />
      <TransferList />
      <Table />
      <Modal />
    </div>
  );
};

export default App;
