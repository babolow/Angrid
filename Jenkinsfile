pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
    stage('Test Graphique') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    stage('Test Metier') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
}
