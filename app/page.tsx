export default function Home() {
  return (
    <>
      <div className="fixed left-0 top-0 -z-10 h-full w-full bg-hololive bg-no-repeat opacity-15" />
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <div className="flex flex-col gap-4 text-center">
          <h1>Hololive Timeline</h1>
          <div className="flex flex-wrap items-center justify-center gap-2 font-bold">
            <a
              href="/timeline/event"
              className="rounded-lg border border-red-500 bg-red-100 px-2 py-1.5 transition hover:bg-red-200"
            >
              Event
            </a>
            <a
              href="/timeline/talent"
              className="rounded-lg border border-orange-500 bg-orange-100 px-2 py-1.5 transition hover:bg-orange-200"
            >
              Talent
            </a>
            <a
              href="/timeline/organization"
              className="rounded-lg border border-green-500 bg-green-100 px-2 py-1.5 transition hover:bg-green-200"
            >
              Organization
            </a>
            <a
              href="/timeline/subscriber"
              className="rounded-lg border border-blue-500 bg-blue-100 px-2 py-1.5 transition hover:bg-blue-200"
            >
              Subscriber
            </a>
            <a
              href="/calendar"
              className="rounded-lg border border-purple-500 bg-purple-100 px-2 py-1.5 transition hover:bg-purple-200"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
