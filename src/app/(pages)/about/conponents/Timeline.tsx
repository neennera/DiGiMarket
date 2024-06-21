export default function Timeline() {
  return (
    <>
      <div className='mb-5 flex flex-row space-x-2'>
        <div className='mr-2 h-[50px] w-[8px] bg-white'></div>
        <h2 className='animate-fade-in mb-4 text-3xl font-semibold'>
          Timeline
        </h2>
      </div>
      <div className='relative'>
        <div className='absolute left-[30px] h-full -translate-x-1/2 transform border-l-2 border-white max-sm:hidden'></div>
        <div className='flex flex-col sm:ml-[100px]'>
          <div className='flex flex-row'>
            <div className='mb-8'>
              <div className='absolute left-[5px] z-10 h-[50px] w-[50px] items-center rounded-full bg-green-500 text-center'>
                <p className='text-[2rem]'>✅</p>
              </div>
              <h3 className='animate-fade-in mb-2 text-2xl font-semibold'>
                Phase 1: Mockup Marketplace
              </h3>
              <ul className='animate-slide-in list-inside list-disc'>
                <li>Create account & login </li>
                <li>Create and edit items if you are the owner </li>
                <li>Landing UI </li>
                <li>Promote role from customer to shop </li>
                <li>Implement item category </li>
                <li>Category search & create </li>
                <li>Image photo base on category </li>
                <li>Implement logout button </li>
              </ul>
            </div>
          </div>

          <div className='mb-8'>
            <div className='absolute left-[5px] z-10 h-[50px] w-[50px] items-center rounded-full bg-white text-center'>
              <p className='text-[2rem]'>🕛</p>
            </div>
            <h3 className='animate-fade-in mb-2 text-2xl font-semibold'>
              Phase 2 : Customizing
            </h3>
            <ul className='animate-slide-in list-inside list-disc'>
              <li>Upload product image</li>
              <li>Implement cart</li>
              <li>Implement checkout process</li>
              <li>Recommend item</li>
            </ul>
          </div>

          <div>
            <div className='absolute left-[5px] z-10 h-[50px] w-[50px] items-center rounded-full bg-white text-center'>
              <p className='text-[2rem]'>🕛</p>
            </div>
            <h3 className='animate-fade-in mb-2 text-2xl font-semibold'>
              Phase 3 : Extension
            </h3>
            <ul className='animate-slide-in list-inside list-disc'>
              <li>Review item</li>
              <li>Better item management page</li>
              <li>History record</li>
            </ul>
          </div>
          <div>
            <div className='absolute left-[5px] z-10 h-[50px] w-[50px] items-center rounded-full bg-white text-center'>
              <p className='text-[2rem]'>🕛</p>
            </div>
            <h3 className='animate-fade-in mb-2 text-2xl font-semibold'>
              Phase 4 : Lanch
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
