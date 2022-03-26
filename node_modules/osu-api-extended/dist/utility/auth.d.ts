interface _login {
    access_token: string;
    expires_in: number;
}
export declare let cache_token: string;
export declare let expire: number;
export declare const isLogin: () => Promise<boolean>;
export declare const set_expire: (v: number) => number;
export declare const set_token: (v: string) => string;
export declare const expired: () => Promise<boolean>;
export declare const login_lazer: (username: string, password: string) => Promise<_login>;
export declare const login: (clientId: number, clientSecret: string) => Promise<_login>;
export declare const authorize: (clientId: number, clientSecret: string, redirect_uri: string, scope?: string, state?: string) => Promise<_login>;
export {};
