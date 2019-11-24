var express = require('express')
var cors = require('cors')
var app = express()
var fetch = require('node-fetch');


const projectId = 'Extrahlen';
const location = 'us-central1';
const modelId = 'pneumo';
// const filePath = 'path_to_local_file.jpg';

// Imports the Google Cloud AutoML library
const {PredictionServiceClient} = require(`@google-cloud/automl`).v1;
const fs = require(`fs`);
app.use(cors())

var whitelist = ['http://localhost:3000']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// Instantiates a client
const client = new PredictionServiceClient();

// Read the file content for translation.
// const content = fs.readFileSync(filePath, `utf8`);

async function predict(content) {
  // Construct request
  // params is additional domain-specific parameters.
  // score_threshold is used to filter the result
  const request = {
    name: client.modelPath(projectId, location, modelId),
    payload: {
      image: {
        imageBytes: content,
      },
    },
    params: {
      scoreThreshold: '0.8',
    },
  };

  const [response] = await client.predict(request);

  for (const annotationPayload of response.payload) {
    console.log(`Predicted class name: ${annotationPayload.displayName}`);
    console.log(
      `Predicted class score: ${annotationPayload.classification.score}`
    );
  }
}

app.get('/json', cors(corsOptions), async function (req, res, next) {
    // console.log(req.query)
    var boi = await predict(req.query.img)
    res.send(boi)
})
 
app.listen(4000, function () {
  console.log('CORS-enabled web server listening on port 4000')
})