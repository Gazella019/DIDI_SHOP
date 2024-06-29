export default {
    name: 'partner',
    title: '合作夥伴',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'string',
        },
        {
            name: 'name',
            title: '公司名稱',
            type: 'string',
        },
        {
            name: 'slug',
            title: '英文網址',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'shortDescription',
            title: '公司簡介',
            type: 'string',
        },
        {
            name: 'fullDescription',
            title: '公司介紹',
            type: 'string',
        },
        {
            name: 'thumbImage',
            title: '封面圖片',
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                }
            }],
        },
        {
            name: 'image',
            title: '所有圖片',
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                }
            }],
        },
        {
            name: 'lineURL',
            title: 'LINE連結',
            type: 'string',
        },
    ]
  }