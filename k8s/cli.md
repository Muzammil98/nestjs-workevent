docker run --name postgres-db --net my-network -e POSTGRES_PASSWORD=password -e PGPASSWORD=password -p 5432:5432 -d postgres 