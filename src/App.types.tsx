/* App.tsx */

export type num = number;

export interface AppProps {
	title	: string;
};

export interface ApiMethods{
	get		: string;
    status	: string;
};

export interface AppData {
	s	: num;
	api	: ApiMethods;
};
