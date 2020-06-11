//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const get_adjacency_list = function(paths) {
  const routes = paths.reduce((routes, [from, to]) => {
    const source_places = Object.keys(routes);
    if (!source_places.includes(from)) routes[from] = [];
    routes[from].push(to);
    return routes;
  }, {});
  return routes;
};

const bfs = function(pairs, source, target) {
  const adjacency_list = get_adjacency_list(pairs);
  let queue = [source];
  let visited = [];

  while (queue.length) {
    const node = queue.shift();
    visited.push(node);
    const connected_nodes = adjacency_list[node] || [];
    if (connected_nodes.includes(target)) return true;
    connected_nodes.forEach(node => {
      const not_in_visited = !visited.includes(node);
      const not_in_queue = !queue.includes(node);
      if (not_in_queue && not_in_visited) queue.push(node);
    });
  }

  return false;
};

module.exports = {bfs};
