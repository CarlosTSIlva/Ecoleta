import express from 'express';

const app = express();

const users =['joao','fernandso', 'maikon','fernandso', 'maikon']

app.get('/users',(req, res) => {
    const search = String(req.query.search)
    const filteredUsers =search ? users.filter(user => user.includes(search)) : users
    return res.json(filteredUsers);
})

app.get('/users/:id', (req,res) => {
    const id = Number(req.params.id);

    const user = users[id]
    return res.json(user)
})

app.post('/users', (req, res) => {
    const user= {
        name : 'carlos eduardo',
        email : 'carlos@hotmail.com'
    }
    return res.json(user)
})

app.listen(3333, () => {
    console.log("💕 server on na porta 3333")
})