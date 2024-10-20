import * as intelxModel from '../models/intelxModel.js';

export async function search(req, res) {
    const term = req.query.term; 
    try {
        const data = await intelxModel.fetchData(term);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}

export async function details(req, res) {
    const id = req.params.id; 
    try {
        const details = await intelxModel.fetchDetails(id);
        res.json(details);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching details' });
    }
}
