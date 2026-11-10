const express = require('express');
const path = require('path');
const app = express();

// Define a porta fornecida pelo Render ou 3000 localmente
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON (útil para formulários futuros)
app.use(express.json());

// Serve os arquivos estáticos (HTML, CSS, JS, Imagens) da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota de API de exemplo (Backend puro)
app.get('/api/status', (req, res) => {
    res.json({ status: 'ativo', message: 'Servidor AgroLink rodando perfeitamente.' });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});