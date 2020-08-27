pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''# npm i
# npm run build
'''
      }
    }

    stage('Deploy to s3') {
      steps {
        sh '''s3Download bucket: \'project-taskforce\', file: \'project-task-force_master\', path: \'/var/lib/jenkins/workspace/project-task-force_master\'

'''
      }
    }

  }
}