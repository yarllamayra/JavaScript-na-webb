const btnCriarCard = document.getElementById('criarCard');
const cardSection = document.getElementById('card-section');

btnCriarCard.addEventListener('click', () => {
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const profissao = document.getElementById('profissao').value.trim();

  if (!nome || !email || !profissao) {
    alert("por favor, preencha todos os campos");
    return;
  }

  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <h3>${nome}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Profissão:</strong> ${profissao}</p>`;

  const btnRemover = document.createElement('button');
  btnRemover.textContent = "Remover Card";
  btnRemover.className = "remove-btn";

  btnRemover.addEventListener("click", () => {
    cardSection.removeChild(card);
  });

  card.appendChild(btnRemover);
  cardSection.appendChild(card);

  document.getElementById('nome').value = "";
  document.getElementById('email').value = "";
  document.getElementById('profissao').value = "";
});
