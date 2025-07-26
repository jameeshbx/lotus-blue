# Email Setup Guide

To enable email functionality for the contact form, follow these steps:

## 1. Create Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
```

## 2. Gmail App Password Setup

1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security → App passwords
4. Generate a new app password for "Mail"
5. Use this app password in the `GMAIL_APP_PASSWORD` variable

## 3. Important Notes

- Use your Gmail address for `GMAIL_USER`
- The app password is different from your regular Gmail password
- Never commit the `.env.local` file to version control
- The email will be sent to the same address specified in `GMAIL_USER`

## 4. Testing

After setting up the environment variables:

1. Restart your development server
2. Fill out the contact form
3. Check your Gmail inbox for the test email

## 5. Customization

You can modify the email template in `src/app/api/contact/route.ts` to:

- Change the recipient email
- Customize the email subject and content
- Add additional form fields
