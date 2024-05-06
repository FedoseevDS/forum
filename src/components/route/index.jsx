import Main from 'pages/main';
import { NotFound } from 'pages/notFound';
import { Profile } from 'pages/profile';
import { Route, Routes, useLocation } from 'react-router-dom';

export const DinamicRoute = () => {
  // const { pathname } = useLocation();

  // console.log('pathname', pathname);

  // const topicId = pathname.split('/').slice(2).join();
  // // .filter((i) => i);
  // const depth = pathname.split('/').slice(2).length;
  // // const repeatId = ':id/'.repeat(topicId.length);

  // console.log('topicId route', topicId);
  // console.log('repeatId', repeatId);

  return (
    <Routes>
      <Route path='/forum/' element={<Main />} />
      <Route path={`/forum/:id/*`} element={<Main />} />
      {/* <Route path='/forum/:id' element={<Discuss />} /> */}
      <Route path='/forum/profile/' element={<Profile />} />
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};
