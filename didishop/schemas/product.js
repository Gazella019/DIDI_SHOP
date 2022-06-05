export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Id',
            type: 'string',
        },
        {
            name: 'sku',
            title: 'Sku',
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
            type: 'string',
        },
        { 
            name: 'price',
            title: '價錢',
            type: 'number',
        },
        {
            name: 'category',
            title: '分類',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'tag',
            title: '標籤',
            type: 'array',
            of: [{ type: 'string' }],
        },
        {
            name: 'thumbImage',
            title: '預覽圖片',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'image',
            title: '所有圖片',
            type: 'array',
            of: [{ type: 'image' }],
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
    ]
  }