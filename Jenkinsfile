pipeline {
  agent any
  stages {
    stage('Build Angular') {
      steps {
        sh '''npm i
npm run build
cd /var/lib/jenkins/workspace/project-task-force_master/dist
ls


'''
      }
    }

    stage('Deploy to S3') {
      steps {
        sh 'aws s3 cp /deploy s3://project-taskforce --recursive --acl public-read'
      }
    }

  }
}