import { Discuss } from 'pages/discuss';
import Main from 'pages/main';
import { Profile } from 'pages/profile';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';

export const Root = () => {
  const { pathname } = useLocation();
  const data = useSelector((state) => state.forum);

  const depth = useMemo(() => pathname.split('/').slice(2).length, [pathname]);
  const parentId = useMemo(() => pathname.split('/').slice(-1).join(), [pathname]);

  const item = useMemo(() => data.find(({ id }) => id === parentId), [parentId]);

  const togglePage = item?.isTheme ? <Main depth={depth} parentId={parentId} /> : <Discuss />;

  return (
    <Routes>
      <Route path='/forum/' element={<Main />} />
      <Route path='forum/:id/*' element={togglePage} />
      <Route path='forum/profile/' element={<Profile />} />
    </Routes>
  );
};
