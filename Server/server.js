const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const translate = require('translate-google');

//const crypto = require('crypto');
const {AmazonProduct,Store,Order, Blog, BusinessBlog, SkinBlog, SportBlog, HealthBlog, TechnologyBlog,User,MuslimBlog} = require('./Schema');

const app = express();
const port = 5000;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());

const connection_url = "mongodb+srv://moinakram7777:nJfHCvTbMuB1GPwX@blogcluster.zsqfcks.mongodb.net/?retryWrites=true&w=majority";

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
  const { name, title, description, image, schemaName, heading1, image1, description1, heading2, image2, description2, heading3, image3, description3, heading4, image4, description4, summary } = req.body;
  let selectedSchema;
  console.log(name)
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
      case 'muslim':
      selectedSchema = MuslimBlog;
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
    name,
  });

  newBlog
    .save()
    .then(() => {
      res.status(201).json({ message: 'Blog created successfully',name });
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
       case 'muslim':
      selectedSchema = MuslimBlog;
      break;
    default:
      return res.status(400).json({ error: 'Invalid category' });
  }

  selectedSchema
    .find()
    .select('title description image name')
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
    Blog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary name').exec(),
    BusinessBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary name').exec(),
    SportBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary name').exec(),
    TechnologyBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary name').exec(),
    SkinBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary name').exec(),
    HealthBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary name').exec(),
    MuslimBlog.find().select('title description image heading1 image1 description1 heading2 image2 description2 heading3 image3 description3 heading4 image4 description4 summary name').exec()
  ])
    .then(([blogs, businesses, sports, technologies, skins, healthBlogs,Muslim]) => {
      const combinedData = [...blogs, ...businesses, ...sports, ...technologies, ...skins, ...healthBlogs, ...Muslim];
      res.status(200).json(combinedData);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch articles', details: err });
    });
});
app.post('/singlearticle', (req, res) => {
  const { name } = req.body;

  Promise.all([
    Blog.findOne({ name: name }).exec(),
    BusinessBlog.findOne({ name: name }).exec(),
    SportBlog.findOne({ name: name }).exec(),
    TechnologyBlog.findOne({ name: name }).exec(),
    SkinBlog.findOne({ name: name }).exec(),
    HealthBlog.findOne({ name: name }).exec(),
    MuslimBlog.findOne({ name: name }).exec(),
  ])
    .then(([blog, businessBlog, sportBlog, technologyBlog, skinBlog, healthBlog, MuslimBlog]) => {
      const article = blog || businessBlog || sportBlog || technologyBlog || skinBlog || healthBlog || MuslimBlog;

      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }

      // Determine the schema of the article
      let schema;
      if (blog) schema = 'blog';
      else if (businessBlog) schema = 'business';
      else if (sportBlog) schema = 'sport';
      else if (technologyBlog) schema = 'technology';
      else if (skinBlog) schema = 'skin';
      else if (healthBlog) schema = 'health';
      else if (MuslimBlog) schema = 'muslim';

      res.send(JSON.stringify({ ...article._doc, schema }));
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch article', details: err });
    });
});


app.get('/suggestions', (req, res) => {
  const { query } = req.query;

  Promise.all([
    Blog.find({ title: { $regex: query, $options: 'i' } }).select('title name'),
    BusinessBlog.find({ title: { $regex: query, $options: 'i' } }).select('title name'),
    SportBlog.find({ title: { $regex: query, $options: 'i' } }).select('title name'),
    TechnologyBlog.find({ title: { $regex: query, $options: 'i' } }).select('title name'),
    SkinBlog.find({ title: { $regex: query, $options: 'i' } }).select('title name'),
    HealthBlog.find({ title: { $regex: query, $options: 'i' } }).select('title name'),
    MuslimBlog.find({ title: { $regex: query, $options: 'i' } }).select('title name')
  ])
    .then(([blogSuggestions, businessBlogSuggestions, sportBlogSuggestions, technologyBlogSuggestions, skinBlogSuggestions, healthBlogSuggestions,MuslimBlogsuggestion]) => {
      const suggestions = [
        ...blogSuggestions,
        ...businessBlogSuggestions,
        ...sportBlogSuggestions,
        ...technologyBlogSuggestions,
        ...skinBlogSuggestions,
        ...healthBlogSuggestions,
        ...MuslimBlogsuggestion
      ];

      res.status(200).json(suggestions);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to fetch suggestions', details: err });
    });
});


app.post('/signup', async (req, res) => {
  const { email, password, firstName,lastName } = req.body;
  let otp = "";

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'email already exists' });
    }

    // Hash the password
   // const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ email, password,firstName,lastName, otp });
    await newUser.save();

    res.status(200).json({ message: 'Signup successful' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ message: 'Signup failed' });
  }
});

