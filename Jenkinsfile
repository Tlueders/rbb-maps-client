pipeline {
    agent any
    tools {nodejs "node"}
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Version') {
            steps {
                sh 'mv ./build/index.html ./build/index-"$BUILD_NUMBER".html'
                sh 'cd ./build && ls'
            }
        }
        stage('Deliver') {
            withAWS(region:'us-west-2', credentials:'AKIAR7HGNPVRESAZF2ZA') {
              s3Upload(file:'index-"$BUILD_NUMBER".html', bucket:'ab-partner-locator', path:'./build/index-"$BUILD_NUMBER".html')
            }
        }
    }
}