pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh '''npm i
npm run build'''
      }
    }

    stage('Deploy') {
      steps {
        sh 'cd /var/lib/jenkins/workspace/project-task-force_master'
      }
    }

  }
}