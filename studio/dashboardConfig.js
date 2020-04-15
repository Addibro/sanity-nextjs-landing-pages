export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e97031f63579d761e276a03',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z2177sym',
                  apiId: '1999634d-7952-4d90-92fa-7ad71275993b'
                },
                {
                  buildHookId: '5e97031fefb15b8bd3ce87ba',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-2byg678a',
                  apiId: 'd43422e9-f05f-426a-b217-130be1234f25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Addibro/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-2byg678a.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
