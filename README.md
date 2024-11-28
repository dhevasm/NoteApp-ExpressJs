Note App 
- Simple CRUD Rest api for training

Stack :
- Node Js
- Express Js
- PostgreSQL

Route : 
GET /notes
GET /notes/:id
POST /notes => body(JSON) {"title": "title", "content" : "content"}
PUT /notes/:id => body{JSON) {"title": "title", "content" : "content"}
DELETE /notes/:id

Dependencies : 
- Prisma ORM
- Nodemon
- Dotenv
- CORS

Credentials:
.env :
DATABASE_URL=postgresql://{username}:{password}@localhost:5432/db-notes
PORT=3000
