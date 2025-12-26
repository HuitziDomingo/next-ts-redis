import { redis } from "./lib/redis"


export default async function Home() {

  const views = await redis.get<number>('page_view') ?? 0
  
  const updatedViews = await redis.incr('page_view')

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold">Bienvenido</h1>
        <div className="mt-8 p-6 bg-blue-100 rounded-xl">
          <p className="text-xl text-blue-800">
            Esta página ha sido vista <strong>{updatedViews}</strong> veces.
          </p>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Dato recuperado directamente desde Redis.
        </p>
      </main>
    </>
  )
}
