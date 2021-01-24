import { useState } from 'react'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Footer from '../components/Footer'

export default function Signin () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [isUserSigninIn, setIsUserSigninIn] = useState(true)
  const [isConfirmingEmail, setIsConfirmingEmail] = useState(false)
  const router = useRouter()

  const returnToInitialState = () => {
    setUsername('')
    setEmail('')
    setPassword('')
    setCode('')
    setIsUserSigninIn(!isUserSigninIn)
    setIsConfirmingEmail(!isConfirmingEmail)
  }
  const onSignup = async (e) => {
    e.preventDefault()
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email
        }
      })
      setIsConfirmingEmail(true)
    } catch (error) {
      console.log('error confirming sign up', error)
    }
  }
  const onSignin = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn({
        username,
        password
      });
      router.push('/');
    } catch (error) {
      console.log('error confirming login', error);
    }
  }
  const confirmSignUp = async (e) => {
    e.preventDefault()
    try{
      await Auth.confirmSignUp(username, code)
      returnToInitialState()
      router.push('/')
    }catch (e) {
      console.log('error confirming sign up', error)
    }
  }
  return (
    <>
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row">
          <div
            className="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">
            <div
              className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
              <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                <div className="relative">
                  <p className="mb-2 font-medium text-gray-700 uppercase">Work smarter</p>
                  <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Start creating your audience</h2>
                </div>
                <p className="text-2xl text-gray-700">We've created a simple work flow to share your stories
                  all over the world</p>
                <a href="#_"
                   className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get
                  Started Today</a>
              </div>
            </div>
          </div>
          {isUserSigninIn && !isConfirmingEmail ? (
              <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                  <h4 className="w-full text-3xl font-bold">Signin</h4>
                  <p className="text-lg text-gray-500">or, if you haven't an account you can <button
                    onClick={() => setIsUserSigninIn(!isUserSigninIn)}
                    className="text-blue-600 underline">sign
                    up</button></p>
                  <form className="relative w-full mt-10 space-y-8" onSubmit={onSignin}>
                    <div className="relative">
                      <label className="font-medium text-gray-900">Username</label>
                      <input type="text"
                             className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                             placeholder="Enter Your Username"
                             value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="relative">
                      <label className="font-medium text-gray-900">Password</label>
                      <input type="password"
                             className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                             placeholder="Password"
                             value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="inline-block w-full px-5 py-4 mb-3 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Login
                      </button>
                      <Link href={'/'}>
                        <a
                          className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-gray-700 rounded-lg hover:bg-gray-800 ease">Cancel
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            ) : !isUserSigninIn && !isConfirmingEmail ?
            (
              <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                  <h4 className="w-full text-3xl font-bold">Sigup</h4>
                  <p className="text-lg text-gray-500">or, if you have an account you can <button
                    onClick={() => setIsUserSigninIn(!isUserSigninIn)}
                    className="text-blue-600 underline">sign
                    in</button></p>
                  <form className="relative w-full mt-10 space-y-8" onSubmit={onSignup}>
                    <div className="relative">
                      <label className="font-medium text-gray-900">Email</label>
                      <input type="email"
                             className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                             placeholder="Enter Your Email"
                             value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="relative">
                      <label className="font-medium text-gray-900">Username</label>
                      <input type="text"
                             className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                             placeholder="Enter Your Username"
                             value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="relative">
                      <label className="font-medium text-gray-900">Password</label>
                      <input type="password"
                             className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                             placeholder="Password"
                             value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="inline-block w-full px-5 py-4 mb-3 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Signup
                      </button>
                      <Link href={'/'}>
                        <a
                          className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-gray-700 rounded-lg hover:bg-gray-800 ease">Cancel
                        </a>
                      </Link>

                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div className="w-full bg-white lg:w-6/12 xl:w-5/12">
                <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                  <h4 className="w-full text-3xl font-bold">Confirm your email</h4>
                  <form className="relative w-full mt-10 space-y-8" onSubmit={confirmSignUp}>
                    <div className="relative">
                      <label className="font-medium text-gray-900">Code</label>
                      <input type="text"
                             className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                             placeholder="Enter The Code You Received Via Mail"
                             value={code} onChange={(e) => setCode(e.target.value)}/>
                    </div>
                    <div className="relative">
                      <button
                        type="submit"
                        className="inline-block w-full px-5 py-4 mb-3 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Confirm
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

        </div>
      </div>
    </section>
      <Footer />
</>
  )
}



