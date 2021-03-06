import { ControllerDataBase } from "./controller-data-base";
import * as _ from "lodash";

export class PrepareData extends ControllerDataBase {
	public release: boolean;
	public hmr: boolean;
	public env: any;
	public watch?: boolean;
	public watchNative: boolean = true;

	constructor(public projectDir: string, public platform: string, data: any) {
		super(projectDir, platform, data);

		this.release = data.release;
		this.hmr = data.hmr || data.useHotModuleReload;
		this.env = {
			...data.env,
			hmr: data.hmr || data.useHotModuleReload,
		};
		this.watch = data.watch;
		if (_.isBoolean(data.watchNative)) {
			this.watchNative = data.watchNative;
		}
	}
}

export class IOSPrepareData extends PrepareData {
	public teamId: string;
	public provision: string;
	public mobileProvisionData: any;

	constructor(projectDir: string, platform: string, data: any) {
		super(projectDir, platform, data);

		this.teamId = data.teamId;
		this.provision = data.provision;
		this.mobileProvisionData = data.mobileProvisionData;
	}
}

export class AndroidPrepareData extends PrepareData {}
