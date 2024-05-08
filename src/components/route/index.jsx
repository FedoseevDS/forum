import { Discuss } from 'components/discuss';
import Main from 'pages/main';
import { Profile } from 'pages/profile';
import { useMemo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export const Root = () => {
  const { pathname } = useLocation();

  const depth = useMemo(() => pathname.split('/').slice(2).length, [pathname]);
  const parentId = useMemo(() => pathname.split('/').slice(-1).join(), [pathname]);
  const pathDiscuss = useMemo(() => pathname.split('/').slice(2, -2).join('/'));

  return (
    <Routes>
      <Route path='/forum/' element={<Main />} />
      <Route path='forum/discuss/:id' element={<Discuss />} />
      <Route path='forum/:id/*' element={<Main depth={depth} parentId={parentId} />} />
      <Route path={`forum/${pathDiscuss}/discuss/:id`} element={<Discuss />} />
      <Route path='forum/profile/' element={<Profile />} />
    </Routes>
  );
};
