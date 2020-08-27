pipeline {
  agent any
  stages {
<<<<<<< HEAD
    stage('Angular Build') {
      agent {
        docker {
          image 'maven:3.6.3-adoptopenjdk-8'
        }

      }
      steps {
        sh 'mvn package'
=======
    stage('build angular') {
      steps {
        sh '''npm i
npm run build'''
>>>>>>> cabc5e2c2254dcc4171ff9943fcfcd7ee5ba98ec
      }
    }

  }
}