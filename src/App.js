import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import loadFonts from './loadFonts';

import { Provider as PrimaryColorProvider } from './usePrimaryColor';
import { Provider as ProfileProvider } from './useProfile';
import Document from './Document';

loadFonts();

const profile = {
  name: 'Quang Buu Le',
  title: 'Full-stack Software Engineer',
  skills: [
    {
      name: 'Front-End',
      description: [
        'More than 10 years working with DOM',
        'More than 5 years working with React',
        'Love working with functional and immutable data',
      ],
    },
    {
      name: 'Back-End',
      description: [
        'Familiar with Serverless Framework',
        'Familiar with GraphQL',
        'Familiar with Docker',
        'Familiar with SQL and NoSQL database systems',
        'Have skills on variety of programming languages: node.js, Golang, C++, Swift, Ruby',
      ],
    },
  ],
  experience: [
    {
      timeRange: '2016 - Present',
      organization: 'Outfit',
      title: 'Full-stack Software Engineer',
      description: [
        'Implemented Sketch-like design tool using React and Immutable data',
        'Implemented Front-End application using React',
        'Implemented Back-End service using Rails',
        'Implemented GraphQL service using Golang',
        'Implemented service to render DOM to PDF / images using Swift on MacOS',
        'Implemented service to render DOM to PDF / images using node.js on AWS Lambda',
        'Implemented service to convert PDF color space from RGB to CMYK that supports 5th color using C++',
        'Implemented serverless services for different kinds of need for the application',
        'Collaborated with the team, helping them grow',
      ],
    },
    {
      timeRange: '2015 - 2016',
      organization: 'Agency Revolution',
      title: 'Full-stack Software Engineer',
      description: [
        'Implemented Email Builder using React',
        'Lead a team to implement Front-End application using React and material design',
        'Implemented service for monitoring messages using Golang and React',
      ],
    },
    {
      timeRange: '2012 - 2015',
      organization: 'Lozi, Inc',
      title: 'Lead Engineer',
      description: [
        'Implemented Front-End application using Backbone, then moved to React',
        'Implemented Back-End service using node.js',
        'Being co-founder, had to do product management, team leading, etc.',
      ],
    },
  ],
  contributions: [
    {
      name: 'Redux',
      description: [
        'Dan Abramov (Redux creator) once featured my project on his twitter for helping Redux community on very first days.',
        { image: require('./tweet.jpg') },
      ],
    },
    {
      name: 'React',
      description: [
        'I created an useful NPM package, which is a babel plugins that extract higher order components to be able to hot reload.',
        { image: require('./babelPlugin.jpg') },
      ],
    },
    {
      name: 'Material UI',
      description: [
        'I am on of the contributors of Material UI (45k stars) - a React UI library that follow Google Material Design.',
      ],
    },
    {
      name: 'Discourse',
      description: [
        'I am on of the contributors of Discourse (28k stars) - a Platform for community discussion that is implemented using Ruby & Ember.',
      ],
    },
    {
      name: 'gorequest',
      description: [
        'I am on of the contributors of gorequest (2k stars) - a Golang library to make HTTP requests.',
      ],
    },
    {
      name: 'OAuthSwift',
      description: [
        'I am on of the contributors of OAuthSwift (2k stars) - a Swift based OAuth library for iOS.',
      ],
    },
    {
      name: 'Personal projects',
      description: [
        'I implemented a musical keyboard sound synthesizing logical module.',
        { image: require('./soundSynthesisModule.jpg') },
      ],
    },
  ],
  education: [
    {
      timeRange: '2010 - 2012',
      university: 'HCM University of Technology',
      title: 'Computer Science and Engineering',
      description: ['Not finished.'],
    },
  ],
};

export default function App() {
  return (
    <PDFViewer>
      <PrimaryColorProvider value="#1f3558">
        <ProfileProvider value={profile}>
          <Document />
        </ProfileProvider>
      </PrimaryColorProvider>
    </PDFViewer>
  );
}
