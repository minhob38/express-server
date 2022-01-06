pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials("dockerhub-minho")
    }

    stages {
        stage('build') {
            steps {
                echo "hello"
            }
        }

        stage('dockerhub login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login --username minhob38 --password-stdin'
            }
        }
    }
}
