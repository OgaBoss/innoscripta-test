# Innoscripta Test

## Prerequisites

### Before you start, make sure you have the following tools installed:

-   Docker Engine 20.10.12 or later
-   Docker Compose 2.0.0 or later

## Setting up

1. Clone this repository
```
git clone https://github.com/OgaBoss/innoscripta-test.git 
```

2. Go into the api directory and create .env from .env.example
```
cd api
composer install
cp .env.example .env
```

3. Go back to the root dir
```
cd  ..
```

4. Go into the fe directory and create .env from .env.example
```
cd fe
cp .env.example .env
```

5. Go back to the root dir
```
cd  ..
```

6. Run the apps via docker

```
./start.sh dev up
```

7. Hande migration and data seeding
```
cd api
./vendor/bin/sail migrate
./vendor/bin/sail db:seed --class=SourceSeeder
./vendor/bin/sail app:article-seeder
```

8. You should have the api and react running at the following url
```
http://localhost/
http://localhost:3000/
```

9. To stop the containers
```yaml
Make sure you are in the root of the app
./start.sh dev down
```

10. Thank you for the opportunity, looking forward to working with the amazing team at Innoscripta