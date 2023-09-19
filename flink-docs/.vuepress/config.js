module.exports = {
    "title": "flink-bucket",
    "description": "flink-bucket",
    "dest": "../docs",
    "base": "/flink-bucket/",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.png"
            }
        ],
        [
            "meta",
            {
                "name": "flink-bucket",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    "themeConfig": {
        "subSidebar": "auto",
        "nav": [
            {
                "text": "首页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "目录",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "第1章 Flink概述",
                        "link": "/blogs/第1章 Flink概述/"
                    },
                    {
                        "text": "第2章 Flink 快速上手",
                        "link": "/blogs/第2章 Flink 快速上手/"
                    },
                    {
                        "text": "第3章 Flink部署",
                        "link": "/blogs/第3章 Flink部署/"
                    },
                    {
                        "text": "第4章 Flink运行时架构",
                        "link": "/blogs/第4章 Flink运行时架构/"
                    },
                    {
                        "text": "第5章 DataStream API",
                        "link": "/blogs/第5章 DataStream API/"
                    },
                    {
                        "text": "第6章 Flink中的时间和窗口",
                        "link": "/blogs/第6章 Flink中的时间和窗口/"
                    },
                    {
                        "text": "第7章 处理函数",
                        "link": "/blogs/第7章 处理函数/"
                    },
                    {
                        "text": "第8章 状态管理",
                        "link": "/blogs/第8章 状态管理/"
                    },
                    {
                        "text": "第9章 容错机制",
                        "link": "/blogs/第9章 容错机制/"
                    },
                    {
                        "text": "第10章 FlinkSQL",
                        "link": "/blogs/第10章 FlinkSQL/"
                    }
                ]
            },
            {
                "text": "时间线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "链接",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/czshh0628",
                        "icon": "reco-github"
                    }
                ]
            }
        ],
        "sidebar": {
            "/blogs/第1章 Flink概述/": [
                "",
                "1.1 Flink特点",
                "1.2 流处理",
                "1.3 Flink分层API",
            ],
            "/blogs/第2章 Flink 快速上手/": [
                "",
            ],
            "/blogs/第3章 Flink部署/": [
                "",
                "3.1 部署模式",
                "3.2 Standalone模式",
                "3.3 Yarn模式",
                "3.4 K8S模式",
                "3.5 历史服务器",
            ],
            "/blogs/第4章 Flink运行时架构/": [
                "",
                "4.1 核心概念",
                "4.2 作业提交流程",
            ],
            "/blogs/第5章 DataStream API/": [
                "",
                "5.1 执行环境",
                "5.2 source算子",
                "5.3 transform算子",
                "5.4 sink算子"
            ],
            "/blogs/第6章 Flink中的时间和窗口/": [
                "",
                "6.1 窗口",
                "6.2 时间语义",
                "6.3 水位线",
                "6.4 双流Join",
            ],
            "/blogs/第7章 处理函数/": [
                "",
                "7.1 基本处理函数",
                "7.2 按键分区处理函数",
                "7.3 窗口处理函数",
                "7.4 测输出流",
                "7.5 TopN应用",
            ],
            "/blogs/第8章 状态管理/": [
                "",
                "8.1 按键分区状态",
                "8.2 算子状态",
                "8.3 状态后端",
            ],
            "/blogs/第9章 容错机制/": [
                "",
                "9.1 checkpoint",
                "9.2 savepoint",
                "9.3 状态一致性",
                "9.4 End-To-End Exactly-Once",
            ],
            "/blogs/第10章 FlinkSQL/": [
                "",
                "10.1 sql-client准备",
                "10.2 流处理中的表",
                "10.3 时间属性",
                "10.4 DDL数据定义",
                "10.5 查询",
                "10.6 常用Connector读写",
                "10.7 sql-client中使用savepoint",
                "10.8 Catalog",
                "10.9 代码中使用FlinkSQL",
            ]
        },
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "czs",
        "record": "flink学习",
        "startYear": "2023"
    },
    "markdown": {
        "lineNumbers": true
    },
    plugins: [
        ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
            width: '300px',
            title: '公告',
            body: [
                {
                    type: 'title',
                    content: '欢迎加入QQ交流群 🎉🎉🎉',
                    style: 'text-aligin: center;'
                },
                {
                    type: 'text',
                    content: 'QQ：760620329'
                },
                {
                    type: 'text',
                    content: '基于Flink-1.17版本的最新使用手册'
                }
            ],
            footer: [
                {
                    type: 'button',
                    text: '打赏',
                    link: '/flink-bucket/blogs/other/donate'
                }
            ]
        }]
    ]
}