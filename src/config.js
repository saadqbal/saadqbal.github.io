export const config = {
  // Your Github Converted Token To Know How To Get Your Token Look at Readme.md
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,

  // Your Github UserName
  githubUserName: 'saadqbal',

  // Your Github Repo Name Where You Have your issues as Blog
  githubRepo: 'saadqbal.github.io',

  // Set it to true if you have a Github app to add to this project
  // and fill the client ID & secret
  enableOAuth: true,
  OAuthClientID: process.env.REACT_APP_GITHUB_CLIENT_ID,
  OAuthSecret: process.env.REACT_APP_GITHUB_SECRET,

  // Your Personal Blog Title
  title: 'Asad Iqbal',

  // Your Personal Blog Subtitle
  subtitle: 'Full Stack Developer',

  // write a few lines about yourself
  aboutMe: 'A software engineer. Full Stack developer',

  // Header customization
  header: {
    backgroundColor: '#f1f6f8', // can be a CSS gradient
    backgroundColorDark: '#4C566A',
    titleColor: '#ff5252',
    titleColorDark: '#16a085',
    subtitleColor: '#37474f',
    subtitleColorDark: '#D8DEE9'
  },
  // Footer customization
  footer: {
    backgroundColor: '#f1f6f8', // can be a CSS gradient
    backgroundColorDark: '#4C566A',
    titleColor: '#ff5252',
    titleColorDark: '#16a085',
    subtitleColor: '#37474f',
    subtitleColorDark: '#D8DEE9',
    stackOverflowId: 840186,
    contact: {
      title: 'Hire Me',
      phone: '+923348442426',
      email: 'software.lord@gmail.com',
      facebook: '',
      linkedin: '',
      twitter: 'saadqbal',
      github: 'saadqbal'
    },
    copyright: `copyright © 2020. All rights reserved.`
  }
}
