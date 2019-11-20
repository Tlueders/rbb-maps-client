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
        stage('Version') {
            steps {
                sh 'mv /build/index.html build/index-"$BUILD_NUMBER".html'
                sh 'cd /build && ls'
            }
        }
    }
}