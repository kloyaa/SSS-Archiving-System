import { type Request, type Response } from 'express';
import { extractCsv } from '../_core/services/csv-uploader.service';

export const uploadCsv = async (req: Request, res: Response) => {
    try {
        const csvData =  await extractCsv(req, res)
        return res.status(200).json(csvData)
    } catch (error: any) {
        return res.status(500).json({
            message: error.message
        })
    }
}