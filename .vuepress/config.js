module.exports = {
    base: "/",
    themeConfig: {
        search: false,
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
            { text: "Logs", link: "/logs/" },
            { text: 'Drafts', link: '/drafts/' },
            { text: "TIL", link: "/til/" },
            { text: "문서", link: "/docs/" },
            { text: "PlantUML", link: "/plantuml/" },
            { text: "GitHub", link: "https://github.com/yoophi" },
        ],
        sidebar: {
            '/drafts/': [
                {
                    title: 'Drafts',
                    path: '/drafts/',
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        '',
                        'kops',
                        'terraform-cidrsubnet',
                    ]
                },
            ],
            "/logs/": [
                {
                    title: "vuepress",
                    path: "/logs/",
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        "vuepress/",
                        "vuepress/todo",
                        "vuepress/image-caption",
                    ]
                },
                {
                    title: "kubernetes",
                    path: "/logs/",
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        "kubernetes/",
                    ]
                },
            ],
            "/til/": [
                {
                    title: "shell script",
                    path: "/til/",
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        "eval-dotenv",
                        "create-file-from-template",
                    ]
                },
                {
                    title: "utilities",
                    path: "/til/",
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        "utils/confd-with-env"
                    ]
                },
                {
                    title: "tips",
                    path: "/til/",
                    collapsable: false,
                    sidebarDepth: 3,
                    children: [
                        "tips/hide-default-interactive-shell-is-message",
                    ]
                },
            ]
        }
    },
    title: "UNDEFINED @yoophi",
    ga: "GOOGLE_ANALYTICS_ID",
    markdown: {
        config: md => {
            md.use(require("markdown-it-plantuml"))
            md.use(require("markdown-it-imsize"))
            md.use(require('markdown-it-hashtag'))

            md.renderer.rules.hashtag_open  = function(tokens, idx) {
                var tagName = tokens[idx].content.toLowerCase(); 

                return '<a href="/tags.html#' + tagName + '" class="tag">';
            }

            md.renderer.rules.hashtag_text = function (tokens, idx) {
                var tagName = tokens[idx].content.toLowerCase(); 

                return '#' + tagName;
            }

            md.renderer.rules.hashtag_close = function () { return '</a>'; }
        }
    },
    head: [
        ["link", { rel: "manifest", href: "/manifest.json" }],
        ["link", { rel: "icon", href: "/assets/favicons/logo-144.png" }],
        ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    ],
    plugins: [
        ["@vuepress/pwa", {
            serviceWorker: true,
            updatePopup: true
        }]
    ]
}
