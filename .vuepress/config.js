module.exports = {
  "title": "BigOrange",
  "description": "菜鸟学习ing",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/views/其他/api.md"
          },
          // {
          //   "text": "H5C3八股文",
          //   "link": "/docs/H5C3/H5C3_1.md"
          // },
          // {
          //   "text": "JS相关八股文",
          //   "link": "/docs/JS相关八股文/JS_1.md"
          // },
        
        ]
      },
      // {
      //   "text": "时间轴",
      //   "link": "/timeline/",
      //   "icon": "reco-date"
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "wmn",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": {
    '@vuepress/search': {
      search: true, //默认false
      searchMaxSuggestions: 10 // 默认是5
    }
  },
  plugins: {
    "vuepress-plugin-auto-sidebar": {
      sort: {
        mode: "asc",
        readmeFirst: true,
        readmeFirstForce: false
      },
      title: {
        mode: "titlecase",
        map: {}
      },
      sidebarDepth: 2,
      collapse: {
        open: false,
        collapseList: [],
        uncollapseList: []
      },
      ignore: [],
      removeEmptyGroup: false,
      git: {
        trackStatus: 'all'
      }
    },
    //代码复制
    "vuepress-plugin-code-copy": true,
    "@vuepress-reco/vuepress-plugin-kan-ban-niang":{
      theme: ['blackCat'],
      modelStyle: {
        left: '90px',
        bottom: '-20px',
        opacity: '0.75'
      },
      btnStyle: {
        left: '85px', 
        bottom: '35px',
      },
      messageStyle: {
        left: '60px',
        bottom: '170px'
      },
      clean:true,
    },
    "sakura": {
      num: 15,  // 默认数量
      show: true, //  是否显示
      zIndex: -1,   // 层级
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: '...'     // 绝对路径
      }
    },
  }
}