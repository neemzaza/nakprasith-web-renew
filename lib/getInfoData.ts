import { promises as fs } from "fs";
import path from 'path'

export async function getInfoData() {
    const filePath = path.join(process.cwd(), '../public/data/info.json');

    const jsonData = await fs.readFile(filePath);

    // @ts-ignore
    const objectInfo = JSON.parse(jsonData);

    return objectInfo;
}