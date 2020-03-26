const connection = require('../database/connection');

module.exports = {
    async store(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return response.status(400).json({
                error: `Não há nenhuma ONG com o ID ${id}`
            })
        }

        return response.json({ ong })
    }
}