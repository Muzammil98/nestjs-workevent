# Create cluster
`eksctl create cluster -f cluster.yaml`

# Create config map
`kubectl apply -f postgres-configmap.yaml`

# Create services
`kubectl apply -f service.yaml`
`kubectl apply -f pg-service.yaml`

# Create deployments
`kubectl apply -f deployment.yaml`
`kubectl apply -f pg-deployment.yaml`

# Delete EKS Cluster
`eksctl delete cluster -f cluster.yaml`

# Get contexts
`kubectl config get-contexts`




ENVs
```
AWS_DEFAULT_REGION=us-west-2
AWS_CLUSTER_NAME=cicd-demo
AWS_ACCOUNT_ID=905524194336
IMAGE_REPO_NAME=
IMAGE_TAG=latest
```