const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
  },
 
});

const businessBlogSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
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
  summary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const skinBlogSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
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
  summary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const sportBlogSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
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
  summary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const healthBlogSchema = new mongoose.Schema({ 
 title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
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
  summary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    
  },
});

const technologyBlogSchema = new mongoose.Schema({
 title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
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
  summary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const MuslimBlogschema = new mongoose.Schema({ 
 title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
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
  summary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
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
const MuslimBlog = mongoose.model('MuslimBlog', MuslimBlogschema);
module.exports = {
  Blog,
  BusinessBlog,
  SkinBlog,
  SportBlog,
  HealthBlog,
  TechnologyBlog,
  User,
  MuslimBlog
};
