docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vprpr/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t vprpr/app ../..
