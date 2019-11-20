pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
                sh 'echo "$BUILD_NUMBER"'
            }
        }
    }
}