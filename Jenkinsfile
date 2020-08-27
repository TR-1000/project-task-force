pipeline {
  agent any
  stages {
    stage('Build Angular') {
      steps {
        sh '''# npm i
# npm run build

aws s3 cp /deploy s3://project-taskforce --recursive --acl public-read
'''
      }
    }

  }
}