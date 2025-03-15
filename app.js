const express = require('express');
const bodyParser = require('body-parser');
const { name } = require('ejs');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const homeContent = 'Welcome to our blog! Here, we share insightful articles on technology, lifestyle, and personal growth. Whether you are a tech enthusiast, a creative thinker, or someone seeking inspiration, you will find valuable content tailored to your interests. Our goal is to provide engaging, informative, and thought-provoking posts that spark curiosity and encourage discussions. From coding tutorials and productivity hacks to travel experiences and book recommendations, we cover a wide range of topics. Stay updated with the latest trends, learn something new, and join our growing community of readers. Explore, engage, and enjoy your journey with us. Happy reading! 🚀';

const aboutContent = "Our blog is a platform dedicated to sharing knowledge, experiences, and ideas on various topics, including technology, lifestyle, productivity, and personal development. We believe in the power of words to inspire, educate, and connect people. Whether you're looking for coding tutorials, career advice, travel stories, or creative insights, we have something for everyone. Our goal is to create a space where readers can learn, grow, and engage in meaningful discussions. Join us on this journey as we explore new perspectives, share valuable insights, and build a community of curious minds. Stay inspired and keep exploring! 🚀"

const contactContent = "We'd love to hear from you! Whether you have feedback, suggestions, or questions, feel free to reach out to us. Your input is valuable to us, and we are committed to creating content that resonates with our readers. Let us know what you think, what you'd like to see more of, or how we can improve. We appreciate your support and look forward to connecting with you. Together, we can create a vibrant community of learners, thinkers, and creators. Thank you for being a part of our journey. Let's stay in touch! 🚀"

const posts = [];

app.get('/', (req, res) => {
  res.render('home', { content: homeContent, name: 'Home',posts: posts });
});

app.get('/about', (req, res) => {
  res.render('about', { content: aboutContent , name: 'About' });
});

app.get('/compose', (req, res) => { 
  res.render('compose', { name: 'Compose' });
});

app.get('/favourites', (req, res) => {
  res.render('favourites', { content: homeContent, name: 'Favourites' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { content: contactContent ,name: 'Contact' });
});

app.post('/compose', (req, res) => {
  const {title,postBody} = req.body;
  let post = {
    title: title,
    postBody: postBody
  };
  posts.push(post);
  res.redirect('/');
});

app.get('/posts/:postName', (req, res) => {
  let postName = req.params.postName.replace(/-/g, " "); // Replace all hyphens with spaces
  let foundPost = posts.find((post) => postName.toLowerCase() === post.title.toLowerCase());

  if (foundPost) {
    res.render('post', { postBody: foundPost.postBody, title: foundPost.title, name: foundPost.title });
  } else {
    console.log('Post not found'); // This will be logged only once
    res.status(404).send('Post not found');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});