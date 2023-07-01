const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Blog, BusinessBlog, SkinBlog, SportBlog, HealthBlog, TechnologyBlog } = require('./Schema');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const connection_url = 'mongodb+srv://moinakram7777:nJfHCvTbMuB1GPwX@blogcluster.zsqfcks.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    createTextIndexes();
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
  });

function createTextIndexes() {
  Promise.all([
    mongoose.connection.db.collection("blogs").createIndex({ title: "text" }),
    mongoose.connection.db.collection("businessblogs").createIndex({ title: "text" }),
    mongoose.connection.db.collection("sportblogs").createIndex({ title: "text" }),
    mongoose.connection.db.collection("technologyblogs").createIndex({ title: "text" }),
    mongoose.connection.db.collection("skinblogs").createIndex({ title: "text" }),
    mongoose.connection.db.collection("healthblogs").createIndex({ title: "text" })
  ])
    .then(() => {
      console.log('Text indexes created');
      startServer();
    })
    .catch((err) => {
      console.error('Failed to create text indexes', err);
      startServer();
    });
}

// Define routes
app.post('/insertblogs', (req, res) => {
  const { title, description, image, schemaName, heading1, image1, description1, heading2, image2, description2, heading3, image3, description3, heading4, image4, description4, summary } = req.body;
  
  let selectedSchema;
  switch (schemaName) {
    case 'health':
      selectedSchema = HealthBlog;
      break;
    case 'blog':
      selectedSchema = Blog;
      break;
    case 'business':
      selectedSchema = BusinessBlog;
      break;
    case 'sport':
      selectedSchema = SportBlog;
      break;
    case 'technology':
      selectedSchema = TechnologyBlog;
      break;
    case 'skin':
      selectedSchema = SkinBlog;
      break;
    default:
      return res.status(400).json({ error: 'Invalid schema name' });
  }

  const newBlog = new selectedSchema({
    title,
    description,
    image,
    heading1,
    image1,
    description1,
    heading2,
    image2,
    description2,
    heading3,
    image3,
    description3,
    heading4,
    image4,
    description4,
    summary,
  });

  newBlog
    .save()
    .then(() => {
      res.status(201).json({ message: 'Blog created successfully' });
      console.log('Blog created successfully');
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to create blog', details: err });
    });
});


app.post('/individualcategory', (req, res) => {
  const { selectcategory } = req.body;

  let selectedSchema;
  switch (selectcategory) {
    case 'health':
      selectedSchema = HealthBlog;
      break;
    case 'blog':
      selectedSchema = Blog;
      break;
    case 'business':
      selectedSchema = BusinessBlog;
      break;
    case 'sport':
      selectedSchema = SportBlog;
      break;
    case 'technology':
      selectedSchema = TechnologyBlog;
      break;
    case 'skin':
      selectedSchema = SkinBlog;
      break;
    default:
      return res.status(400).json({ error: 'Invalid category' });
  }

  selectedSchema
    .find()
    .select('title description image')
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch category data', details: err });
    });
});

app.get('/allarticles', (req, res) => {
  Promise.all([
    Blog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary').exec(),
    BusinessBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary').exec(),
    SportBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary').exec(),
    TechnologyBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary').exec(),
    SkinBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary').exec(),
    HealthBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary').exec()
  ])
    .then(([blogs, businesses, sports, technologies, skins, healthBlogs]) => {
      const combinedData = [...blogs, ...businesses, ...sports, ...technologies, ...skins, ...healthBlogs];
      res.status(200).json(combinedData);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch articles', details: err });
    });
});

app.post('/singlearticle', (req, res) => {
  const { id } = req.body;

  Promise.all([
    Blog.findById(id).exec(),
    BusinessBlog.findById(id).exec(),
    SportBlog.findById(id).exec(),
    TechnologyBlog.findById(id).exec(),
    SkinBlog.findById(id).exec(),
    HealthBlog.findById(id).exec()
  ])
    .then(([blog, businessBlog, sportBlog, technologyBlog, skinBlog, healthBlog]) => {
      const article = blog || businessBlog || sportBlog || technologyBlog || skinBlog || healthBlog;

      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      console.log(id);
      res.send(JSON.stringify(article));
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch article', details: err });
    });
});

app.get('/suggestions', (req, res) => {
  const { query } = req.query;

  Promise.all([
    Blog.find({ title: { $regex: query, $options: 'i' } }).select('title'),
    BusinessBlog.find({ title: { $regex: query, $options: 'i' } }).select('title'),
    SportBlog.find({ title: { $regex: query, $options: 'i' } }).select('title'),
    TechnologyBlog.find({ title: { $regex: query, $options: 'i' } }).select('title'),
    SkinBlog.find({ title: { $regex: query, $options: 'i' } }).select('title'),
    HealthBlog.find({ title: { $regex: query, $options: 'i' } }).select('title')
  ])
    .then(([blogSuggestions, businessBlogSuggestions, sportBlogSuggestions, technologyBlogSuggestions, skinBlogSuggestions, healthBlogSuggestions]) => {
      const suggestions = [
        ...blogSuggestions,
        ...businessBlogSuggestions,
        ...sportBlogSuggestions,
        ...technologyBlogSuggestions,
        ...skinBlogSuggestions,
        ...healthBlogSuggestions
      ];

      res.status(200).json(suggestions);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to fetch suggestions', details: err });
    });
});


function startServer() {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

