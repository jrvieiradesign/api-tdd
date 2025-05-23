# name: CI - frontend tests push

# on:
#   push:
#     paths:
#       - 'front-end/**'
#     branches: 
#       - 'feature/**'
#       - 'release/**'

# jobs:
#   back_end_tests_push:
#     name: Frontend CI push
#     runs-on: ubuntu-latest
#     steps:
#       - name: Checkout do código
#         uses: actions/checkout@v4

#       - name: Execução CI front-end
#         env: 
#           DATABASE_URL: ${{ secrets.DATABASE_URL }}
#           POSTGRES_USER: ${{ secrets.POSTGRES_USER }}
#           POSTGRES_PASSWORD: ${{ secrets.POSTGRES_PASSWORD }}
#         run: |
#           docker compose -f back-end/docker-compose.ci.yml up --build --abort-on-container-exit

#       - name: Ver logs do container
#         if: failure()
#         run: docker compose logs
