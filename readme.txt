curl -X POST http://localhost:3003/api/register \
     -H "Content-Type: application/json" \
     -d '{
           "name": "John",
           "surname": "Doe",
           "phone": "1234567890",
           "address": "123 Main St",
           "role": "user",
           "email": "doe@gmail.com",
           "password": "doe123"
         }'

curl -X POST http://localhost:3003/api/register \
     -H "Content-Type: application/json" \
     -d '{
           "name": "mike",
           "surname": "Doe",
           "phone": "1234567866",
           "address": "123 Main St",
           "role": "user",
           "email": "mike@gmail.com",
           "password": "mike123"
         }'


         curl -X POST http://localhost:3003/api/login \
     -H "Content-Type: application/json" \
     -d '{"email": "mike@gmail.com", "password": "mike123"}'

curl -X POST http://localhost:3003/api/shopping \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTlhMmIzY2M5NmQxNzI4YTk5MWJkOSIsIm5hbWUiOiJtaWtlIiwiaWF0IjoxNzM5MTc1MzAwLCJleHAiOjE3MzkxOTMzMDB9.OhCIjYb1qzbdCrMRB6BEma5F9k6vZwSeuL4o3JxqoHE" \
  -d '{
    "name": "Weekly Groceries",
    "description": "Items to buy for the week",
    "items": [
      { "itemName": "Apples", "quantity": 5 },
      { "itemName": "Bananas", "quantity": 3 },
      { "itemName": "Carrots", "quantity": 2 }
    ]
  }'

Detected IP: 34.83.194.43