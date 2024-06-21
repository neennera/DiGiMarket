export default function Feature() {
  return (
    <>
      {/* Feature */}
      <div className='my-[40px]'>
        <div className='mb-5 flex flex-row space-x-2'>
          <div className='mr-2 h-[50px] w-[8px] bg-white'></div>
          <h2 className='animate-fade-in mb-4 text-3xl font-semibold'>
            Features
          </h2>
        </div>

        <div className='ml-5 flex w-[95%] flex-col max-sm:space-y-8 sm:flex-row sm:space-x-8'>
          <div className='animate-fade-in flex flex-1 flex-col rounded-lg bg-primary-dark p-6 shadow-md sm:ml-5 sm:w-[90%] sm:flex-col sm:space-x-8'>
            <h3 className='mb-2 text-2xl font-semibold'>User 🛒</h3>
            <ul className='animate-slide-in list-inside list-disc'>
              <li>Searching items by name & category</li>
              <li>Adding items to cart</li>
              <li>Completing the checkout process</li>
              <li>Gmail notification for receipt (phase 2)</li>
            </ul>
          </div>

          <div className='animate-fade-in flex flex-1 flex-col rounded-lg bg-primary-dark p-6 shadow-md sm:ml-5 sm:w-[90%] sm:flex-col sm:space-x-8'>
            <h3 className='mb-2 text-2xl font-semibold'>Seller 🏪</h3>
            <ul className='animate-slide-in list-inside list-disc'>
              <li>Register a shop by upgrading from user account</li>
              <li>Create an item with details</li>
              <li>Track orders</li>
              <li>Create giveaway events (free items for promotion)</li>
              <li>Gmail notification for orders (phase 2)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
