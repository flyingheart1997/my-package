'use client'
import { Button, Badge } from "@org-design-system/components";
import { CheckIcon, CrossIcon, DownloadIcon, InfoIcon, NotificationsIcon, RocketIcon, SearchIcon, SettingsIcon, UsersIcon } from "@org-design-system/icons";

export default function Home() {
  const variants = ["solid", "soft", "surface", "outline", "ghost", "link"] as const;
  const intents = ["primary", "success", "warning", "error", "neutral"] as const;
  const sizes = ["xs", "sm", "md", "lg", "xl"] as const;
  const radiusOptions = ["none", "sm", "md", "lg", "xl", "full"] as const;

  return (
    <div className="min-h-screen bg-[#0B0E11] text-zinc-50 font-sans selection:bg-blue-500/30">
      <header className="border-b border-zinc-800 bg-[#0B0E11]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
              <RocketIcon className="text-white size-5" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">Antaris Design System</h1>
          </div>
          <Badge intent="primary" variant="soft">v0.1.16</Badge>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-16 space-y-32">
        {/* Section 1: Buttons - Master Grid */}
        <section id="buttons" className="space-y-12">
          <div className="space-y-4">
            <Badge intent="primary" variant="outline" size="sm">Components</Badge>
            <h2 className="text-4xl font-bold tracking-tight">Buttons</h2>
            <p className="text-zinc-400 max-w-2xl text-lg">
              The primary action elements of the system. Supporting 6 variants, 6 semantic intents,
              and 6 corner radius configurations.
            </p>
          </div>

          <div className="space-y-24">
            {/* variants x intents */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-300">Variants & Intents</h3>
              <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 overflow-hidden">
                <div className="p-8 border-b border-zinc-800 grid grid-cols-[140px_1fr] gap-8">
                  <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest py-4">Style / Intent</div>
                  <div className="grid grid-cols-6 gap-4">
                    {intents.map(intent => (
                      <div key={intent} className="text-center text-xs font-bold text-zinc-500 uppercase tracking-widest">
                        {intent}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 space-y-10">
                  {variants.map(variant => (
                    <div key={variant} className="grid grid-cols-[140px_1fr] gap-8 items-center">
                      <div className="text-sm font-medium text-zinc-400 capitalize">{variant}</div>
                      <div className="grid grid-cols-6 gap-4">
                        {intents.map(intent => (
                          <div key={`${variant}-${intent}`} className="flex justify-center">
                            <Button variant={variant} intent={intent}>
                              Action
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sizes & Radius */}
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-zinc-300">Sizes</h3>
                <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 flex items-center justify-between gap-4">
                  {sizes.map(size => (
                    <div key={size} className="flex flex-col items-center gap-4">
                      <Button size={size} variant="soft" intent="primary">Button</Button>
                      <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-tighter">{size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-zinc-300">Corner Radius</h3>
                <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 flex flex-wrap items-center justify-between gap-4">
                  {radiusOptions.map(radius => (
                    <div key={radius} className="flex flex-col items-center gap-4">
                      <Button radius={radius} variant='soft' intent="primary" className="px-6">Radius</Button>
                      <span className="text-[10px] uppercase font-bold text-zinc-600 tracking-tighter">{radius}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Icon Support */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-zinc-300">Icon Support</h3>
              <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 grid grid-cols-2 md:grid-cols-4 gap-8">
                <Button leftIcon={<RocketIcon className="size-4" />} intent="primary">Launch</Button>
                <Button rightIcon={<DownloadIcon className="size-4" />} variant="soft">Download</Button>
                <Button leftIcon={<UsersIcon className="size-4" />} rightIcon={<CheckIcon className="size-4" />} variant="outline">Select All</Button>
                <Button variant="ghost" leftIcon={<SettingsIcon className="size-4" />}>Settings</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Icon Buttons */}
        <section id="icon-buttons" className="space-y-12">
          <div className="space-y-4">
            <Badge intent="primary" variant="outline" size="sm">Utilities</Badge>
            <h2 className="text-4xl font-bold tracking-tight">Icon Buttons</h2>
            <p className="text-zinc-400 max-w-2xl text-lg">
              Dense triggers designed for specific radii and sizes.
              Perfect for navigation, tools, and actions.
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/30 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {intents.map(intent => (
              <div key={intent} className="space-y-6 p-6 rounded-2xl border border-zinc-800 bg-zinc-950/50 flex flex-col items-center">
                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{intent}</div>
                <div className="grid grid-cols-2 gap-3">
                  <Button size="icon" intent={intent} variant="solid" radius="lg">
                    <SettingsIcon className="size-4" />
                  </Button>
                  <Button size="icon" intent={intent} variant="soft" radius="full">
                    <NotificationsIcon className="size-4" />
                  </Button>
                  <Button size="icon" intent={intent} variant="outline" radius="sm">
                    <SearchIcon className="size-4" />
                  </Button>
                  <Button size="icon" intent={intent} variant="surface" radius="none">
                    <CrossIcon className="size-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Badges */}
        <section id="badges" className="space-y-12">
          <div className="space-y-4">
            <Badge intent="primary" variant="outline" size="sm">Status</Badge>
            <h2 className="text-4xl font-bold tracking-tight">Badges & Status</h2>
            <p className="text-zinc-400 max-w-2xl text-lg">
              Compact indicators for status, count, and metadata.
              Synchronized with the overall design language.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 overflow-hidden divide-y divide-zinc-800">
            {/* Variants x Intents */}
            <div className="p-8 space-y-8">
              <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Semantic Grid</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {intents.map(intent => (
                  <div key={intent} className="space-y-4">
                    <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">{intent}</div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="solid" intent={intent}>Active</Badge>
                      <Badge variant="soft" intent={intent}>Pending</Badge>
                      <Badge variant="surface" intent={intent}>Stable</Badge>
                      <Badge variant="outline" intent={intent}>Inactive</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scaling & Icons */}
            <div className="p-8 grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Scaling</h4>
                <div className="flex items-end gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Badge size="sm" intent="primary">Small</Badge>
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-tighter">SM</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Badge size="md" intent="primary">Medium</Badge>
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-tighter">MD</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Badge size="lg" intent="primary">Large</Badge>
                    <span className="text-[10px] font-bold text-zinc-700 uppercase tracking-tighter">LG</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Icon Integration</h4>
                <div className="flex flex-wrap gap-4">
                  <Badge intent="success" variant="soft">
                    <CheckIcon className="size-3" />
                    Verified
                  </Badge>
                  <Badge intent="error" variant="soft">
                    <CrossIcon className="size-3" />
                    Failed
                  </Badge>
                  <Badge intent="warning" variant="soft">
                    <InfoIcon className="size-3" />
                    Attention Needed
                  </Badge>
                  <Badge intent="primary" variant="solid">
                    <RocketIcon className="size-3" />
                    New Feature
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-16 bg-[#080A0C]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-zinc-500 text-sm">
            <div className="flex items-center gap-3">
              <RocketIcon className="size-5 text-blue-600" />
              <p>© 2024 Antaris Design Systems. Built for high-performance interfaces.</p>
            </div>
            <div className="flex items-center gap-10">
              <a href="#" className="hover:text-zinc-300 transition-all font-medium">Documentation</a>
              <a href="#" className="hover:text-zinc-300 transition-all font-medium">Github</a>
              <a href="#" className="hover:text-zinc-300 transition-all font-medium">Core Architecture</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
