import { useEffect } from "react"

export default function Redirecting({ url }: { url: string }) {
  useEffect(() => { document.location.href = url }, [])

  return (
    <div className="p-10 pt-24 min-h-[400px]">
      <h2 className="text-[30px] mb-5">Redirecting...</h2>
      <code>{url}</code>
    </div>
  )
}
