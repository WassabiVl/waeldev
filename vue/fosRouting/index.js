import routes from './routes.json';
import Routing from 'fos-router';

Routing.setRoutingData(routes);
export default Routing;
// php bin/console fos:js-routing:dump --format=json --target=vue/fosRouting/routes.json
