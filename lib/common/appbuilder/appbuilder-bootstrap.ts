require("../bootstrap");
$injector.require("liveSyncServiceBase", "./services/livesync-service-base");
$injector.require("androidLiveSyncServiceLocator", "./appbuilder/services/livesync/android-livesync-service");
$injector.require("iosLiveSyncServiceLocator", "./appbuilder/services/livesync/ios-livesync-service");
$injector.require("iOSLogFilter", "./mobile/ios/ios-log-filter");
