import { Elysia } from 'elysia'

const app = new Elysia({ prefix: '/api/v1', strictPath: false }).get('/healthcheck', () => 'Ping!').listen(3000)

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)
