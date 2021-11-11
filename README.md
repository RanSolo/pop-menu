# PopMenu Menu Challenge
- Clone the repos
- ``` npm i ```
- ``` npx nx serve api ```
- Listening at http://localhost:3333/api
- ``` npx nx serve menu-challenge```
- visit http://localhost:4200/
- For E2E kill frontend server
- npx nx run menu-challenge-e2e:e2e --watch
- ``` npx nx test ui ```
- ``` npx nx test menu-challenge --watchAll ```

Pertinent code resides in these two areas

https://github.com/RanSolo/pop-menu/tree/main/libs

https://github.com/RanSolo/pop-menu/tree/main/apps

## Responsiveness
### xl
![Screen Shot 2021-11-10 at 10 13 44 PM](https://user-images.githubusercontent.com/6284142/141235901-661953b8-7812-4f5f-9bb4-c1bb7fa07ef9.png)
### lg
![Screen Shot 2021-11-10 at 10 13 55 PM](https://user-images.githubusercontent.com/6284142/141235894-1086b64f-e792-45fc-83ad-99addbb0e1d1.png)
### md
![Screen Shot 2021-11-10 at 10 14 20 PM](https://user-images.githubusercontent.com/6284142/141235893-7d8c0860-3273-4bc1-a500-12f41fcb6c58.png)
### sm
![Screen Shot 2021-11-10 at 10 14 33 PM](https://user-images.githubusercontent.com/6284142/141235891-7e34b2e1-f4be-4f28-b7ee-e05eee26d73b.png)
### xs 
![Screen Shot 2021-11-10 at 10 14 48 PM](https://user-images.githubusercontent.com/6284142/141235889-37baedaa-8a4b-499b-a9ae-dbee38a978a4.png)
### Can add new
![Screen Shot 2021-11-10 at 10 17 41 PM](https://user-images.githubusercontent.com/6284142/141236296-65e7e523-c4ea-4864-9e56-1eb29dac071b.png)
### Can edit in place
![Screen Shot 2021-11-10 at 10 18 09 PM](https://user-images.githubusercontent.com/6284142/141236295-88ba35fd-fdc1-4552-8bc1-58eee513b5d6.png)
![Screen Shot 2021-11-10 at 10 18 24 PM](https://user-images.githubusercontent.com/6284142/141236294-4ed3cf2f-6b5c-45e5-a06b-f41c6da4b87c.png)
![Screen Shot 2021-11-10 at 10 18 31 PM](https://user-images.githubusercontent.com/6284142/141236292-f8c5a140-62cd-4c24-9b32-7d47d9631771.png)
### Can delete
**![image](https://user-images.githubusercontent.com/6284142/141236266-a6920e21-aba1-4458-ac66-de2075ab7780.png)**

### Tests
``` npx nx test ui ```
![Screen Shot 2021-11-10 at 10 04 38 PM](https://user-images.githubusercontent.com/6284142/141235185-56fab330-c0fd-44f0-b93e-1996ff91573d.png)
``` npx nx test menu-challenge ```
![Screen Shot 2021-11-10 at 10 04 05 PM](https://user-images.githubusercontent.com/6284142/141237024-476dca41-446d-4773-89ff-66333d0e8812.png)
### E2E Tests using cypress

``` npx nx menu-challenge-e2e:e2e --watchAll ```
![image](https://user-images.githubusercontent.com/6284142/141234735-4942c9a1-89ab-4046-9198-770b57d925b7.png)
This project was generated using [Nx](https://nx.dev).
