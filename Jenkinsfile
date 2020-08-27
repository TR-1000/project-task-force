pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh ''' npm i
 npm run build
'''
      }
    }

    stage('Deploy to s3') {
      steps {
            withAWS(role:'EC2-Full-S3-Accessor') {
              s3Upload(bucket:'project-taskforce', file:'project-task-force_master', path:'/var/lib/jenkins/workspace/project-task-force_master');
            }
    }

  }
}
