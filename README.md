Note App 
- Simple CRUD Rest api for training

Routes : 
- GET /notes
- GET /notes/:id
- POST /notes => body(JSON) {"title": "title", "content" : "content"}
- PUT /notes/:id => body{JSON) {"title": "title", "content" : "content"}
- DELETE /notes/:id

Dependencies :
- Express Js
- Prisma ORM
- Nodemon
- Dotenv
- CORS

Database : PostgreSQL

Credentials:
.env :
- DATABASE_URL=postgresql://{username}:{password}@localhost:5432/db-notes
- PORT=3000
