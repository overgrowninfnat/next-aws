import Link from 'next/link'
import { Auth } from 'aws-amplify'
import { useAuth } from '../authContext/auth'

export default function Header () {
  const { user, isUserLoggedIn } = useAuth()
  console.log(user)
  console.log(isUserLoggedIn)
  async function signOut () {
    try {
      await Auth.signOut({ global: true })
    } catch (e) {
      console.log('error signing out', e)
    }
  }

  return (
    <header className='relative w-full px-8 text-gray-700 bg-white body-font'>
      <div
        className='container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl'>
        <Link
          href={'/'}
        >
          <a
            className='relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none cursor-pointer'>postNow.</a>

        </Link>

        <nav
          className='top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute'>
          <a
            href='#_'
            className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
          >
            <span className='block'>Posts</span>
          </a>
          {isUserLoggedIn && <a
            href='#_'
            className='relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900'
          >
            <span className='block'>Create Post</span>
          </a>}
        </nav>
        {isUserLoggedIn ? <div className='relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
          <button
            onClick={signOut}
            className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'
          >
            Logout
          </button>
        </div> : <div className='relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end'>
          <Link
            href={'/signin'}
          >
            <a
              className='inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none'>Sign
              in</a>

          </Link></div>}
      </div>
    </header>
  )
}
