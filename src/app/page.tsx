export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-[4vw]">你来到了只有梅酱存在的荒原……</h1>
      <img 
        src="/maymay.gif" 
        alt="GIF" 
        width={200} 
        height={200}
        className="w-[200px] h-[200px]"
      />
      <h2 className="text-[3vw]">来一瓶海里兰斯酒？</h2>
    </main>
  )
} 