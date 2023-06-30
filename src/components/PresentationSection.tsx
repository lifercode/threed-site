type WidgetProps = {
  title:string
  image: string
}

function Widget({ title, image }: WidgetProps) {
  return (
    <div className="group relative flex min-h-[150px] flex-col gap-3 overflow-hidden rounded-lg border-t border-b border-r border-neutral-400/10 bg-black bg-center drop-shadow transition-all lg:hover:z-10">
      <div className="absolute h-full w-full overflow-hidden">
        <div className="relative h-full w-full rotate-12 scale-175 bg-cover bg-left-top transition-all group-hover:rotate-6 group-hover:scale-125">
          <span style={{
            boxSizing:'border-box',
            display:'block',
            overflow:'hidden',
            width:'initial',
            height:'initial',
            background:'none',
            opacity:1,
            border:0,
            margin:0,
            padding:0,
            position:'absolute',
            top:0,
            left:0,
            bottom:0,
            right:0

          }}>
            <img src={image} alt={title} style={{
              position:'absolute',
              top:0,
              left:0,
              bottom:0,
              right:0,
              boxSizing:'border-box',
              padding:0,
              border:'none',
              margin:'auto',
              display:'block',
              width:0,
              height:0,
              minWidth:'100%',
              maxWidth:'100%',
              minHeight:'100%',
              maxHeight:'100%',
              objectFit:'cover'
            }} />
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-transparent"></div>
      </div>
      <div className="absolute p-4">
        <h2 className="text-md font-semibold text-white/70 transition-all group-hover:text-white">
          {title}
        </h2>
      </div>
    </div>
  )
}

export default function PresentationSection() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between" style={{minWidth:'500px'}}>
      <main className="relative" style={{scrollPaddingTop:'150px'}}>
        <div className="relative mx-auto mt-32 w-full max-w-screen-lg px-4 md:px-8 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 -z-10 grid place-items-center">
              <div className="h-3/4 w-1/4 translate-x-1/4 rotate-45 rounded-tl-3xl rounded-br-3xl bg-gradient-to-tl from-purple-900 to-blue-700 opacity-50 blur-3xl"></div>
              <div className="-translate-x-1/5 h-4/6 w-3/4 -rotate-12 rounded-tl-3xl rounded-br-3xl bg-gradient-to-l from-purple-900 to-blue-700 opacity-40 blur-3xl"></div>
            </div>
            <h2 className="text-center font-display text-6xl font-black tracking-tight text-white lg:text-hero">
              Build <span className="text-purple-400">truly beautiful</span> experiences on the web
            </h2>
            <p className="mx-auto mt-6 px-4 text-center text-xl font-normal leading-8 text-white/60">
              Threed Studio is a 3D animation editor with a set of design, lighting and motion tools. It helps you create any 3D scene, from a simple product presentation to a complete game made with Three.js.
            </p>
            <div className="mt-12">
              <div className="relative mt-12 flex justify-center" style={{boxShadow:'0px 0px 24px 0px rgba(0,0,0,0.7)'}}>
                <video width="960" height="600" muted autoPlay loop>
                  <source src="/presentation.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="relative mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 lg:grid-cols-3">
              <Widget title="Visual" image="/img/visual.png" />
              <Widget title="Graph" image="/img/graph.png" />
              <Widget title="Code" image="/img/code.png" />
            </div>
            <div className="mt-20 flex justify-center">
              <div className="group relative">
                <a href="https://studio.threed.world" className="relative z-10 block rounded-xl border-4 border-white/30 bg-white bg-clip-padding p-3 px-8 font-bold text-black">
                  🚀 Get started with Threed Studio
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}