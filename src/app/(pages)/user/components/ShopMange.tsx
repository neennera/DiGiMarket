import CreateItemForm from './CreateItemForm';
import SaleHistory from './SaleHistory';
interface userSchema {
  id: string;
}

export default function ShopManage(user: userSchema) {
  return (
    <div id='shopManage' className='scroll-mt-[11vh]'>
      <h1 className='mb-6 flex flex-row items-center text-2xl font-semibold'>
        <div className='mr-2 h-[50px] w-[8px] bg-white'></div>Shop Management
      </h1>
      <SaleHistory />
      <div id='newItem' className='scroll-mt-[11vh]'>
        <h1 className='mb-6 text-2xl font-semibold'>Create a New Item</h1>
        <CreateItemForm userId={user.id} />
      </div>
    </div>
  );
}
