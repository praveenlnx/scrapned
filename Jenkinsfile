node {
    def app

    stage('Clone workfiles') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
        app = docker.build("praveenlnx/scrapneed")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */
        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
     stage('Deploy Image') {
            sh 'kubectl delete deploy scrapneed'
            sh 'kubectl delete svc scrapneed'
            sh 'kubectl run scrapneed --image=praveenlnx/scrapneed:latest --port=80:80'
            sh 'kubectl expose deploy scrapneed --type="LoadBalancer"'
            
        }
}
