import { Request, Response } from 'express'
import knex from '../database/connection'
require('dotenv').config()

class ItemsController {
    async index(req: Request, res: Response) {

        const items = await knex('items').select('*')
    
        const serializedItems = items.map(item => {
            return {
                id: item.id, 
                title: item.title,
                image_url: `http://${process.env.API_HOST}:3333/uploads/${item.image}`
             }
        })
    
        return res.json(serializedItems)
    }
}

export default ItemsController