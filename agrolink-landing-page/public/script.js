document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicialização do Mapa (Focado em Coxim-MS)
    // Coordenadas aproximadas de Coxim: -18.5067, -54.7600
    const map = L.map('map').setView([-18.5067, -54.7600], 11);

    // Carregando tiles gratuitos do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Adicionando marcador central
    L.marker([-18.5067, -54.7600]).addTo(map)
        .bindPopup('<b>AgroLink Base</b><br>Coxim, MS')
        .openPopup();

    // 2. Lógica do Formulário para WhatsApp
    const form = document.getElementById('whatsappForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nome').value;
        const hectares = document.getElementById('hectares').value;
        
        // Número de exemplo da equipe de suporte/comercial
        const telefone = "5567998007188"; 
        
        const mensagem = `Olá, equipe AgroLink! Meu nome é ${nome}. Tenho uma propriedade de ${hectares} hectares na região e gostaria de agendar uma implantação presencial e conhecer o aplicativo.`;
        
        const urlWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        
        window.open(urlWhatsApp, '_blank');
    });
});