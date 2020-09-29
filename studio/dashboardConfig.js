export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-2-studio-fd528wmb',
                  apiId: '04534fdb-4fca-4668-98aa-aae2d168854f'
                },
                {
                  buildHookId: '5f727dd094c33a2592f55e0a',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-2-web-5s8xrqwk',
                  apiId: 'f74c6217-ac69-42b0-9530-e96c1491d547'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dempsey89/sanity-nuxt-events-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-2-web-5s8xrqwk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
