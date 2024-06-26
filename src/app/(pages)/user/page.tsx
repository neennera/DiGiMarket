import { headers } from 'next/headers';
import RoleManage from './components/RoleManage';
import Sidebar from './components/Sidebar';
import PurchaseHistory from './components/PurchaseHistory';
import axios from 'axios';
import ShopManage from './components/ShopMange';
import { SearchProvider } from '../shop/components/SearchContext';

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

export default async function Page() {
  const headerRequest = headers();
  const headerId = headerRequest.get('userId');
  var userId = JSON.parse(headerId ? headerId : '');

  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/user/${userId.userId}`
  );
  const user = res.data.data;

  return (
    <>
      <div className='m-auto mt-5 flex h-full w-[95%] max-sm:-ml-7 max-sm:w-[95vw] sm:flex-row'>
        <Sidebar />
        <div className='w-[full] space-y-20 rounded-md bg-black bg-opacity-40 py-3 sm:w-[75%] sm:px-8'>
          <div id='userInfo' className='scroll-mt-[11vh]'>
            <h1 className='mb-6 text-5xl font-semibold'>
              Hello, {user.username} 👋🏽
            </h1>
            <p className='text-lg'>Role : {user.role}</p>
            <p className='text-lg'>
              Join DiGi since : {formatDate(new Date(user.createdAt))}
            </p>
            <PurchaseHistory />
          </div>
          <RoleManage />
          <SearchProvider>
            {user.role == 'shop' ? <ShopManage user={user} /> : <></>}
          </SearchProvider>
        </div>
      </div>
    </>
  );
}
