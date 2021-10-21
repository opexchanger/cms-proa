export default {
  widgets: [
    {
      name: "netlify",
      layout: {
        width: "medium"
      },
      options: {
        title: 'Lançar o conteúdo para o site',
        description:
          'NOTA: Depois de um clique, aguarde, caso contrário o deploy será executado mais de uma vez. O marcador à esquerda se tornará laranja lendo-se "building", e ao final voltará ao verde "success", então as alterações estarão online. Tempo médio estimado do processo: 2 min.',
        sites: [
          {
            title: 'Site da Proa',
            name: 'proaviagens',
            buildHookId: '616f5a617a86c42e3bf70311',
            apiId: 'ac58c8ae-0434-430d-994d-d6d0f82b5526'
          }
        ],
      },
    },
  ],
};