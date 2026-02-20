interface CatchAllRouteSegment {
  params: Promise<{ "catch-all-route-segment": string[] }>
}

const CatchAllRouteSegment = async ({ params }: CatchAllRouteSegment) => {
  const resolvedParams  = await params;
  const routes = resolvedParams['catch-all-route-segment'];

  console.log(routes);

  return (
    <div className="fix-height">
      {routes.map(route => (
        <h1 key={route} className="text-[20px] p-4 bg-amber-300 mb-4">{ route }</h1>
      ))}
    </div>
  );
}

export default CatchAllRouteSegment;