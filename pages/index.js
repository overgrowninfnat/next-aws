import Link from 'next/link';
import { API } from 'aws-amplify';
import { listPosts } from '../graphql/queries';

import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home({ posts }) {
  return (
    <div>
      <Header />
      <section className="px-2 bg-white md:px-0 md:py-32 py-20">
        <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div className="flex flex-wrap items-center sm:-mx-3">
            <div className="w-full md:w-1/2 md:px-3">
              <div
                className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1
                  className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Beautiful Pages to</span>
                  <span className="block text-indigo-600 xl:inline">Tell Your Story!</span>
                </h1>
                <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl" id="">It's never been
                  easier to share your stories and grow your own community.</p>
                <div className="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a href="#_"
                     className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                     id="">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19" className=""></polyline>
                    </svg>
                  </a>
                  <a href="#_"
                     className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Jam-packed
                  with all the tools you need to succeed!</h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">It's never been easier to build a
                  business of your own. Our tools will help you with the following:</p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                    <span className="font-medium text-gray-500">Faster Processing and Delivery</span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                    </svg>
                    <span className="font-medium text-gray-500">Out of the Box Tracking and Monitoring</span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                    <span className="font-medium text-gray-500">100% Protection and Security for Your App</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img
              className="mx-auto sm:max-w-sm lg:max-w-full"
              src="https://cdn.devdojo.com/images/november2020/feature-graphic.png" alt="feature image"/></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const postData = await API.graphql({
    query: listPosts,
  });
  return {
    props: {
      posts: postData.data.listPosts.items,
    },
  };
}
