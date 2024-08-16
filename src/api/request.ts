import axios from 'axios'

const request = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MWQxMjhmMjg1ZjZlZDcyN2Y3MGY3MTA0NjViNGYyZSIsIm5iZiI6MTcyMzUwNjg4My41MDYxMiwic3ViIjoiNWNkNjExMjg5MjUxNDEwNmY4Y2Q4YzhhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4fpK6mgHsQngEMESiKmLeXdHLfNkRLOoWD64YfP7Fu8`,
  },
})

export default request
