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
        sh '''s3Upload acl: \'Private\', bucket: \'project-taskforce\', cacheControl: \'\', excludePathPattern: \'\', file: \'/var/lib/jenkins/workspace/project-task-force_master\', includePathPattern: \'\', metadatas: [\'\'], redirectLocation: \'\', sseAlgorithm: \'\', tags: \'\', text: \'\', workingDir: \'\'
'''
      }
    }

  }
}