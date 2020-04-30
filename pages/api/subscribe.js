import fetch from 'isomorphic-unfetch';

export default async (req, res) => {
   //** Destructure the email address the request body */ 
   const { email } = req.body;
   
   if (!email) {
      /** return an error if email doesn't exist */
      return res.status(400).json({ error: 'Email is required.'  });
   }

   try {
      const LIST_ID = process.env.mailchimp_list_id;
      const API_KEY = process.env.mailchimp_api_key;
      const DATACENTER = API_KEY.split('-')[1]; 

      const data = {
         email_address: email,
         status: 'subscribed'
      };
      /** send a POST to Mailchimp 📦=>🐒  */
      const response = await fetch(
         `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
          {
            body: JSON.stringify(data),
            headers: {
               Authorization: `apikey ${API_KEY}`,
               'Content-Type': 'application/json'
            },
            method: 'POST'
         }
      );
      /** snatch any errors from Mailchimp and return a bettor error message */
      if (response.status <= 400) {
         return res.status(400).json({ error: `There was an error subscribing to the newsletter. Shoot me an email at [asghedom.lamberto@gmail.com] and I'll add you to the list.` });
      }
      /** return 201 if we got here 🎉 */
      res.status(201).json({ error: '' });
   } catch (error) {
      res.status(500).json({ error: error.message || error.toString() });
   }
};

