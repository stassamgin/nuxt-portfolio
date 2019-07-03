exports.getData = (req, res, next) => {
  res.status(200).json({
    config: {
      supportLanguages: ['en', 'ru'],
      defaultLanguage: 'ru',
      blocks: [
        {
          id: 'hero',
          name: 'hero',
          order: 0,
          enable: true,
          title: {
            en: '',
            ru: 'Портфолио Станислава Самгина'
          },
          description: {
            en: '',
            ru:
              'Привет! Я рад видеть Вас на своем профессиональном сайте. Если Вы здесь, то, скорее всего, я заинтересовал Вас как специалист по веб-разработке, и я попытаюсь убедить Вас, что сотрудничество со мной это замечательная идея :)'
          }
        },
        {
          id: 'about',
          name: 'about',
          order: 1,
          enable: true,
          title: {
            en: '',
            ru: 'Обо мне'
          }
        },
        {
          id: 'skills',
          name: 'skills',
          order: 2,
          enable: true,
          title: {
            en: '',
            ru: 'Навыки'
          }
        },
        {
          id: 'works',
          name: 'works',
          order: 3,
          enable: true,
          title: {
            en: '',
            ru: 'Мои работы'
          }
        },
        {
          id: 'education',
          name: 'education',
          order: 4,
          enable: true,
          title: {
            en: '',
            ru: 'Образование'
          }
        },
        {
          id: 'experience',
          name: 'experience',
          order: 5,
          enable: true,
          title: {
            en: '',
            ru: 'Опыт работы'
          }
        }
      ]
    },
    header: {
      menuTitle: 'Меню'
    },
    hero: {
      buttonsDescription: 'скачать резюме'
    },
    about: {
      personalData: {
        firstName: 'Станислав',
        lastName: 'Cамгин',
        patronymicName: 'Алексеевич',
        specialty: 'Front-end разработчик, верстальщик',
        photo: 'headshot-min.jpg',
        birth: '31.07.1985',
        description:
          'По опыту первой профессии имею солидный стаж работы с предприятиями и учреждениями, поэтому отлично понимаю, как особенности работы с ними, так и их бизнес потребности, а также что такое сжатые сроки и ограниченный бюджет. Большое внимание уделяю самообразованию и профессиональному росту.'
      },
      contactData: [
        {
          name: 'Viber',
          value: '+38 095 3176971',
          link: 'tel:+380953176971'
        },
        {
          name: 'e-mail',
          value: 'stassamgin@gmail.com',
          link: 'mailto:stassamgin@gmail.com'
        },
        {
          name: 'LinkedIn',
          value: 'linkedin.com/in/stassamgin',
          link: 'https://www.linkedin.com/in/stassamgin'
        },
        {
          name: 'website',
          value: 'samgin.pro',
          link: '#'
        },
        {
          name: 'Адрес',
          value: 'ул. М.Василенко, г. Симферополь',
          specialAttr: {
            name: 'id',
            value: 'js-adres'
          }
        }
      ]
    },
    skills: {
      workSkills: {
        title: 'Профессиональные навыки',
        data: [
          {
            name: 'HTML',
            percent: '95',
            show: true,
            showInMobile: true,
            skills: [
              {
                name: 'HTML5',
                percent: '90',
                show: true,
                showInMobile: true
              },
              {
                name: 'семантичная верстка',
                percent: '90',
                show: true,
                showInMobile: true
              }
            ]
          },
          {
            name: 'CSS',
            percent: '95',
            show: true,
            showInMobile: true,
            skills: [
              {
                name: 'SASS',
                percent: '90',
                show: true,
                showInMobile: true
              },
              {
                name: 'LESS',
                percent: '50',
                show: true,
                showInMobile: true
              }
            ]
          },
          {
            name: 'JavaScript',
            percent: '80',
            show: true,
            showInMobile: true,
            skills: [
              {
                name: 'ES6',
                percent: '90',
                show: true,
                showInMobile: true
              },
              {
                name: 'OOP',
                percent: '70',
                show: true,
                showInMobile: true
              }
            ]
          },
          {
            name: 'Vue',
            percent: '80',
            show: true,
            showInMobile: true,
            skills: [
              {
                name: 'Vuex',
                percent: '90',
                show: true,
                showInMobile: true
              },
              {
                name: 'Nuxt',
                percent: '70',
                show: true,
                showInMobile: true
              }
            ]
          },
          {
            name: 'React',
            percent: '80',
            show: true,
            showInMobile: true,
            skills: [
              {
                name: 'Redux',
                percent: '90',
                show: true,
                showInMobile: true
              },
              {
                name: 'OOP',
                percent: '70',
                show: true,
                showInMobile: true
              }
            ]
          },
          {
            name: 'JQuery',
            percent: '85',
            show: true,
            showInMobile: true
          },
          {
            name: 'Графические редакторы',
            percent: '80',
            show: true,
            showInMobile: true,
            skills: [
              {
                name: 'Adobe Photoshop',
                percent: '60',
                show: true,
                showInMobile: true
              },
              {
                name: 'Adobe Photoshop',
                percent: '60',
                show: true,
                showInMobile: true
              },
              {
                name: '3DS Max',
                percent: '40',
                show: true,
                showInMobile: true
              }
            ]
          }
        ]
      },
      tools: {
        title: 'Инструментарий',
        data: [
          'SCSS',
          'Bootstrap',
          'WordPress',
          'Gulp',
          'NPM',
          'Git',
          'BEM',
          'Адаптивность',
          'Кроссбраузерность',
          'Валидность',
          'CSSAnimation',
          'основы SEO'
        ]
      },
      languages: {
        title: 'Знание языков',
        data: [
          {
            name: 'Русский',
            description: 'основной язык общения',
            percent: '95'
          },
          {
            name: 'Украинский',
            description: 'свободное общение',
            percent: '85'
          },
          {
            name: 'Английский',
            description: 'чтение технической литературы',
            percent: '60'
          }
        ]
      }
    },
    works: {
      data: [
        {
          name: 'work1',
          thumb: 'uno1-min.jpg',
          image: '',
          sourceLink: 'https://github.com/Nigmas/test_dabb',
          workLink: 'http://r95317nx.beget.tech/beavers/',
          createdAt: '2010',
          description:
            'Попытка переизобрести велосипед. В основе блоков с изображениями лежит самописная сетка, которая добавляет элементы колонкой. Расчеты на JS.',
          tools: ['HTML', 'SCSS', 'JS', 'gulp']
        },
        {
          name: 'work2',
          thumb: '9lines-min.jpg',
          image: '',
          sourceLink: 'https://github.com/Nigmas/test_9lines',
          workLink: 'http://r95317nx.beget.tech/9lines/',
          createdAt: '2010',
          description:
            'Интерактивная анкета на чистом JS, написанная с помощью шаблонизатора Pug.',
          tools: ['HTML', 'SCSS', 'Pug', 'JS', 'gulp']
        },
        {
          name: 'work3',
          thumb: 'cups-min.jpg',
          image: 'full_cups-min.jpg',
          sourceLink: '',
          workLink: '',
          createdAt: '2010',
          description:
            'Трехмерная модель. Разработка дизайна, трехмерная визуализация.',
          tools: ['3DS Max', 'V-Ray']
        }
      ]
    },
    education: {
      data: [
        {
          name: 'Одесский национальный университет имени И. И. Мечникова',
          specialty: 'правоведение',
          degree: 'специалист',
          startAt: '2010',
          endAt: '2014',
          description:
            'В 2010 году, получил диплом по специальности правоведение. Благодаря полученным знаниям окончательно сформирована картина работы бизнеса и государства, а также механизм их взаимодействия, принципы взаимодействия субъектов. Приобретены ценные навыки работы с заказчиком, умение аргументированно убеждать и отстаивать свою позицию, умение понимать потребности клиента чуть больше, чем понимает он сам.'
        },
        {
          name: 'Донбасский Государственный технический Университет',
          specialty: 'финансы',
          degree: 'специалист',
          startAt: '2007',
          endAt: '2009',
          description:
            'В 2009 году, на базе первого высшего образования мной был получен диплом по специальности «Финансы». Сформированы навыки бюджетирования проектов, умение оценить потребности бизнеса и конъектуру рынка, навыки работы с финансами и отчетностью, понимание финансовой системы и ее потребностей.'
        },
        {
          name: 'Донбасский Государственный технический Университет',
          specialty: 'инженер-механик',
          degree: 'специалист',
          startAt: '2003',
          endAt: '2008',
          description:
            'В 2008 году мной была получена специальность инженер-механик. Считаю, что основным плюсом приобретения данного образования было формирование технического образа мышления, умения использовать, читать и создавать механизмы, детали, схемы, чертежи. Также данная специальность создала замечательную математическую и логическую базу. В процессе обучения заложен интерес и базовые навыки работы с AutoCAD, а в последствии с трехмерной графикой 3d studio max.'
        }
      ]
    },
    experience: {
      data: [
        {
          organization: {
            name: 'freelance',
            site: 'http://www.google.com'
          },
          occupation: 'веб-разработка',
          startAt: '01.04.2015',
          endAt: '01.04.2017',
          description:
            'С апреля 2015 начал активное погружение в чудесный мир веб-разработки. Пройдено, просмотрено и прочитано огромное количество материала. Были написаны пробные странички, после сайты для себя, затем сайты для знакомых, а потом и для посторонних заказчиков. Заказы получаю, как правило, через рекомендации от бывших клиентов, а также через поиск новых клиентов через фриланс биржи.'
        },
        {
          organization: {
            name: 'РЕДПРИЯТИЯХ РОССИИ',
            site: ''
          },
          occupation: 'ЮРИСКОНСУЛЬТ',
          startAt: '01.04.2013',
          endAt: '01.04.2015',
          description:
            'руг обязанностей: договорная работа; подготовка, составление, юридический анализ, переговоры при заключении, изменении, прекращении различных договоров, контроль за исполнением; текущее правовое обслуживание деятельности предприятия. Осуществление частной практики в сфере градостроительства и автострахования.\n'
        }
      ]
    }
  })
}
