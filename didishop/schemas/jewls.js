export default {
    name: 'jewls',
    title: '珠寶/玉石',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'string',
        },
        {
            name: 'name',
            title: '名稱',
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
            name: 'price',
            title: '售價',
            type: 'number',
        },
        {
            name: 'youtubeURL',
            title: 'YOUTUBE連結',
            type: 'string',
        },
        {
            name: 'lineURL',
            title: 'LINE連結',
            type: 'string',
        },
        {
            name: 'tag',
            title: '標籤',
            type: 'array',
            of: [{ type: 'string' }],
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
            name: 'shortDescription',
            title: '簡介',
            type: 'string',
        },
        {
            name: 'fullDescription',
            title: '商品介紹',
            type: 'string',
        },
        {
            name: 'shipping',
            title: '送貨＆付款',
            type: 'string',
        },
        {
            name: 'retrun',
            title: '退貨',
            type: 'string',
        },
    ]
  }