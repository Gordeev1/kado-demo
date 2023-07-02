import { CoreMonitoringAdapterConsole } from './adapter/console';
import { CoreMonitoringService } from './service';

export const CoreMonitoring = new CoreMonitoringService(new CoreMonitoringAdapterConsole());
