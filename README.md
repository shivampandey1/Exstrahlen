## Inspiration
We we inspired to build Exstrahlen because of the long wait times in hospitals. From the personal experience of one of our teammates, who recently underwent a surgery, long hospital waiting times have become standard, and we're trying to change that.

## What it does
Our whole idea was to have an idea that indirectly improves wait time. We found that scans take a lot of time to analyze and must be done thousands of times per day. Thus, we wanted to answer the following questions. How can we make the work of radiologists faster, and how do we improve the wait times for patients?

Utilizing our algorithm lets radiologists immediately jump to key patterns in a scan, saving them 30 seconds to a minute. That kind of efficiency gain is massive when multiplied over the 5000 scans that a radiologist may see each day. Improving this turnaround time means that patients can receive the care they need more quickly and can improve the quality of treatment.

## How I built it
The frontend utilizes js.vue, bootstrap, and the humaaans library. For our model, we used Google Cloud Platform's AutoML Vision platform as it wouldn't have been feasible to build our own Convolutional Neural Network to handle the task. We used an Express Node.JS server to connect our web app with the API.

## Challenges I ran into
GCP documentation is confusing and led us to make a bunch of errors training the model. Finding training data is hard. Picking up a framework that was new to most of the team (Vue) was a big learning experience.

## Accomplishments that I'm proud of
Getting our model up and running and seeing the 90%+ recall and precision was really satisfying given the time we put into it. Our web app was drop dead gorgeous and was very effective at communicating it's purpose.

## What I learned
Whenever you assume you can do something in x hours, realize that it will probably take up to 2x hours.

## What's next for Exstrahlen
Right now we just return a confidence score, but we'd like to expand the model / UI to utilize bounding boxes so that radiologists can look at the scan and really understand what the model is seeing so that they can be more confident in it.


By Shivam Pandey, Aliya Rajwani, Hrithvik Alex, Rikin Patel

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### Compiles and minifies for production
```
npm run build
```
### Lints and fixes files
```
npm run lint
```
