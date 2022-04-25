// jenkins pipeline document - https://www.jenkins.io/doc/book/pipeline/jenkinsfile/
pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS=credentials('dockerhub-minho')
    }

    stages {
        stage('docker build') {
            steps {
                sh 'docker build -t minhob38/express-server:latest .'
            }
        }

        stage('dockerhub login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login --username minhob38 --password-stdin'
            }
        }

        stage('dockerhub push') {
			steps {
				sh 'docker push minhob38/express-server:latest'
			}
		}

        stage('dockerhub pull') {
			steps {
				sh 'docker pull minhob38/express-server:latest'
			}
		}

        // stage('deploy server') {
		// 	steps {
		// 		sh 'sh /server-computer/backend/deploy_backend.sh'
		// 	}
		// }
    }
}
