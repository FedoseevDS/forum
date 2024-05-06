import { Routes } from 'react-router-dom';

export const MainDepth = ({ depth }) => {
  return (
    <Routes>
      {depth.reduce((prev, item) => {
        console.log('prev', prev);
        console.log('item', item);
      })}
    </Routes>
  );
};
