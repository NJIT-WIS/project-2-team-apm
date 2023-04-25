const mailchimp = require('mailchimp-api-v3');

// Set up Mailchimp API credentials
const apiKey = 'bf239895439d7e406310ece6d285929e-us10';
const audienceId = '62d307ef60';

// Create a new Mailchimp API client
const mailchimpClient = new mailchimp(apiKey);

// Handle the form submission
app.post('/submit-email', (req, res) => {
  const email = req.body.email;

  // Add the email address to the Mailchimp audience
  mailchimpClient.post(`/lists/${audienceId}/members`, {
    email_address: email,
    status: 'subscribed'
  }, (err, response) => {
    if (err) {
      console.log(err);
      res.send('Error subscribing to mailing list');
    } else {
      console.log(response);
      res.send("You've successfully subscribed to the mailing list!");
    }
  });
});
