import fetch from 'isomorphic-fetch';

const apiKey = '1c62851644f738dca8ca01a69dd79bb6-us21';
const audienceId = 'ee9ffaca2f';

async function addSubscriber(emailAddress) {
  const url = `https://us21.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `apikey ${apiKey}`
      },
      body: JSON.stringify({
        email_address: emailAddress,
        status: 'subscribed'
      })
    });

    console.log(response);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      const error = await response.json();
      throw new Error(`Failed to add subscriber: ${error.title} - ${error.detail}`);
    }
  } catch (error) {
    console.error(error);
  }
}

