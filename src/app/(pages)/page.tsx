import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const messages = [
    'find a good product HERE',
    'Bringing good side',
    'make it DIGI-lize',
  ];
  const scrollingContent = [...messages, ...messages, ...messages];

  return (
    <main className='flex flex-col items-center justify-between overflow-hidden px-24'>
      <div className='flex h-[80vh] flex-col items-center justify-center'>
        <h1 className='font-abril text-[4rem] font-bold lg:text-[6.8rem]'>
          DiGi Market
        </h1>
        <p className='-mt-5 text-lg'>
          your one-stop marketplace for digital products.
        </p>
        <div className='mt-8 flex flex-col items-center justify-center max-sm:space-y-3 sm:flex-row sm:space-x-5'>
          <Link href='/shop'>
            <button className='h-[40px] cursor-pointer rounded-lg bg-primary px-3 font-semibold text-black hover:bg-primary-dark'>
              Find Your Product 📓
            </button>
          </Link>
          <Link href='/user'>
            <button className='h-[40px] cursor-pointer rounded-lg border border-primary px-3 font-semibold text-white hover:border-primary-dark'>
              Manage Account
            </button>
          </Link>
        </div>

        <div className='absolute -z-20 mt-36 h-screen w-full overflow-hidden sm:mt-8'>
          <div className='absolute -left-[15vw] bottom-[22vh] flex h-[35px] w-[150vw] rotate-[-2deg] transform items-center justify-center space-x-5 rounded-xl bg-primary-dark text-center'>
            {scrollingContent.map((message: string, index: number) => (
              <div
                key={index}
                className='scroll-strapline flex min-w-[280px] justify-center border-x text-center'
              >
                <p className='text-md font-normal text-gray-200'>{message}</p>
              </div>
            ))}
          </div>
          <div className='absolute -left-10 bottom-[18vh] -z-10 flex h-[35px] w-[150vw] rotate-[2deg] transform items-center justify-center rounded-xl bg-primary-dark text-center opacity-40'></div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className='w-[70vw] py-10'>
        <div className='mx-auto flex min-h-[85vh] flex-col items-center justify-center text-center'>
          <h2 className='mb-8 text-2xl font-bold sm:text-3xl'>
            What Our Users Say
          </h2>
          <div className='grid grid-cols-1 gap-8 text-black md:grid-cols-3'>
            <div className='h-[300px] rounded-lg bg-white p-7 pt-[20%] shadow-md shadow-slate-400'>
              <p className='mb-4'>
                "DiGi Market has transformed the way I sell my digital products.
                The platform is user-friendly and my sales have increased
                significantly!"
              </p>
              <div className='font-bold'>- Alice Johnson</div>
            </div>
            <div className='h-[300px] rounded-lg bg-white p-7 pt-[20%] shadow-md shadow-slate-400'>
              <p className='mb-4'>
                "I love how easy it is to find high-quality digital products on
                DiGi Market. It's my go-to marketplace for all things digital."
              </p>
              <div className='font-bold'>- Mark Smith</div>
            </div>
            <div className='h-[300px] rounded-lg bg-white p-7 pt-[20%] shadow-md shadow-slate-400'>
              <p className='mb-4'>
                "The support team at DiGi Market is fantastic! They helped me
                set up my shop and provided valuable tips to boost my sales."
              </p>
              <div className='font-bold'>- Sarah Lee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Registration Section */}
      <section className='mb-10 rounded-lg bg-gray-100 bg-opacity-10 px-3 py-20 text-white'>
        <div className='container mx-auto w-[70vw] items-start px-1 text-start sm:pl-10'>
          <h2 className='mb-8 text-center text-3xl font-bold'>
            Become a DiGi Market Seller 🛍️
          </h2>
          <div className='flex w-full flex-row justify-between'>
            <div>
              <p className='mb-6 text-lg'>
                Join our marketplace and start selling your digital products
              </p>
              <ul className='mx-auto ml-2 list-inside list-disc text-left sm:ml-10'>
                <li className='mb-2'>Reach a global customer base</li>
                <li className='mb-2'>Easy-to-use seller dashboard</li>
                <li className='mb-2'>Secure payment processing</li>
                <li className='mb-2'>Dedicated support team</li>
                <li className='mb-2'>Promotional tools to boost your sales</li>
              </ul>
              <Link href='/user'>
                <button className='mt-6 w-full self-center rounded-full bg-primary py-3 font-bold text-black hover:bg-primary-dark hover:text-white'>
                  Register Now
                </button>
              </Link>
            </div>
            <div className='hidden w-[45%] items-center justify-center lg:block'>
              <Image
                src='/image/joinus.jpg'
                alt='join us'
                width={400}
                height={300}
                className='rounded-lg'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
