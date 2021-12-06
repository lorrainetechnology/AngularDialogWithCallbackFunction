Instructions:
1. In CLI Terminal, run the following command:
npm install --save @progress/kendo-angular-dialog @progress/kendo-angular-buttons @progress/kendo-angular-popup @progress/kendo-angular-l10n @progress/kendo-angular-common @progress/kendo-licensing

2. In App.module.ts, add
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

3. In App.module.ts, import array, add
BrowserAnimationsModule,
DialogModule

4. In CLI Terminal, run the following command:
npm install --save @progress/kendo-theme-default

5. In angular.json, add the following to styles array
"node_modules/@progress/kendo-theme-default/dist/all.css"

6. In styles.css, add
@import "~@progress/kendo-theme-default/dist/all";

7. In CLI Terminal, run the following command:
npm install --save @angular/localize

8. In src/polyfills.ts, add 
import '@angular/localize/init';

9. In index.html, add following links:
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            <link rel="stylesheet" href="https://kendo.cdn.telerik.com/themes/4.42.0/default/default-main.css"></link>

10. Add following style in the head of index.html,
<style>
                body { font-family: "RobotoRegular",Helvetica,Arial,sans-serif; font-size: 14px; margin: 0; }
                my-app { display: block; box-sizing: border-box; padding: 30px; }
                my-app > .k-icon.k-i-loading { font-size: 64px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); }
                .example-wrapper { min-height: 280px; align-content: flex-start; }
                .example-wrapper p, .example-col p { margin: 0 0 10px; }
                .example-wrapper p:first-child, .example-col p:first-child { margin-top: 0; }
                .example-col { display: inline-block; vertical-align: top; padding-right: 20px; padding-bottom: 20px; }
                .example-config { margin: 0 0 20px; padding: 20px; background-color: rgba(0,0,0,.03); border: 1px solid rgba(0,0,0,.08); }
                .event-log { margin: 0; padding: 0; max-height: 100px; overflow-y: auto; list-style-type: none; border: 1px solid rgba(0,0,0,.08); background-color: #fff; }
                .event-log li {margin: 0; padding: .3em; line-height: 1.2em; border-bottom: 1px solid rgba(0,0,0,.08); }
                .event-log li:last-child { margin-bottom: -1px;}
            </style>

11. In index.html, inside <app-root> tag, add 
  <span class="k-icon k-i-loading" style="color: #ff6358"></span>Check the following two links for details:
  
12. Check the following two links for details:
i. https://www.telerik.com/kendo-angular-ui/components/dialogs/get-started/#:~:text=%20Getting%20Started%20with%20the%20Kendo%20UI%20for,Angular%20team.%205%20Learning%20Resources.%20%20More%20
ii. https://stackblitz.com/run/?file=index.html
