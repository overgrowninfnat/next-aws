import {withSSRContext} from 'aws-amplify'

import Header from '../components/Header'

export default function Profile({authenticated}) {
  console.log(authenticated)
  return(
    <Header />
  )
}

export async function getServerSideProps({ req }) {
  const {Auth} = withSSRContext({ req })
  try {
    await Auth.currentAuthenticatedUser()
    return {
      props: {
        authenticated: true
      }
    }
  }catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin'
      }
    }
  }
}
