import Layout from '../components/layout';

export default function Index() {
  return (
    <Layout>
      <main>
        <h1>Hey, I'm Lamberto</h1>
        <p>the value of mailchips api key is {process.env.MAILCHIMP_API_KEY}</p>
      </main>
    </Layout>
  )
}