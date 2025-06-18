fetch('imoveis.json')
  .then(res => res.json())
  .then(imoveis => {
    const container = document.getElementById('lista-imoveis');
    imoveis.forEach(imovel => {
      const card = document.createElement('div');
      card.className = 'imovel-card';
      card.innerHTML = `
        <img src="${imovel.imagem}" alt="${imovel.titulo}">
        <h3>${imovel.titulo}</h3>
        <p>${imovel.descricao}</p>
        <p><strong>${imovel.valor}</strong></p>
        <p>${imovel.localizacao}</p>
      `;
      container.appendChild(card);
    });
  });
