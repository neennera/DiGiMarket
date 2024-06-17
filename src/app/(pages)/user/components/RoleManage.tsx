import RegisterPromote from './RegisterPromote';

export default function RoleManage() {
  return (
    <section id='roleManage' className='scroll-mt-[11vh] space-y-3'>
      <h1 className='mb-2 flex flex-row items-center text-2xl font-semibold'>
        <div className='mr-2 h-[50px] w-[8px] bg-white'></div>Role Management
      </h1>
      <p>you can swtich role here for FREE</p>
      <RegisterPromote />
    </section>
  );
}
