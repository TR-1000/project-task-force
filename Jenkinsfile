pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''npm i
npm run build
'''
      }
    }

    stage('Deploy to s3') {
      steps {
        sh '''s3Upload(file:\'project-task-force_master\', bucket:\'project-taskforce\', path:\'/var/lib/jenkins/workspace/project-task-force_master\')

'''
      }
    }

  }
}