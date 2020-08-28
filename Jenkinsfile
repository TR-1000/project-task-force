pipeline {
  agent any
  stages {
    stage('Build Angular') {
      steps {
        sh '''# npm i
# npm run build


'''
      }
    }

    stage('Deploy to S3') {
      steps {
        sh '''cd /var/lib/jenkins/workspace/project-task-force_master/dist
ls

# aws s3 cp /var/lib/jenkins/workspace/project-task-force_master s3://project-taskforce --recursive --acl public-read'''
      }
    }

  }
}