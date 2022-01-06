// pipeline {
//     agent any
//     stages {
//         stage('git') {
//             steps {
//                 sh 'if [ ! -d ~/express-server ]; then echo "clone" && git clone https://github.com/minhob38/express-server.git ~/express-server; fi'
//                 sh 'if [ -d ~/express-server ]; then echo "pull" && cd ~/express-server && git pull origin master; fi'
//             }
//         }
//         stage('docker') {
//             steps {
//                 sh 'cd ~/express-server && docker build -t minhob38/express-server:latest .'
//                 sh 'cd ~/express-server && docker run -d -p 8000:8000 minhob38/express-server:latest --name server-a'
//             }
//         }
//     }
// }

// jenkins pipeline document - https://www.jenkins.io/doc/book/pipeline/jenkinsfile/
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