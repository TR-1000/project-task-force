pipeline {
  agent {
    docker {
      image 'node:12.18-alpine'
    }

  }
  stages {
    stage('Build Angular') {
      agent {
        docker {
          image 'node:12.18-alpine'
        }

      }
      steps {
        sh '''npm i
npm run build'''
      }
    }

  }
}