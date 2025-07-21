document.addEventListener("DOMContentLoaded", () => {
  fetch("imoveis.json")
    .then((res) => {
      if (!res.ok) {
        // Verifica se a resposta da rede foi bem-sucedida (status 200 OK)
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((imoveis) => {
      const container = document.getElementById("lista-imoveis");
      if (!container) {
        console.error("Elemento #lista-imoveis não encontrado.");
        return;
      }

      imoveis.forEach((imovel) => {
        const card = document.createElement("div");
        card.className = "imovel-card";
        card.innerHTML = `
          <a href="detalhes-imovel.html?id=${imovel.id}">
            <img src="${imovel.imagens[0]}" alt="${imovel.titulo}" class="imovel-card-image">
          </a>
          <div class="imovel-card-content">
            <h3>${imovel.tipo}</h3>
            <div class="imovel-details">
              <p><span class="cod">Cód:</span> ${imovel.cod}</p>
              <div class="imovel-location">
                ${imovel.localizacao}<span>${imovel.cidade}</span>
              </div>
            </div>
            <div class="imovel-icons">
              <div class="imovel-icon-item">
                <img src="icons/area.svg" alt="Ícone de Área" />
                <p>${imovel.area}</p>
              </div>
              <div class="imovel-icon-item">
                <img src="icons/quarto.svg" alt="Ícone de Quartos" />
                <p>${imovel.quartos}</p>
              </div>
              <div class="imovel-icon-item">
                <img src="icons/banheiro.svg" alt="Ícone de Banheiros" />
                <p>${imovel.banheiros}</p>
              </div>
              <div class="imovel-icon-item">
                <img src="icons/garagem.svg" alt="Ícone de Vagas de Garagem" />
                <p>${imovel.garagem}</p>
              </div>
            </div>
            <div class="imovel-price">${imovel.valor}</div>
          </div>
          <a href="detalhes-imovel.html?id=${imovel.id}" class="imovel-button">+ detalhes</a>
        `;
        container.appendChild(card);
      });
    })
    .catch((error) => console.error("Erro ao carregar imóveis:", error));
});
