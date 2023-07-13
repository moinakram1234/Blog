const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  heading1: String,
  image1: String,
  description1: String,
  heading2: String,
  image2: String,
  description2: String,
  heading3: String,
  image3: String,
  description3: String,
  heading4: String,
  image4: String,
  description4: String,
  summary: String,
});

const businessBlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  heading1: String,
  image1: String,
  description1: String,
  heading2: String,
  image2: String,
  description2: String,
  heading3: String,
  image3: String,
  description3: String,
  heading4: String,
  image4: String,
  description4: String,
  summary: String,
});

const skinBlogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  heading1: String,
  image1: String,
  description1: String,
  heading2: String,
  image2: String,
  description2: String,
  heading3: String,
  image3: String,
  description3: String,
  heading4: String,
  image4: String,
  description4: String,
  summary: String,
});

const sportBlogSchema = new mongoose.Schema({
 title: String,
  description: String,
  image: String,
  heading1: String,
  image1: String,
  description1: String,
  heading2: String,
  image2: String,
  description2: String,
  heading3: String,
  image3: String,
  description3: String,
  heading4: String,
  image4: String,
  description4: String,
  summary: String,
});

const healthBlogSchema = new mongoose.Schema({
   title: String,
  description: String,
  image: String,
  heading1: String,
  image1: String,
  description1: String,
  heading2: String,
  image2: String,
  description2: String,
  heading3: String,
  image3: String,
  description3: String,
  heading4: String,
  image4: String,
  description4: String,
  summary: String,
});

const technologyBlogSchema = new mongoose.Schema({
 title: String,
  description: String,
  image: String,
  heading1: String,
  image1: String,
  description1: String,
  heading2: String,
  image2: String,
  description2: String,
  heading3: String,
  image3: String,
  description3: String,
  heading4: String,
  image4: String,
  description4: String,
  summary: String,
});
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName:String,
  otp: String,
});
const User = mongoose.model('User', UserSchema);
const Blog = mongoose.model('Blog', blogSchema);
const BusinessBlog = mongoose.model('BusinessBlog', businessBlogSchema);
const SkinBlog = mongoose.model('SkinBlog', skinBlogSchema);
const SportBlog = mongoose.model('SportBlog', sportBlogSchema);
const HealthBlog = mongoose.model('HealthBlog', healthBlogSchema);
const TechnologyBlog = mongoose.model('TechnologyBlog', technologyBlogSchema);

module.exports = {
  Blog,
  BusinessBlog,
  SkinBlog,
  SportBlog,
  HealthBlog,
  TechnologyBlog,
  User
};
