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
            steps{
                withAWS(region:'us-west-2', credentials:'7474d8c0-3502-40a8-b8c9-13eedcd9d70d') {
                    s3Upload(file:'./build/index-"${env.BUILD_NUMBER}".html', bucket:'ab-partner-locator', path:'./')
                }
            }
        }
    }
}