const ngBarrels: string[] = [
  'core',
  'common',
  'compiler',
  'http',
  'platform-browser',
  'platform-browser-dynamic',
]

const barrels: string[] = [
  // Angular specific barrels.
  '@angular/router',

  // Thirdparty barrels.

  // App specific barrels.
  'components/login',
  'components/user-dropdown',
  'components',
  'models',
  'services',
  'root'
];

const systemPackages: any = {};
barrels.forEach((b) => {
    systemPackages[b] = { main: 'index.js', defaultExtension: 'js'};
});

systemPackages['rxjs'] = { main: '/bundles/rx.js', defaultExtension: 'js' };

ngBarrels.forEach((b) => {
    systemPackages['@angular/'+b] = { main: '/bundles/' + b + '.umd.js', defaultExtension: 'js' };
});

declare var System: any;

System.config({
    baseUrl: '/',
    map: {
        '@angular':                   'node_modules/@angular',
        '@angular/router':            'node_modules/@angular/router',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs',
        'main': 'index.js'
    },
    packages: systemPackages
});