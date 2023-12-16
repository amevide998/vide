import {defineConfig } from 'sanity'
import {deskTool} from 'sanity/desk'
import schemas from "@/sanity/schemas";


const config = defineConfig({
    title: 'Vide',
    projectId: 'cnm4qcnn',
    dataset: 'production',
    basePath: '/admin',
    apiVersion: '2023-12-16',
    plugins: [deskTool()],
    schema: {
        types : schemas
    },
    useCdn: true
})

export default config