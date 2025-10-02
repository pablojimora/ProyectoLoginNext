// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Properties from "@/database/models/properties";
import dbConnection from "@/lib/dbconection";
import type { NextApiRequest, NextApiResponse } from "next";



export interface Property {
    _id: string;
    name: string;
    value: number;
    img?: string;
}

export type PropertiesResponse = | { ok: true; data: Property[] } | { ok: false; error: string };

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<PropertiesResponse>,
) {
    try {
        
        dbConnection();

        if (req.method === 'GET') {
            
            const data = await Properties.find()
            res.status(200).json({ ok: true, data: data as Property[] });
        }
        else if (req.method === 'POST') {
            
            const { name, value, img } = req.body
            const newProperty = new Properties({
                name,
                value,
                img
            })
            const savedProperty = await newProperty.save() // es un metodo de mongoose

            console.log(savedProperty)

            res.status(200).json({ ok: true, data: [savedProperty] as Property[] });
        } else if (req.method === "PUT") {
            
            const { id } = req.query;
            const { name, value, img } = req.body;
            const updated = await Properties.findByIdAndUpdate(
                id as string,
                { name, value, img },
                { new: true }
            );
            if (!updated) {
                res.status(404).json({ ok: false, error: "No encontrado" });
                return;
            }
            res.status(200).json({ ok: true, data: [updated] });
            return;
        } else if (req.method === "DELETE") {
            
            const { id } = req.query;
            const deleted = await Properties.findByIdAndDelete(id as string);
            if (!deleted) {
                res.status(404).json({ ok: false, error: "No encontrado" });
                return;
            }
            res.status(200).json({ ok: true, data: [deleted] });
            return;
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ ok: false, error: 'falla' })
    }
}



