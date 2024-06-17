export default function Sidebar() {
  return (
    <div className='sticky top-[10vh] h-full w-full sm:w-[20vw]'>
      <h2 className='text-2xl font-semibold'>Index</h2>
      <div className='mt-2 flex flex-col space-y-2 pl-3'>
        <a href='#userInfo'>
          <p className='font-gray text-lg hover:underline'>User Information</p>
        </a>
        <a href='#roleManage'>
          <p className='font-gray text-lg hover:underline'>Role Management</p>
        </a>
        <a href='#shopManage'>
          <p className='font-gray text-lg hover:underline'>Shop Management</p>
        </a>
        <div className='pl-3'>
          <a href='#saleRecord'>
            <p className='font-gray text-lg hover:underline'>Sales Record</p>
          </a>
          <a href='#newItem'>
            <p className='font-gray text-lg hover:underline'>Create New Item</p>
          </a>
        </div>
      </div>
    </div>
  );
}
