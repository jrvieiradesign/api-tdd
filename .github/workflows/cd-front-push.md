# name: CD - frontend deploy homolog

# on:
#   push:
#     paths:
#       - 'front-end/**'
#     branches: 
#       - develop

# jobs:
#   frontend_deploy_homolog:
#     name: Frontend CD
#     runs-on: ubuntu-latest
#     steps:
#       - name: Checkout do código
#         uses: actions/checkout@v4

#       - name: Deploy Homolog CI front-end

#       - name: Ver logs do container
#         if: failure()
#         run: docker compose logs
