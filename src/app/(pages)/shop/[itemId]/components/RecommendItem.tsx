export default function RecommendItem() {
  return (
    <div className='self-centerp-3 min-h-[300px] w-full space-y-5 px-3'>
      <p className='text-lg font-semibold'>People also buy ...</p>
      <div className='grid grid-cols-2 gap-5 text-slate-500 lg:grid-cols-4'>
        <div className='flex h-[250px] w-[250px] items-center justify-center rounded-lg border border-white bg-black bg-opacity-15'>
          <p>Recommeded Item (phase 3)</p>
        </div>
        <div className='flex h-[250px] w-[250px] items-center justify-center rounded-lg border border-white bg-black bg-opacity-15'>
          <p>Recommeded Item (phase 3)</p>
        </div>
        <div className='flex h-[250px] w-[250px] items-center justify-center rounded-lg border border-white bg-black bg-opacity-15'>
          <p>Recommeded Item (phase 3)</p>
        </div>
        <div className='flex h-[250px] w-[250px] items-center justify-center rounded-lg border border-white bg-black bg-opacity-15'>
          <p>Recommeded Item (phase 3)</p>
        </div>
      </div>
    </div>
  );
}
