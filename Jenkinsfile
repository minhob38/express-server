pipeline {
    agent any
    stages {
        stage('git') {
            steps {
                sh 'if [ ! -d ~/express-server ]; then echo "clone" && git clone https://github.com/minhob38/express-server.git ~/express-server; fi'
                sh 'if [ -d ~/express-server ]; then echo "pull" && cd ~/express-server && git pull origin master; fi'
            }
        }
        stage('docker') {
            steps {
                sh 'cd ~/express-server && docker build -t minhob38/express-server:latest .'
            }
        }
    }
}
