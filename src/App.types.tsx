import { SettingsProps } from "./components/Player/settings/Settings.types";
import { UserDetails } from "./api/User.types";

/* App.tsx */

export type num = number;

export interface AppProps {
	title	: string;
};

export interface ApiMethods{
    post	: string;
	get		: string;
    status	: string;
};

export interface AppData {
	s	: num;
	api	: ApiMethods;
};

export enum ServerStatus {
    Sucess, Error,
};

export interface Assets {
	tooltip		: {
		success		: string;
		alt_success	: string;
		error		: string;
		alt_error	: string;
	};
	updateTooltip : VoidFunction;
};

export interface Appstore{
	name			: string;
	settings?		: SettingsProps;
	updateSettings	: (sett:SettingsProps)=>void;
	apiImplemented	: boolean;
	userInfo		: UserDetails;
	updateUserinfo	: VoidFunction;
	api				: ApiMethods;
	emojis			: string;
	assets			: Assets;
};