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
                  buildHookId: '5e5cf467777f2400471ebfc5',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-test-studio-z8wyw8ib',
                  apiId: 'e83732a6-ca0e-4bd2-8768-42abd5622c5b'
                },
                {
                  buildHookId: '5e5cf467b008447bc82dd2a7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-test-web-q6bp3w98',
                  apiId: '48060042-9723-4b6e-9015-890ee71dcb3f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Porshe/sanity-nextjs-landing-pages-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-test-web-q6bp3w98.netlify.com', category: 'apps'}
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
