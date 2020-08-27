pipeline {
  agent any
  stages {
    stage('Build Angular') {
      steps {
        sh '''npm i
npm run build'''
      }
    }

    stage('Deploy Angular') {
      steps {
        s3FindFiles(bucket: 'project-taskforce')
      }
    }

  }
}