// Sign in route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare passwords
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
 res.status(200).json({ message: 'Signin successful' });

    // Redirect to the admin page after a delay
   
    return; // Add this line to exit the function and prevent further execution
  } catch (error) {
    console.error('Error during signin:', error);
    res.status(500).json({ message: 'Signin failed' });
  }
});



//users
const transporter = nodemailer.createTransport({
  service: 'Gmail', // e.g., 'Gmail', 'SendGrid', etc.
  auth: {
    user: 'moinakram7777@gmail.com',
    pass: 'pyburbzxbnlqmeym'
  }
});

app.post('/sendOTP', async (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();

  try {
    // Update the user's OTP in the database
    await User.findOneAndUpdate({ email }, {otp});

    // Send the OTP to the user via email
    await transporter.sendMail({
      from: 'moinakram7777@gmail.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    });

    res.status(200).json({ message: 'OTP sent successfully'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error sending OTP' });
  }
});
// Route for validating OTP
app.post('/verifyOTP', async (req, res) => {
  const { email, otp } = req.body;

  try {
    // Retrieve the user from the database
    const user = await User.findOne({ email });
    // Check if the OTP matches
    if (user && user.otp === otp) {
      // Successful login
      // Generate a session token or perform necessary actions
      res.status(200).json({ message: 'OTP verified successfully',id:user._id });
    } else {
      // Invalid OTP
      res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error verifying OTP' });
  }
});

// Function to generate a random OTP
const generateOTP = () => {
  const digits = '0123456789';
  let OTP = '';
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
};





// Define the /translate route
app.post('/translate', async (req, res) => {
  const { text, inputLanguage, targetLanguage } = req.body;

  if (!text || !inputLanguage || !targetLanguage) {
    return res.status(400).json({ error: 'Missing required parameters.' });
  }

  try {
    const translatedText = await translate(text, { from: inputLanguage, to: targetLanguage });
    return res.json({ translatedText });
  } catch (error) {
    console.error('Error translating the text:', error);
    return res.status(500).json({ error: 'Translation failed.' });
  }
});

// server.js

// ... (existing code)

// Define the /separatearticles endpoint
app.get('/separatearticles', (req, res) => {
  // Fetch data for each schema separately
  Promise.all([
    HealthBlog.find().select(' name').exec(),
    BusinessBlog.find().select(' name').exec(),
    SportBlog.find().select(' name').exec(),
    TechnologyBlog.find().select(' name').exec(),
    SkinBlog.find().select(' name').exec(),
    MuslimBlog.find().select(' name').exec(),
  ])
    .then(([healthBlogs, businessBlogs, sportBlogs, technologyBlogs, skinBlogs, muslimBlogs]) => {
      // Store the data for each schema in separate constants
      const healthData = healthBlogs;
      const businessData = businessBlogs;
      const sportData = sportBlogs;
      const technologyData = technologyBlogs;
      const skinData = skinBlogs;
      const muslimData = muslimBlogs;

      // Send the data back to the client
      res.status(200).json({ healthData, businessData, sportData, technologyData, skinData, muslimData });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Failed to fetch articles', details: err });
    });
});

// ... (existing code)

//Order
// ... (previous code)

app.post('/submit-order', async (req, res) => {
  const { items, name, phone, address, paymentMethod, paymentScreenshot } = req.body;

  const newOrder = new Order({
    items,
    name,
    phone,
    address,
    paymentMethod,
    paymentScreenshot,
  });

  try {
    await newOrder.save();
    res.status(200).json({ message: 'Order submitted successfully' });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ error: 'Error submitting order' });
  }
});

// ... (remaining code)
//store data
app.post('/adddata', async (req, res) => {
  try {
    const { id, name, price, image } = req.body;
    console.log(id, name, price, image)
    const newItem = new Store({
      id,
      name,
      price,
      image, // Store the image data as base64 string
    });
    await newItem.save();
    res.status(201).json({ message: 'Item stored successfully' });
  } catch (error) {
    console.error('Error storing item:', error);
    res.status(500).json({ error: 'An error occurred while storing the item' });
  }
});
//display orders
app.get('/showorders', async (req, res) => {
  try {
    const data = await Order.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});
//show store data to customer
app.get('/showstoredata', async (req, res) => {
  try {
    const data = await Store.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});
//Amazonlinks
// Update your save endpoint to use async/await
app.post('/amazonlink', async (req, res) => {
  const { amazonAffiliateLink } = req.body;
  try {
    const newProduct = new AmazonProduct({ amazonAffiliateLink });
    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Error saving the product link' });
  }
});


app.get('/amazonlink', async (req, res) => {
 try {
    const data = await AmazonProduct.find();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});
function startServer() {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

