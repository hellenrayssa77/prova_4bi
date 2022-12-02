const { update } = require('../model/Products');
const Products = require('../model/Products')

module.exports = {
    async index(req,res){
        const products = await Products.findAll(); 
        return res.json(products)
        
    }, async findByid(req,res){
        const { id } = req.params;
        const products = await Products.findAll({
            where: {
                id: id 
            }
        }); 
        return res.json(products)
    },

    async store(req,res){
        const { name, price } = req.body;
        const products = await Products.create({
            name, price
        }); return res.json(products)

    },async delete(req,res){
        const { id } = req.params;
        const products = await Products.destroy({
            where: {
                id: id 
            }
        });
        return res.json(products)
       
    }, async update(req,res){
        const { id, name, price } = req.body;
        const products = await Products.update({
            name, price
        }, {
            where: {
                id: id
            }
        }); return res.json(products)

    },
}