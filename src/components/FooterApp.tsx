const get_start = [
  {
    href: 'https://studio.threed.world',
    target: '_self',
    label: 'Studio'
  },
  {
    href: '/community',
    target: '_self',
    label: 'Community'
  },
  {
    href: '/contribute',
    target: '_self',
    label: 'Contribute'
  }
]

const docs = [
  {
    href: 'http://docs.threed.world/docs/contribute/types-of-contributions',
    target: '_blank',
    label: 'Types of contributions'
  },
  {
    href: 'http://docs.threed.world/docs/contribute/code-pattern-reference',
    target: '_blank',
    label: 'Code pattern reference'
  },
  {
    href: 'http://docs.threed.world/docs/contribute/working-in-studio-repository',
    target: '_blank',
    label: 'Code base guide'
  },
]

const community = [
  {
    href: 'https://twitter.com/OpenThreeD',
    target: '_blank',
    label: 'Twitter'
  },
  {
    href: 'https://github.com/open-threed/studio',
    target: '_blank',
    label: 'GitHub'
  },
  {
    href: 'https://discord.gg/hxbwuDckeg',
    target: '_blank',
    label: 'Discord'
  }
]

const company = [
  {
    href: 'https://opencollective.com/open-threed',
    target: '_blank',
    label: 'Open Collective'
  },
  {
    href: '/roadmap',
    target: '_self',
    label: 'Roadmap'
  },
  {
    href: 'mailto:threedstudiocore@gmail.com',
    target: '_blank',
    label: 'Contact'
  },
  {
    href: 'https://open-threed.hashnode.dev/',
    target: '_blank',
    label: 'Blog'
  }
]

type MenuItem = {
  href: string
  target: string
  label: string
}

type WidgetProps = {
  title: string
  menu: MenuItem[]
}

function Widget({ title, menu }: WidgetProps) {
  return (
    <>
      <h4 className="text-xs font-semibold uppercase tracking-wide text-white dark:text-white">
        {title}
      </h4>
      <ul className="mx-0 mt-4 list-none space-y-2 text-sm">
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.href} target={item.target} className="text-white-500 inline-flex items-center space-x-1 hover:text-white dark:text-white/50 dark:hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export function FooterWidgets() {
  return (
    <div className="mx-auto w-full px-4 md:px-8 lg:px-8 max-w-screen-1.5xl pb-16 pt-20 xl:grid xl:grid-cols-3 xl:gap-8 ">
      <div className="w-80 space-y-8 px-4 xl:col-span-1">
        <a href="/" className="flex items-center font-bold text-white no-underline dark:text-white">
          Threed Studio
        </a>
        <div className="mt-4 text-sm text-white dark:text-white">
          Threed Studio is a 3D animation editor with a set of design, lighting and motion tools. It helps you create any 3D scene, from a simple product presentation to a complete game made with Three.js.
        </div>
      </div>
      <div className="mt-12 ml-6 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <Widget menu={get_start} title="Get Started" />
          </div>
          <div className="mt-12 md:mt-0">
            <Widget menu={docs} title="Docs" />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <Widget menu={community} title="Community" />
          </div>
          <div className="mt-12 md:mt-0">
            <Widget menu={company} title="Company" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FooterApp() {
  return (
    <div className="mt-12 border-t border-gray-900 bg-gray-50 dark:bg-black md:mt-24">
      <div className="">
        <FooterWidgets />
      </div>
      <div className="mx-auto py-16 text-center text-sm text-gray-300">
        © 2023 <span className="font-bold text-white">Threed Studio</span>.
      </div>
    </div>
  )
}