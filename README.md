### EXPENSE TRACKER PERN

Full stack expense tracker: postgresql, express, react, node

## Postgresql Docker Container

Postgresql database ran through docker container

```
docker pull postgres
docker run -p 5432:5432--name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -e POSTGRES_USER=backend -e POSTGRES_DB=expensetracker

```
## How to USE

```
 npm install
 cd client npm install
 cd ..
 
 # Run front and backend
 npm run dev
 
 # Backend only
 npm run server
 
 # Frontend only
 npm run client
 
 # Build client
 cd client
 npm run build
 
 # Prod
 npm start
```
## Usage
THe expense tracker shows what is your monthly cash flow by how much you earn and how much you spend per month



